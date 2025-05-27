
import React, { useState } from 'react';
import { MapPin, Truck, Clock, Wifi, Bell, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RastreamentoTempoReal = () => {
  const [veiculoSelecionado, setVeiculoSelecionado] = useState('veiculo1');

  const veiculos = [
    {
      id: 'veiculo1',
      nome: 'Caminhão Coleta 001',
      tipo: 'Veículo Comercial',
      motorista: 'João Silva',
      status: 'Em rota',
      localizacao: 'Av. Paulista, 1000',
      capacidade: '2.5 ton',
      ocupacao: '78%',
      proximoDestino: 'Centro de Reciclagem Norte',
      tempoEstimado: '15 min',
      velocidade: '35 km/h'
    },
    {
      id: 'veiculo2',
      nome: 'Carrinho 025',
      tipo: 'Carrinho Catador',
      motorista: 'Maria Santos',
      status: 'Coletando',
      localizacao: 'Rua das Flores, 250',
      capacidade: '150 kg',
      ocupacao: '45%',
      proximoDestino: 'Cooperativa Verde',
      tempoEstimado: '8 min',
      velocidade: '4 km/h'
    },
    {
      id: 'veiculo3',
      nome: 'Bike Cargo 012',
      tipo: 'Bicicleta Cargo',
      motorista: 'Pedro Oliveira',
      status: 'Retornando',
      localizacao: 'Praça da Sé',
      capacidade: '80 kg',
      ocupacao: '100%',
      proximoDestino: 'Ponto de Entrega',
      tempoEstimado: '12 min',
      velocidade: '18 km/h'
    }
  ];

  const sensoresIoT = [
    {
      id: 1,
      tipo: 'Lixeira Inteligente',
      local: 'Shopping Center',
      nivel: '85%',
      status: 'Crítico',
      ultimaColeta: '2 dias atrás',
      temperatura: '22°C'
    },
    {
      id: 2,
      tipo: 'Container Industrial',
      local: 'Fábrica ABC',
      nivel: '62%',
      status: 'Normal',
      ultimaColeta: '1 dia atrás',
      temperatura: '18°C'
    },
    {
      id: 3,
      tipo: 'Ponto de Entrega',
      local: 'Cooperativa Sul',
      nivel: '34%',
      status: 'Baixo',
      ultimaColeta: '3 horas atrás',
      temperatura: '25°C'
    },
    {
      id: 4,
      tipo: 'Balança Inteligente',
      local: 'Centro Triagem',
      nivel: '0%',
      status: 'Disponível',
      ultimaColeta: '30 min atrás',
      temperatura: '20°C'
    }
  ];

  const alertas = [
    {
      id: 1,
      tipo: 'Coleta Urgente',
      mensagem: 'Lixeira no Shopping Center atingiu capacidade máxima',
      prioridade: 'Alta',
      tempo: '5 min atrás'
    },
    {
      id: 2,
      tipo: 'Rota Otimizada',
      mensagem: 'Nova rota disponível com 20% menos distância',
      prioridade: 'Média',
      tempo: '15 min atrás'
    },
    {
      id: 3,
      tipo: 'Oportunidade',
      mensagem: 'Material de alta qualidade disponível na Zona Norte',
      prioridade: 'Baixa',
      tempo: '30 min atrás'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-green-600" />
            <span>Rastreamento em Tempo Real</span>
          </CardTitle>
          <CardDescription>
            Monitoramento GPS e IoT para transparência total da operação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Lista de Veículos */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Veículos Ativos</h3>
              {veiculos.map((veiculo) => (
                <Card 
                  key={veiculo.id}
                  className={`cursor-pointer transition-all ${
                    veiculoSelecionado === veiculo.id ? 'ring-2 ring-green-500' : ''
                  }`}
                  onClick={() => setVeiculoSelecionado(veiculo.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-sm">{veiculo.nome}</h4>
                        <p className="text-xs text-gray-600">{veiculo.motorista}</p>
                      </div>
                      <Badge 
                        variant="outline"
                        className={
                          veiculo.status === 'Em rota' ? 'text-blue-600 border-blue-600' :
                          veiculo.status === 'Coletando' ? 'text-green-600 border-green-600' :
                          'text-orange-600 border-orange-600'
                        }
                      >
                        {veiculo.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3 text-gray-500" />
                        <span>{veiculo.localizacao}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ocupação:</span>
                        <span className="font-medium">{veiculo.ocupacao}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Velocidade:</span>
                        <span className="font-medium">{veiculo.velocidade}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t text-xs">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Clock className="h-3 w-3" />
                        <span>Próximo: {veiculo.proximoDestino} em {veiculo.tempoEstimado}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mapa de Rastreamento */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Mapa de Rastreamento</h3>
              <Card>
                <CardContent className="p-4">
                  <div className="h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center relative">
                    <Navigation className="h-16 w-16 text-gray-400" />
                    <div className="absolute top-4 left-4 text-sm">
                      <Badge className="bg-green-600">
                        {veiculos.find(v => v.id === veiculoSelecionado)?.nome}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-600">
                      Localização em tempo real via GPS
                    </div>
                    
                    {/* Simulação de pontos no mapa */}
                    <div className="absolute top-16 left-20 w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
                    <div className="absolute top-32 right-24 w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div className="absolute bottom-20 left-32 w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <Button variant="outline" size="sm" className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>Centralizar</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-1">
                      <Navigation className="h-3 w-3" />
                      <span>Seguir</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-1">
                      <Truck className="h-3 w-3" />
                      <span>Detalhes</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sensores IoT */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wifi className="h-6 w-6 text-blue-600" />
            <span>Sensores IoT e Pontos de Coleta</span>
          </CardTitle>
          <CardDescription>
            Monitoramento inteligente de lixeiras e pontos de coleta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sensoresIoT.map((sensor) => (
              <Card key={sensor.id} className={`border-l-4 ${
                sensor.status === 'Crítico' ? 'border-l-red-500' :
                sensor.status === 'Normal' ? 'border-l-green-500' :
                sensor.status === 'Baixo' ? 'border-l-yellow-500' :
                'border-l-blue-500'
              }`}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Wifi className="h-4 w-4 text-blue-600" />
                      <Badge 
                        variant="outline"
                        className={
                          sensor.status === 'Crítico' ? 'text-red-600 border-red-600' :
                          sensor.status === 'Normal' ? 'text-green-600 border-green-600' :
                          sensor.status === 'Baixo' ? 'text-yellow-600 border-yellow-600' :
                          'text-blue-600 border-blue-600'
                        }
                      >
                        {sensor.status}
                      </Badge>
                    </div>
                    
                    <h4 className="font-medium text-sm">{sensor.tipo}</h4>
                    <p className="text-xs text-gray-600">{sensor.local}</p>
                    
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-blue-600">{sensor.nivel}</div>
                      <div className="text-xs text-gray-500">
                        Última coleta: {sensor.ultimaColeta}
                      </div>
                      <div className="text-xs text-gray-500">
                        Temperatura: {sensor.temperatura}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alertas e Notificações */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="h-6 w-6 text-orange-600" />
            <span>Alertas e Notificações</span>
          </CardTitle>
          <CardDescription>
            Notificações inteligentes para otimização das operações
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alertas.map((alerta) => (
              <Card key={alerta.id} className="border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge 
                          variant="outline"
                          className={
                            alerta.prioridade === 'Alta' ? 'text-red-600 border-red-600' :
                            alerta.prioridade === 'Média' ? 'text-orange-600 border-orange-600' :
                            'text-yellow-600 border-yellow-600'
                          }
                        >
                          {alerta.prioridade}
                        </Badge>
                        <span className="text-sm font-medium">{alerta.tipo}</span>
                      </div>
                      <p className="text-sm text-gray-600">{alerta.mensagem}</p>
                      <p className="text-xs text-gray-500 mt-1">{alerta.tempo}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Ver
                      </Button>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        Ação
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RastreamentoTempoReal;
