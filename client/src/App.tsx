import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";
import NotFound from "./pages/not-found";
import HomePage from "./pages/home-page";
import AuthPage from "./pages/auth-page";
import DashboardPage from "./pages/dashboard-page";
import ReportsPage from "./pages/reports-page";
import UsersPage from "./pages/users-page";
import LinksPage from "./pages/links-page";
import ManualPage from "./pages/manual-page";
import BotWithManualPage from "./pages/bot-with-manual-page";
import PricingPage from "./pages/pricing-page";
import HowItWorksPage from "./pages/how-it-works-page";
import PrivacyPage from "./pages/privacy-page";
import CookiesPage from "./pages/cookies-page";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/como-funciona" component={HowItWorksPage} />
      <Route path="/planes" component={PricingPage} />
      <Route path="/manual" component={ManualPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/cookies" component={CookiesPage} />
      
      {/* Protected Routes */}
      <ProtectedRoute path="/dashboard" component={DashboardPage} />
      <ProtectedRoute path="/reportes" component={ReportsPage} />
      <ProtectedRoute path="/usuarios" component={UsersPage} />
      <ProtectedRoute path="/enlaces" component={LinksPage} />
      <ProtectedRoute path="/bot-con-manual" component={BotWithManualPage} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
