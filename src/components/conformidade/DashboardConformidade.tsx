
import React from 'react';
import { Shield, CheckCircle, AlertTriangle, XCircle, TrendingUp, Users, Building, Recycle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const DashboardConformidade = () => {
  const statusConformidade = [
    { titulo: 'Total Conformidade', valor: '87%', icone: Shield, cor: 'text-green-600', status: 'alta' },
    { titulo: 'Empresas Auditadas', valor: '324', icone: Building, cor: 'text-blue-600', status: 'normal' },
    { titulo: 'Catadores Registrados', valor: '1.247', icone: Users, cor: 'text-purple-600', status: 'alta' },
    { titulo: 'Resíduos Rastreados', valor: '2.847 ton', icone: Recycle, cor: 'text-green-600', status: 'alta' }
  ];

  const alertasConformidade = [
    {
      id: 1,
      tipo: 'PNRS',
      empresa: 'TechCorp Industrial',
      descricao: 'Logística reversa de eletrônicos pendente',
      gravidade: 'alta',
      prazo: '3 dias',
      setor: 'Manufatura'
    },
    {
      id: 2,
      tipo: 'ENEC',
      empresa: 'AgroVerde Ltda',
      descricao: 'Meta de reciclagem de resíduos orgânicos não atingida',
      gravidade: 'media',
      prazo: '15 dias',
      setor: 'Agricultura'
    },
    {
      id: 3,
      tipo: 'PNEC',
      empresa: 'Construções Sustentáveis',
      descricao: 'Relatório de inclusão social de catadores em atraso',
      gravidade: 'baixa',
      prazo: '7 dias',
      setor: 'Construção'
    }
  ];

  const metasRegulatorias = [
    { meta: 'Taxa Nacional de Reciclagem', atual: 67, objetivo: 75, prazo: '2025' },
    { meta: 'Redução de Resíduos em Aterros', atual: 45, objetivo: 60, prazo: '2026' },
    { meta: 'Inclusão de Catadores', atual: 78, objetivo: 85, prazo: '2025' },
    { meta: 'Logística Reversa', atual: 82, objetivo: 90, prazo: '2024' }
  ];

  return (
    <div className="space-y-6">
      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statusConformidade.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.titulo}</p>
                  <p className={`text-2xl font-bold ${stat.cor}`}>{stat.valor}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <stat.icone className={`h-8 w-8 ${stat.cor}`} />
                  <Badge 
                    variant={stat.status === 'alta' ? 'default' : stat.status === 'media' ? 'secondary' : 'outline'}
                  >
                    {stat.status === 'alta' ? 'Ótimo' : stat.status === 'media' ? 'Regular' : 'Atenção'}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alertas de Conformidade */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              <span>Alertas de Conformidade</span>
            </CardTitle>
            <CardDescription>
              Pendências e não conformidades que requerem atenção
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alertasConformidade.map((alerta) => (
                <div key={alerta.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Badge variant={alerta.gravidade === 'alta' ? 'destructive' : 
                                   alerta.gravidade === 'media' ? 'default' : 'secondary'}>
                        {alerta.tipo}
                      </Badge>
                      <Badge variant="outline">{alerta.setor}</Badge>
                    </div>
                    <span className="text-sm text-gray-500">Prazo: {alerta.prazo}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{alerta.empresa}</h4>
                  <p className="text-sm text-gray-600 mb-3">{alerta.descricao}</p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      Ver Detalhes
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Resolver
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Metas Regulatórias */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <span>Metas Regulatórias</span>
            </CardTitle>
            <CardDescription>
              Progresso em relação às metas da PNEC, ENEC e PNRS
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {metasRegulatorias.map((meta, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900">{meta.meta}</h4>
                    <span className="text-sm text-gray-500">Meta {meta.prazo}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Progress value={(meta.atual / meta.objetivo) * 100} className="flex-1" />
                    <span className="text-sm font-medium">
                      {meta.atual}% / {meta.objetivo}%
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {meta.atual >= meta.objetivo ? 'Meta atingida' : 
                     `Faltam ${meta.objetivo - meta.atual}% para atingir a meta`}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mapa de Conformidade */}
      <Card>
        <CardHeader>
          <CardTitle>Mapa de Conformidade Regional</CardTitle>
          <CardDescription>
            Visualização geográfica do status de conformidade por região
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Mapa Interativo de Conformidade
              </h3>
              <p className="text-gray-500 mb-4">
                Integração com GIS para monitoramento georreferenciado
              </p>
              <div className="flex space-x-2 justify-center">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Conforme</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Atenção</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Não Conforme</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardConformidade;
