
import React, { useState } from 'react';
import { ArrowLeft, Factory, Package, Recycle, LineChart, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import PassaporteDigital from '@/components/PassaporteDigital';
import AnaliseCicloVida from '@/components/AnaliseCicloVida';
import DesignCircular from '@/components/DesignCircular';
import RastreamentoProdutos from '@/components/RastreamentoProdutos';

const SolucoesManufatura = () => {
  const [activeTab, setActiveTab] = useState('passaporte');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
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
              Soluções Setoriais Especializadas
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Manufatura e Indústria
              </span>{' '}
              Circular
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ferramentas especializadas para transformar o setor de manufatura através de 
              design circular, rastreamento de materiais e integração com a economia circular.
            </p>
          </div>

          {/* Estatísticas do Setor */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Factory className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">15,234</p>
                  <p className="text-sm text-gray-600">Indústrias Cadastradas</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Package className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">89,456</p>
                  <p className="text-sm text-gray-600">Produtos Rastreados</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Recycle className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">76%</p>
                  <p className="text-sm text-gray-600">Taxa de Reciclagem</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">342</p>
                  <p className="text-sm text-gray-600">Certificações Concedidas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Principais Setores Atendidos */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Setores Especializados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Factory className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-medium text-gray-900">Automotivo</h4>
                <p className="text-sm text-gray-600">Peças e componentes</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900">Eletrônicos</h4>
                <p className="text-sm text-gray-600">Dispositivos e chips</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Recycle className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-medium text-gray-900">Químico</h4>
                <p className="text-sm text-gray-600">Materiais e insumos</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-medium text-gray-900">Têxtil</h4>
                <p className="text-sm text-gray-600">Fibras e tecidos</p>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="passaporte" className="flex items-center space-x-2">
                <Package className="h-4 w-4" />
                <span className="hidden md:inline">Passaporte Digital</span>
              </TabsTrigger>
              <TabsTrigger value="ciclo-vida" className="flex items-center space-x-2">
                <LineChart className="h-4 w-4" />
                <span className="hidden md:inline">Ciclo de Vida</span>
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center space-x-2">
                <Factory className="h-4 w-4" />
                <span className="hidden md:inline">Design Circular</span>
              </TabsTrigger>
              <TabsTrigger value="rastreamento" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span className="hidden md:inline">Rastreamento</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="passaporte">
              <PassaporteDigital />
            </TabsContent>

            <TabsContent value="ciclo-vida">
              <AnaliseCicloVida />
            </TabsContent>

            <TabsContent value="design">
              <DesignCircular />
            </TabsContent>

            <TabsContent value="rastreamento">
              <RastreamentoProdutos />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SolucoesManufatura;
