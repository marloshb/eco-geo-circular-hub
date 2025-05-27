
import React, { useState } from 'react';
import { MapPin, Navigation, Truck, Clock, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RastreamentoGPS = () => {
  const [rastreamentoAtivo, setRastreamentoAtivo] = useState('coleta1');

  const coletasAtivas = [
    {
      id: 'coleta1',
      veiculo: 'Caminhão ECO-001',
      catador: 'Maria Santos',
      origem: 'Fábrica MetalTech - SP',
      destino: 'Cooperativa EcoUnidos',
      status: 'Em Trânsito',
      progresso: 65,
      distancia: '12.5 km',
      tempoEstimado: '25 min',
      carga: '2.3 ton - Metais/Plásticos'
    },
    {
      id: 'coleta2',
      veiculo: 'Carrinho ECO-C12',
      catador: 'João Silva',
      origem: 'Bairro Vila Verde',
      destino: 'Centro Reciclagem',
      status: 'Carregando',
      progresso: 25,
      distancia: '4.2 km',
      tempoEstimado: '45 min',
      carga: '180 kg - Papel/Papelão'
    },
    {
      id: 'coleta3',
      veiculo: 'Bicicleta ECO-B08',
      catador: 'Ana Costa',
      origem: 'Mercado Central',
      destino: 'Compostagem Urbana',
      status: 'Finalizada',
      progresso: 100,
      distancia: '3.8 km',
      tempoEstimado: 'Concluída',
      carga: '95 kg - Orgânicos'
    }
  ];

  const sensoresIoT = [
    { local: 'Ponto Coleta Shopping', nivel: 85, tipo: 'Recicláveis', ultimaAtualizacao: '2 min' },
    { local: 'Lixeira Inteligente Praça', nivel: 45, tipo: 'Orgânicos', ultimaAtualizacao: '5 min' },
    { local: 'Container Industrial Norte', nivel: 92, tipo: 'Metais', ultimaAtualizacao: '1 min' },
    { local: 'Ecoponto Residencial', nivel: 67, tipo: 'Eletrônicos', ultimaAtualizacao: '3 min' }
  ];

  const coletaAtual = coletasAtivas.find(c => c.id === rastreamentoAtivo) || coletasAtivas[0];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Navigation className="h-6 w-6 text-blue-600" />
            <span>Rastreamento GPS em Tempo Real</span>
          </CardTitle>
          <CardDescription>
            Monitoramento contínuo de coletas e transporte de resíduos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Lista de Coletas */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Coletas Ativas</h3>
              {coletasAtivas.map((coleta) => (
                <Card 
                  key={coleta.id}
                  className={`cursor-pointer transition-all ${
                    rastreamentoAtivo === coleta.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setRastreamentoAtivo(coleta.id)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-sm">{coleta.veiculo}</h4>
                        <Badge 
                          variant="outline"
                          className={
                            coleta.status === 'Em Trânsito' ? 'text-blue-600 border-blue-600' :
                            coleta.status === 'Carregando' ? 'text-orange-600 border-orange-600' :
                            'text-green-600 border-green-600'
                          }
                        >
                          {coleta.status}
                        </Badge>
                      </div>
                      
                      <div className="text-xs text-gray-600">
                        <p><strong>Catador:</strong> {coleta.catador}</p>
                        <p><strong>Carga:</strong> {coleta.carga}</p>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Progresso</span>
                          <span>{coleta.progresso}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              coleta.status === 'Em Trânsito' ? 'bg-blue-600' :
                              coleta.status === 'Carregando' ? 'bg-orange-600' :
                              'bg-green-600'
                            }`}
                            style={{ width: `${coleta.progresso}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-500">Distância:</span>
                          <p className="font-medium">{coleta.distancia}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Tempo:</span>
                          <p className="font-medium">{coleta.tempoEstimado}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mapa de Rastreamento */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Rastreamento: {coletaAtual.veiculo}</h3>
                <Badge className="bg-blue-600">
                  GPS Ativo
                </Badge>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative">
                    <MapPin className="h-16 w-16 text-gray-400" />
                    
                    {/* Marcadores simulados */}
                    <div className="absolute top-4 left-8 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      Origem
                    </div>
                    <div className="absolute bottom-8 right-8 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Destino
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                      <Truck className="h-4 w-4 inline mr-1" />
                      Posição Atual
                    </div>
                    
                    <div className="absolute bottom-4 left-4 text-xs text-gray-600 bg-white/80 rounded px-2 py-1">
                      Atualização GPS: Tempo Real
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-sm mb-2">Origem</h4>
                    <p className="text-xs text-gray-600">{coletaAtual.origem}</p>
                    <Badge className="bg-red-100 text-red-800 text-xs mt-2">
                      Partida
                    </Badge>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-sm mb-2">Destino</h4>
                    <p className="text-xs text-gray-600">{coletaAtual.destino}</p>
                    <Badge className="bg-green-100 text-green-800 text-xs mt-2">
                      Chegada
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sensores IoT */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wifi className="h-6 w-6 text-green-600" />
            <span>Sensores IoT Integrados</span>
          </CardTitle>
          <CardDescription>
            Monitoramento inteligente de pontos de coleta e lixeiras
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sensoresIoT.map((sensor, index) => (
              <Card key={index} className="border-green-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm">{sensor.local}</h4>
                      <Badge 
                        variant="outline"
                        className={
                          sensor.nivel >= 80 ? 'text-red-600 border-red-600' :
                          sensor.nivel >= 60 ? 'text-orange-600 border-orange-600' :
                          'text-green-600 border-green-600'
                        }
                      >
                        {sensor.nivel}%
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs text-gray-600">Tipo de Resíduo:</span>
                        <p className="text-sm font-medium">{sensor.tipo}</p>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Nível de Ocupação</span>
                          <span>{sensor.nivel}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              sensor.nivel >= 80 ? 'bg-red-600' :
                              sensor.nivel >= 60 ? 'bg-orange-600' :
                              'bg-green-600'
                            }`}
                            style={{ width: `${sensor.nivel}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>Atualizado há {sensor.ultimaAtualizacao}</span>
                      </div>
                    </div>
                    
                    {sensor.nivel >= 80 && (
                      <Button className="w-full bg-red-600 hover:bg-red-700" size="sm">
                        Solicitar Coleta
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Métricas de Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Métricas de Rastreamento</CardTitle>
          <CardDescription>
            Performance e estatísticas do sistema GPS/IoT
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Navigation className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">856</p>
              <p className="text-sm text-blue-700">Veículos Rastreados</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Wifi className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">3,294</p>
              <p className="text-sm text-green-700">Sensores Ativos</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">95%</p>
              <p className="text-sm text-purple-700">Precisão GPS</p>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Truck className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-orange-600">1,247</p>
              <p className="text-sm text-orange-700">Coletas/Mês</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RastreamentoGPS;
