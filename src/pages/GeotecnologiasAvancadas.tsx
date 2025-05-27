
import React, { useState } from 'react';
import { ArrowLeft, Globe, Map, Satellite, Wifi, BarChart3, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import MapeamentoEspacial from '@/components/geotecnologias/MapeamentoEspacial';
import RastreamentoGPS from '@/components/geotecnologias/RastreamentoGPS';
import AnalisePreditiva from '@/components/geotecnologias/AnalisePreditiva';
import MonitoramentoAmbiental from '@/components/geotecnologias/MonitoramentoAmbiental';

const GeotecnologiasAvancadas = () => {
  const [activeTab, setActiveTab] = useState('mapeamento');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-green-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 px-4 py-2 text-sm font-medium mb-4">
              Geotecnologias Avançadas
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-green-600 bg-clip-text text-transparent">
                Inteligência Geoespacial
              </span>{' '}
              para Economia Circular
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tecnologias geoespaciais avançadas para mapear, rastrear e otimizar fluxos de resíduos, 
              conectando stakeholders e promovendo conformidade com PNEC, ENEC e PNRS.
            </p>
          </div>

          {/* Estatísticas das Geotecnologias */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Map className="h-8 w-8 text-indigo-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">12,847</p>
                  <p className="text-sm text-gray-600">Pontos Mapeados</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <MapPin className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">3,294</p>
                  <p className="text-sm text-gray-600">Sensores IoT Ativos</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Satellite className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">95%</p>
                  <p className="text-sm text-gray-600">Cobertura Nacional</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">87%</p>
                  <p className="text-sm text-gray-600">Precisão Preditiva</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="mapeamento" className="flex items-center space-x-2">
                <Map className="h-4 w-4" />
                <span className="hidden md:inline">Mapeamento</span>
              </TabsTrigger>
              <TabsTrigger value="rastreamento" className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden md:inline">Rastreamento</span>
              </TabsTrigger>
              <TabsTrigger value="analise" className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden md:inline">Análise</span>
              </TabsTrigger>
              <TabsTrigger value="monitoramento" className="flex items-center space-x-2">
                <Satellite className="h-4 w-4" />
                <span className="hidden md:inline">Monitoramento</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mapeamento">
              <MapeamentoEspacial />
            </TabsContent>

            <TabsContent value="rastreamento">
              <RastreamentoGPS />
            </TabsContent>

            <TabsContent value="analise">
              <AnalisePreditiva />
            </TabsContent>

            <TabsContent value="monitoramento">
              <MonitoramentoAmbiental />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default GeotecnologiasAvancadas;
