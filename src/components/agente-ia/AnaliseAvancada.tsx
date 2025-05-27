
import React, { useState } from 'react';
import { Brain, Database, Map, Activity, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const AnaliseAvancada = () => {
  const [selectedModel, setSelectedModel] = useState('predicao');

  const modelosIA = [
    {
      id: 'predicao',
      nome: 'Predição de Resíduos',
      precisao: 94.2,
      tipo: 'Regressão',
      status: 'Ativo',
      ultimaAtualizacao: '2 horas atrás'
    },
    {
      id: 'classificacao',
      nome: 'Classificação de Materiais',
      precisao: 97.8,
      tipo: 'Classificação',
      status: 'Ativo',
      ultimaAtualizacao: '1 hora atrás'
    },
    {
      id: 'otimizacao',
      nome: 'Otimização de Rotas',
      precisao: 89.6,
      tipo: 'Otimização',
      status: 'Treinando',
      ultimaAtualizacao: '30 min atrás'
    },
    {
      id: 'nlp',
      nome: 'Análise de Feedback',
      precisao: 91.4,
      tipo: 'PLN',
      status: 'Ativo',
      ultimaAtualizacao: '15 min atrás'
    }
  ];

  const dadosPredicao = [
    { mes: 'Jan', real: 120, previsto: 118, confianca: 95 },
    { mes: 'Fev', real: 135, previsto: 132, confianca: 93 },
    { mes: 'Mar', real: 142, previsto: 145, confianca: 96 },
    { mes: 'Abr', real: 128, previsto: 130, confianca: 94 },
    { mes: 'Mai', real: 156, previsto: 152, confianca: 97 },
    { mes: 'Jun', real: null, previsto: 160, confianca: 92 }
  ];

  const padroesMateriais = [
    { material: 'Plásticos', volume: 35, tendencia: '+5.2%', cor: '#3B82F6' },
    { material: 'Papel', volume: 28, tendencia: '+2.8%', cor: '#10B981' },
    { material: 'Metais', volume: 18, tendencia: '+8.1%', cor: '#F59E0B' },
    { material: 'Orgânicos', volume: 12, tendencia: '-1.5%', cor: '#8B5CF6' },
    { material: 'Vidro', volume: 7, tendencia: '+3.4%', cor: '#EF4444' }
  ];

  const insightsIA = [
    {
      categoria: 'Padrão Detectado',
      descricao: 'Aumento de 15% em resíduos plásticos nas manhãs de segunda-feira',
      confianca: 96,
      acao: 'Otimizar coletas segunda pela manhã',
      impacto: 'Alto'
    },
    {
      categoria: 'Anomalia',
      descricao: 'Redução súbita de 30% em coletas na Zona Sul',
      confianca: 89,
      acao: 'Investigar e realocar recursos',
      impacto: 'Médio'
    },
    {
      categoria: 'Oportunidade',
      descricao: 'Demanda crescente por papel reciclado no setor editorial',
      confianca: 92,
      acao: 'Expandir coleta de papel',
      impacto: 'Alto'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo':
        return 'bg-green-100 text-green-800';
      case 'Treinando':
        return 'bg-yellow-100 text-yellow-800';
      case 'Inativo':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impacto: string) => {
    switch (impacto) {
      case 'Alto':
        return 'border-green-500 bg-green-50';
      case 'Médio':
        return 'border-yellow-500 bg-yellow-50';
      case 'Baixo':
        return 'border-blue-500 bg-blue-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Análise Avançada com IA</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Database className="h-4 w-4 mr-2" />
            Treinar Modelo
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Brain className="h-4 w-4 mr-2" />
            Configurar IA
          </Button>
        </div>
      </div>

      {/* Modelos de IA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modelosIA.map((modelo) => (
          <Card key={modelo.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Brain className="h-6 w-6 text-purple-600" />
                <Badge className={getStatusColor(modelo.status)}>
                  {modelo.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-gray-900 mb-2">{modelo.nome}</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Precisão</span>
                  <span className="font-medium">{modelo.precisao}%</span>
                </div>
                <Progress value={modelo.precisao} className="h-2" />
                <div className="text-xs text-gray-500">
                  <p>Tipo: {modelo.tipo}</p>
                  <p>Atualizado: {modelo.ultimaAtualizacao}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Análise Preditiva */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span>Análise Preditiva de Resíduos</span>
            </CardTitle>
            <CardDescription>
              Previsão baseada em machine learning com intervalos de confiança
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dadosPredicao}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="real" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
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
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Próxima Previsão</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-700">Junho: 160 toneladas</p>
                  <p className="text-blue-600">Confiança: 92%</p>
                </div>
                <div>
                  <p className="text-blue-700">Tendência: ↗ +2.6%</p>
                  <p className="text-blue-600">vs mês anterior</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Padrões de Materiais */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-green-600" />
              <span>Padrões por Material</span>
            </CardTitle>
            <CardDescription>
              Análise geoespacial de distribuição de materiais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {padroesMateriais.map((material, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: material.cor }}
                      ></div>
                      <span className="font-medium text-gray-900">{material.material}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold">{material.volume}%</span>
                      <span className={`text-xs ${
                        material.tendencia.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {material.tendencia}
                      </span>
                    </div>
                  </div>
                  <Progress value={material.volume} className="h-2" />
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">Insight IA</h4>
              <p className="text-sm text-green-700">
                Detectado aumento significativo em resíduos metálicos. 
                Recomenda-se expandir pontos de coleta especializados.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights da IA */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-purple-600" />
            <span>Insights Gerados pela IA</span>
          </CardTitle>
          <CardDescription>
            Padrões, anomalias e oportunidades detectadas automaticamente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insightsIA.map((insight, index) => (
              <div key={index} className={`p-4 border-l-4 ${getImpactColor(insight.impacto)} rounded-r-lg`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">{insight.categoria}</Badge>
                      <Badge variant="secondary">{insight.confianca}% confiança</Badge>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">{insight.descricao}</h4>
                    <p className="text-sm text-gray-600 mb-3">{insight.acao}</p>
                    <Button size="sm" variant="outline">
                      Implementar Recomendação
                    </Button>
                  </div>
                  <AlertCircle className={`h-5 w-5 ${
                    insight.impacto === 'Alto' ? 'text-green-600' :
                    insight.impacto === 'Médio' ? 'text-yellow-600' : 'text-blue-600'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Análise Geoespacial */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Map className="h-5 w-5 text-indigo-600" />
            <span>Análise Geoespacial com IA</span>
          </CardTitle>
          <CardDescription>
            Padrões espaciais detectados por machine learning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Mapa de Insights IA
              </h3>
              <p className="text-gray-500 mb-4">
                Visualização dos padrões e anomalias detectadas pela IA
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Anomalias Detectadas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Padrões Positivos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Oportunidades</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Áreas de Atenção</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnaliseAvancada;
