
import React, { useState } from 'react';
import { Globe, Activity, Battery, TrendingUp, Wifi, Zap, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SmartGrids = () => {
  const regioes = [
    {
      id: 1,
      nome: 'Zona Norte',
      status: 'Conectado',
      consumo: '1,240 MWh',
      eficiencia: 89,
      perdas: 5.2,
      medidores: 15420,
      energiaRenovavel: 35
    },
    {
      id: 2,
      nome: 'Zona Sul',
      status: 'Conectado',
      consumo: '980 MWh',
      eficiencia: 92,
      perdas: 3.8,
      medidores: 12150,
      energiaRenovavel: 42
    },
    {
      id: 3,
      nome: 'Centro',
      status: 'Conectado',
      consumo: '1,580 MWh',
      eficiencia: 87,
      perdas: 6.1,
      medidores: 18900,
      energiaRenovavel: 28
    },
    {
      id: 4,
      nome: 'Zona Industrial',
      status: 'Em Expansão',
      consumo: '2,340 MWh',
      eficiencia: 83,
      perdas: 8.4,
      medidores: 8750,
      energiaRenovavel: 65
    }
  ];

  const alertas = [
    {
      id: 1,
      tipo: 'Alto Consumo',
      regiao: 'Zona Industrial',
      severidade: 'warning',
      tempo: '15 min atrás'
    },
    {
      id: 2,
      tipo: 'Falha de Comunicação',
      regiao: 'Zona Norte - Setor 3',
      severidade: 'error',
      tempo: '32 min atrás'
    },
    {
      id: 3,
      tipo: 'Otimização Disponível',
      regiao: 'Centro',
      severidade: 'info',
      tempo: '1h atrás'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl text-white">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-2xl">Smart Grids & Eficiência Energética</CardTitle>
              <CardDescription>
                Monitore e otimize a distribuição de energia em tempo real com tecnologia IoT
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="monitoramento" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="monitoramento">Monitoramento</TabsTrigger>
          <TabsTrigger value="eficiencia">Eficiência</TabsTrigger>
          <TabsTrigger value="configuracao">Configuração</TabsTrigger>
        </TabsList>

        <TabsContent value="monitoramento" className="space-y-6">
          {/* Métricas Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold">6,140 MWh</p>
                    <p className="text-sm text-gray-600">Consumo Total</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold">89.2%</p>
                    <p className="text-sm text-gray-600">Eficiência Média</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Wifi className="h-8 w-8 text-orange-600" />
                  <div>
                    <p className="text-2xl font-bold">55,220</p>
                    <p className="text-sm text-gray-600">Medidores Conectados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Battery className="h-8 w-8 text-yellow-600" />
                  <div>
                    <p className="text-2xl font-bold">42.5%</p>
                    <p className="text-sm text-gray-600">Energia Renovável</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Regiões Smart Grid */}
          <Card>
            <CardHeader>
              <CardTitle>Status das Regiões Smart Grid</CardTitle>
              <CardDescription>
                Monitoramento em tempo real das diferentes zonas da rede inteligente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regioes.map((regiao) => (
                  <div key={regiao.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold">{regiao.nome}</h4>
                        <Badge variant={regiao.status === 'Conectado' ? 'default' : 'secondary'}>
                          {regiao.status}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Consumo</p>
                        <p className="font-semibold">{regiao.consumo}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Eficiência</p>
                        <div className="flex items-center space-x-2">
                          <Progress value={regiao.eficiencia} className="flex-1 h-2" />
                          <span className="text-sm font-medium">{regiao.eficiencia}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Perdas</p>
                        <p className="font-semibold text-red-600">{regiao.perdas}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Medidores</p>
                        <p className="font-semibold">{regiao.medidores.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Renovável</p>
                        <p className="font-semibold text-green-600">{regiao.energiaRenovavel}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Alertas */}
          <Card>
            <CardHeader>
              <CardTitle>Alertas do Sistema</CardTitle>
              <CardDescription>
                Notificações importantes sobre o funcionamento da rede
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alertas.map((alerta) => (
                  <div key={alerta.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        alerta.severidade === 'error' ? 'bg-red-500' :
                        alerta.severidade === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div>
                        <p className="font-medium">{alerta.tipo}</p>
                        <p className="text-sm text-gray-600">{alerta.regiao}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{alerta.tempo}</p>
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="eficiencia" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Eficiência Energética</CardTitle>
              <CardDescription>
                Identificação de oportunidades de otimização e redução de perdas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Perdas por Região</h4>
                  {regioes.map((regiao) => (
                    <div key={regiao.id} className="flex items-center justify-between">
                      <span className="text-sm">{regiao.nome}</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={100 - regiao.perdas * 10} className="w-20 h-2" />
                        <span className="text-sm font-medium">{regiao.perdas}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Energia Renovável</h4>
                  {regioes.map((regiao) => (
                    <div key={regiao.id} className="flex items-center justify-between">
                      <span className="text-sm">{regiao.nome}</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={regiao.energiaRenovavel} className="w-20 h-2" />
                        <span className="text-sm font-medium text-green-600">{regiao.energiaRenovavel}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Recomendações de Otimização</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Zona Industrial</p>
                      <p className="text-sm text-gray-600">
                        Implementar sistemas de armazenamento para reduzir picos de consumo em 15%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <Battery className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Centro</p>
                      <p className="text-sm text-gray-600">
                        Instalar painéis solares em prédios públicos pode aumentar energia renovável em 20%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Zap className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Zona Norte</p>
                      <p className="text-sm text-gray-600">
                        Substituir transformadores antigos pode reduzir perdas técnicas em 2.5%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="configuracao" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Smart Grid</CardTitle>
              <CardDescription>
                Ajustes e parâmetros do sistema de rede inteligente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Parâmetros de Monitoramento</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Intervalo de Coleta de Dados</span>
                      <Badge variant="outline">5 minutos</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Limite de Alerta - Perdas</span>
                      <Badge variant="outline">8%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Threshold de Eficiência</span>
                      <Badge variant="outline">85%</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Integração IoT</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Medidores Inteligentes</span>
                      <Badge variant="default">Ativo</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Sensores de Qualidade</span>
                      <Badge variant="default">Ativo</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Automação de Resposta</span>
                      <Badge variant="secondary">Em Desenvolvimento</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Status Geral do Sistema</h4>
                    <p className="text-sm text-gray-600">Todos os sistemas operacionais</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      Configurar
                    </Button>
                    <Button>
                      Atualizar Sistema
                    </Button>
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

export default SmartGrids;
