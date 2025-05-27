
import React, { useState } from 'react';
import { ArrowRight, Map, Users, Package, Play, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Demo from './Demo';
import SolicitarDemonstracao from './SolicitarDemonstracao';

const Hero = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isSolicitarDemoOpen, setIsSolicitarDemoOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-4 py-2 text-sm font-medium">
                Conforme PNEC e ENEC 2024
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Conectando o Brasil através da{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Economia Circular
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Plataforma digital integrada que utiliza geotecnologias para conectar empresas, catadores, 
              consumidores e órgãos públicos, promovendo sustentabilidade e inclusão social em todo o país.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-3 text-lg">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-3 text-lg"
                onClick={() => setIsDemoOpen(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demonstração
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg"
                onClick={() => setIsSolicitarDemoOpen(true)}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Solicitar Demonstração
              </Button>
            </div>

            {/* Key Features Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Map className="h-5 w-5 text-green-600" />
                <span className="font-medium">Geotecnologias</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Inclusão Social</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Package className="h-5 w-5 text-green-600" />
                <span className="font-medium">Marketplace</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Demo isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <SolicitarDemonstracao isOpen={isSolicitarDemoOpen} onClose={() => setIsSolicitarDemoOpen(false)} />
    </>
  );
};

export default Hero;
