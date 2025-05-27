
import React, { useState } from 'react';
import { TrendingUp, Brain, Target, Lightbulb, BarChart3, PieChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const AnalyticsCircular = () => {
  const [selectedAnalysis, setSelectedAnalysis] = useState('preditiva');

  const previsaoResiduos = [
    { mes: 'Jan', real: 120, previsto: 118 },
    { mes: 'Fev', real: 135, previsto: 132 },
    { mes: 'Mar', real: 142, previsto: 145 },
    { mes: 'Abr', real: 128, previsto: 130 },
    { mes: 'Mai', real: 156, previsto: 152 },
    { mes: 'Jun', real: null, previsto: 160 },
    { mes: 'Jul', real: null, previsto: 165 },
    { mes: 'Ago', real: null, previsto: 158 }
  ];

  const impactoAmbiental = [
    { categoria: 'Redução CO2', atual: 342, meta: 400, unidade: 'tCO2e' },
    { categoria: 'Economia Água', atual: 15420, meta: 18000, unidade: 'm³' },
    { categoria: 'Energia Renovável', atual: 68, meta: 80, unidade: '%' },
    { categoria: 'Resíduos Evitados', atual: 245, meta: 300, unidade: 'toneladas' }
  ];

  const benchmarkSetor = [
    { metrica: 'Taxa de Reciclagem', empresa: 87.3, media: 72.5, lider: 91.2 },
    { metrica: 'Circularidade', empresa: 68, media: 55, lider: 78 },
    { metrica: 'Eficiência Energética', empresa: 82, media: 76, lider: 88 },
    { metrica: 'Inclusão Social', empresa: 12, media: 8, lider: 18 }
  ];

  const oportunidades = [
    {
      id: 1,
      titulo: 'Redução de Embalagens Plásticas',
      impacto: 'Alto',
      economia: 'R$ 45.000/ano',
      complexidade: 'Média',
      prazo: '6 meses',
      descricao: 'Substituição por embalagens biodegradáveis reduziria 15% dos resíduos'
    },
    {
      id: 2,
      titulo: 'Programa de Reuso de Componentes',
      impacto: 'Médio',
      economia: 'R$ 28.000/ano',
      complexidade: 'Alta',
      prazo: '12 meses',
      descricao: 'Implementar sistema de recuperação e reuso de componentes eletrônicos'
    },
    {
      id: 3,
      titulo: 'Otimização de Rotas de Coleta',
      impacto: 'Médio',
      economia: 'R$ 18.500/ano',
      complexidade: 'Baixa',
      prazo: '3 meses',
      descricao: 'IA para otimizar rotas reduziria 20% dos custos logísticos'
    }
  ];

  const getImpactColor = (impacto: string) => {
    switch (impacto) {
      case 'Alto':
        return 'bg-green-100 text-green-800';
      case 'Médio':
        return 'bg-yellow-100 text-yellow-800';
      case 'Baixo':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplexityColor = (complexidade: string) => {
    switch (complexidade) {
      case 'Baixa':
        return 'bg-green-100 text-green-800';
      case 'Média':
        return 'bg-yellow-100 text-yellow-800';
      case 'Alta':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Circular</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Brain className="h-4 w-4 mr-2" />
            IA Insights
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Target className="h-4 w-4 mr-2" />
            Configurar Metas
          </Button>
        </div>
      </div>

      <Tabs value={selectedAnalysis} onValueChange={setSelectedAnalysis} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="preditiva">Análise Preditiva</TabsTrigger>
          <TabsTrigger value="impacto">Impacto Ambiental</TabsTrigger>
          <TabsTrigger value="benchmark">Benchmark</TabsTrigger>
          <TabsTrigger value="oportunidades">Oportunidades</TabsTrigger>
        </TabsList>

        <TabsContent value="preditiva" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span>Previsão de Geração de Resíduos</span>
              </CardTitle>
              <CardDescription>
                Modelo preditivo baseado em machine learning para os próximos 3 meses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={previsaoResiduos}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="real" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    name="Real"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="previsto" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Previsto"
                  />
                </LineChart>
              </ResponsiveContainer>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900">Próximo Mês</h4>
                  <p className="text-2xl font-bold text-blue-600">160 ton</p>
                  <p className="text-sm text-blue-700">+2.6% vs mês atual</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-900">Precisão do Modelo</h4>
                  <p className="text-2xl font-bold text-green-600">94.2%</p>
                  <p className="text-sm text-green-700">Últimos 12 meses</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-900">Economia Projetada</h4>
                  <p className="text-2xl font-bold text-purple-600">R$ 38K</p>
                  <p className="text-sm text-purple-700">Com otimizações</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Demanda por Materiais</CardTitle>
                <CardDescription>Previsão baseada no marketplace</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Plásticos PET</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={85} className="w-20 h-2" />
                      <span className="text-sm font-medium">Alta</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Papel Branco</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={65} className="w-20 h-2" />
                      <span className="text-sm font-medium">Média</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Metais Ferrosos</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={92} className="w-20 h-2" />
                      <span className="text-sm font-medium">Muito Alta</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Madeira</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={40} className="w-20 h-2" />
                      <span className="text-sm font-medium">Baixa</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alertas Preditivos</CardTitle>
                <CardDescription>Notificações baseadas em IA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Aumento de resíduos previsto</p>
                      <p className="text-xs text-gray-600">Próxima semana: +15% em plásticos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Oportunidade de venda</p>
                      <p className="text-xs text-gray-600">3 novos compradores de PET na região</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Otimização sugerida</p>
                      <p className="text-xs text-gray-600">Rota de coleta pode ser 20% mais eficiente</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="impacto" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactoAmbiental.map((item, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-gray-600">{item.categoria}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-end space-x-2">
                        <span className="text-2xl font-bold text-gray-900">{item.atual.toLocaleString()}</span>
                        <span className="text-sm text-gray-500">{item.unidade}</span>
                      </div>
                      <p className="text-sm text-gray-500">Meta: {item.meta.toLocaleString()} {item.unidade}</p>
                    </div>
                    <Progress value={(item.atual / item.meta) * 100} className="h-2" />
                    <p className="text-xs text-gray-500">
                      {((item.atual / item.meta) * 100).toFixed(1)}% da meta atingida
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Evolução do Impacto Ambiental</CardTitle>
              <CardDescription>Tendência dos últimos 12 meses</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={[
                  { mes: 'Jan', co2: 280, agua: 12000, energia: 58 },
                  { mes: 'Fev', co2: 295, agua: 13200, energia: 62 },
                  { mes: 'Mar', co2: 310, agua: 14100, energia: 64 },
                  { mes: 'Abr', co2: 318, agua: 14800, energia: 66 },
                  { mes: 'Mai', co2: 330, agua: 15200, energia: 68 },
                  { mes: 'Jun', co2: 342, agua: 15420, energia: 68 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="co2" stackId="1" stroke="#3B82F6" fill="#3B82F6" opacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benchmark" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comparação Setorial</CardTitle>
              <CardDescription>
                Sua performance vs média do setor e líderes de mercado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {benchmarkSetor.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-gray-900">{item.metrica}</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Sua Empresa</p>
                        <p className="text-xl font-bold text-blue-600">{item.empresa}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Média do Setor</p>
                        <p className="text-xl font-bold text-gray-600">{item.media}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Líder de Mercado</p>
                        <p className="text-xl font-bold text-green-600">{item.lider}%</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(item.empresa / item.lider) * 100}%` }}
                        ></div>
                      </div>
                      <div 
                        className="absolute top-0 w-1 h-2 bg-gray-400"
                        style={{ left: `${(item.media / item.lider) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="oportunidades" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {oportunidades.map((oportunidade) => (
              <Card key={oportunidade.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{oportunidade.titulo}</CardTitle>
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                  </div>
                  <CardDescription>{oportunidade.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Impacto</p>
                        <Badge className={getImpactColor(oportunidade.impacto)}>
                          {oportunidade.impacto}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Complexidade</p>
                        <Badge className={getComplexityColor(oportunidade.complexidade)}>
                          {oportunidade.complexidade}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Economia Anual</p>
                        <p className="font-bold text-green-600">{oportunidade.economia}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Prazo de Implementação</p>
                        <p className="font-medium">{oportunidade.prazo}</p>
                      </div>
                    </div>

                    <Button className="w-full" size="sm">
                      Analisar Oportunidade
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  IA Personalizada para sua Empresa
                </h3>
                <p className="text-purple-700 mb-4">
                  Configure análises personalizadas com base nos seus objetivos específicos
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Brain className="h-4 w-4 mr-2" />
                  Configurar IA
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsCircular;
