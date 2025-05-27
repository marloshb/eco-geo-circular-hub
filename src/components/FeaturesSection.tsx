
import React from 'react';
import { Package, Truck, GraduationCap, Shield, Award, Map } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: Package,
      title: 'Marketplace de Resíduos',
      description: 'Conecte oferta e demanda de materiais recicláveis com geolocalização precisa e preços justos.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Truck,
      title: 'Logística Inteligente',
      description: 'Otimize rotas de coleta com GPS e IoT, reduzindo custos e emissões de carbono.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Map,
      title: 'Geotecnologias Avançadas',
      description: 'GIS, sensoriamento remoto e análise espacial para mapear fluxos de economia circular.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: GraduationCap,
      title: 'Educação e Capacitação',
      description: 'Recursos educacionais interativos sobre economia circular e segurança para catadores.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Conformidade Regulatória',
      description: 'Garanta compliance com PNEC, ENEC, PNRS e normas ABNT NBR ISO 59000.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Award,
      title: 'Sistema de Incentivos',
      description: 'Recompensas e créditos para participantes ativos na economia circular.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Funcionalidades da Plataforma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas integradas para transformar a gestão de resíduos e promover práticas circulares 
            em todos os setores da economia brasileira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
