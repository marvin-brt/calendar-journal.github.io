import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Handles redirect parameter from 404.html for deep links.
const RedirectHandler = () => {
  const location = useLocation();
  if (location.search.startsWith('?redirect=')) {
    try {
      const target = decodeURIComponent(location.search.replace('?redirect=', ''));
      if (target && target !== location.pathname) {
        window.history.replaceState({}, '', target);
      }
    } catch (e) {
      console.error('Failed to process redirect param', e);
    }
  }
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* The basename must match the Vite base (GitHub Pages repo name). */}
      <BrowserRouter>
        <RedirectHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
