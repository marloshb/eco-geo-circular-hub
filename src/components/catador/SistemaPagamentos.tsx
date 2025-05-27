
import React, { useState } from 'react';
import { Coins, CreditCard, Gift, TrendingUp, Download, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SistemaPagamentos = () => {
  const [saldoAtual] = useState(1247.50);
  const [pontosDisponiveis] = useState(850);

  const historicoTransacoes = [
    {
      id: 1,
      data: '2024-01-25',
      tipo: 'Coleta',
      descricao: 'Papel e Papelão - TechCorp',
      valor: 85.00,
      status: 'concluido'
    },
    {
      id: 2,
      data: '2024-01-24',
      tipo: 'Coleta',
      descricao: 'Plástico PET - SuperVerde',
      valor: 127.50,
      status: 'concluido'
    },
    {
      id: 3,
      data: '2024-01-23',
      tipo: 'Saque',
      descricao: 'Transferência PIX',
      valor: -300.00,
      status: 'processando'
    },
    {
      id: 4,
      data: '2024-01-22',
      tipo: 'Bônus',
      descricao: 'Meta mensal atingida',
      valor: 50.00,
      status: 'concluido'
    }
  ];

  const recompensasDisponiveis = [
    {
      id: 1,
      nome: 'Vale Combustível R$ 50',
      pontos: 500,
      descricao: 'Combustível para veículo ou equipamento',
      categoria: 'Transporte'
    },
    {
      id: 2,
      nome: 'Equipamento de Proteção',
      pontos: 300,
      descricao: 'Luvas, máscara e óculos de proteção',
      categoria: 'Segurança'
    },
    {
      id: 3,
      nome: 'Curso de Capacitação',
      pontos: 200,
      descricao: 'Curso online sobre reciclagem avançada',
      categoria: 'Educação'
    },
    {
      id: 4,
      nome: 'Ferramentas de Trabalho',
      pontos: 800,
      descricao: 'Kit com ferramentas para desmontagem',
      categoria: 'Equipamentos'
    }
  ];

  const estatisticas = [
    { titulo: 'Saldo Atual', valor: `R$ ${saldoAtual.toFixed(2)}`, icone: Coins, cor: 'text-green-600' },
    { titulo: 'Pontos Disponíveis', valor: pontosDisponiveis.toString(), icone: Gift, cor: 'text-purple-600' },
    { titulo: 'Ganhos este Mês', valor: 'R$ 892,50', icone: TrendingUp, cor: 'text-blue-600' },
    { titulo: 'Média por Coleta', valor: 'R$ 28,50', icone: CreditCard, cor: 'text-orange-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {estatisticas.map((stat, index) => (
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

      <Tabs defaultValue="transacoes" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="transacoes">Histórico</TabsTrigger>
          <TabsTrigger value="saque">Saque</TabsTrigger>
          <TabsTrigger value="recompensas">Recompensas</TabsTrigger>
        </TabsList>

        <TabsContent value="transacoes">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Transações</CardTitle>
              <CardDescription>
                Acompanhe todos os seus ganhos e movimentações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {historicoTransacoes.map((transacao) => (
                  <div key={transacao.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium">{transacao.descricao}</h4>
                        <Badge 
                          variant={transacao.status === 'concluido' ? 'default' : 'secondary'}
                        >
                          {transacao.status === 'concluido' ? 'Concluído' : 'Processando'}
                        </Badge>
                      </div>
                      <p className="text-gray-500 text-sm">{transacao.data} - {transacao.tipo}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${transacao.valor > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transacao.valor > 0 ? '+' : ''}R$ {Math.abs(transacao.valor).toFixed(2)}
                      </p>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="saque">
          <Card>
            <CardHeader>
              <CardTitle>Solicitar Saque</CardTitle>
              <CardDescription>
                Transfira seus ganhos para sua conta bancária
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="text-2xl font-bold text-green-600">R$ {saldoAtual.toFixed(2)}</h3>
                <p className="text-gray-600">Saldo disponível para saque</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">💳</span>
                    </div>
                    <h4 className="font-medium">PIX</h4>
                    <p className="text-sm text-gray-600">Transferência instantânea</p>
                    <Button className="w-full mt-3">Sacar via PIX</Button>
                  </div>
                </Card>

                <Card className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🏦</span>
                    </div>
                    <h4 className="font-medium">Conta Bancária</h4>
                    <p className="text-sm text-gray-600">TED em até 2 dias úteis</p>
                    <Button variant="outline" className="w-full mt-3">Sacar via TED</Button>
                  </div>
                </Card>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Informações Importantes:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Valor mínimo para saque: R$ 50,00</li>
                  <li>• PIX: processado em até 1 hora</li>
                  <li>• TED: processado em até 2 dias úteis</li>
                  <li>• Não cobramos taxas para saques</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recompensas">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gift className="h-6 w-6 text-purple-600" />
                <span>Sistema de Recompensas</span>
              </CardTitle>
              <CardDescription>
                Troque seus pontos por recompensas úteis para seu trabalho
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800">
                  Você tem {pontosDisponiveis} pontos disponíveis
                </h3>
                <p className="text-purple-600">Ganhe pontos a cada coleta realizada!</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recompensasDisponiveis.map((recompensa) => (
                  <Card key={recompensa.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium">{recompensa.nome}</h4>
                        <Badge variant="outline">{recompensa.categoria}</Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{recompensa.descricao}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-purple-600">{recompensa.pontos} pontos</span>
                        <Button 
                          size="sm"
                          disabled={pontosDisponiveis < recompensa.pontos}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          Resgatar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SistemaPagamentos;
