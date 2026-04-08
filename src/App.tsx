import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { usePartnerConfig } from "./hooks/usePartnerConfig";
import { ClassicLayout } from "./components/landing/templates/classic/ClassicLayout";
import { LoadingScreen } from "./components/LoadingScreen";

const queryClient = new QueryClient();

const LandingApp = () => {
  const { config, isLoading } = usePartnerConfig();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider config={config}>
      <Routes>
        <Route path="/" element={<ClassicLayout config={config} />} />
        <Route path="/:slug" element={<ClassicLayout config={config} />} />
      </Routes>
    </ThemeProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LandingApp />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
