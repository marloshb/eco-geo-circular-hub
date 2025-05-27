
import React, { useState } from 'react';
import { Route, Clock, Fuel, MapPin, Truck, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PlanejamentoRotas = () => {
  const [rotaSelecionada, setRotaSelecionada] = useState('rota1');

  const rotasOtimizadas = [
    {
      id: 'rota1',
      nome: 'Rota Centro-Norte',
      tipo: 'Veículo Comercial',
      distancia: '47.2 km',
      tempo: '2h 35min',
      pontos: 12,
      economia: '23%',
      combustivel: '8.4L',
      co2Evitado: '18.5 kg',
      status: 'Ativa'
    },
    {
      id: 'rota2',
      nome: 'Rota Cooperativas Sul',
      tipo: 'Carrinho + Bicicleta',
      distancia: '12.8 km',
      tempo: '3h 15min',
      pontos: 8,
      economia: '35%',
      combustivel: '0L',
      co2Evitado: '15.2 kg',
      status: 'Planejada'
    },
    {
      id: 'rota3',
      nome: 'Rota Industrial',
      tipo: 'Caminhão Pesado',
      distancia: '89.6 km',
      tempo: '4h 20min',
      pontos: 6,
      economia: '18%',
      combustivel: '28.7L',
      co2Evitado: '45.3 kg',
      status: 'Em Execução'
    }
  ];

  const algoritmos = [
    {
      nome: 'Algoritmo Genético',
      descricao: 'Otimização evolutiva para rotas complexas',
      eficiencia: '94%',
      aplicacao: 'Rotas multi-ponto'
    },
    {
      nome: 'Dijkstra Adaptativo',
      descricao: 'Menor caminho com condições dinâmicas',
      eficiencia: '91%',
      aplicacao: 'Trânsito em tempo real'
    },
    {
      nome: 'Machine Learning',
      descricao: 'Aprendizado contínuo de padrões',
      eficiencia: '96%',
      aplicacao: 'Previsão de demanda'
    }
  ];

  const modais = [
    {
      tipo: 'Veículo Comercial',
      capacidade: '2.5 ton',
      alcance: '200 km',
      custo: 'R$ 0.85/km',
      ideal: 'Coletas urbanas médias'
    },
    {
      tipo: 'Carrinho de Catador',
      capacidade: '150 kg',
      alcance: '15 km',
      custo: 'R$ 0.05/km',
      ideal: 'Coletas locais'
    },
    {
      tipo: 'Bicicleta Cargo',
      capacidade: '80 kg',
      alcance: '25 km',
      custo: 'R$ 0.02/km',
      ideal: 'Áreas densas'
    },
    {
      tipo: 'Caminhão Pesado',
      capacidade: '15 ton',
      alcance: '500 km',
      custo: 'R$ 2.10/km',
      ideal: 'Grandes volumes'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Route className="h-6 w-6 text-blue-600" />
            <span>Planejamento de Rotas Inteligentes</span>
          </CardTitle>
          <CardDescription>
            Algoritmos avançados de otimização para máxima eficiência logística
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Lista de Rotas */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Rotas Otimizadas</h3>
              {rotasOtimizadas.map((rota) => (
                <Card 
                  key={rota.id}
                  className={`cursor-pointer transition-all ${
                    rotaSelecionada === rota.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setRotaSelecionada(rota.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">{rota.nome}</h4>
                        <p className="text-sm text-gray-600">{rota.tipo}</p>
                      </div>
                      <Badge 
                        variant="outline"
                        className={
                          rota.status === 'Ativa' ? 'text-green-600 border-green-600' :
                          rota.status === 'Em Execução' ? 'text-blue-600 border-blue-600' :
                          'text-orange-600 border-orange-600'
                        }
                      >
                        {rota.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3 text-gray-500" />
                        <span>{rota.distancia}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 text-gray-500" />
                        <span>{rota.tempo}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Truck className="h-3 w-3 text-gray-500" />
                        <span>{rota.pontos} pontos</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Fuel className="h-3 w-3 text-green-600" />
                        <span className="text-green-600">-{rota.economia}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t text-xs text-gray-600">
                      Combustível: {rota.combustivel} | CO₂ evitado: {rota.co2Evitado}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Visualização da Rota */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Visualização da Rota</h3>
              <Card>
                <CardContent className="p-4">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative">
                    <Route className="h-16 w-16 text-gray-400" />
                    <div className="absolute top-4 left-4 text-sm">
                      <Badge className="bg-blue-600">
                        {rotasOtimizadas.find(r => r.id === rotaSelecionada)?.nome}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-600">
                      Mapa interativo com pontos de coleta otimizados
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Executar Rota
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        Ajustar Rota
                      </Button>
                      <Button variant="outline" size="sm">
                        Compartilhar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Algoritmos de Otimização */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-purple-600" />
            <span>Algoritmos de Otimização</span>
          </CardTitle>
          <CardDescription>
            Técnicas avançadas de inteligência artificial para planejamento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {algoritmos.map((algoritmo, index) => (
              <Card key={index} className="border-purple-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{algoritmo.nome}</h4>
                      <Badge className="bg-purple-100 text-purple-800">
                        {algoritmo.eficiencia}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600">{algoritmo.descricao}</p>
                    
                    <div className="pt-2 border-t">
                      <p className="text-xs text-gray-500">
                        <strong>Aplicação:</strong> {algoritmo.aplicacao}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Modais de Transporte */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Truck className="h-6 w-6 text-green-600" />
            <span>Modais de Transporte</span>
          </CardTitle>
          <CardDescription>
            Opções otimizadas para diferentes tipos de coleta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {modais.map((modal, index) => (
              <Card key={index} className="border-green-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="text-center">
                      <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-sm">{modal.tipo}</h4>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Capacidade:</span>
                        <span className="font-medium">{modal.capacidade}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Alcance:</span>
                        <span className="font-medium">{modal.alcance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Custo:</span>
                        <span className="font-medium text-green-600">{modal.custo}</span>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <p className="text-xs text-gray-500">
                        <strong>Ideal para:</strong> {modal.ideal}
                      </p>
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

export default PlanejamentoRotas;
