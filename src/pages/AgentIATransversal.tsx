
import React, { useState } from 'react';
import { ArrowLeft, Brain, Bot, TrendingUp, Zap, BarChart3, FileText, Target, Lightbulb, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import AnaliseAvancada from '@/components/agente-ia/AnaliseAvancada';
import RelatoriosAutomatizados from '@/components/agente-ia/RelatoriosAutomatizados';
import RecomendacoesPersonalizadas from '@/components/agente-ia/RecomendacoesPersonalizadas';
import PrevisaoTendencias from '@/components/agente-ia/PrevisaoTendencias';
import FluxosAutomatizados from '@/components/agente-ia/FluxosAutomatizados';
import DemoOtimizacaoIA from '@/components/agente-ia/DemoOtimizacaoIA';

const AgentIATransversal = () => {
  const [activeTab, setActiveTab] = useState('analise');
  const [isDemoOpen, setIsDemoOpen] = useState(false);

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
            <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 text-sm font-medium mb-4">
              Agente IA Transversal
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Inteligência Artificial
              </span>{' '}
              para Economia Circular
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sistema inteligente que analisa dados em tempo real, gera insights acionáveis, 
              automatiza processos e otimiza a economia circular com aprendizado de máquina e PLN.
            </p>
          </div>

          {/* Estatísticas do Sistema */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Brain className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">98.3%</p>
                  <p className="text-sm text-gray-600">Precisão do Modelo IA</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">2.4M</p>
                  <p className="text-sm text-gray-600">Dados Processados</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-yellow-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">847</p>
                  <p className="text-sm text-gray-600">Fluxos Automatizados</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Bot className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">15.7K</p>
                  <p className="text-sm text-gray-600">Recomendações Geradas</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="analise" className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden md:inline">Análise Avançada</span>
              </TabsTrigger>
              <TabsTrigger value="relatorios" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span className="hidden md:inline">Relatórios</span>
              </TabsTrigger>
              <TabsTrigger value="recomendacoes" className="flex items-center space-x-2">
                <Lightbulb className="h-4 w-4" />
                <span className="hidden md:inline">Recomendações</span>
              </TabsTrigger>
              <TabsTrigger value="tendencias" className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span className="hidden md:inline">Tendências</span>
              </TabsTrigger>
              <TabsTrigger value="fluxos" className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span className="hidden md:inline">Automação</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="analise">
              <AnaliseAvancada />
            </TabsContent>

            <TabsContent value="relatorios">
              <RelatoriosAutomatizados />
            </TabsContent>

            <TabsContent value="recomendacoes">
              <RecomendacoesPersonalizadas />
            </TabsContent>

            <TabsContent value="tendencias">
              <PrevisaoTendencias />
            </TabsContent>

            <TabsContent value="fluxos">
              <FluxosAutomatizados />
            </TabsContent>
          </Tabs>

          {/* Capacidades da IA */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Capacidades do Agente IA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
                <Brain className="h-12 w-12 mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">Machine Learning</p>
                <p className="text-purple-100">Modelos preditivos avançados para análise de padrões</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
                <Bot className="h-12 w-12 mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">Processamento PLN</p>
                <p className="text-blue-100">Análise de linguagem natural para insights</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
                <Zap className="h-12 w-12 mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">Automação Inteligente</p>
                <p className="text-green-100">Fluxos automatizados baseados em regras de IA</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Otimize sua Economia Circular com IA
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Utilize inteligência artificial avançada para maximizar eficiência, 
                automatizar processos e gerar insights acionáveis para seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100">
                  <Settings className="h-5 w-5 mr-2" />
                  Configurar IA
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-purple-700"
                  onClick={() => setIsDemoOpen(true)}
                >
                  <Target className="h-5 w-5 mr-2" />
                  Ver Demonstração
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DemoOtimizacaoIA isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
};

export default AgentIATransversal;
