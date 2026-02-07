
import React, { useState, useEffect } from 'react';
import { KeyAuthService } from './services/keyauthService';
import { PaymentService } from './services/paymentService';
import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import StorePage from './pages/PricingPage';
import TermsPage from './pages/TermsPage';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import { Page, UserInfo, AuthView } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [authView, setAuthView] = useState<AuthView>(AuthView.LOGIN);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      await KeyAuthService.init();
      const savedUser = KeyAuthService.getUserData();
      if (savedUser) {
        setUser(savedUser);
        setIsAdmin(!!savedUser.isAdmin);
        setCurrentPage(savedUser.isAdmin ? Page.ADMIN_DASHBOARD : Page.DASHBOARD);
      }
      
      // CHECAR STATUS DE PAGAMENTO (SIMULAÇÃO DE RETORNO DO MP)
      const urlParams = new URLSearchParams(window.location.search);
      const status = urlParams.get('status');
      const paymentId = urlParams.get('payment_id');
      
      if (status === 'success' && paymentId) {
        console.log("[App] Pagamento detectado, processando ativação...");
        await PaymentService.processWebhook(paymentId);
        // Limpar URL
        window.history.replaceState({}, document.title, window.location.pathname);
        alert("Pagamento Aprovado! Sua conta foi estendida automaticamente.");
      }

      setLoading(false);
    };
    checkLogin();
  }, []);

  const handleLoginSuccess = (userInfo: UserInfo, adminStatus: boolean = false) => {
    setUser(userInfo);
    setIsAdmin(adminStatus);
    
    if (adminStatus) {
      const data = { ...userInfo, isAdmin: true };
      localStorage.setItem('ka_user', JSON.stringify(data));
      setCurrentPage(Page.ADMIN_DASHBOARD);
    } else {
      setCurrentPage(Page.DASHBOARD);
    }
  };

  const handleLogout = () => {
    KeyAuthService.logout();
    setUser(null);
    setIsAdmin(false);
    setCurrentPage(Page.HOME);
  };

  const navigateToAuth = (view: AuthView) => {
    setAuthView(view);
    setCurrentPage(Page.DASHBOARD);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin shadow-2xl shadow-purple-500/40"></div>
        <p className="text-slate-400 font-gamer font-bold tracking-[0.3em] uppercase animate-pulse">Iniciando GXite</p>
      </div>
    );
  }

  const renderContent = () => {
    if (currentPage === Page.TERMS) return <TermsPage />;
    
    if (currentPage === Page.HOME) {
      return (
        <LandingPage 
          onLogin={() => navigateToAuth(AuthView.LOGIN)} 
          onRegister={() => navigateToAuth(AuthView.REGISTER)} 
        />
      );
    }

    if (!user) {
      return <AuthPage onLoginSuccess={handleLoginSuccess} initialView={authView} />;
    }

    if (isAdmin) {
      switch (currentPage) {
        case Page.ADMIN_DASHBOARD: return <AdminDashboard />;
        case Page.STORE: return <StorePage />;
        // FIX: Removed Page.TERMS because it is unreachable here as it's already handled at the top of renderContent.
        default: return <AdminDashboard />;
      }
    }

    switch (currentPage) {
      case Page.DASHBOARD: return <DashboardPage user={user} />;
      case Page.STORE: return <StorePage />;
      default: return <DashboardPage user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500/30 selection:text-white">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        onLogout={handleLogout} 
        onAuthNavigate={navigateToAuth}
        user={user}
      />
      <main className={(currentPage === Page.HOME) ? "" : "container mx-auto px-4 py-8"}>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
