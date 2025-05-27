
import React, { useState } from 'react';
import { ArrowLeft, MapPin, ShoppingBag, GraduationCap, Gift, Star, Users, Recycle, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import LocalizacaoPontosColeta from '@/components/consumidores/LocalizacaoPontosColeta';
import MarketplaceSegundaMao from '@/components/consumidores/MarketplaceSegundaMao';
import EducacaoAmbiental from '@/components/consumidores/EducacaoAmbiental';
import SistemaRecompensas from '@/components/consumidores/SistemaRecompensas';

const PortalConsumidores = () => {
  const [activeTab, setActiveTab] = useState('pontos-coleta');

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
              Portal de Consumidores
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Consumo Consciente
              </span>{' '}
              e Sustentável
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubra pontos de coleta, marketplace de segunda mão, educação ambiental e 
              ganhe recompensas por suas ações sustentáveis na economia circular.
            </p>
          </div>

          {/* Estatísticas do Portal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <MapPin className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">2,847</p>
                  <p className="text-sm text-gray-600">Pontos de Coleta</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">45,623</p>
                  <p className="text-sm text-gray-600">Produtos no Marketplace</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">127,892</p>
                  <p className="text-sm text-gray-600">Usuários Ativos</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Gift className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">R$ 890K</p>
                  <p className="text-sm text-gray-600">Recompensas Distribuídas</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="pontos-coleta" className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden md:inline">Pontos de Coleta</span>
              </TabsTrigger>
              <TabsTrigger value="marketplace" className="flex items-center space-x-2">
                <ShoppingBag className="h-4 w-4" />
                <span className="hidden md:inline">Marketplace</span>
              </TabsTrigger>
              <TabsTrigger value="educacao" className="flex items-center space-x-2">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden md:inline">Educação</span>
              </TabsTrigger>
              <TabsTrigger value="recompensas" className="flex items-center space-x-2">
                <Gift className="h-4 w-4" />
                <span className="hidden md:inline">Recompensas</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pontos-coleta">
              <LocalizacaoPontosColeta />
            </TabsContent>

            <TabsContent value="marketplace">
              <MarketplaceSegundaMao />
            </TabsContent>

            <TabsContent value="educacao">
              <EducacaoAmbiental />
            </TabsContent>

            <TabsContent value="recompensas">
              <SistemaRecompensas />
            </TabsContent>
          </Tabs>

          {/* Impacto Ambiental */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Seu Impacto Ambiental
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
                <Recycle className="h-12 w-12 mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">2.5 ton</p>
                <p className="text-green-100">CO₂ Evitado</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">1,247</p>
                <p className="text-blue-100">Itens Reciclados</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
                <Star className="h-12 w-12 mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">348</p>
                <p className="text-purple-100">Pontos Acumulados</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Faça Parte da Revolução Circular
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Cada ação sua contribui para um planeta mais sustentável. 
                Comece agora e ganhe recompensas por suas escolhas conscientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                  Baixar App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalConsumidores;
