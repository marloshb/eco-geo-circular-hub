
import React from 'react';
import { BarChart3, TrendingUp, Target, Award, Users, Building, Recycle, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const IndicadoresDesempenho = () => {
  const indicadoresPrincipais = [
    {
      categoria: 'PNRS - Resíduos Sólidos',
      indicadores: [
        { nome: 'Taxa de Reciclagem Nacional', valor: 67, meta: 75, unidade: '%', status: 'em-progresso' },
        { nome: 'Redução de Aterros', valor: 45, meta: 60, unidade: '%', status: 'atencao' },
        { nome: 'Logística Reversa', valor: 82, meta: 90, unidade: '%', status: 'bom' },
        { nome: 'Conformidade Empresarial', valor: 78, meta: 85, unidade: '%', status: 'em-progresso' }
      ]
    },
    {
      categoria: 'ENEC - Economia Circular',
      indicadores: [
        { nome: 'Eficiência de Recursos', valor: 71, meta: 80, unidade: '%', status: 'em-progresso' },
        { nome: 'Reutilização de Materiais', valor: 89, meta: 85, unidade: '%', status: 'excelente' },
        { nome: 'Redução de CO2', valor: 2847, meta: 3000, unidade: 'tCO2', status: 'bom' },
        { nome: 'Inovação Circular', valor: 56, meta: 70, unidade: 'projetos', status: 'atencao' }
      ]
    },
    {
      categoria: 'PNEC - Inclusão Social',
      indicadores: [
        { nome: 'Catadores Registrados', valor: 1247, meta: 1500, unidade: 'pessoas', status: 'em-progresso' },
        { nome: 'Cooperativas Ativas', valor: 12, meta: 15, unidade: 'unidades', status: 'em-progresso' },
        { nome: 'Renda Média Catadores', valor: 1340, meta: 1500, unidade: 'R$', status: 'em-progresso' },
        { nome: 'Inclusão na Cadeia Formal', valor: 78, meta: 85, unidade: '%', status: 'bom' }
      ]
    }
  ];

  const desempenhoSetorial = [
    { setor: 'Manufatura', conformidade: 85, empresas: 45, tendencia: 'crescente' },
    { setor: 'Agricultura', conformidade: 92, empresas: 32, tendencia: 'crescente' },
    { setor: 'Construção', conformidade: 76, empresas: 28, tendencia: 'estavel' },
    { setor: 'Varejo', conformidade: 81, empresas: 67, tendencia: 'crescente' },
    { setor: 'Energia', conformidade: 88, empresas: 23, tendencia: 'crescente' }
  ];

  const rankingRegioes = [
    { regiao: 'Sudeste', conformidade: 89, destaque: 'Logística Reversa' },
    { regiao: 'Sul', conformidade: 87, destaque: 'Inclusão Social' },
    { regiao: 'Centro-Oeste', conformidade: 82, destaque: 'Economia Circular' },
    { regiao: 'Nordeste', conformidade: 79, destaque: 'Resíduos Orgânicos' },
    { regiao: 'Norte', conformidade: 74, destaque: 'Cooperativas' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excelente': return 'text-green-600';
      case 'bom': return 'text-blue-600';
      case 'em-progresso': return 'text-yellow-600';
      case 'atencao': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'excelente': return 'default';
      case 'bom': return 'secondary';
      case 'em-progresso': return 'outline';
      case 'atencao': return 'destructive';
      default: return 'outline';
    }
  };

  const getTendenciaIcon = (tendencia: string) => {
    return tendencia === 'crescente' ? 'text-green-600' : 
           tendencia === 'decrescente' ? 'text-red-600' : 'text-gray-600';
  };

  return (
    <div className="space-y-6">
      {/* Indicadores Principais por Categoria */}
      <div className="space-y-6">
        {indicadoresPrincipais.map((categoria, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                <span>{categoria.categoria}</span>
              </CardTitle>
              <CardDescription>
                Monitoramento de indicadores de conformidade e desempenho
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoria.indicadores.map((indicador, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-900">{indicador.nome}</h4>
                      <Badge variant={getStatusBadge(indicador.status)}>
                        {indicador.status === 'excelente' ? 'Excelente' :
                         indicador.status === 'bom' ? 'Bom' :
                         indicador.status === 'em-progresso' ? 'Em Progresso' : 'Atenção'}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Atual: <strong>{indicador.valor} {indicador.unidade}</strong></span>
                        <span>Meta: {indicador.meta} {indicador.unidade}</span>
                      </div>
                      <Progress 
                        value={indicador.unidade === '%' ? indicador.valor : (indicador.valor / indicador.meta) * 100} 
                        className="h-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>
                          {indicador.valor >= indicador.meta ? 'Meta atingida!' : 
                           `Faltam ${indicador.meta - indicador.valor} ${indicador.unidade}`}
                        </span>
                        <span className={getStatusColor(indicador.status)}>
                          {((indicador.valor / indicador.meta) * 100).toFixed(1)}% da meta
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Desempenho por Setor */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Building className="h-6 w-6 text-green-600" />
              <span>Desempenho por Setor</span>
            </CardTitle>
            <CardDescription>
              Conformidade e tendências por setor econômico
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {desempenhoSetorial.map((setor, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900">{setor.setor}</h4>
                      <TrendingUp className={`h-4 w-4 ${getTendenciaIcon(setor.tendencia)}`} />
                    </div>
                    <p className="text-sm text-gray-600">{setor.empresas} empresas registradas</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-bold ${setor.conformidade >= 90 ? 'text-green-600' : 
                                   setor.conformidade >= 80 ? 'text-blue-600' : 'text-yellow-600'}`}>
                      {setor.conformidade}%
                    </p>
                    <p className="text-xs text-gray-500">Conformidade</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ranking Regional */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-purple-600" />
              <span>Ranking Regional</span>
            </CardTitle>
            <CardDescription>
              Desempenho de conformidade por região do Brasil
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rankingRegioes.map((regiao, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{regiao.regiao}</h4>
                      <p className="text-sm text-gray-600">Destaque: {regiao.destaque}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-bold ${regiao.conformidade >= 85 ? 'text-green-600' : 
                                   regiao.conformidade >= 75 ? 'text-blue-600' : 'text-yellow-600'}`}>
                      {regiao.conformidade}%
                    </p>
                    {index === 0 && <Award className="h-4 w-4 text-yellow-500 mx-auto mt-1" />}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Evolução Temporal */}
      <Card>
        <CardHeader>
          <CardTitle>Evolução Temporal dos Indicadores</CardTitle>
          <CardDescription>
            Tendências históricas de conformidade e desempenho
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Gráficos Interativos de Indicadores
              </h3>
              <p className="text-gray-500 mb-4">
                Visualização temporal com dados de GIS e IoT em tempo real
              </p>
              <div className="flex space-x-4 justify-center text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>PNRS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>ENEC</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>PNEC</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndicadoresDesempenho;
