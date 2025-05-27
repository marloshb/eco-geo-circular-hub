import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Registro from "./pages/Registro";
import GestaoVidaUtil from "./pages/GestaoVidaUtil";
import PortalCatadores from "./pages/PortalCatadores";
import MonitoramentoConformidade from "./pages/MonitoramentoConformidade";
import MarketplaceResiduos from "./pages/MarketplaceResiduos";
import LogisticaOtimizada from "./pages/LogisticaOtimizada";
import SistemaIncentivos from "./pages/SistemaIncentivos";
import NotFound from "./pages/NotFound";
import GeotecnologiasAvancadas from "./pages/GeotecnologiasAvancadas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/gestao-vida-util" element={<GestaoVidaUtil />} />
          <Route path="/portal-catadores" element={<PortalCatadores />} />
          <Route path="/monitoramento-conformidade" element={<MonitoramentoConformidade />} />
          <Route path="/marketplace-residuos" element={<MarketplaceResiduos />} />
          <Route path="/logistica-otimizada" element={<LogisticaOtimizada />} />
          <Route path="/sistema-incentivos" element={<SistemaIncentivos />} />
          <Route path="/geotecnologias-avancadas" element={<GeotecnologiasAvancadas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
