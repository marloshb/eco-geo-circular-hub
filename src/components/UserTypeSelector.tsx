
import React from 'react';
import { Building, Users, ShoppingBag, MapPin, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface UserTypeSelectorProps {
  onSelectUserType: (userType: string) => void;
}

const UserTypeSelector = ({ onSelectUserType }: UserTypeSelectorProps) => {
  const userTypes = [
    {
      id: 'empresa',
      icon: Building,
      title: 'Empresas e Indústrias',
      description: 'Cadastro para empresas dos setores de manufatura, agricultura, construção, varejo e energia.',
      features: ['CNPJ obrigatório', 'Dados de resíduos', 'Conformidade PNRS', 'Geolocalização'],
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      badge: 'Corporativo'
    },
    {
      id: 'catador',
      icon: Users,
      title: 'Catadores e Cooperativas',
      description: 'Registro simplificado com opções biométricas para trabalhadores da reciclagem.',
      features: ['Verificação biométrica', 'Cadastro mínimo', 'Localização GPS', 'Inclusão social'],
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      badge: 'Inclusivo'
    },
    {
      id: 'consumidor',
      icon: ShoppingBag,
      title: 'Consumidores',
      description: 'Para cidadãos interessados em práticas sustentáveis e economia circular.',
      features: ['Perfil básico', 'Pontos de coleta', 'Marketplace', 'Educação ambiental'],
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      badge: 'Cidadão'
    },
    {
      id: 'orgao-publico',
      icon: MapPin,
      title: 'Órgãos Públicos',
      description: 'Para governos locais e estaduais que monitoram e implementam políticas.',
      features: ['Dados CNPJ', 'Monitoramento', 'Indicadores PNEC', 'Relatórios públicos'],
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      badge: 'Governança'
    },
    {
      id: 'ong',
      icon: Heart,
      title: 'ONGs e Cooperativas',
      description: 'Organizações que apoiam projetos ambientais e inclusão social.',
      features: ['Registro CNPJ', 'Projetos sociais', 'Validação de catadores', 'Parcerias'],
      color: 'bg-gradient-to-r from-pink-500 to-pink-600',
      badge: 'Social'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Selecione seu Tipo de Usuário
        </h2>
        <p className="text-gray-600">
          Escolha a categoria que melhor representa você para um cadastro personalizado
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {userTypes.map((userType) => (
          <Card key={userType.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-xl ${userType.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <userType.icon className="h-8 w-8" />
                </div>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  {userType.badge}
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mt-4">
                {userType.title}
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                {userType.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                {userType.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                onClick={() => onSelectUserType(userType.id)}
              >
                Cadastrar como {userType.title.split(' ')[0]}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserTypeSelector;
