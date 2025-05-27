
import React, { useState } from 'react';
import { ArrowLeft, Zap, Battery, Globe, Truck, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import WasteToEnergy from '@/components/energia/WasteToEnergy';
import SmartGrids from '@/components/energia/SmartGrids';

const SolucoesEnergia = () => {
  const [activeTab, setActiveTab] = useState('waste-to-energy');

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 px-4 py-2 text-sm font-medium mb-4">
              Energia e Utilidades
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Soluções Circulares
              </span>{' '}
              para Energia e Utilidades
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ferramentas especializadas para waste-to-energy, smart grids e eficiência energética, 
              promovendo a economia circular no setor de energia e utilidades.
            </p>
          </div>

          {/* Estatísticas do Setor */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-yellow-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">2,340 MWh</p>
                  <p className="text-sm text-gray-600">Energia de Resíduos</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Battery className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">1,856</p>
                  <p className="text-sm text-gray-600">Equipamentos Rastreados</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Globe className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">89.2%</p>
                  <p className="text-sm text-gray-600">Eficiência Smart Grid</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">234</p>
                  <p className="text-sm text-gray-600">Usinas Conectadas</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="waste-to-energy" className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span className="hidden md:inline">Waste-to-Energy</span>
              </TabsTrigger>
              <TabsTrigger value="smart-grids" className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="hidden md:inline">Smart Grids</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="waste-to-energy">
              <WasteToEnergy />
            </TabsContent>

            <TabsContent value="smart-grids">
              <SmartGrids />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SolucoesEnergia;
