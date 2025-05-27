
import React, { useState } from 'react';
import { FileText, Download, Calendar, Filter, BarChart3, PieChart, TrendingUp, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const RelatoriosAutomatizados = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('mensal');

  const relatoriosDisponiveis = [
    {
      id: 1,
      titulo: 'Conformidade PNRS',
      tipo: 'Regulatório',
      periodicidade: 'Mensal',
      ultimaGeracao: '2 dias atrás',
      proximaGeracao: 'Em 28 dias',
      status: 'Gerado',
      tamanho: '2.4 MB',
      paginas: 45
    },
    {
      id: 2,
      titulo: 'Performance Circular',
      tipo: 'Operacional',
      periodicidade: 'Semanal',
      ultimaGeracao: '3 horas atrás',
      proximaGeracao: 'Em 4 dias',
      status: 'Gerando',
      tamanho: '1.8 MB',
      paginas: 32
    },
    {
      id: 3,
      titulo: 'Indicadores PNEC',
      tipo: 'Estratégico',
      periodicidade: 'Trimestral',
      ultimaGeracao: '1 semana atrás',
      proximaGeracao: 'Em 11 semanas',
      status: 'Gerado',
      tamanho: '5.2 MB',
      paginas: 89
    },
    {
      id: 4,
      titulo: 'Impacto Ambiental',
      tipo: 'Sustentabilidade',
      periodicidade: 'Mensal',
      ultimaGeracao: '5 dias atrás',
      proximaGeracao: 'Em 25 dias',
      status: 'Gerado',
      tamanho: '3.1 MB',
      paginas: 67
    }
  ];

  const metricas = [
    { titulo: 'Relatórios Gerados', valor: 247, meta: 250, unidade: 'relatórios' },
    { titulo: 'Automação', valor: 95, meta: 90, unidade: '%' },
    { titulo: 'Tempo Médio', valor: 12, meta: 15, unidade: 'minutos' },
    { titulo: 'Precisão', valor: 98.7, meta: 95, unidade: '%' }
  ];

  const templatesPadrao = [
    {
      nome: 'PNRS - Logística Reversa',
      descricao: 'Relatório de conformidade com obrigações de logística reversa',
      categorias: ['Embalagens', 'Eletrônicos', 'Pilhas/Baterias'],
      frequencia: 'Trimestral',
      usuarios: 156
    },
    {
      nome: 'ENEC - Indicadores',
      descricao: 'Acompanhamento de metas da Estratégia Nacional de Economia Circular',
      categorias: ['Reciclagem', 'Reutilização', 'Redução'],
      frequencia: 'Mensal',
      usuarios: 89
    },
    {
      nome: 'ESG - Sustentabilidade',
      descricao: 'Métricas ambientais, sociais e de governança',
      categorias: ['Ambiental', 'Social', 'Governança'],
      frequencia: 'Anual',
      usuarios: 203
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Gerado':
        return 'bg-green-100 text-green-800';
      case 'Gerando':
        return 'bg-yellow-100 text-yellow-800';
      case 'Erro':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'Regulatório':
        return 'border-blue-500 bg-blue-50';
      case 'Operacional':
        return 'border-green-500 bg-green-50';
      case 'Estratégico':
        return 'border-purple-500 bg-purple-50';
      case 'Sustentabilidade':
        return 'border-emerald-500 bg-emerald-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Relatórios Automatizados</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Agendar Relatório
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <FileText className="h-4 w-4 mr-2" />
            Novo Template
          </Button>
        </div>
      </div>

      {/* Métricas de Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricas.map((metrica, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{metrica.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-end space-x-2">
                  <span className="text-2xl font-bold text-gray-900">{metrica.valor}</span>
                  <span className="text-sm text-gray-600">{metrica.unidade}</span>
                </div>
                <Progress value={Math.min((metrica.valor / metrica.meta) * 100, 100)} className="h-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Meta: {metrica.meta}</span>
                  <span>{Math.min((metrica.valor / metrica.meta) * 100, 100).toFixed(1)}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Relatórios Ativos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <span>Relatórios Programados</span>
            </CardTitle>
            <CardDescription>
              Relatórios gerados automaticamente pela IA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {relatoriosDisponiveis.map((relatorio) => (
                <div key={relatorio.id} className={`p-4 border rounded-lg ${getTipoColor(relatorio.tipo)}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{relatorio.titulo}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline">{relatorio.tipo}</Badge>
                        <Badge className={getStatusColor(relatorio.status)}>
                          {relatorio.status}
                        </Badge>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <p>Periodicidade: {relatorio.periodicidade}</p>
                      <p>Última geração: {relatorio.ultimaGeracao}</p>
                    </div>
                    <div>
                      <p>Próxima: {relatorio.proximaGeracao}</p>
                      <p>Tamanho: {relatorio.tamanho} ({relatorio.paginas} pág.)</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Templates Disponíveis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              <span>Templates Padrão</span>
            </CardTitle>
            <CardDescription>
              Modelos pré-configurados para diferentes necessidades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {templatesPadrao.map((template, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{template.nome}</h4>
                      <p className="text-sm text-gray-600 mt-1">{template.descricao}</p>
                    </div>
                    <Button size="sm">Usar</Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {template.categorias.map((categoria, catIndex) => (
                      <Badge key={catIndex} variant="secondary" className="text-xs">
                        {categoria}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Frequência: {template.frequencia}</span>
                    <span>{template.usuarios} usuários</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Configurações de Automação */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-purple-600" />
            <span>Configurações de Automação</span>
          </CardTitle>
          <CardDescription>
            Personalize quando e como os relatórios são gerados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Frequência</h4>
              <div className="space-y-2">
                {['Diário', 'Semanal', 'Mensal', 'Trimestral', 'Anual'].map((freq) => (
                  <div key={freq} className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked={freq === 'Mensal'} />
                    <span className="text-sm">{freq}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Formato</h4>
              <div className="space-y-2">
                {['PDF', 'Excel', 'PowerPoint', 'Dashboard Web'].map((formato) => (
                  <div key={formato} className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked={formato === 'PDF'} />
                    <span className="text-sm">{formato}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Distribuição</h4>
              <div className="space-y-2">
                {['Email automático', 'Portal web', 'API webhook', 'Slack/Teams'].map((dist) => (
                  <div key={dist} className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked={dist === 'Email automático'} />
                    <span className="text-sm">{dist}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-gray-900">Inteligência Artificial</h4>
                <p className="text-sm text-gray-600">
                  Gerar insights e recomendações automaticamente nos relatórios
                </p>
              </div>
              <Button>Configurar IA</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Estatísticas de Uso */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Uso por Tipo de Relatório</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Regulatórios</span>
                <div className="flex items-center space-x-2">
                  <Progress value={75} className="w-20 h-2" />
                  <span className="text-sm font-medium">75%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Operacionais</span>
                <div className="flex items-center space-x-2">
                  <Progress value={60} className="w-20 h-2" />
                  <span className="text-sm font-medium">60%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Estratégicos</span>
                <div className="flex items-center space-x-2">
                  <Progress value={45} className="w-20 h-2" />
                  <span className="text-sm font-medium">45%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Sustentabilidade</span>
                <div className="flex items-center space-x-2">
                  <Progress value={85} className="w-20 h-2" />
                  <span className="text-sm font-medium">85%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Economia de Tempo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">847 horas</div>
              <p className="text-gray-600 mb-4">economizadas com automação</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-medium text-blue-900">Antes da IA</p>
                  <p className="text-blue-700">156h/mês</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-medium text-green-900">Com IA</p>
                  <p className="text-green-700">23h/mês</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RelatoriosAutomatizados;
