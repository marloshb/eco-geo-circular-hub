
import React, { useState } from 'react';
import { Map, Layers, MapPin, Factory, Recycle, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MapeamentoEspacial = () => {
  const [camadaAtiva, setCamadaAtiva] = useState('todas');

  const pontosGeracao = [
    { id: 1, nome: 'Fábrica MetalTech', tipo: 'Indústria', residuos: 'Metais, Plásticos', localizacao: 'São Paulo - SP', volume: '2.5 ton/mês' },
    { id: 2, nome: 'Fazenda Verde', tipo: 'Agricultura', residuos: 'Orgânicos', localizacao: 'Ribeirão Preto - SP', volume: '8.2 ton/mês' },
    { id: 3, nome: 'Obra Sustentável', tipo: 'Construção', residuos: 'Entulho, Madeira', localizacao: 'Rio de Janeiro - RJ', volume: '15.7 ton/mês' }
  ];

  const pontosColeta = [
    { id: 1, nome: 'Cooperativa EcoUnidos', especialidade: 'Plásticos', capacidade: '5 ton', status: 'Ativo' },
    { id: 2, nome: 'Centro Reciclagem Verde', especialidade: 'Eletrônicos', capacidade: '3 ton', status: 'Ativo' },
    { id: 3, nome: 'Compostagem Urbana', especialidade: 'Orgânicos', capacidade: '10 ton', status: 'Lotado' }
  ];

  const camadas = [
    { id: 'geracao', nome: 'Pontos de Geração', cor: 'bg-red-500', count: 847 },
    { id: 'coleta', nome: 'Pontos de Coleta', cor: 'bg-green-500', count: 234 },
    { id: 'catadores', nome: 'Catadores Ativos', cor: 'bg-blue-500', count: 1256 },
    { id: 'rotas', nome: 'Rotas Otimizadas', cor: 'bg-purple-500', count: 89 }
  ];

  const setores = [
    { nome: 'Manufatura', pontos: 234, volume: '1.2K ton', eficiencia: '87%', cor: 'bg-indigo-100 text-indigo-800' },
    { nome: 'Agricultura', pontos: 156, volume: '2.8K ton', eficiencia: '92%', cor: 'bg-green-100 text-green-800' },
    { nome: 'Construção', pontos: 89, volume: '4.1K ton', eficiencia: '78%', cor: 'bg-orange-100 text-orange-800' },
    { nome: 'Varejo', pontos: 312, volume: '850 ton', eficiencia: '85%', cor: 'bg-purple-100 text-purple-800' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Map className="h-6 w-6 text-indigo-600" />
            <span>Mapeamento Espacial com GIS</span>
          </CardTitle>
          <CardDescription>
            Sistemas de Informação Geográfica para economia circular inteligente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Mapa Principal */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Mapa Interativo</h3>
                <div className="flex space-x-2">
                  <select 
                    value={camadaAtiva}
                    onChange={(e) => setCamadaAtiva(e.target.value)}
                    className="text-sm border rounded-md px-2 py-1"
                  >
                    <option value="todas">Todas as Camadas</option>
                    <option value="geracao">Pontos de Geração</option>
                    <option value="coleta">Pontos de Coleta</option>
                    <option value="catadores">Catadores</option>
                    <option value="rotas">Rotas</option>
                  </select>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="h-96 bg-gradient-to-br from-indigo-100 to-green-100 rounded-lg flex items-center justify-center relative">
                    <Map className="h-20 w-20 text-gray-400" />
                    <div className="absolute top-4 left-4 space-y-2">
                      {camadas.map((camada) => (
                        <div key={camada.id} className="flex items-center space-x-2 text-xs bg-white/80 rounded px-2 py-1">
                          <div className={`w-3 h-3 rounded-full ${camada.cor}`}></div>
                          <span>{camada.nome}</span>
                          <Badge variant="outline" className="text-xs">
                            {camada.count}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-600 bg-white/80 rounded px-2 py-1">
                      Visualização GIS - Economia Circular
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Visualizar Heatmap
                </Button>
                <Button variant="outline">
                  Exportar Dados
                </Button>
              </div>
            </div>

            {/* Controles e Informações */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Camadas Ativas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {camadas.map((camada) => (
                      <div key={camada.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${camada.cor}`}></div>
                          <span className="text-sm">{camada.nome}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {camada.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Análise Espacial</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-lg font-bold text-green-600">87%</p>
                      <p className="text-xs text-green-700">Cobertura Ótima</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-lg font-bold text-blue-600">2.3 km</p>
                      <p className="text-xs text-blue-700">Distância Média</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <p className="text-lg font-bold text-purple-600">45</p>
                      <p className="text-xs text-purple-700">Conexões Ativas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pontos de Geração */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Factory className="h-6 w-6 text-red-600" />
            <span>Pontos de Geração de Resíduos</span>
          </CardTitle>
          <CardDescription>
            Locais onde resíduos são gerados nos diferentes setores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pontosGeracao.map((ponto) => (
              <Card key={ponto.id} className="border-red-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{ponto.nome}</h4>
                      <Badge className="bg-red-100 text-red-800">
                        {ponto.tipo}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Resíduos:</span>
                        <p className="font-medium">{ponto.residuos}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Local:</span>
                        <p className="font-medium">{ponto.localizacao}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Volume:</span>
                        <p className="font-medium text-red-600">{ponto.volume}</p>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-red-600 hover:bg-red-700" size="sm">
                      <MapPin className="h-3 w-3 mr-1" />
                      Ver no Mapa
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pontos de Coleta */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Recycle className="h-6 w-6 text-green-600" />
            <span>Rede de Coleta e Reciclagem</span>
          </CardTitle>
          <CardDescription>
            Cooperativas, centros de reciclagem e pontos de coleta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pontosColeta.map((ponto) => (
              <Card key={ponto.id} className="border-green-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{ponto.nome}</h4>
                      <Badge 
                        variant="outline"
                        className={
                          ponto.status === 'Ativo' ? 'text-green-600 border-green-600' :
                          'text-orange-600 border-orange-600'
                        }
                      >
                        {ponto.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Especialidade:</span>
                        <p className="font-medium">{ponto.especialidade}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Capacidade:</span>
                        <p className="font-medium text-green-600">{ponto.capacidade}</p>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
                      <Truck className="h-3 w-3 mr-1" />
                      Conectar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Análise por Setor */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Layers className="h-6 w-6 text-purple-600" />
            <span>Análise por Setor Econômico</span>
          </CardTitle>
          <CardDescription>
            Distribuição e performance da economia circular por setor
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {setores.map((setor, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <Badge className={`mb-3 ${setor.cor}`}>
                    {setor.nome}
                  </Badge>
                  <div className="space-y-2">
                    <div>
                      <p className="text-2xl font-bold">{setor.pontos}</p>
                      <p className="text-xs text-gray-600">Pontos Ativos</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-green-600">{setor.volume}</p>
                      <p className="text-xs text-gray-600">Volume Mensal</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-blue-600">{setor.eficiencia}</p>
                      <p className="text-xs text-gray-600">Eficiência</p>
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

export default MapeamentoEspacial;
