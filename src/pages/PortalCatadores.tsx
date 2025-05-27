
import React, { useState } from 'react';
import { ArrowLeft, Users, MapPin, Coins, BookOpen, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import DashboardCatador from '@/components/catador/DashboardCatador';
import LocalizacaoMateriais from '@/components/catador/LocalizacaoMateriais';
import SistemaPagamentos from '@/components/catador/SistemaPagamentos';
import ModulosCapacitacao from '@/components/catador/ModulosCapacitacao';
import GestaoCooperativa from '@/components/catador/GestaoCooperativa';

const PortalCatadores = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

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
              Portal de Catadores e Cooperativas
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Plataforma para{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Trabalhadores da Reciclagem
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Portal inclusivo e acessível para catadores e cooperativas, promovendo inclusão social 
              e oportunidades econômicas na economia circular.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="dashboard" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span className="hidden md:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="materiais" className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden md:inline">Materiais</span>
              </TabsTrigger>
              <TabsTrigger value="pagamentos" className="flex items-center space-x-2">
                <Coins className="h-4 w-4" />
                <span className="hidden md:inline">Pagamentos</span>
              </TabsTrigger>
              <TabsTrigger value="capacitacao" className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden md:inline">Capacitação</span>
              </TabsTrigger>
              <TabsTrigger value="cooperativa" className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span className="hidden md:inline">Cooperativa</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <DashboardCatador />
            </TabsContent>

            <TabsContent value="materiais">
              <LocalizacaoMateriais />
            </TabsContent>

            <TabsContent value="pagamentos">
              <SistemaPagamentos />
            </TabsContent>

            <TabsContent value="capacitacao">
              <ModulosCapacitacao />
            </TabsContent>

            <TabsContent value="cooperativa">
              <GestaoCooperativa />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PortalCatadores;
