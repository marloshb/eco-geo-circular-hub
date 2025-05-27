
import React from 'react';
import { MapPin, TrendingUp, Calendar, Star, Bell, Navigation } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const DashboardCatador = () => {
  const oportunidadesProximas = [
    {
      id: 1,
      tipo: 'Papel e Papelão',
      quantidade: '50kg',
      distancia: '1.2km',
      valor: 'R$ 25,00',
      endereco: 'Rua das Flores, 123',
      urgencia: 'alta'
    },
    {
      id: 2,
      tipo: 'Plástico PET',
      quantidade: '30kg',
      distancia: '2.1km',
      valor: 'R$ 45,00',
      endereco: 'Av. Central, 456',
      urgencia: 'media'
    },
    {
      id: 3,
      tipo: 'Alumínio',
      quantidade: '15kg',
      distancia: '0.8km',
      valor: 'R$ 60,00',
      endereco: 'Rua Verde, 789',
      urgencia: 'baixa'
    }
  ];

  const estatisticas = [
    { titulo: 'Coletas este Mês', valor: '47', icone: TrendingUp, cor: 'text-green-600' },
    { titulo: 'Renda Mensal', valor: 'R$ 1.240', icone: Calendar, cor: 'text-blue-600' },
    { titulo: 'Avaliação', valor: '4.8/5', icone: Star, cor: 'text-yellow-600' },
    { titulo: 'Próximas Coletas', valor: '3', icone: Bell, cor: 'text-purple-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {estatisticas.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.titulo}</p>
                  <p className={`text-2xl font-bold ${stat.cor}`}>{stat.valor}</p>
                </div>
                <stat.icone className={`h-8 w-8 ${stat.cor}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Oportunidades Próximas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-green-600" />
            <span>Oportunidades Próximas</span>
          </CardTitle>
          <CardDescription>
            Materiais disponíveis para coleta na sua região
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {oportunidadesProximas.map((oportunidade) => (
              <div key={oportunidade.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{oportunidade.tipo}</h3>
                      <Badge 
                        variant={oportunidade.urgencia === 'alta' ? 'destructive' : 
                               oportunidade.urgencia === 'media' ? 'default' : 'secondary'}
                      >
                        {oportunidade.urgencia === 'alta' ? 'Urgente' :
                         oportunidade.urgencia === 'media' ? 'Normal' : 'Flexível'}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-2">{oportunidade.endereco}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>📦 {oportunidade.quantidade}</span>
                      <span>📍 {oportunidade.distancia}</span>
                      <span className="font-semibold text-green-600">{oportunidade.valor}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Navigation className="h-4 w-4 mr-2" />
                      Rota
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Aceitar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mapa de Atividades */}
      <Card>
        <CardHeader>
          <CardTitle>Mapa de Atividades</CardTitle>
          <CardDescription>
            Visualize suas coletas e oportunidades na região
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Mapa interativo com suas rotas e oportunidades</p>
              <Button variant="outline" className="mt-2">
                Abrir Mapa Completo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCatador;
