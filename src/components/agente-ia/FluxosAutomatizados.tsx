
import React, { useState } from 'react';
import { Zap, Play, Pause, Settings, Activity, Clock, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const FluxosAutomatizados = () => {
  const [selectedFlow, setSelectedFlow] = useState('coleta');

  const fluxosAtivos = [
    {
      id: 'coleta',
      nome: 'Agendamento de Coletas',
      descricao: 'Automatiza agendamento quando sensores detectam pontos cheios',
      status: 'Ativo',
      execucoes: 247,
      ultimaExecucao: '15 min atrás',
      proximaExecucao: 'Em tempo real',
      eficiencia: 94.2,
      economia: 'R$ 3.200/mês',
      triggers: ['Sensor IoT', 'Volume > 80%', 'Horário comercial']
    },
    {
      id: 'marketplace',
      nome: 'Validação de Transações',
      descricao: 'Valida automaticamente transações no marketplace B2B',
      status: 'Ativo',
      execucoes: 156,
      ultimaExecucao: '2 horas atrás',
      proximaExecucao: 'Em tempo real',
      eficiencia: 98.7,
      economia: 'R$ 1.800/mês',
      triggers: ['Nova transação', 'Documentos completos', 'Pagamento confirmado']
    },
    {
      id: 'incentivos',
      nome: 'Distribuição de Pontos',
      descricao: 'Distribui pontos de recompensa automaticamente por ações circulares',
      status: 'Ativo',
      execucoes: 892,
      ultimaExecucao: '5 min atrás',
      proximaExecucao: 'Em tempo real',
      eficiencia: 99.1,
      economia: 'R$ 950/mês',
      triggers: ['Ação validada', 'GPS confirmado', 'Foto enviada']
    },
    {
      id: 'conformidade',
      nome: 'Relatórios de Compliance',
      descricao: 'Gera relatórios regulatórios automaticamente',
      status: 'Pausado',
      execucoes: 23,
      ultimaExecucao: '2 dias atrás',
      proximaExecucao: 'Agendado',
      eficiencia: 87.5,
      economia: 'R$ 2.100/mês',
      triggers: ['Fim do período', 'Dados suficientes', 'Template atualizado']
    },
    {
      id: 'otimizacao',
      nome: 'Otimização de Rotas',
      descricao: 'Recalcula rotas ideais com base em tráfego e demanda',
      status: 'Ativo',
      execucoes: 67,
      ultimaExecucao: '1 hora atrás',
      proximaExecucao: 'Em 3 horas',
      eficiencia: 91.8,
      economia: 'R$ 4.500/mês',
      triggers: ['Mudança no tráfego', 'Novo ponto adicionado', 'Capacidade alterada']
    }
  ];

  const metricas = [
    { titulo: 'Fluxos Ativos', valor: 8, icone: Activity, cor: 'text-green-600' },
    { titulo: 'Execuções/Dia', valor: 156, icone: RefreshCw, cor: 'text-blue-600' },
    { titulo: 'Taxa de Sucesso', valor: '96.3%', icone: CheckCircle, cor: 'text-emerald-600' },
    { titulo: 'Tempo Economizado', valor: '247h', icone: Clock, cor: 'text-purple-600' }
  ];

  const templateFluxos = [
    {
      nome: 'Coleta Inteligente',
      categoria: 'Logística',
      descricao: 'Agenda coletas baseado em sensores IoT e padrões históricos',
      complexidade: 'Média',
      tempo_setup: '2 horas',
      usuarios: 23
    },
    {
      nome: 'Marketplace Automático',
      categoria: 'Comercial',
      descricao: 'Conecta automaticamente oferta e demanda no marketplace',
      complexidade: 'Alta',
      tempo_setup: '4 horas',
      usuarios: 15
    },
    {
      nome: 'Educação Adaptativa',
      categoria: 'Educação',
      descricao: 'Personaliza conteúdo educativo baseado no perfil do usuário',
      complexidade: 'Baixa',
      tempo_setup: '1 hora',
      usuarios: 34
    },
    {
      nome: 'Compliance PNRS',
      categoria: 'Regulatório',
      descricao: 'Monitora e reporta conformidade com regulamentações',
      complexidade: 'Alta',
      tempo_setup: '6 horas',
      usuarios: 8
    }
  ];

  const histocoExecucoes = [
    { hora: '08:00', execucoes: 12, sucessos: 11, falhas: 1 },
    { hora: '10:00', execucoes: 18, sucessos: 17, falhas: 1 },
    { hora: '12:00', execucoes: 24, sucessos: 24, falhas: 0 },
    { hora: '14:00', execucoes: 31, sucessos: 29, falhas: 2 },
    { hora: '16:00', execucoes: 28, sucessos: 27, falhas: 1 },
    { hora: '18:00', execucoes: 22, sucessos: 22, falhas: 0 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo':
        return 'bg-green-100 text-green-800';
      case 'Pausado':
        return 'bg-yellow-100 text-yellow-800';
      case 'Erro':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplexidadeColor = (complexidade: string) => {
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
        <h2 className="text-2xl font-bold text-gray-900">Fluxos Automatizados</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configurar Fluxo
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Zap className="h-4 w-4 mr-2" />
            Novo Fluxo
          </Button>
        </div>
      </div>

      {/* Métricas de Automação */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricas.map((metrica, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <metrica.icone className={`h-8 w-8 ${metrica.cor}`} />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{metrica.valor}</p>
                  <p className="text-sm text-gray-600">{metrica.titulo}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fluxos Ativos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-blue-600" />
              <span>Fluxos Ativos</span>
            </CardTitle>
            <CardDescription>
              Automações em execução na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {fluxosAtivos.map((fluxo) => (
                <div key={fluxo.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-gray-900">{fluxo.nome}</h4>
                        <Badge className={getStatusColor(fluxo.status)}>
                          {fluxo.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{fluxo.descricao}</p>
                    </div>
                    <div className="flex space-x-1">
                      {fluxo.status === 'Ativo' ? (
                        <Button size="sm" variant="outline">
                          <Pause className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline">
                          <Play className="h-4 w-4" />
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                    <div>
                      <p>Execuções: {fluxo.execucoes}</p>
                      <p>Última: {fluxo.ultimaExecucao}</p>
                    </div>
                    <div>
                      <p>Próxima: {fluxo.proximaExecucao}</p>
                      <p>Economia: {fluxo.economia}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Eficiência</span>
                      <span>{fluxo.eficiencia}%</span>
                    </div>
                    <Progress value={fluxo.eficiencia} className="h-2" />
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 font-medium">Triggers:</p>
                    <div className="flex flex-wrap gap-1">
                      {fluxo.triggers.map((trigger, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {trigger}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Templates de Fluxo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-green-600" />
              <span>Templates de Fluxo</span>
            </CardTitle>
            <CardDescription>
              Modelos pré-configurados para automação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {templateFluxos.map((template, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{template.nome}</h4>
                      <p className="text-sm text-gray-600 mt-1">{template.descricao}</p>
                    </div>
                    <Button size="sm">Usar</Button>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <span>Categoria:</span>
                      <Badge variant="outline">{template.categoria}</Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>Complexidade:</span>
                      <Badge className={getComplexidadeColor(template.complexidade)}>
                        {template.complexidade}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Setup: {template.tempo_setup}</span>
                    <span>{template.usuarios} usuários</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monitor de Execuções */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <RefreshCw className="h-5 w-5 text-purple-600" />
            <span>Monitor de Execuções</span>
          </CardTitle>
          <CardDescription>
            Monitoramento em tempo real das automações
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Histórico das Últimas Horas */}
            <div className="md:col-span-2">
              <h4 className="font-medium text-gray-900 mb-4">Execuções por Hora</h4>
              <div className="space-y-3">
                {histocoExecucoes.map((periodo, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="text-sm font-medium w-12">{periodo.hora}</span>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>{periodo.execucoes} execuções</span>
                        <span>{periodo.sucessos} sucessos, {periodo.falhas} falhas</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${(periodo.sucessos / periodo.execucoes) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Estatísticas Rápidas */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Estatísticas</h4>
              <div className="space-y-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700">Taxa de Sucesso</p>
                  <p className="text-xl font-bold text-green-600">96.3%</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-700">Tempo Médio</p>
                  <p className="text-xl font-bold text-blue-600">2.4s</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-purple-700">Economia Total</p>
                  <p className="text-xl font-bold text-purple-600">R$ 12.5K</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configurações de Automação */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5 text-indigo-600" />
            <span>Configurações Globais</span>
          </CardTitle>
          <CardDescription>
            Parâmetros gerais para automação inteligente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Triggers</h4>
              <div className="space-y-2">
                {['Sensores IoT', 'Horários programados', 'Eventos de sistema', 'Ações do usuário'].map((trigger) => (
                  <div key={trigger} className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked />
                    <span className="text-sm">{trigger}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Notificações</h4>
              <div className="space-y-2">
                {['Início de execução', 'Falhas de sistema', 'Métricas diárias', 'Alertas críticos'].map((notif) => (
                  <div key={notif} className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked={notif !== 'Início de execução'} />
                    <span className="text-sm">{notif}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Performance</h4>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">Limite de execuções/hora</label>
                  <input type="number" defaultValue="100" className="w-full mt-1 p-2 border rounded" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Timeout (segundos)</label>
                  <input type="number" defaultValue="30" className="w-full mt-1 p-2 border rounded" />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Retry automático</label>
                  <select className="w-full mt-1 p-2 border rounded">
                    <option>3 tentativas</option>
                    <option>5 tentativas</option>
                    <option>Desabilitado</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-gray-900">IA Avançada</h4>
                <p className="text-sm text-gray-600">
                  Permitir que a IA crie e otimize fluxos automaticamente
                </p>
              </div>
              <Button>Ativar IA</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FluxosAutomatizados;
