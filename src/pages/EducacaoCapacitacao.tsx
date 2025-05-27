
import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Users, Map, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import TutoriaisInterativos from '@/components/educacao/TutoriaisInterativos';
import TreinamentosPresenciais from '@/components/educacao/TreinamentosPresenciais';
import MapasEducativos from '@/components/educacao/MapasEducativos';
import CertificacoesGamificacao from '@/components/educacao/CertificacoesGamificacao';
import ProgramasConsciencializacao from '@/components/educacao/ProgramasConsciencializacao';

const EducacaoCapacitacao = () => {
  const [activeTab, setActiveTab] = useState('tutoriais');

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
              Educação e Capacitação
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
                Conhecimento e Habilidades
              </span>{' '}
              para Economia Circular
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Capacitação abrangente para stakeholders, promovendo práticas circulares, inclusão social 
              e conformidade com PNEC, ENEC e PNRS através de tutoriais, treinamentos e certificações.
            </p>
          </div>

          {/* Estatísticas da Educação */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <BookOpen className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">2,847</p>
                  <p className="text-sm text-gray-600">Usuários Capacitados</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                  <p className="text-sm text-gray-600">Treinamentos Realizados</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">1,294</p>
                  <p className="text-sm text-gray-600">Certificações Emitidas</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">89%</p>
                  <p className="text-sm text-gray-600">Taxa de Conclusão</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="tutoriais" className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden md:inline">Tutoriais</span>
              </TabsTrigger>
              <TabsTrigger value="treinamentos" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span className="hidden md:inline">Treinamentos</span>
              </TabsTrigger>
              <TabsTrigger value="mapas" className="flex items-center space-x-2">
                <Map className="h-4 w-4" />
                <span className="hidden md:inline">Mapas</span>
              </TabsTrigger>
              <TabsTrigger value="certificacoes" className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span className="hidden md:inline">Certificações</span>
              </TabsTrigger>
              <TabsTrigger value="consciencializacao" className="flex items-center space-x-2">
                <Target className="h-4 w-4" />
                <span className="hidden md:inline">Programas</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tutoriais">
              <TutoriaisInterativos />
            </TabsContent>

            <TabsContent value="treinamentos">
              <TreinamentosPresenciais />
            </TabsContent>

            <TabsContent value="mapas">
              <MapasEducativos />
            </TabsContent>

            <TabsContent value="certificacoes">
              <CertificacoesGamificacao />
            </TabsContent>

            <TabsContent value="consciencializacao">
              <ProgramasConsciencializacao />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EducacaoCapacitacao;
