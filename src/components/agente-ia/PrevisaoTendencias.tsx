
import React, { useState } from 'react';
import { TrendingUp, Calendar, Globe, BarChart3, Activity, AlertTriangle, Clock, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const PrevisaoTendencias = () => {
  const [selectedHorizon, setSelectedHorizon] = useState('trimestre');

  const previsoesMateriais = [
    { periodo: 'Jun', plasticos: 145, papel: 132, metais: 89, organicos: 167, vidro: 45 },
    { periodo: 'Jul', plasticos: 152, papel: 128, metais: 94, organicos: 172, vidro: 48 },
    { periodo: 'Ago', plasticos: 148, papel: 135, metais: 91, organicos: 165, vidro: 46 },
    { periodo: 'Set', plasticos: 156, papel: 142, metais: 96, organicos: 178, vidro: 52 },
    { periodo: 'Out', plasticos: 162, papel: 138, metais: 98, organicos: 185, vidro: 49 },
    { periodo: 'Nov', plasticos: 158, papel: 145, metais: 102, organicos: 192, vidro: 54 }
  ];

  const tendenciasSetoriais = [
    {
      setor: 'Varejo',
      crescimento: '+12.5%',
      volume: 2340,
      principal: 'Embalagens plásticas',
      previsao: 'Aumento contínuo',
      confianca: 94,
      fatores: ['Black Friday', 'E-commerce', 'Delivery']
    },
    {
      setor: 'Construção',
      crescimento: '+8.3%',
      volume: 1856,
      principal: 'Entulho reciclável',
      previsao: 'Estabilização',
      confianca: 87,
      fatores: ['Obras públicas', 'Retrofit', 'Sustentabilidade']
    },
    {
      setor: 'Alimentício',
      crescimento: '+15.7%',
      volume: 1623,
      principal: 'Orgânicos',
      previsao: 'Forte crescimento',
      confianca: 91,
      fatores: ['Verão', 'Orgânicos', 'Compostagem']
    },
    {
      setor: 'Tecnologia',
      crescimento: '+6.2%',
      volume: 892,
      principal: 'Eletrônicos',
      previsao: 'Crescimento moderado',
      confianca: 83,
      fatores: ['Renovação', 'IoT', 'Sustentabilidade']
    }
  ];

  const alertasTendencias = [
    {
      tipo: 'critical',
      titulo: 'Pico de Resíduos Eletrônicos Previsto',
      periodo: 'Novembro 2024',
      impacto: '+45% vs média',
      descricao: 'Black Friday e renovação de equipamentos corporativos',
      recomendacao: 'Expandir pontos de coleta especializados',
      probabilidade: 89
    },
    {
      tipo: 'opportunity',
      titulo: 'Demanda Crescente por Plástico PET',
      periodo: 'Próximos 3 meses',
      impacto: '+25% valor',
      descricao: 'Indústria têxtil aumentando uso de PET reciclado',
      recomendacao: 'Priorizar coleta de garrafas PET',
      probabilidade: 92
    },
    {
      tipo: 'warning',
      titulo: 'Redução Sazonal de Orgânicos',
      periodo: 'Inverno 2024',
      impacto: '-30% volume',
      descricao: 'Menor consumo de frutas e verduras no inverno',
      recomendacao: 'Ajustar rotas de coleta orgânica',
      probabilidade: 86
    }
  ];

  const indicadoresMercado = [
    { nome: 'Plástico PET', preco: 'R$ 2,45/kg', tendencia: '+8.5%', demanda: 'Alta', suprimento: 'Baixo' },
    { nome: 'Papel Branco', preco: 'R$ 0,85/kg', tendencia: '+3.2%', demanda: 'Média', suprimento: 'Médio' },
    { nome: 'Alumínio', preco: 'R$ 4,20/kg', tendencia: '+12.1%', demanda: 'Muito Alta', suprimento: 'Baixo' },
    { nome: 'Vidro', preco: 'R$ 0,35/kg', tendencia: '-1.5%', demanda: 'Baixa', suprimento: 'Alto' }
  ];

  const impactosAmbientais = [
    { mes: 'Jun', co2_evitado: 234, energia_economizada: 1890, agua_poupada: 456 },
    { mes: 'Jul', co2_evitado: 251, energia_economizada: 2020, agua_poupada: 489 },
    { mes: 'Ago', co2_evitado: 243, energia_economizada: 1965, agua_poupada: 472 },
    { mes: 'Set', co2_evitado: 267, energia_economizada: 2145, agua_poupada: 521 },
    { mes: 'Out', co2_evitado: 284, energia_economizada: 2280, agua_poupada: 548 },
    { mes: 'Nov', co2_evitado: 295, energia_economizada: 2365, agua_poupada: 572 }
  ];

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'critical':
        return 'border-red-500 bg-red-50';
      case 'opportunity':
        return 'border-green-500 bg-green-50';
      case 'warning':
        return 'border-yellow-500 bg-yellow-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };

  const getTendenciaColor = (tendencia: string) => {
    return tendencia.startsWith('+') ? 'text-green-600' : 'text-red-600';
  };

  const getDemandaColor = (demanda: string) => {
    switch (demanda) {
      case 'Muito Alta':
        return 'bg-red-100 text-red-800';
      case 'Alta':
        return 'bg-orange-100 text-orange-800';
      case 'Média':
        return 'bg-yellow-100 text-yellow-800';
      case 'Baixa':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Previsão de Tendências</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Histórico
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <TrendingUp className="h-4 w-4 mr-2" />
            Nova Previsão
          </Button>
        </div>
      </div>

      {/* Seletor de Horizonte */}
      <div className="flex space-x-2">
        {['mes', 'trimestre', 'semestre', 'ano'].map((horizonte) => (
          <Button
            key={horizonte}
            variant={selectedHorizon === horizonte ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedHorizon(horizonte)}
            className="capitalize"
          >
            {horizonte}
          </Button>
        ))}
      </div>

      {/* Previsões por Material */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <span>Previsão de Volume por Material</span>
          </CardTitle>
          <CardDescription>
            Projeções baseadas em séries temporais e machine learning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={previsoesMateriais}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="periodo" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="plasticos" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} name="Plásticos" />
              <Area type="monotone" dataKey="papel" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} name="Papel" />
              <Area type="monotone" dataKey="metais" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} name="Metais" />
              <Area type="monotone" dataKey="organicos" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} name="Orgânicos" />
              <Area type="monotone" dataKey="vidro" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} name="Vidro" />
            </AreaChart>
          </ResponsiveContainer>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Maior Crescimento</h4>
              <p className="text-xl font-bold text-blue-600">Orgânicos</p>
              <p className="text-sm text-blue-700">+8.5% vs período anterior</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">Estabilidade</h4>
              <p className="text-xl font-bold text-green-600">Papel</p>
              <p className="text-sm text-green-700">Variação mínima prevista</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-medium text-orange-900 mb-2">Atenção</h4>
              <p className="text-xl font-bold text-orange-600">Vidro</p>
              <p className="text-sm text-orange-700">Possível declínio sazonal</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tendências Setoriais */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-green-600" />
              <span>Tendências por Setor</span>
            </CardTitle>
            <CardDescription>
              Análise de crescimento e padrões setoriais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tendenciasSetoriais.map((setor, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{setor.setor}</h4>
                      <p className="text-sm text-gray-600">{setor.principal}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${getTendenciaColor(setor.crescimento)}`}>
                        {setor.crescimento}
                      </p>
                      <p className="text-sm text-gray-500">{setor.volume} ton</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Confiança: {setor.confianca}%</span>
                      <span>{setor.previsao}</span>
                    </div>
                    <Progress value={setor.confianca} className="h-2" />
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {setor.fatores.map((fator, fatorIndex) => (
                      <Badge key={fatorIndex} variant="secondary" className="text-xs">
                        {fator}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Indicadores de Mercado */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-purple-600" />
              <span>Indicadores de Mercado</span>
            </CardTitle>
            <CardDescription>
              Preços e demanda por materiais recicláveis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {indicadoresMercado.map((indicador, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{indicador.nome}</h4>
                    <p className="text-lg font-bold text-green-600">{indicador.preco}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${getTendenciaColor(indicador.tendencia)}`}>
                      {indicador.tendencia}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Badge className={getDemandaColor(indicador.demanda)}>
                        {indicador.demanda}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-900 mb-2">Insight de Mercado</h4>
              <p className="text-sm text-purple-700">
                Alumínio apresenta maior valorização. Aumentar coleta pode gerar 
                receita adicional de R$ 15.000/mês.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alertas de Tendências */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <span>Alertas de Tendências</span>
          </CardTitle>
          <CardDescription>
            Eventos e mudanças previstas que requerem atenção
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alertasTendencias.map((alerta, index) => (
              <div key={index} className={`p-4 border-l-4 ${getTipoColor(alerta.tipo)} rounded-r-lg`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-medium text-gray-900">{alerta.titulo}</h4>
                      <Badge variant="outline">{alerta.probabilidade}% prob.</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                      <div>
                        <p><strong>Período:</strong> {alerta.periodo}</p>
                        <p><strong>Impacto:</strong> {alerta.impacto}</p>
                      </div>
                      <div>
                        <p>{alerta.descricao}</p>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-50 p-2 rounded text-sm">
                      <strong>Recomendação:</strong> {alerta.recomendacao}
                    </div>
                  </div>
                  <Clock className="h-5 w-5 text-gray-400 ml-4" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Impactos Ambientais Previstos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-emerald-600" />
            <span>Impactos Ambientais Previstos</span>
          </CardTitle>
          <CardDescription>
            Benefícios ambientais esperados com base nas tendências
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={impactosAmbientais}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="co2_evitado" 
                stroke="#10B981" 
                strokeWidth={3}
                name="CO2 Evitado (t)"
              />
              <Line 
                type="monotone" 
                dataKey="energia_economizada" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Energia Economizada (MWh)"
              />
              <Line 
                type="monotone" 
                dataKey="agua_poupada" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Água Poupada (mil L)"
              />
            </LineChart>
          </ResponsiveContainer>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center bg-green-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-green-600">295t</p>
              <p className="text-sm text-green-700">CO2 evitado previsto</p>
            </div>
            <div className="text-center bg-blue-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">2.365</p>
              <p className="text-sm text-blue-700">MWh de energia economizada</p>
            </div>
            <div className="text-center bg-purple-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-purple-600">572K</p>
              <p className="text-sm text-purple-700">Litros de água poupados</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrevisaoTendencias;
