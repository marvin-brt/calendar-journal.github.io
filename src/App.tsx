import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* The basename must match the Vite base (GitHub Pages repo name). */}
  {(() => {
        const raw = (import.meta as any).env?.VITE_GH_PAGES_BASE as string | undefined;
        // Normalize: remove trailing slash for react-router basename, except keep single '/'
        let basename = raw ? raw.replace(/\/$/, '') : '/calendar-journal-web';
        if (basename === '/' || basename === '') basename = '/';
        return (
          <BrowserRouter basename={basename === '/' ? undefined : basename}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        );
      })()}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
