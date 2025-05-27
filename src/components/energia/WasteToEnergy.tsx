
import React, { useState } from 'react';
import { Zap, Recycle, MapPin, TrendingUp, Plus, Factory, Leaf } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const WasteToEnergy = () => {
  const [selectedUsina, setSelectedUsina] = useState(null);

  const usinas = [
    {
      id: 1,
      nome: 'Usina de Biogás São Paulo',
      tipo: 'Biogás',
      capacidade: '15 MW',
      eficiencia: 85,
      localizacao: 'São Paulo, SP',
      status: 'Operacional',
      residuos: ['Resíduos Orgânicos', 'Lodo de Esgoto', 'Biomassa'],
      producao: '1,240 MWh/mês'
    },
    {
      id: 2,
      nome: 'Central de Incineração Rio',
      tipo: 'Incineração',
      capacidade: '25 MW',
      eficiencia: 78,
      localizacao: 'Rio de Janeiro, RJ',
      status: 'Operacional',
      residuos: ['Resíduos Urbanos', 'Plásticos Não-Recicláveis'],
      producao: '1,850 MWh/mês'
    },
    {
      id: 3,
      nome: 'Usina de Pirólise Curitiba',
      tipo: 'Pirólise',
      capacidade: '8 MW',
      eficiencia: 72,
      localizacao: 'Curitiba, PR',
      status: 'Em Construção',
      residuos: ['Pneus Usados', 'Resíduos Plásticos'],
      producao: '650 MWh/mês'
    }
  ];

  const residuosDisponiveis = [
    {
      id: 1,
      tipo: 'Biomassa Agrícola',
      quantidade: '120 ton',
      valorCalorifico: '18 MJ/kg',
      origem: 'Fazendas Região Sul',
      preco: 'R$ 85/ton',
      distancia: '15 km'
    },
    {
      id: 2,
      tipo: 'Lodo de Esgoto',
      quantidade: '80 ton',
      valorCalorifico: '12 MJ/kg',
      origem: 'ETE Municipal',
      preco: 'R$ 45/ton',
      distancia: '8 km'
    },
    {
      id: 3,
      tipo: 'Resíduos Orgânicos',
      quantidade: '200 ton',
      valorCalorifico: '15 MJ/kg',
      origem: 'Mercados e Restaurantes',
      preco: 'R$ 35/ton',
      distancia: '22 km'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl text-white">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-2xl">Gestão Waste-to-Energy</CardTitle>
              <CardDescription>
                Transforme resíduos em energia renovável através de usinas de biogás, incineração e pirólise
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="usinas" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="usinas">Usinas Conectadas</TabsTrigger>
          <TabsTrigger value="residuos">Resíduos Disponíveis</TabsTrigger>
          <TabsTrigger value="producao">Produção Energética</TabsTrigger>
        </TabsList>

        <TabsContent value="usinas" className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Usinas de Waste-to-Energy</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Conectar Nova Usina
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usinas.map((usina) => (
              <Card key={usina.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Factory className="h-8 w-8 text-yellow-600" />
                      <div>
                        <CardTitle className="text-lg">{usina.nome}</CardTitle>
                        <CardDescription>{usina.tipo} • {usina.capacidade}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={usina.status === 'Operacional' ? 'default' : 'secondary'}>
                      {usina.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Eficiência</span>
                    <span className="font-semibold">{usina.eficiencia}%</span>
                  </div>
                  <Progress value={usina.eficiencia} className="h-2" />
                  
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-700">Resíduos Aceitos:</span>
                    <div className="flex flex-wrap gap-1">
                      {usina.residuos.map((residuo, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {residuo}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-3 space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{usina.localizacao}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">{usina.producao}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="residuos" className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Resíduos Disponíveis para Energia</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Listar Resíduos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residuosDisponiveis.map((residuo) => (
              <Card key={residuo.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Leaf className="h-8 w-8 text-green-600" />
                    <div>
                      <CardTitle className="text-lg">{residuo.tipo}</CardTitle>
                      <CardDescription>{residuo.quantidade} disponíveis</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-600">Valor Calorífico:</span>
                      <p className="font-semibold">{residuo.valorCalorifico}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Preço:</span>
                      <p className="font-semibold text-green-600">{residuo.preco}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{residuo.origem}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Distância:</span>
                      <Badge variant="outline">{residuo.distancia}</Badge>
                    </div>
                  </div>

                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    Solicitar Cotação
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="producao" className="space-y-6">
          <h3 className="text-lg font-semibold">Produção Energética</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Zap className="h-8 w-8 text-yellow-600" />
                  <div>
                    <p className="text-2xl font-bold">2,340 MWh</p>
                    <p className="text-sm text-gray-600">Energia Total Gerada</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Recycle className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold">15,800 ton</p>
                    <p className="text-sm text-gray-600">Resíduos Processados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold">81.5%</p>
                    <p className="text-sm text-gray-600">Eficiência Média</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Factory className="h-8 w-8 text-orange-600" />
                  <div>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm text-gray-600">Usinas Ativas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Comparativo de Tecnologias</CardTitle>
              <CardDescription>
                Análise de eficiência por tipo de tecnologia waste-to-energy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Biogás</p>
                    <p className="text-sm text-gray-600">6 usinas • 1,450 MWh/mês</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">85%</p>
                    <Progress value={85} className="w-24 h-2" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Incineração</p>
                    <p className="text-sm text-gray-600">4 usinas • 780 MWh/mês</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">78%</p>
                    <Progress value={78} className="w-24 h-2" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">Pirólise</p>
                    <p className="text-sm text-gray-600">2 usinas • 110 MWh/mês</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">72%</p>
                    <Progress value={72} className="w-24 h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WasteToEnergy;
