
import React, { useState } from 'react';
import { ArrowLeft, Package, QrCode, TrendingUp, Recycle, MapPin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import PassaporteDigital from '@/components/PassaporteDigital';
import AnaliseCicloVida from '@/components/AnaliseCicloVida';
import RastreamentoProdutos from '@/components/RastreamentoProdutos';
import DesignCircular from '@/components/DesignCircular';

const GestaoVidaUtil = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: QrCode,
      title: 'Passaportes Digitais',
      description: 'Documentação completa de produtos com informações sobre composição, desmontagem e reciclagem.',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Análise de Ciclo de Vida',
      description: 'Avaliação do impacto ambiental desde a produção até o descarte, baseada em normas ISO 14040.',
      color: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Rastreamento Inteligente',
      description: 'Monitoramento em tempo real usando IoT e GIS para mapear fluxos de produtos e materiais.',
      color: 'bg-gradient-to-r from-purple-500 to-purple-600'
    },
    {
      icon: Recycle,
      title: 'Design Circular',
      description: 'Ferramentas para projetar produtos duráveis, reparáveis e recicláveis com eco-design.',
      color: 'bg-gradient-to-r from-orange-500 to-orange-600'
    }
  ];

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

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-4 py-2 text-sm font-medium mb-4">
              Módulo de Gestão do Ciclo de Vida dos Produtos
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Rastreamento Completo do{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Ciclo de Vida
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gerencie produtos desde a concepção até o descarte, promovendo design circular, 
              reutilização e reciclagem em conformidade com PNEC, ENEC e PNRS.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="passaportes">Passaportes</TabsTrigger>
              <TabsTrigger value="analise">Análise</TabsTrigger>
              <TabsTrigger value="rastreamento">Rastreamento</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl ${feature.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-gray-900">
                            {feature.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600 leading-relaxed mt-2">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Package className="h-6 w-6 text-green-600" />
                    <span>Benefícios para os Setores</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Manufatura</h4>
                      <p className="text-blue-700 text-sm">Design de produtos modulares e rastreamento de componentes para reciclagem.</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Agricultura</h4>
                      <p className="text-green-700 text-sm">Gestão de embalagens agrícolas e resíduos orgânicos para compostagem.</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">Construção</h4>
                      <p className="text-orange-700 text-sm">Design de edifícios desmontáveis e rastreamento de materiais recicláveis.</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Varejo</h4>
                      <p className="text-purple-700 text-sm">Rastreamento de produtos devolvidos e conexão com mercados de segunda mão.</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">Energia</h4>
                      <p className="text-yellow-700 text-sm">Gestão de materiais para waste-to-energy e rastreamento de biomassa.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Inclusão Social</h4>
                      <p className="text-gray-700 text-sm">Integração de catadores com acesso a passaportes digitais.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="passaportes">
              <PassaporteDigital />
            </TabsContent>

            <TabsContent value="analise">
              <AnaliseCicloVida />
            </TabsContent>

            <TabsContent value="rastreamento">
              <RastreamentoProdutos />
            </TabsContent>

            <TabsContent value="design">
              <DesignCircular />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default GestaoVidaUtil;
