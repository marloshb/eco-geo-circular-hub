
import React, { useState } from 'react';
import { MapPin, Navigation, Wifi, Layers, Truck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GeotecnologiasMarketplace = () => {
  const [tipoMapa, setTipoMapa] = useState('densidade');

  const pontosColeta = [
    {
      id: 1,
      nome: 'Centro de Reciclagem Norte',
      tipo: 'reciclagem',
      endereco: 'Av. Paulista, 1000 - São Paulo',
      materiais: ['PET', 'Alumínio', 'Papel'],
      status: 'Ativo',
      capacidade: '85%',
      coordenadas: '-23.5505, -46.6333'
    },
    {
      id: 2,
      nome: 'Cooperativa Verde Sul',
      tipo: 'cooperativa',
      endereco: 'Rua das Flores, 500 - São Paulo',
      materiais: ['Orgânicos', 'Papel', 'Plásticos'],
      status: 'Lotado',
      capacidade: '100%',
      coordenadas: '-23.6505, -46.6833'
    },
    {
      id: 3,
      nome: 'Ponto de Entrega Voluntária',
      tipo: 'pev',
      endereco: 'Shopping Center ABC',
      materiais: ['Eletrônicos', 'Pilhas', 'Óleo'],
      status: 'Disponível',
      capacidade: '45%',
      coordenadas: '-23.5105, -46.5933'
    }
  ];

  const sensoresIoT = [
    {
      id: 1,
      local: 'Container PET - Zona Norte',
      tipo: 'Nível de Enchimento',
      valor: '78%',
      status: 'Normal',
      ultimaLeitura: '2 min atrás'
    },
    {
      id: 2,
      local: 'Balança Cooperativa Verde',
      tipo: 'Peso Total',
      valor: '2.8 ton',
      status: 'Normal',
      ultimaLeitura: '5 min atrás'
    },
    {
      id: 3,
      local: 'Sensor de Qualidade - PET',
      tipo: 'Pureza do Material',
      valor: '94%',
      status: 'Excelente',
      ultimaLeitura: '1 min atrás'
    },
    {
      id: 4,
      local: 'GPS Caminhão Coleta',
      tipo: 'Localização',
      valor: 'Em rota',
      status: 'Ativo',
      ultimaLeitura: 'Tempo real'
    }
  ];

  const rotasOtimizadas = [
    {
      id: 1,
      nome: 'Rota Centro-Norte',
      pontos: 8,
      distancia: '24.5 km',
      tempoEstimado: '2h 15min',
      economia: 'R$ 180',
      co2Evitado: '12.5 kg'
    },
    {
      id: 2,
      nome: 'Rota Sul-Oeste',
      pontos: 12,
      distancia: '31.2 km',
      tempoEstimado: '2h 45min',
      economia: 'R$ 220',
      co2Evitado: '18.3 kg'
    },
    {
      id: 3,
      nome: 'Rota Cooperativas',
      pontos: 6,
      distancia: '18.7 km',
      tempoEstimado: '1h 50min',
      economia: 'R$ 150',
      co2Evitado: '9.8 kg'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-purple-600" />
            <span>Integração com Geotecnologias</span>
          </CardTitle>
          <CardDescription>
            GIS, GPS e IoT para otimização de transações locais e regionais
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mapa Interativo */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Layers className="h-5 w-5 text-blue-600" />
                  <span>Mapa de Densidade de Resíduos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant={tipoMapa === 'densidade' ? 'default' : 'outline'}
                      onClick={() => setTipoMapa('densidade')}
                    >
                      Densidade
                    </Button>
                    <Button
                      size="sm"
                      variant={tipoMapa === 'fluxo' ? 'default' : 'outline'}
                      onClick={() => setTipoMapa('fluxo')}
                    >
                      Fluxos
                    </Button>
                    <Button
                      size="sm"
                      variant={tipoMapa === 'pontos' ? 'default' : 'outline'}
                      onClick={() => setTipoMapa('pontos')}
                    >
                      Pontos
                    </Button>
                  </div>
                  
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative">
                    <MapPin className="h-16 w-16 text-gray-400" />
                    <div className="absolute top-4 left-4 text-sm">
                      <Badge className="bg-blue-600">São Paulo - SP</Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-600">
                      {tipoMapa === 'densidade' && 'Densidade de resíduos por região'}
                      {tipoMapa === 'fluxo' && 'Fluxos de materiais em tempo real'}
                      {tipoMapa === 'pontos' && 'Pontos de coleta e reciclagem'}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 bg-green-100 rounded">
                      <div className="w-3 h-3 bg-green-600 rounded-full mx-auto mb-1"></div>
                      <span>Alta densidade</span>
                    </div>
                    <div className="text-center p-2 bg-yellow-100 rounded">
                      <div className="w-3 h-3 bg-yellow-600 rounded-full mx-auto mb-1"></div>
                      <span>Média densidade</span>
                    </div>
                    <div className="text-center p-2 bg-red-100 rounded">
                      <div className="w-3 h-3 bg-red-600 rounded-full mx-auto mb-1"></div>
                      <span>Baixa densidade</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pontos de Coleta Próximos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Navigation className="h-5 w-5 text-green-600" />
                  <span>Pontos de Coleta Próximos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {pontosColeta.map((ponto) => (
                    <div key={ponto.id} className="border rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">{ponto.nome}</h4>
                        <Badge 
                          variant="outline"
                          className={
                            ponto.status === 'Ativo' ? 'text-green-600 border-green-600' :
                            ponto.status === 'Lotado' ? 'text-red-600 border-red-600' :
                            'text-blue-600 border-blue-600'
                          }
                        >
                          {ponto.status}
                        </Badge>
                      </div>
                      
                      <p className="text-xs text-gray-600 mb-2">{ponto.endereco}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-2">
                        {ponto.materiais.map((material) => (
                          <Badge key={material} variant="outline" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">Capacidade: {ponto.capacidade}</span>
                        <Button size="sm" variant="outline" className="text-xs h-6">
                          Navegar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Sensores IoT */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wifi className="h-6 w-6 text-blue-600" />
            <span>Monitoramento IoT em Tempo Real</span>
          </CardTitle>
          <CardDescription>
            Sensores inteligentes para monitoramento de estoques e qualidade
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sensoresIoT.map((sensor) => (
              <Card key={sensor.id} className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Wifi className="h-4 w-4 text-blue-600" />
                      <Badge 
                        variant="outline"
                        className={
                          sensor.status === 'Normal' || sensor.status === 'Ativo' ? 'text-green-600 border-green-600' :
                          sensor.status === 'Excelente' ? 'text-blue-600 border-blue-600' :
                          'text-orange-600 border-orange-600'
                        }
                      >
                        {sensor.status}
                      </Badge>
                    </div>
                    
                    <h4 className="font-medium text-sm">{sensor.local}</h4>
                    <p className="text-xs text-gray-600">{sensor.tipo}</p>
                    
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-blue-600">{sensor.valor}</div>
                      <div className="text-xs text-gray-500">{sensor.ultimaLeitura}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Rotas Otimizadas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Truck className="h-6 w-6 text-orange-600" />
            <span>Otimização Logística</span>
          </CardTitle>
          <CardDescription>
            Rotas inteligentes baseadas em análise espacial e GPS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rotasOtimizadas.map((rota) => (
              <Card key={rota.id} className="border-orange-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{rota.nome}</h4>
                      <Truck className="h-5 w-5 text-orange-600" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Pontos:</span>
                        <p className="font-medium">{rota.pontos}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Distância:</span>
                        <p className="font-medium">{rota.distancia}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Tempo:</span>
                        <p className="font-medium">{rota.tempoEstimado}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Economia:</span>
                        <p className="font-medium text-green-600">{rota.economia}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="text-xs text-gray-600">
                        CO2 evitado: <span className="text-green-600 font-medium">{rota.co2Evitado}</span>
                      </div>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        Usar Rota
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Análise Espacial */}
      <Card>
        <CardHeader>
          <CardTitle>Análise Espacial e Insights</CardTitle>
          <CardDescription>
            Dados geoespaciais para otimização de operações
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">847</p>
              <p className="text-sm text-blue-700">Pontos Mapeados</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Navigation className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">23%</p>
              <p className="text-sm text-green-700">Redução de Distância</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">45min</p>
              <p className="text-sm text-purple-700">Tempo Médio Economizado</p>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Wifi className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-orange-600">156</p>
              <p className="text-sm text-orange-700">Sensores Ativos</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeotecnologiasMarketplace;
