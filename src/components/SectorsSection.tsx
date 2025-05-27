
import React from 'react';
import { Factory, Wheat, Building2, Store, Zap, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SectorsSection = () => {
  const sectors = [
    {
      icon: Factory,
      title: 'Manufatura e Indústria',
      description: 'Design circular, passaportes digitais e gestão de materiais reciclados.',
      features: ['Ecodesign', 'Rastreabilidade', 'Certificações'],
      compliance: 'PNRS + ISO 59000',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Wheat,
      title: 'Agricultura e Alimentos',
      description: 'Gestão de resíduos orgânicos, compostagem e agricultura de precisão.',
      features: ['Compostagem', 'Bioenergia', 'Agricultura 4.0'],
      compliance: 'PNRS + Anvisa',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Building2,
      title: 'Construção Civil',
      description: 'Materiais reciclados, construção sustentável e gestão de resíduos.',
      features: ['Materiais reciclados', 'Construção verde', 'Demolição seletiva'],
      compliance: 'PNRS + ABNT',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Store,
      title: 'Varejo e Consumo',
      description: 'Logística reversa, economia de compartilhamento e educação do consumidor.',
      features: ['Logística reversa', 'Marketplace', 'Educação'],
      compliance: 'PNRS + CDC',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Energia e Utilities',
      description: 'Waste-to-energy, energias renováveis e otimização de recursos.',
      features: ['Waste-to-energy', 'Smart grids', 'Eficiência'],
      compliance: 'PNRS + ANEEL',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="setores" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Soluções Setoriais Especializadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas personalizadas para cada setor da economia, garantindo conformidade 
            regulatória e maximizando oportunidades circulares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sectors.slice(0, 3).map((sector, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${sector.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <sector.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900">{sector.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">{sector.compliance}</Badge>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {sector.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {sector.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-green-50 group-hover:border-green-300">
                  Explorar Setor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.slice(3).map((sector, index) => (
            <Card key={index + 3} className="group hover:shadow-xl transition-all duration-300 h-full">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${sector.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <sector.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900">{sector.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">{sector.compliance}</Badge>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {sector.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {sector.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-green-50 group-hover:border-green-300">
                  Explorar Setor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Transformar seu Setor?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Junte-se às empresas que já estão liderando a transição para a economia circular no Brasil.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
              Solicitar Demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
