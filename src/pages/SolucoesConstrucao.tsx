
import React, { useState } from 'react';
import { ArrowLeft, Building2, Recycle, Hammer, TrendingUp, Layers, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import GestaoRCD from '@/components/construcao/GestaoRCD';
import DesignCircular from '@/components/construcao/DesignCircular';

const SolucoesConstrucao = () => {
  const [activeTab, setActiveTab] = useState('gestao-rcd');

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
              Construção Civil
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Soluções Circulares
              </span>{' '}
              para Construção Civil
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ferramentas especializadas para gestão de resíduos de construção e demolição (RCD), 
              materiais reciclados, construção verde e demolição seletiva.
            </p>
          </div>

          {/* Estatísticas do Setor */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Building2 className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">3,247</p>
                  <p className="text-sm text-gray-600">Construtoras Ativas</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Recycle className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">142,856</p>
                  <p className="text-sm text-gray-600">Toneladas RCD Recicladas</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Hammer className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">5,894</p>
                  <p className="text-sm text-gray-600">Obras Monitoradas</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">68.4%</p>
                  <p className="text-sm text-gray-600">Taxa de Reciclagem</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="gestao-rcd" className="flex items-center space-x-2">
                <Recycle className="h-4 w-4" />
                <span className="hidden md:inline">Gestão de RCD</span>
              </TabsTrigger>
              <TabsTrigger value="design-circular" className="flex items-center space-x-2">
                <Layers className="h-4 w-4" />
                <span className="hidden md:inline">Design Circular</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gestao-rcd">
              <GestaoRCD />
            </TabsContent>

            <TabsContent value="design-circular">
              <DesignCircular />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SolucoesConstrucao;
