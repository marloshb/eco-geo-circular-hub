
import React, { useState } from 'react';
import { Users, TrendingUp, Calendar, MessageSquare, FileText, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const GestaoCooperativa = () => {
  const [cooperativa] = useState({
    nome: 'Cooperativa Verde Esperança',
    membros: 47,
    fundacao: '2018',
    status: 'Ativa'
  });

  const membrosAtivos = [
    {
      id: 1,
      nome: 'Maria Silva',
      funcao: 'Presidente',
      coletasUltimos30Dias: 23,
      materiaisPrincipais: ['Papel', 'Plástico'],
      status: 'Ativo'
    },
    {
      id: 2,
      nome: 'João Santos',
      funcao: 'Tesoureiro',
      coletasUltimos30Dias: 31,
      materiaisPrincipais: ['Alumínio', 'Metal'],
      status: 'Ativo'
    },
    {
      id: 3,
      nome: 'Ana Costa',
      funcao: 'Secretária',
      coletasUltimos30Dias: 19,
      materiaisPrincipais: ['Papel', 'Vidro'],
      status: 'Inativo'
    },
    {
      id: 4,
      nome: 'Carlos Oliveira',
      funcao: 'Membro',
      coletasUltimos30Dias: 28,
      materiaisPrincipais: ['Plástico', 'Eletrônicos'],
      status: 'Ativo'
    }
  ];

  const relatóriosFinanceiros = [
    {
      mes: 'Janeiro 2024',
      receita: 8450.00,
      despesas: 1200.00,
      lucroLiquido: 7250.00,
      distribuicaoMembros: 6450.00
    },
    {
      mes: 'Dezembro 2023',
      receita: 7890.00,
      despesas: 1100.00,
      lucroLiquido: 6790.00,
      distribuicaoMembros: 6100.00
    },
    {
      mes: 'Novembro 2023',
      receita: 8120.00,
      despesas: 950.00,
      lucroLiquido: 7170.00,
      distribuicaoMembros: 6420.00
    }
  ];

  const estatisticasCooperativa = [
    { titulo: 'Membros Ativos', valor: '43', icone: Users, cor: 'text-blue-600' },
    { titulo: 'Coletas este Mês', valor: '247', icone: TrendingUp, cor: 'text-green-600' },
    { titulo: 'Renda Mensal', valor: 'R$ 8.450', icone: Calendar, cor: 'text-purple-600' },
    { titulo: 'Reuniões Agendadas', valor: '2', icone: MessageSquare, cor: 'text-orange-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Header da Cooperativa */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{cooperativa.nome}</CardTitle>
              <CardDescription>
                Fundada em {cooperativa.fundacao} • {cooperativa.membros} membros
              </CardDescription>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-green-100 text-green-800">{cooperativa.status}</Badge>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {estatisticasCooperativa.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.titulo}</p>
                  <p className={`text-2xl font-bold ${stat.cor}`}>{stat.valor}</p>
                </div>
                <stat.icone className={`h-8 w-8 ${stat.cor}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="membros" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="membros">Membros</TabsTrigger>
          <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
          <TabsTrigger value="reunioes">Reuniões</TabsTrigger>
        </TabsList>

        <TabsContent value="membros">
          <Card>
            <CardHeader>
              <CardTitle>Gestão de Membros</CardTitle>
              <CardDescription>
                Acompanhe a atividade e performance dos membros da cooperativa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {membrosAtivos.map((membro) => (
                  <Card key={membro.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold">{membro.nome}</h4>
                            <Badge variant="outline">{membro.funcao}</Badge>
                            <Badge variant={membro.status === 'Ativo' ? 'default' : 'secondary'}>
                              {membro.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>
                              <p><strong>Coletas (30 dias):</strong> {membro.coletasUltimos30Dias}</p>
                            </div>
                            <div>
                              <p><strong>Materiais:</strong> {membro.materiaisPrincipais.join(', ')}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Ver Detalhes
                          </Button>
                          <Button variant="outline" size="sm">
                            Contatar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="outline">
                  Convidar Novos Membros
                </Button>
                <Button>
                  Relatório Completo
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financeiro">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios Financeiros</CardTitle>
              <CardDescription>
                Acompanhe receitas, despesas e distribuição entre membros
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {relatóriosFinanceiros.map((relatorio, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-lg">{relatorio.mes}</h4>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Ver Relatório
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Receita Total</p>
                          <p className="font-semibold text-green-600">R$ {relatorio.receita.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Despesas</p>
                          <p className="font-semibold text-red-600">R$ {relatorio.despesas.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Lucro Líquido</p>
                          <p className="font-semibold text-blue-600">R$ {relatorio.lucroLiquido.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Distribuído</p>
                          <p className="font-semibold text-purple-600">R$ {relatorio.distribuicaoMembros.toFixed(2)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reunioes">
          <Card>
            <CardHeader>
              <CardTitle>Reuniões e Comunicação</CardTitle>
              <CardDescription>
                Organize reuniões e mantenha a comunicação com os membros
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Próximas Reuniões</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <p className="font-medium">Assembleia Mensal</p>
                          <p className="text-sm text-gray-600">30/01/2024 - 19:00</p>
                        </div>
                        <Badge>Confirmada</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Planejamento Fevereiro</p>
                          <p className="text-sm text-gray-600">05/02/2024 - 18:30</p>
                        </div>
                        <Badge variant="outline">Agendada</Badge>
                      </div>
                    </div>
                    <Button className="w-full mt-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar Nova Reunião
                    </Button>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Comunicados</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="font-medium text-sm">Meta mensal atingida!</p>
                        <p className="text-xs text-gray-600">Enviado há 2 dias</p>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <p className="font-medium text-sm">Lembrete: Reunião amanhã</p>
                        <p className="text-xs text-gray-600">Enviado há 1 dia</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Enviar Comunicado
                    </Button>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GestaoCooperativa;
