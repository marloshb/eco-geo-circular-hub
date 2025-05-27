import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Registro from "./pages/Registro";
import GestaoVidaUtil from "./pages/GestaoVidaUtil";
import PortalCatadores from "./pages/PortalCatadores";
import PortalEmpresas from "./pages/PortalEmpresas";
import MonitoramentoConformidade from "./pages/MonitoramentoConformidade";
import MarketplaceResiduos from "./pages/MarketplaceResiduos";
import LogisticaOtimizada from "./pages/LogisticaOtimizada";
import SistemaIncentivos from "./pages/SistemaIncentivos";
import NotFound from "./pages/NotFound";
import GeotecnologiasAvancadas from "./pages/GeotecnologiasAvancadas";
import EducacaoCapacitacao from "./pages/EducacaoCapacitacao";
import SolucoesManufatura from "./pages/SolucoesManufatura";
import SolucoesAgricultura from "./pages/SolucoesAgricultura";
import SolucoesEnergia from "./pages/SolucoesEnergia";
import SolucoesVarejo from "./pages/SolucoesVarejo";
import SolucoesConstrucao from "./pages/SolucoesConstrucao";

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
          <Route path="/portal-empresas" element={<PortalEmpresas />} />
          <Route path="/monitoramento-conformidade" element={<MonitoramentoConformidade />} />
          <Route path="/marketplace-residuos" element={<MarketplaceResiduos />} />
          <Route path="/logistica-otimizada" element={<LogisticaOtimizada />} />
          <Route path="/sistema-incentivos" element={<SistemaIncentivos />} />
          <Route path="/geotecnologias-avancadas" element={<GeotecnologiasAvancadas />} />
          <Route path="/educacao-capacitacao" element={<EducacaoCapacitacao />} />
          <Route path="/solucoes-manufatura" element={<SolucoesManufatura />} />
          <Route path="/solucoes-agricultura" element={<SolucoesAgricultura />} />
          <Route path="/solucoes-energia" element={<SolucoesEnergia />} />
          <Route path="/solucoes-varejo" element={<SolucoesVarejo />} />
          <Route path="/solucoes-construcao" element={<SolucoesConstrucao />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
