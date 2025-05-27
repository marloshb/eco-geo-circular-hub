
import React from 'react';
import { Target, TrendingUp, Award, Users, Recycle, Leaf, Building, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const IndicadoresPNEC = () => {
  const indicadoresPrincipais = [
    {
      categoria: 'Redução de Desperdícios',
      meta: 80,
      atual: 67,
      prazo: '2030',
      status: 'em-progresso',
      indicadores: [
        { nome: 'Redução de Aterros Sanitários', valor: 45, meta: 60, unidade: '%' },
        { nome: 'Minimização de Perdas Industriais', valor: 72, meta: 85, unidade: '%' },
        { nome: 'Otimização de Embalagens', valor: 58, meta: 75, unidade: '%' }
      ]
    },
    {
      categoria: 'Reutilização',
      meta: 70,
      atual: 54,
      prazo: '2030',
      status: 'atencao',
      indicadores: [
        { nome: 'Produtos Reutilizados', valor: 42, meta: 60, unidade: '%' },
        { nome: 'Componentes Remanufaturados', valor: 38, meta: 50, unidade: '%' },
        { nome: 'Materiais de Construção Reutilizados', valor: 65, meta: 80, unidade: '%' }
      ]
    },
    {
      categoria: 'Reciclagem',
      meta: 75,
      atual: 68,
      prazo: '2030',
      status: 'bom',
      indicadores: [
        { nome: 'Taxa Nacional de Reciclagem', valor: 67, meta: 75, unidade: '%' },
        { nome: 'Reciclagem de Plásticos', valor: 71, meta: 80, unidade: '%' },
        { nome: 'Reciclagem de Papel/Papelão', valor: 83, meta: 90, unidade: '%' }
      ]
    },
    {
      categoria: 'Inclusão Social',
      meta: 90,
      atual: 76,
      prazo: '2030',
      status: 'bom',
      indicadores: [
        { nome: 'Catadores Formalizados', valor: 78, meta: 90, unidade: '%' },
        { nome: 'Cooperativas Ativas', valor: 85, meta: 95, unidade: '%' },
        { nome: 'Renda Média dos Catadores', valor: 67, meta: 85, unidade: '% do SM' }
      ]
    }
  ];

  const seloVerdeBrasil = [
    { categoria: 'Empresas Certificadas', valor: 2847, meta: 4000, crescimento: '+18%' },
    { categoria: 'Produtos Certificados', valor: 15643, meta: 25000, crescimento: '+25%' },
    { categoria: 'Setores Participantes', valor: 12, meta: 15, crescimento: '+9%' },
    { categoria: 'Emissões Evitadas (tCO2)', valor: 1247000, meta: 2000000, crescimento: '+32%' }
  ];

  const comparacaoRegional = [
    { regiao: 'Sudeste', pontuacao: 87, posicao: 1, destaque: 'Liderança em Reciclagem' },
    { regiao: 'Sul', pontuacao: 84, posicao: 2, destaque: 'Inclusão Social' },
    { regiao: 'Centro-Oeste', pontuacao: 79, posicao: 3, destaque: 'Economia Circular Rural' },
    { regiao: 'Nordeste', pontuacao: 75, posicao: 4, destaque: 'Crescimento Acelerado' },
    { regiao: 'Norte', pontuacao: 71, posicao: 5, destaque: 'Potencial de Melhoria' }
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

  return (
    <div className="space-y-6">
      {/* Indicadores Principais PNEC */}
      <div className="space-y-6">
        {indicadoresPrincipais.map((categoria, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    <span>{categoria.categoria}</span>
                  </CardTitle>
                  <CardDescription>
                    Meta PNEC: {categoria.meta}% até {categoria.prazo}
                  </CardDescription>
                </div>
                <Badge variant={getStatusBadge(categoria.status)}>
                  {categoria.status === 'bom' ? 'Bom Progresso' :
                   categoria.status === 'em-progresso' ? 'Em Progresso' : 
                   categoria.status === 'atencao' ? 'Atenção' : 'Excelente'}
                </Badge>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progresso Geral: <strong>{categoria.atual}%</strong></span>
                  <span>Meta: {categoria.meta}%</span>
                </div>
                <Progress value={categoria.atual} className="h-3" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categoria.indicadores.map((indicador, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm">{indicador.nome}</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>{indicador.valor}{indicador.unidade}</span>
                        <span>Meta: {indicador.meta}{indicador.unidade}</span>
                      </div>
                      <Progress value={(indicador.valor / indicador.meta) * 100} className="h-1.5" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Selo Verde Brasil */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-green-600" />
              <span>Selo Verde Brasil</span>
            </CardTitle>
            <CardDescription>
              Indicadores do programa de certificação ambiental
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {seloVerdeBrasil.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{item.categoria}</h4>
                    <p className="text-sm text-gray-600">
                      {item.valor.toLocaleString()} / {item.meta.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-green-600 border-green-300">
                      {item.crescimento}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">
                      {((item.valor / item.meta) * 100).toFixed(1)}% da meta
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Comparação Regional */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-purple-600" />
              <span>Ranking Regional PNEC</span>
            </CardTitle>
            <CardDescription>
              Pontuação geral dos indicadores por região
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {comparacaoRegional.map((regiao, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      regiao.posicao === 1 ? 'bg-yellow-100 text-yellow-700' :
                      regiao.posicao <= 2 ? 'bg-gray-100 text-gray-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      <span className="font-bold text-sm">{regiao.posicao}°</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{regiao.regiao}</h4>
                      <p className="text-sm text-gray-600">{regiao.destaque}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-bold ${
                      regiao.pontuacao >= 85 ? 'text-green-600' :
                      regiao.pontuacao >= 75 ? 'text-blue-600' : 'text-yellow-600'
                    }`}>
                      {regiao.pontuacao}
                    </p>
                    <p className="text-xs text-gray-500">pontos</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Metas Setoriais */}
      <Card>
        <CardHeader>
          <CardTitle>Acompanhamento de Metas Setoriais</CardTitle>
          <CardDescription>
            Progresso dos setores econômicos em relação às metas PNEC/ENEC
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Dashboard Setorial Interativo
              </h3>
              <p className="text-gray-500 mb-4">
                Visualização detalhada do progresso por setor econômico
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Manufatura</span>
                  <span className="text-xs text-gray-500">85%</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Agricultura</span>
                  <span className="text-xs text-gray-500">78%</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Construção</span>
                  <span className="text-xs text-gray-500">71%</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Varejo</span>
                  <span className="text-xs text-gray-500">82%</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Energia</span>
                  <span className="text-xs text-gray-500">89%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndicadoresPNEC;
