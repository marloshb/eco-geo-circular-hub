
import React, { useState } from 'react';
import { ArrowLeft, Wheat, Leaf, QrCode, Truck, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import GestaoResiduosOrganicos from '@/components/agricultura/GestaoResiduosOrganicos';
import PassaportesDigitais from '@/components/agricultura/PassaportesDigitais';

const SolucoesAgricultura = () => {
  const [activeTab, setActiveTab] = useState('residuos');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
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
              Agricultura e Alimentos
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
                Soluções Circulares
              </span>{' '}
              para o Agronegócio
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ferramentas especializadas para gestão sustentável de resíduos orgânicos, 
              embalagens agrícolas e promoção da economia circular no campo.
            </p>
          </div>

          {/* Estatísticas do Setor */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Leaf className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">45.2 ton</p>
                  <p className="text-sm text-gray-600">Resíduos Orgânicos</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <QrCode className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">2,847</p>
                  <p className="text-sm text-gray-600">Passaportes Digitais</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">1,250 MWh</p>
                  <p className="text-sm text-gray-600">Bioenergia Gerada</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">578</p>
                  <p className="text-sm text-gray-600">Produtores Cadastrados</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="residuos" className="flex items-center space-x-2">
                <Leaf className="h-4 w-4" />
                <span className="hidden md:inline">Resíduos Orgânicos</span>
              </TabsTrigger>
              <TabsTrigger value="passaportes" className="flex items-center space-x-2">
                <QrCode className="h-4 w-4" />
                <span className="hidden md:inline">Passaportes Digitais</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="residuos">
              <GestaoResiduosOrganicos />
            </TabsContent>

            <TabsContent value="passaportes">
              <PassaportesDigitais />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SolucoesAgricultura;
