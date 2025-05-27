
import React, { useState } from 'react';
import { ArrowLeft, Gift, Coins, Award, TrendingUp, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import PontosRecompensas from '@/components/incentivos/PontosRecompensas';
import CreditosFinanceiros from '@/components/incentivos/CreditosFinanceiros';
import CertificacoesSustentabilidade from '@/components/incentivos/CertificacoesSustentabilidade';
import GamificacaoRankings from '@/components/incentivos/GamificacaoRankings';

const SistemaIncentivos = () => {
  const [activeTab, setActiveTab] = useState('pontos');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-green-50">
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
              Sistema de Incentivos
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
                Recompensas e Incentivos
              </span>{' '}
              para Economia Circular
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estimule a participação ativa através de pontos, créditos, certificações e gamificação, 
              promovendo inclusão social e práticas sustentáveis alinhadas com PNEC e ENEC.
            </p>
          </div>

          {/* Estatísticas dos Incentivos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Gift className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">2,847</p>
                  <p className="text-sm text-gray-600">Recompensas Ativas</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Coins className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">R$ 156K</p>
                  <p className="text-sm text-gray-600">Créditos Distribuídos</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">431</p>
                  <p className="text-sm text-gray-600">Certificações Emitidas</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Star className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">85%</p>
                  <p className="text-sm text-gray-600">Taxa de Engajamento</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="pontos" className="flex items-center space-x-2">
                <Gift className="h-4 w-4" />
                <span className="hidden md:inline">Pontos</span>
              </TabsTrigger>
              <TabsTrigger value="creditos" className="flex items-center space-x-2">
                <Coins className="h-4 w-4" />
                <span className="hidden md:inline">Créditos</span>
              </TabsTrigger>
              <TabsTrigger value="certificacoes" className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span className="hidden md:inline">Certificações</span>
              </TabsTrigger>
              <TabsTrigger value="gamificacao" className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span className="hidden md:inline">Rankings</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pontos">
              <PontosRecompensas />
            </TabsContent>

            <TabsContent value="creditos">
              <CreditosFinanceiros />
            </TabsContent>

            <TabsContent value="certificacoes">
              <CertificacoesSustentabilidade />
            </TabsContent>

            <TabsContent value="gamificacao">
              <GamificacaoRankings />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SistemaIncentivos;
