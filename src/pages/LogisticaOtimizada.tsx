
import React, { useState } from 'react';
import { ArrowLeft, Truck, Route, MapPin, Zap, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import PlanejamentoRotas from '@/components/logistica/PlanejamentoRotas';
import RastreamentoTempoReal from '@/components/logistica/RastreamentoTempoReal';
import GestaoCapacidade from '@/components/logistica/GestaoCapacidade';
import IntegracaoGeotecnologias from '@/components/logistica/IntegracaoGeotecnologias';

const LogisticaOtimizada = () => {
  const [activeTab, setActiveTab] = useState('planejamento');

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
              Logística Otimizada
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Sistema Inteligente
              </span>{' '}
              de Logística Circular
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Revolucione a gestão do transporte de resíduos através de algoritmos avançados, 
              geotecnologias e inteligência artificial para máxima eficiência e sustentabilidade.
            </p>
          </div>

          {/* Estatísticas da Logística */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Route className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                  <p className="text-sm text-gray-600">Rotas Otimizadas</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Truck className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">856</p>
                  <p className="text-sm text-gray-600">Veículos Rastreados</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">30%</p>
                  <p className="text-sm text-gray-600">Redução de Custos</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">87%</p>
                  <p className="text-sm text-gray-600">Eficiência Logística</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="planejamento" className="flex items-center space-x-2">
                <Route className="h-4 w-4" />
                <span className="hidden md:inline">Planejamento</span>
              </TabsTrigger>
              <TabsTrigger value="rastreamento" className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden md:inline">Rastreamento</span>
              </TabsTrigger>
              <TabsTrigger value="capacidade" className="flex items-center space-x-2">
                <Truck className="h-4 w-4" />
                <span className="hidden md:inline">Capacidade</span>
              </TabsTrigger>
              <TabsTrigger value="geotecnologias" className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span className="hidden md:inline">Geotecnologias</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="planejamento">
              <PlanejamentoRotas />
            </TabsContent>

            <TabsContent value="rastreamento">
              <RastreamentoTempoReal />
            </TabsContent>

            <TabsContent value="capacidade">
              <GestaoCapacidade />
            </TabsContent>

            <TabsContent value="geotecnologias">
              <IntegracaoGeotecnologias />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LogisticaOtimizada;
