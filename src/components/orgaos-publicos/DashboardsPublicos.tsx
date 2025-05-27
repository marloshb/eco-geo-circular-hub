
import React from 'react';
import { BarChart3, Map, TrendingUp, Users, Building, Recycle, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const DashboardsPublicos = () => {
  const metricas = [
    {
      titulo: 'Taxa de Reciclagem Nacional',
      valor: 67,
      meta: 75,
      unidade: '%',
      icone: Recycle,
      tendencia: 'alta',
      mudanca: '+5.2%'
    },
    {
      titulo: 'Catadores Formalizados',
      valor: 4567,
      meta: 6000,
      unidade: 'pessoas',
      icone: Users,
      tendencia: 'alta',
      mudanca: '+12.1%'
    },
    {
      titulo: 'Empresas em Conformidade',
      valor: 2847,
      meta: 3500,
      unidade: 'empresas',
      icone: Building,
      tendencia: 'alta',
      mudanca: '+8.7%'
    },
    {
      titulo: 'Pontos de Coleta Ativos',
      valor: 15643,
      meta: 18000,
      unidade: 'pontos',
      icone: Map,
      tendencia: 'alta',
      mudanca: '+15.3%'
    }
  ];

  const regioes = [
    { nome: 'Sudeste', reciclagem: 72, populacao: 89.0, cor: 'bg-green-500' },
    { nome: 'Sul', reciclagem: 68, populacao: 29.9, cor: 'bg-blue-500' },
    { nome: 'Centro-Oeste', reciclagem: 65, populacao: 16.5, cor: 'bg-yellow-500' },
    { nome: 'Nordeste', reciclagem: 61, populacao: 57.4, cor: 'bg-orange-500' },
    { nome: 'Norte', reciclagem: 58, populacao: 18.9, cor: 'bg-red-500' }
  ];

  const alertas = [
    {
      tipo: 'critico',
      titulo: 'Descarte Inadequado Detectado',
      local: 'Região Norte - Manaus',
      status: 'Ação Necessária',
      icone: AlertTriangle
    },
    {
      tipo: 'sucesso',
      titulo: 'Meta de Reciclagem Atingida',
      local: 'Região Sul - Porto Alegre',
      status: 'Concluído',
      icone: CheckCircle
    },
    {
      tipo: 'aviso',
      titulo: 'Capacidade de Coleta Reduzida',
      local: 'Região Nordeste - Recife',
      status: 'Monitorando',
      icone: AlertTriangle
    }
  ];

  const getTendenciaColor = (tendencia: string) => {
    return tendencia === 'alta' ? 'text-green-600' : 
           tendencia === 'baixa' ? 'text-red-600' : 'text-yellow-600';
  };

  const getAlertaColor = (tipo: string) => {
    return tipo === 'critico' ? 'border-red-500 bg-red-50' :
           tipo === 'sucesso' ? 'border-green-500 bg-green-50' : 'border-yellow-500 bg-yellow-50';
  };

  return (
    <div className="space-y-6">
      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricas.map((metrica, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <metrica.icone className="h-6 w-6 text-blue-600" />
                <Badge variant="outline" className={getTendenciaColor(metrica.tendencia)}>
                  {metrica.mudanca}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-gray-900 mb-2">{metrica.titulo}</h3>
              <div className="space-y-2">
                <div className="flex items-end space-x-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {metrica.valor.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-600">{metrica.unidade}</span>
                </div>
                <Progress value={(metrica.valor / metrica.meta) * 100} className="h-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Meta: {metrica.meta.toLocaleString()}</span>
                  <span>{((metrica.valor / metrica.meta) * 100).toFixed(1)}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Desempenho Regional */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Map className="h-6 w-6 text-green-600" />
              <span>Desempenho Regional</span>
            </CardTitle>
            <CardDescription>
              Taxa de reciclagem por região brasileira
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regioes.map((regiao, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${regiao.cor}`}></div>
                      <span className="font-medium text-gray-900">{regiao.nome}</span>
                      <span className="text-sm text-gray-600">
                        ({regiao.populacao}M hab.)
                      </span>
                    </div>
                    <span className="font-bold text-gray-900">{regiao.reciclagem}%</span>
                  </div>
                  <Progress value={regiao.reciclagem} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alertas e Notificações */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
              <span>Alertas e Notificações</span>
            </CardTitle>
            <CardDescription>
              Monitoramento em tempo real de eventos críticos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alertas.map((alerta, index) => (
                <div key={index} className={`p-3 border-l-4 ${getAlertaColor(alerta.tipo)} rounded-r-lg`}>
                  <div className="flex items-start space-x-3">
                    <alerta.icone className={`h-5 w-5 mt-0.5 ${
                      alerta.tipo === 'critico' ? 'text-red-600' :
                      alerta.tipo === 'sucesso' ? 'text-green-600' : 'text-yellow-600'
                    }`} />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{alerta.titulo}</h4>
                      <p className="text-sm text-gray-600">{alerta.local}</p>
                      <Badge 
                        variant="outline" 
                        className={`mt-1 ${
                          alerta.tipo === 'critico' ? 'border-red-300 text-red-700' :
                          alerta.tipo === 'sucesso' ? 'border-green-300 text-green-700' : 'border-yellow-300 text-yellow-700'
                        }`}
                      >
                        {alerta.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visualização de Dados Geoespaciais */}
      <Card>
        <CardHeader>
          <CardTitle>Mapa de Fluxos de Resíduos</CardTitle>
          <CardDescription>
            Visualização em tempo real dos fluxos de resíduos e pontos de coleta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Mapa Interativo GIS
              </h3>
              <p className="text-gray-500 mb-4">
                Integração com sistemas de geotecnologias para monitoramento territorial
              </p>
              <div className="flex space-x-4 justify-center text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Pontos de Coleta</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Fluxos de Transporte</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Áreas Críticas</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardsPublicos;
