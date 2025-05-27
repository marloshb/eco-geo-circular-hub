
import React, { useState } from 'react';
import { ArrowLeft, Building2, BarChart3, FileText, Store, TrendingUp, Users, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import DashboardExecutivo from '@/components/empresas/DashboardExecutivo';
import RelatoriosCompliance from '@/components/empresas/RelatoriosCompliance';
import MarketplaceB2B from '@/components/empresas/MarketplaceB2B';
import AnalyticsCircular from '@/components/empresas/AnalyticsCircular';

const PortalEmpresas = () => {
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
              Portal de Empresas e Indústrias
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Gestão Circular
              </span>{' '}
              para Empresas
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ferramentas avançadas para implementar práticas circulares, garantir conformidade 
              regulatória e otimizar recursos, alinhadas com PNEC, ENEC e PNRS.
            </p>
          </div>

          {/* Estatísticas do Portal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Building2 className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">12,847</p>
                  <p className="text-sm text-gray-600">Empresas Ativas</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">85.7%</p>
                  <p className="text-sm text-gray-600">Taxa de Reciclagem</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Store className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">356,298</p>
                  <p className="text-sm text-gray-600">Transações B2B</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">R$ 2.4B</p>
                  <p className="text-sm text-gray-600">Economia Gerada</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard" className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden md:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="compliance" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span className="hidden md:inline">Compliance</span>
              </TabsTrigger>
              <TabsTrigger value="marketplace" className="flex items-center space-x-2">
                <Store className="h-4 w-4" />
                <span className="hidden md:inline">Marketplace B2B</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span className="hidden md:inline">Analytics</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <DashboardExecutivo />
            </TabsContent>

            <TabsContent value="compliance">
              <RelatoriosCompliance />
            </TabsContent>

            <TabsContent value="marketplace">
              <MarketplaceB2B />
            </TabsContent>

            <TabsContent value="analytics">
              <AnalyticsCircular />
            </TabsContent>
          </Tabs>

          {/* Setores Atendidos */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Setores Atendidos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: 'Manufatura', link: '/solucoes-manufatura' },
                { name: 'Agricultura', link: '/solucoes-agricultura' },
                { name: 'Construção', link: '/solucoes-construcao' },
                { name: 'Varejo', link: '/solucoes-varejo' },
                { name: 'Energia', link: '/solucoes-energia' }
              ].map((setor) => (
                <Link key={setor.name} to={setor.link}>
                  <Button variant="outline" className="w-full h-16 hover:bg-blue-50 hover:border-blue-300">
                    <div className="text-center">
                      <p className="font-medium">{setor.name}</p>
                    </div>
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Transforme sua Empresa com Economia Circular
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Junte-se às milhares de empresas que já implementaram práticas circulares e 
                garantem conformidade com PNRS, PNEC e ENEC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100">
                  Iniciar Cadastro
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                  Agendar Demonstração
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalEmpresas;
