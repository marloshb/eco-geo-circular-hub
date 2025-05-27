
import React, { useState } from 'react';
import { ArrowLeft, Store, Package, TrendingUp, MapPin, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ListagemResiduos from '@/components/marketplace/ListagemResiduos';
import MercadoDigital from '@/components/marketplace/MercadoDigital';
import PrecificacaoDinamica from '@/components/marketplace/PrecificacaoDinamica';
import GeotecnologiasMarketplace from '@/components/marketplace/GeotecnologiasMarketplace';

const MarketplaceResiduos = () => {
  const [activeTab, setActiveTab] = useState('listagem');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-4 py-2 text-sm font-medium mb-4">
              Marketplace de Resíduos
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Mercado Digital
              </span>{' '}
              de Resíduos e Recursos
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Plataforma de comércio eletrônico que transforma resíduos em recursos, 
              conectando geradores, catadores e recicladores através de tecnologias geoespaciais.
            </p>
          </div>

          {/* Estatísticas do Marketplace */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Store className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">2,847</p>
                  <p className="text-sm text-gray-600">Produtos Listados</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">1,234</p>
                  <p className="text-sm text-gray-600">Usuários Ativos</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">R$ 2.8M</p>
                  <p className="text-sm text-gray-600">Volume Transacionado</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Package className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">89%</p>
                  <p className="text-sm text-gray-600">Taxa de Sucesso</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="listagem" className="flex items-center space-x-2">
                <Package className="h-4 w-4" />
                <span className="hidden md:inline">Listagem</span>
              </TabsTrigger>
              <TabsTrigger value="mercado" className="flex items-center space-x-2">
                <Store className="h-4 w-4" />
                <span className="hidden md:inline">Mercado</span>
              </TabsTrigger>
              <TabsTrigger value="precificacao" className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span className="hidden md:inline">Preços</span>
              </TabsTrigger>
              <TabsTrigger value="geotecnologias" className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden md:inline">Geolocalização</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="listagem">
              <ListagemResiduos />
            </TabsContent>

            <TabsContent value="mercado">
              <MercadoDigital />
            </TabsContent>

            <TabsContent value="precificacao">
              <PrecificacaoDinamica />
            </TabsContent>

            <TabsContent value="geotecnologias">
              <GeotecnologiasMarketplace />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceResiduos;
