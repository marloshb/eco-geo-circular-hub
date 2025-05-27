
import React, { useState } from 'react';
import { Map, Layers, BarChart, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MapSection = () => {
  const [activeLayer, setActiveLayer] = useState('residuos');

  const mapLayers = [
    { id: 'residuos', name: 'Pontos de Resíduos', color: 'bg-red-500', count: '12.5K' },
    { id: 'reciclagem', name: 'Centros de Reciclagem', color: 'bg-green-500', count: '3.2K' },
    { id: 'catadores', name: 'Catadores Ativos', color: 'bg-blue-500', count: '8.7K' },
    { id: 'rotas', name: 'Rotas Otimizadas', color: 'bg-purple-500', count: '450' }
  ];

  const regionStats = [
    { region: 'Sudeste', recycling: 85, waste: 45, social: 78 },
    { region: 'Sul', recycling: 80, waste: 42, social: 72 },
    { region: 'Nordeste', recycling: 65, waste: 38, social: 85 },
    { region: 'Centro-Oeste', recycling: 70, waste: 40, social: 68 },
    { region: 'Norte', recycling: 55, waste: 35, social: 90 }
  ];

  return (
    <section id="mapa" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mapeamento Nacional da Economia Circular
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize em tempo real os fluxos de materiais, pontos de coleta e oportunidades 
            circulares em todo o território brasileiro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mapa Principal */}
          <div className="lg:col-span-2">
            <Card className="h-96 lg:h-[500px] overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Map className="h-5 w-5 text-green-600" />
                    <span>Mapa Interativo</span>
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Layers className="h-4 w-4 mr-1" />
                      Camadas
                    </Button>
                    <Button size="sm" variant="outline">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 h-full">
                {/* Simulação do Mapa */}
                <div className="relative w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 400 300" className="w-full h-full">
                      {/* Simulação do contorno do Brasil */}
                      <path
                        d="M100 50 Q150 40 200 60 Q250 45 300 70 Q320 100 310 150 Q300 200 280 230 Q250 250 200 245 Q150 240 120 220 Q90 190 85 150 Q80 100 100 50"
                        fill="rgba(34, 197, 94, 0.3)"
                        stroke="rgba(34, 197, 94, 0.8)"
                        strokeWidth="2"
                      />
                      {/* Pontos de dados */}
                      <circle cx="150" cy="100" r="4" fill="#ef4444" />
                      <circle cx="200" cy="120" r="3" fill="#22c55e" />
                      <circle cx="180" cy="140" r="3" fill="#3b82f6" />
                      <circle cx="220" cy="160" r="4" fill="#8b5cf6" />
                      <circle cx="160" cy="180" r="3" fill="#ef4444" />
                      <circle cx="240" cy="140" r="3" fill="#22c55e" />
                    </svg>
                  </div>
                  <div className="text-center z-10">
                    <Map className="h-16 w-16 text-green-600 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-semibold text-gray-700">Mapa Interativo do Brasil</p>
                    <p className="text-sm text-gray-500">Dados em tempo real da economia circular</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Controles de Camadas */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Camadas do Mapa</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {mapLayers.map((layer) => (
                  <Button
                    key={layer.id}
                    variant={activeLayer === layer.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveLayer(layer.id)}
                    className="flex items-center justify-between p-3 h-auto"
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${layer.color}`}></div>
                      <span className="text-xs font-medium">{layer.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {layer.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Estatísticas Regionais */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart className="h-5 w-5 text-blue-600" />
                  <span>Estatísticas por Região</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {regionStats.map((region, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">{region.region}</span>
                      <Badge variant="outline">{Math.round((region.recycling + region.social) / 2)}% circular</Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Reciclagem</span>
                        <span className="font-medium">{region.recycling}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${region.recycling}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Inclusão Social</span>
                        <span className="font-medium">{region.social}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${region.social}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dados em Tempo Real</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Materiais Coletados Hoje</span>
                  <span className="text-2xl font-bold text-green-600">847 ton</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Catadores Ativos</span>
                  <span className="text-2xl font-bold text-blue-600">2.134</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">CO₂ Evitado</span>
                  <span className="text-2xl font-bold text-purple-600">1.2K kg</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
