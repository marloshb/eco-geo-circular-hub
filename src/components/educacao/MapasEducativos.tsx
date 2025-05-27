
import React, { useState } from 'react';
import { Map, BarChart3, Leaf, Recycle, TrendingUp, Users, MapPin, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MapasEducativos = () => {
  const [selectedLayer, setSelectedLayer] = useState('pontos-coleta');
  const [selectedRegion, setSelectedRegion] = useState('brasil');

  const mapLayers = [
    { id: 'pontos-coleta', name: 'Pontos de Coleta', icon: MapPin, color: 'text-green-600' },
    { id: 'impacto-ambiental', name: 'Impacto Ambiental', icon: Leaf, color: 'text-blue-600' },
    { id: 'fluxos-residuos', name: 'Fluxos de Resíduos', icon: Recycle, color: 'text-purple-600' },
    { id: 'desempenho-regional', name: 'Desempenho Regional', icon: BarChart3, color: 'text-orange-600' }
  ];

  const regioes = [
    { id: 'brasil', name: 'Brasil', stats: { coleta: '68%', reciclagem: '3.4%', co2: '2.1M ton' } },
    { id: 'sudeste', name: 'Sudeste', stats: { coleta: '82%', reciclagem: '4.2%', co2: '890K ton' } },
    { id: 'nordeste', name: 'Nordeste', stats: { coleta: '59%', reciclagem: '2.8%', co2: '520K ton' } },
    { id: 'sul', name: 'Sul', stats: { coleta: '79%', reciclagem: '4.8%', co2: '380K ton' } },
    { id: 'norte', name: 'Norte', stats: { coleta: '52%', reciclagem: '2.1%', co2: '210K ton' } },
    { id: 'centro-oeste', name: 'Centro-Oeste', stats: { coleta: '71%', reciclagem: '3.6%', co2: '240K ton' } }
  ];

  const indicadores = [
    {
      id: 1,
      title: 'Taxa de Reciclagem',
      value: '3.4%',
      trend: '+0.8%',
      description: 'Percentual de resíduos sólidos efetivamente reciclados',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: Recycle
    },
    {
      id: 2,
      title: 'Cobertura de Coleta',
      value: '68%',
      trend: '+2.1%',
      description: 'População com acesso a coleta seletiva',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: Users
    },
    {
      id: 3,
      title: 'Redução de CO2',
      value: '2.1M ton',
      trend: '+5.4%',
      description: 'Emissões evitadas através da reciclagem',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: Leaf
    },
    {
      id: 4,
      title: 'Pontos de Coleta',
      value: '12,847',
      trend: '+847',
      description: 'Locais de coleta seletiva mapeados',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      icon: MapPin
    }
  ];

  const pontosColeta = [
    { tipo: 'Supermercados', quantidade: 3420, cobertura: '78%', icon: '🏪' },
    { tipo: 'Escolas', quantidade: 2150, cobertura: '45%', icon: '🏫' },
    { tipo: 'Condomínios', quantidade: 4890, cobertura: '62%', icon: '🏢' },
    { tipo: 'Praças Públicas', quantidade: 1240, cobertura: '34%', icon: '🌳' },
    { tipo: 'Cooperativas', quantidade: 890, cobertura: '89%', icon: '♻️' },
    { tipo: 'Empresas', quantidade: 1257, cobertura: '56%', icon: '🏭' }
  ];

  const fluxosResiduos = [
    { origem: 'Residencial', destino: 'Cooperativas', volume: '45%', tipo: 'Orgânicos e recicláveis' },
    { origem: 'Comercial', destino: 'Empresas de Reciclagem', volume: '23%', tipo: 'Papelão e plásticos' },
    { origem: 'Industrial', destino: 'Reprocessamento', volume: '18%', tipo: 'Metais e químicos' },
    { origem: 'Construção', destino: 'Britagem', volume: '14%', tipo: 'Entulho e concreto' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mapas Educativos Interativos</h2>
        <p className="text-gray-600 mb-6">
          Visualizações geoespaciais que mostram o impacto das práticas circulares, pontos de coleta 
          e fluxos de resíduos, promovendo conscientização e engajamento baseado em dados reais.
        </p>

        {/* Seletor de região */}
        <div className="flex flex-wrap gap-3 mb-6">
          {regioes.map((regiao) => (
            <Button
              key={regiao.id}
              variant={selectedRegion === regiao.id ? "default" : "outline"}
              onClick={() => setSelectedRegion(regiao.id)}
            >
              {regiao.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Indicadores principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {indicadores.map((indicador) => {
          const Icon = indicador.icon;
          
          return (
            <Card key={indicador.id} className={`${indicador.bgColor} border-0`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{indicador.value}</p>
                    <p className="text-sm text-gray-600">{indicador.title}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">{indicador.trend}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg bg-white`}>
                    <Icon className={`h-6 w-6 ${indicador.color}`} />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">{indicador.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Mapa interativo */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Mapa Interativo - {regioes.find(r => r.id === selectedRegion)?.name}</h3>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Camadas:</span>
              <div className="flex space-x-2">
                {mapLayers.map((layer) => {
                  const Icon = layer.icon;
                  return (
                    <Button
                      key={layer.id}
                      variant={selectedLayer === layer.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLayer(layer.id)}
                      className="flex items-center space-x-1"
                    >
                      <Icon className={`h-3 w-3 ${selectedLayer === layer.id ? 'text-white' : layer.color}`} />
                      <span className="hidden md:inline">{layer.name}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Área do mapa simulado */}
        <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 relative flex items-center justify-center">
          <div className="text-center">
            <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-700 mb-2">Mapa Interativo</h4>
            <p className="text-gray-600 max-w-md">
              Visualização GIS mostrando {mapLayers.find(l => l.id === selectedLayer)?.name.toLowerCase()} 
              na região {regioes.find(r => r.id === selectedRegion)?.name}
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-md mx-auto">
              {Object.entries(regioes.find(r => r.id === selectedRegion)?.stats || {}).map(([key, value]) => (
                <div key={key} className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-sm font-medium text-gray-900">{value}</div>
                  <div className="text-xs text-gray-600">
                    {key === 'coleta' && 'Cobertura'}
                    {key === 'reciclagem' && 'Reciclagem'}
                    {key === 'co2' && 'CO2 Evitado'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detalhes por camada */}
      <Tabs value={selectedLayer} onValueChange={setSelectedLayer} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          {mapLayers.map((layer) => {
            const Icon = layer.icon;
            return (
              <TabsTrigger key={layer.id} value={layer.id} className="flex items-center space-x-2">
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{layer.name}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value="pontos-coleta" className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Pontos de Coleta Seletiva</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pontosColeta.map((ponto, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{ponto.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{ponto.tipo}</h4>
                      <p className="text-sm text-gray-600">{ponto.quantidade} locais</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: ponto.cobertura }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600">{ponto.cobertura}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fluxos-residuos" className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Fluxos de Resíduos</h3>
          <div className="space-y-4">
            {fluxosResiduos.map((fluxo, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">{fluxo.origem}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="h-1 bg-gray-300 flex-1 rounded">
                            <div 
                              className="h-1 bg-purple-500 rounded" 
                              style={{ width: fluxo.volume }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{fluxo.volume}</span>
                        </div>
                        <p className="text-sm text-gray-600">{fluxo.tipo}</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-medium text-green-600">{fluxo.destino}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="impacto-ambiental" className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Impacto Ambiental</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <span>Redução de Emissões</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">CO2 evitado (reciclagem)</span>
                    <span className="font-medium">2.1M toneladas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Energia economizada</span>
                    <span className="font-medium">450 GWh</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Água poupada</span>
                    <span className="font-medium">12M m³</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  <span>Métricas de Circularidade</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Taxa de circularidade</span>
                    <span className="font-medium">12.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Materiais reutilizados</span>
                    <span className="font-medium">3.2M toneladas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Redução de aterros</span>
                    <span className="font-medium">28%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="desempenho-regional" className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Desempenho Regional</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regioes.filter(r => r.id !== 'brasil').map((regiao) => (
              <Card key={regiao.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{regiao.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Cobertura de coleta</span>
                      <span className="font-medium">{regiao.stats.coleta}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Taxa de reciclagem</span>
                      <span className="font-medium">{regiao.stats.reciclagem}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">CO2 evitado</span>
                      <span className="font-medium">{regiao.stats.co2}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Chamada para ação */}
      <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Explore Sua Região</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 mb-4">
              Use os mapas interativos para encontrar pontos de coleta próximos, 
              entender o impacto ambiental na sua região e descobrir oportunidades 
              de participação na economia circular.
            </p>
          </div>
          <div className="space-y-3">
            <Button className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700">
              <MapPin className="h-4 w-4 mr-2" />
              Encontrar Pontos de Coleta
            </Button>
            <Button variant="outline" className="w-full">
              <BarChart3 className="h-4 w-4 mr-2" />
              Ver Relatório Regional
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapasEducativos;
