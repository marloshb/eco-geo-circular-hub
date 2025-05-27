
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building, ShoppingBag, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const UserTypesSection = () => {
  const userTypes = [
    {
      icon: Users,
      title: 'Catadores e Cooperativas',
      description: 'Interface simplificada, registro biométrico e pagamentos justos para trabalhadores da reciclagem.',
      features: ['Registro simplificado', 'Localização de materiais', 'Pagamentos justos', 'Capacitação'],
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      badge: 'Inclusão Social',
      link: '/portal-catadores'
    },
    {
      icon: Building,
      title: 'Empresas e Indústrias',
      description: 'Ferramentas avançadas para gestão circular, compliance e otimização de recursos.',
      features: ['Dashboard executivo', 'Relatórios de compliance', 'Marketplace B2B', 'Analytics'],
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      badge: 'PNEC/ENEC',
      link: '/portal-empresas'
    },
    {
      icon: ShoppingBag,
      title: 'Consumidores',
      description: 'Localize pontos de reciclagem, marketplace de segunda mão e educação ambiental.',
      features: ['Pontos de coleta', 'Marketplace', 'Educação', 'Recompensas'],
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      badge: 'Engajamento',
      link: '/portal-consumidores'
    },
    {
      icon: MapPin,
      title: 'Órgãos Públicos',
      description: 'Monitoramento de políticas, indicadores de sustentabilidade e gestão territorial.',
      features: ['Dashboards públicos', 'Indicadores PNEC', 'Monitoramento', 'Relatórios'],
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      badge: 'Governança',
      link: '/portal-orgaos-publicos'
    }
  ];

  return (
    <section id="usuarios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Para Todos os Atores da Economia Circular
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interfaces personalizadas que atendem às necessidades específicas de cada tipo de usuário, 
            promovendo inclusão social e sustentabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {userTypes.map((userType, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <CardHeader className="relative">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl ${userType.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <userType.icon className="h-8 w-8" />
                  </div>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    {userType.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mt-4">
                  {userType.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  {userType.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {userType.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to={userType.link}>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                    Acessar Portal
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
