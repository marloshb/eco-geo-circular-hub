
import React, { useState } from 'react';
import { ArrowLeft, Shield, BarChart3, FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import DashboardConformidade from '@/components/conformidade/DashboardConformidade';
import SistemaAuditorias from '@/components/conformidade/SistemaAuditorias';
import RelatoriosAutomatizados from '@/components/conformidade/RelatoriosAutomatizados';
import IndicadoresDesempenho from '@/components/conformidade/IndicadoresDesempenho';

const MonitoramentoConformidade = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 px-4 py-2 text-sm font-medium mb-4">
              Monitoramento de Conformidade
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Conformidade Regulatória
              </span>{' '}
              PNEC, ENEC e PNRS
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sistema integrado para monitoramento, auditoria e relatórios de conformidade 
              com as políticas nacionais de economia circular e resíduos sólidos.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span className="hidden md:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="auditorias" className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span className="hidden md:inline">Auditorias</span>
              </TabsTrigger>
              <TabsTrigger value="relatorios" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span className="hidden md:inline">Relatórios</span>
              </TabsTrigger>
              <TabsTrigger value="indicadores" className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden md:inline">Indicadores</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <DashboardConformidade />
            </TabsContent>

            <TabsContent value="auditorias">
              <SistemaAuditorias />
            </TabsContent>

            <TabsContent value="relatorios">
              <RelatoriosAutomatizados />
            </TabsContent>

            <TabsContent value="indicadores">
              <IndicadoresDesempenho />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MonitoramentoConformidade;
