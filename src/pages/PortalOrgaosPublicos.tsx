
import React, { useState } from 'react';
import { ArrowLeft, BarChart3, FileText, Shield, Target, Building2, Users, Recycle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import DashboardsPublicos from '@/components/orgaos-publicos/DashboardsPublicos';
import IndicadoresPNEC from '@/components/orgaos-publicos/IndicadoresPNEC';
import MonitoramentoPublico from '@/components/orgaos-publicos/MonitoramentoPublico';
import RelatoriosPublicos from '@/components/orgaos-publicos/RelatoriosPublicos';

const PortalOrgaosPublicos = () => {
  const [activeTab, setActiveTab] = useState('dashboards');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 px-4 py-2 text-sm font-medium mb-4">
              Portal de Órgãos Públicos
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Gestão de Políticas
              </span>{' '}
              e Monitoramento
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ferramentas avançadas para órgãos públicos monitorem políticas de economia circular, 
              indicadores PNEC/ENEC e gestão territorial com transparência e eficiência.
            </p>
          </div>

          {/* Estatísticas do Portal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Building2 className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                  <p className="text-sm text-gray-600">Órgãos Registrados</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">73%</p>
                  <p className="text-sm text-gray-600">Metas PNEC Atingidas</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">1,389</p>
                  <p className="text-sm text-gray-600">Indicadores Monitorados</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">892</p>
                  <p className="text-sm text-gray-600">Relatórios Gerados</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboards" className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden md:inline">Dashboards</span>
              </TabsTrigger>
              <TabsTrigger value="indicadores" className="flex items-center space-x-2">
                <Target className="h-4 w-4" />
                <span className="hidden md:inline">Indicadores PNEC</span>
              </TabsTrigger>
              <TabsTrigger value="monitoramento" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span className="hidden md:inline">Monitoramento</span>
              </TabsTrigger>
              <TabsTrigger value="relatorios" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span className="hidden md:inline">Relatórios</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboards">
              <DashboardsPublicos />
            </TabsContent>

            <TabsContent value="indicadores">
              <IndicadoresPNEC />
            </TabsContent>

            <TabsContent value="monitoramento">
              <MonitoramentoPublico />
            </TabsContent>

            <TabsContent value="relatorios">
              <RelatoriosPublicos />
            </TabsContent>
          </Tabs>

          {/* Impacto das Políticas */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Impacto das Políticas Públicas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white text-center">
                <Recycle className="h-12 w-12 mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">65.8%</p>
                <p className="text-orange-100">Taxa Nacional de Reciclagem</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">4,567</p>
                <p className="text-green-100">Catadores Formalizados</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">R$ 2.4B</p>
                <p className="text-blue-100">Economia Gerada</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Acelere a Transição para Economia Circular
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Utilize dados em tempo real e análises espaciais para implementar 
                políticas eficazes e monitorar o progresso da PNEC em sua região.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-orange-700 hover:bg-gray-100">
                  Acessar Dashboard
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-700">
                  Ver Relatórios
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalOrgaosPublicos;
