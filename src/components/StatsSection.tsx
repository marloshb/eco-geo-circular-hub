
import React from 'react';
import { TrendingUp, Users, Recycle, MapPin } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '76.4%',
      label: 'Indústrias adotam práticas circulares',
      description: 'Das empresas brasileiras já implementam alguma prática circular'
    },
    {
      icon: Users,
      value: '800K+',
      label: 'Catadores no Brasil',
      description: 'Trabalhadores informais na cadeia de reciclagem'
    },
    {
      icon: Recycle,
      value: '30M',
      label: 'Toneladas/ano recicladas',
      description: 'Potencial de resíduos para economia circular'
    },
    {
      icon: MapPin,
      value: '5.570',
      label: 'Municípios conectados',
      description: 'Cobertura nacional da plataforma'
    }
  ];

  return (
    <section className="py-16 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transformando o Brasil com Dados Reais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa plataforma conecta milhões de brasileiros em uma rede nacional de economia circular
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
