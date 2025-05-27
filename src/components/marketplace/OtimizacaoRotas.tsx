
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Truck, Clock, Fuel, Route, Calculator, TrendingDown, Navigation } from 'lucide-react';

const OtimizacaoRotas = () => {
  const [rotaOtimizada, setRotaOtimizada] = useState(false);

  const pontos = [
    { id: 1, nome: 'EcoPlast Indústria', endereco: 'Av. Paulista, 1000', tipo: 'Coleta', material: 'PET - 2 ton', prioridade: 'Alta' },
    { id: 2, nome: 'Metalúrgica XYZ', endereco: 'R. Industrial, 500', tipo: 'Coleta', material: 'Alumínio - 800kg', prioridade: 'Média' },
    { id: 3, nome: 'Gráfica Digital', endereco: 'R. Comercial, 200', tipo: 'Coleta', material: 'Papel - 1.5 ton', prioridade: 'Baixa' },
    { id: 4, nome: 'Centro de Reciclagem Norte', endereco: 'Av. Norte, 1500', tipo: 'Entrega', material: 'Diversos', prioridade: 'Alta' },
    { id: 5, nome: 'Usina de Compostagem', endereco: 'R. Verde, 300', tipo: 'Entrega', material: 'Orgânicos', prioridade: 'Média' }
  ];

  const veiculos = [
    { id: 1, tipo: 'Caminhão Grande', capacidade: '15 ton', combustivel: '35L/100km', disponivel: true },
    { id: 2, tipo: 'Caminhão Médio', capacidade: '8 ton', combustivel: '25L/100km', disponivel: true },
    { id: 3, tipo: 'Van Comercial', capacidade: '2 ton', combustivel: '12L/100km', disponivel: false }
  ];

  const rotaPadrao = {
    distancia: '127 km',
    tempo: '4h 35min',
    combustivel: '42.5L',
    custo: 'R$ 350.00',
    co2: '98.5 kg'
  };

  const rotaOtima = {
    distancia: '89 km',
    tempo: '2h 48min',
    combustivel: '28.7L',
    custo: 'R$ 235.00',
    co2: '66.2 kg'
  };

  const economia = {
    distancia: '30%',
    tempo: '39%',
    combustivel: '32%',
    custo: '33%',
    co2: '33%'
  };

  const otimizarRota = () => {
    setRotaOtimizada(true);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Route className="h-6 w-6 text-blue-600" />
            <span>Otimização Logística de Rotas Complexas</span>
          </CardTitle>
          <CardDescription>
            Sistema avançado para múltiplas retiradas e múltiplos veículos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="configuracao" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="configuracao">Configuração</TabsTrigger>
              <TabsTrigger value="otimizacao">Otimização</TabsTrigger>
              <TabsTrigger value="resultados">Resultados</TabsTrigger>
              <TabsTrigger value="execucao">Execução</TabsTrigger>
            </TabsList>

            <TabsContent value="configuracao" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pontos de Coleta/Entrega */}
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span>Pontos de Coleta e Entrega</span>
                  </h3>
                  
                  <div className="space-y-2">
                    {pontos.map((ponto) => (
                      <div key={ponto.id} className="border rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{ponto.nome}</h4>
                          <div className="flex space-x-2">
                            <Badge variant={ponto.tipo === 'Coleta' ? 'default' : 'secondary'}>
                              {ponto.tipo}
                            </Badge>
                            <Badge variant={
                              ponto.prioridade === 'Alta' ? 'destructive' :
                              ponto.prioridade === 'Média' ? 'default' : 'secondary'
                            }>
                              {ponto.prioridade}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{ponto.endereco}</p>
                        <p className="text-sm font-medium">{ponto.material}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frota Disponível */}
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <span>Frota Disponível</span>
                  </h3>
                  
                  <div className="space-y-2">
                    {veiculos.map((veiculo) => (
                      <div key={veiculo.id} className={`border rounded-lg p-3 ${
                        veiculo.disponivel ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{veiculo.tipo}</h4>
                          <Badge variant={veiculo.disponivel ? 'default' : 'secondary'}>
                            {veiculo.disponivel ? 'Disponível' : 'Em uso'}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-600">Capacidade:</span>
                            <span className="ml-1 font-medium">{veiculo.capacidade}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Consumo:</span>
                            <span className="ml-1 font-medium">{veiculo.combustivel}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="otimizacao" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Algoritmos de Otimização */}
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center space-x-2">
                    <Calculator className="h-5 w-5 text-purple-600" />
                    <span>Algoritmos Aplicados</span>
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="border rounded-lg p-4 bg-purple-50">
                      <h4 className="font-medium text-purple-900">Algoritmo Genético</h4>
                      <p className="text-sm text-purple-700 mt-1">
                        Otimização evolutiva para múltiplos veículos e restrições complexas
                      </p>
                      <Badge className="mt-2 bg-purple-100 text-purple-800">95% eficiência</Badge>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-blue-50">
                      <h4 className="font-medium text-blue-900">Heurística Clarke-Wright</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Economia de distância através de agrupamento inteligente
                      </p>
                      <Badge className="mt-2 bg-blue-100 text-blue-800">92% eficiência</Badge>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-green-50">
                      <h4 className="font-medium text-green-900">Machine Learning</h4>
                      <p className="text-sm text-green-700 mt-1">
                        Aprendizado baseado em padrões históricos de tráfego
                      </p>
                      <Badge className="mt-2 bg-green-100 text-green-800">97% eficiência</Badge>
                    </div>
                  </div>
                </div>

                {/* Parâmetros de Otimização */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Parâmetros de Otimização</h3>
                  
                  <div className="space-y-3">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-3">Critérios Priorizados</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Menor Distância</span>
                          <Badge>40%</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Menor Tempo</span>
                          <Badge>30%</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Menor Consumo</span>
                          <Badge>20%</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Prioridade Coletas</span>
                          <Badge>10%</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-3">Restrições Aplicadas</h4>
                      <div className="space-y-1 text-sm">
                        <p>✓ Capacidade máxima dos veículos</p>
                        <p>✓ Janelas de tempo para coleta</p>
                        <p>✓ Prioridade por tipo de material</p>
                        <p>✓ Condições de trânsito em tempo real</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button 
                  onClick={otimizarRota}
                  className="bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Executar Otimização
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="resultados" className="space-y-4">
              {rotaOtimizada ? (
                <div className="space-y-6">
                  {/* Comparação de Rotas */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="border-gray-300">
                      <CardHeader>
                        <CardTitle className="text-lg text-gray-700">Rota Padrão</CardTitle>
                        <CardDescription>Sequência convencional de coletas</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Distância Total:</span>
                            <span className="font-medium">{rotaPadrao.distancia}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tempo Total:</span>
                            <span className="font-medium">{rotaPadrao.tempo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Combustível:</span>
                            <span className="font-medium">{rotaPadrao.combustivel}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Custo Total:</span>
                            <span className="font-medium">{rotaPadrao.custo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Emissão CO₂:</span>
                            <span className="font-medium">{rotaPadrao.co2}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-green-300 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-lg text-green-700">Rota Otimizada</CardTitle>
                        <CardDescription>Sequência inteligente otimizada</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Distância Total:</span>
                            <span className="font-medium text-green-700">{rotaOtima.distancia}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tempo Total:</span>
                            <span className="font-medium text-green-700">{rotaOtima.tempo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Combustível:</span>
                            <span className="font-medium text-green-700">{rotaOtima.combustivel}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Custo Total:</span>
                            <span className="font-medium text-green-700">{rotaOtima.custo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Emissão CO₂:</span>
                            <span className="font-medium text-green-700">{rotaOtima.co2}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Economia Gerada */}
                  <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <TrendingDown className="h-6 w-6 text-green-600" />
                        <span>Economia Gerada pela Otimização</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{economia.distancia}</div>
                          <div className="text-sm text-gray-600">Distância</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{economia.tempo}</div>
                          <div className="text-sm text-gray-600">Tempo</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{economia.combustivel}</div>
                          <div className="text-sm text-gray-600">Combustível</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{economia.custo}</div>
                          <div className="text-sm text-gray-600">Custo</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{economia.co2}</div>
                          <div className="text-sm text-gray-600">CO₂</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Route className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Execute a otimização para ver os resultados</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="execucao" className="space-y-4">
              {rotaOtimizada ? (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Rota Otimizada Calculada</h3>
                    <p className="text-blue-700 text-sm">
                      A rota foi otimizada considerando múltiplos veículos e pontos de coleta.
                      Clique em "Iniciar Execução" para começar as operações.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Sequência de Execução</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                          <Badge>1</Badge>
                          <div>
                            <p className="font-medium">Caminhão Grande → EcoPlast Indústria</p>
                            <p className="text-sm text-gray-600">Coleta: PET - 2 ton</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                          <Badge>2</Badge>
                          <div>
                            <p className="font-medium">Caminhão Médio → Metalúrgica XYZ</p>
                            <p className="text-sm text-gray-600">Coleta: Alumínio - 800kg</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                          <Badge>3</Badge>
                          <div>
                            <p className="font-medium">Caminhão Grande → Centro Reciclagem</p>
                            <p className="text-sm text-gray-600">Entrega: Materiais processados</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Monitoramento em Tempo Real</h4>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Caminhão Grande</span>
                            <Badge className="bg-green-100 text-green-800">Em rota</Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Navigation className="h-4 w-4" />
                            <span>ETA: 15min para EcoPlast</span>
                          </div>
                        </div>
                        <div className="border rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Caminhão Médio</span>
                            <Badge className="bg-blue-100 text-blue-800">Aguardando</Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>Próxima coleta em 45min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Navigation className="h-4 w-4 mr-2" />
                      Iniciar Execução
                    </Button>
                    <Button variant="outline">
                      Ajustar Rota
                    </Button>
                    <Button variant="outline">
                      Simular Novamente
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Navigation className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Execute a otimização primeiro para ver a execução</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default OtimizacaoRotas;
