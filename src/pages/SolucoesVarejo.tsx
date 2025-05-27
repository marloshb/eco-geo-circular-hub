
import React, { useState } from 'react';
import { ArrowLeft, Store, Package, Users, TrendingUp, Recycle, ShoppingCart, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import LogisticaReversa from '@/components/varejo/LogisticaReversa';
import EngajamentoConsumidor from '@/components/varejo/EngajamentoConsumidor';

const SolucoesVarejo = () => {
  const [activeTab, setActiveTab] = useState('logistica-reversa');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 px-4 py-2 text-sm font-medium mb-4">
              Varejo e Consumo
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Soluções Circulares
              </span>{' '}
              para Varejo e Consumo
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ferramentas especializadas para logística reversa, engajamento do consumidor e 
              programas de devolução, promovendo a economia circular no varejo.
            </p>
          </div>

          {/* Estatísticas do Setor */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Store className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                  <p className="text-sm text-gray-600">Varejistas Ativos</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Package className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">89,432</p>
                  <p className="text-sm text-gray-600">Produtos Rastreados</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">12,584</p>
                  <p className="text-sm text-gray-600">Consumidores Engajados</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">76.3%</p>
                  <p className="text-sm text-gray-600">Taxa de Devolução</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="logistica-reversa" className="flex items-center space-x-2">
                <Recycle className="h-4 w-4" />
                <span className="hidden md:inline">Logística Reversa</span>
              </TabsTrigger>
              <TabsTrigger value="engajamento-consumidor" className="flex items-center space-x-2">
                <ShoppingCart className="h-4 w-4" />
                <span className="hidden md:inline">Engajamento Consumidor</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="logistica-reversa">
              <LogisticaReversa />
            </TabsContent>

            <TabsContent value="engajamento-consumidor">
              <EngajamentoConsumidor />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SolucoesVarejo;
