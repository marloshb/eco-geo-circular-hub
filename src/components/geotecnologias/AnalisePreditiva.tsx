
import React, { useState } from 'react';
import { BarChart3, TrendingUp, Brain, Target, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AnalisePreditiva = () => {
  const [periodoAnalise, setPeriodoAnalise] = useState('mensal');

  const predicoes = [
    {
      id: 1,
      regiao: 'Zona Industrial Sul - SP',
      tipo: 'Resíduos Eletrônicos',
      previsao: '+35%',
      confianca: '92%',
      periodo: 'Próximos 30 dias',
      recomendacao: 'Aumentar pontos de coleta',
      prioridade: 'Alta'
    },
    {
      id: 2,
      regiao: 'Centro Histórico - RJ',
      tipo: 'Resíduos Orgânicos',
      previsao: '-18%',
      confianca: '87%',
      periodo: 'Próximos 15 dias',
      recomendacao: 'Reduzir frequência de coleta',
      prioridade: 'Média'
    },
    {
      id: 3,
      regiao: 'Bairro Residencial - BH',
      tipo: 'Plásticos e Embalagens',
      previsao: '+42%',
      confianca: '89%',
      periodo: 'Próximos 45 dias',
      recomendacao: 'Expandir rede de catadores',
      prioridade: 'Alta'
    }
  ];

  const algoritmos = [
    {
      nome: 'Machine Learning Temporal',
      descricao: 'Análise de séries temporais para previsão de volume',
      precisao: '91%',
      aplicacao: 'Previsão de demanda'
    },
    {
      nome: 'Clustering Geoespacial',
      descricao: 'Agrupamento de padrões por localização',
      precisao: '87%',
      aplicacao: 'Identificação de hotspots'
    },
    {
      nome: 'Redes Neurais',
      descricao: 'Deep learning para padrões complexos',
      precisao: '94%',
      aplicacao: 'Otimização multi-variável'
    },
    {
      nome: 'Regressão Espacial',
      descricao: 'Correlações entre variáveis geográficas',
      precisao: '85%',
      aplicacao: 'Impacto territorial'
    }
  ];

  const indicadores = [
    { nome: 'Volume Total Previsto', valor: '2,847 ton', variacao: '+12%', status: 'positivo' },
    { nome: 'Áreas Prioritárias', valor: '23 regiões', variacao: '+5', status: 'neutro' },
    { nome: 'Eficiência Predita', valor: '87%', variacao: '+3%', status: 'positivo' },
    { nome: 'Demanda Catadores', valor: '+156 posições', variacao: '+18%', status: 'alerta' }
  ];

  const setoresAnalise = [
    {
      setor: 'Manufatura',
      crescimento: '+15%',
      tendencia: 'Crescente',
      fatores: ['Expansão industrial', 'Novos regulamentos'],
      oportunidades: 'Logística reversa automatizada'
    },
    {
      setor: 'Agricultura',
      crescimento: '+8%',
      tendencia: 'Estável',
      fatores: ['Safra aumentada', 'Compostagem crescente'],
      oportunidades: 'Biomassa para energia'
    },
    {
      setor: 'Construção',
      crescimento: '+22%',
      tendencia: 'Alta',
      fatores: ['Boom imobiliário', 'Materiais sustentáveis'],
      oportunidades: 'Reciclagem de entulho'
    },
    {
      setor: 'Varejo',
      crescimento: '+11%',
      tendencia: 'Moderada',
      fatores: ['E-commerce', 'Embalagens sustentáveis'],
      oportunidades: 'Logística reversa digital'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-purple-600" />
            <span>Análise Preditiva Espacial</span>
          </CardTitle>
          <CardDescription>
            Inteligência artificial para previsão de padrões de resíduos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Previsões por Região</h3>
            <div className="flex space-x-2">
              <select 
                value={periodoAnalise}
                onChange={(e) => setPeriodoAnalise(e.target.value)}
                className="text-sm border rounded-md px-2 py-1"
              >
                <option value="semanal">Semanal</option>
                <option value="mensal">Mensal</option>
                <option value="trimestral">Trimestral</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {predicoes.map((predicao) => (
              <Card key={predicao.id} className="border-purple-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm">{predicao.regiao}</h4>
                      <Badge 
                        variant="outline"
                        className={
                          predicao.prioridade === 'Alta' ? 'text-red-600 border-red-600' :
                          'text-orange-600 border-orange-600'
                        }
                      >
                        {predicao.prioridade}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Tipo:</span>
                        <p className="font-medium">{predicao.tipo}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-gray-600">Previsão:</span>
                          <p className={`font-bold ${
                            predicao.previsao.startsWith('+') ? 'text-red-600' : 'text-green-600'
                          }`}>
                            {predicao.previsao}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-600">Confiança:</span>
                          <p className="font-bold text-purple-600">{predicao.confianca}</p>
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-600">Período:</span>
                        <p className="font-medium">{predicao.periodo}</p>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs font-medium text-purple-900">
                        Recomendação: {predicao.recomendacao}
                      </p>
                    </div>
                    
                    <Button className="w-full bg-purple-600 hover:bg-purple-700" size="sm">
                      <Target className="h-3 w-3 mr-1" />
                      Aplicar Ação
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Indicadores Preditivos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-green-600" />
            <span>Indicadores Preditivos</span>
          </CardTitle>
          <CardDescription>
            Métricas previstas para o próximo período
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {indicadores.map((indicador, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">{indicador.nome}</h4>
                    <p className="text-2xl font-bold">{indicador.valor}</p>
                    <div className="flex items-center justify-center space-x-1">
                      {indicador.status === 'positivo' && <CheckCircle className="h-4 w-4 text-green-600" />}
                      {indicador.status === 'alerta' && <AlertTriangle className="h-4 w-4 text-orange-600" />}
                      {indicador.status === 'neutro' && <TrendingUp className="h-4 w-4 text-blue-600" />}
                      <span className={`text-sm font-medium ${
                        indicador.status === 'positivo' ? 'text-green-600' :
                        indicador.status === 'alerta' ? 'text-orange-600' :
                        'text-blue-600'
                      }`}>
                        {indicador.variacao}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Algoritmos de IA */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-indigo-600" />
            <span>Algoritmos de Inteligência Artificial</span>
          </CardTitle>
          <CardDescription>
            Modelos de machine learning para análise preditiva
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {algoritmos.map((algoritmo, index) => (
              <Card key={index} className="border-indigo-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{algoritmo.nome}</h4>
                      <Badge className="bg-indigo-100 text-indigo-800">
                        {algoritmo.precisao}
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

      {/* Análise por Setor */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-orange-600" />
            <span>Previsões por Setor Econômico</span>
          </CardTitle>
          <CardDescription>
            Tendências previstas para diferentes setores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {setoresAnalise.map((setor, index) => (
              <Card key={index} className="border-orange-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{setor.setor}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant="outline"
                          className={
                            setor.tendencia === 'Crescente' || setor.tendencia === 'Alta' ? 'text-green-600 border-green-600' :
                            setor.tendencia === 'Moderada' ? 'text-orange-600 border-orange-600' :
                            'text-blue-600 border-blue-600'
                          }
                        >
                          {setor.tendencia}
                        </Badge>
                        <span className="font-bold text-lg text-green-600">{setor.crescimento}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-gray-600">Fatores Principais:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {setor.fatores.map((fator, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {fator}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 rounded-lg p-3">
                        <p className="text-sm font-medium text-orange-900">
                          Oportunidade: {setor.oportunidades}
                        </p>
                      </div>
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

export default AnalisePreditiva;
