
import React, { useState } from 'react';
import { Coins, CreditCard, Banknote, TrendingUp, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CreditosFinanceiros = () => {
  const [saldoCreditos] = useState(247.50);
  const [metaAtual] = useState(75); // porcentagem da meta atingida

  const programasCredito = [
    {
      id: 1,
      nome: 'Crédito por Coleta',
      tipo: 'Catadores',
      descricao: 'R$ 0,15 por kg de material reciclável coletado',
      meta: 'Mínimo 20kg/semana',
      pagamento: 'Semanal via PIX',
      ativo: true
    },
    {
      id: 2,
      nome: 'Bônus Cooperativa',
      tipo: 'Cooperativas',
      descricao: 'R$ 500 por meta mensal de 5 toneladas',
      meta: '5 ton/mês',
      pagamento: 'Mensal via TED',
      ativo: true
    },
    {
      id: 3,
      nome: 'Crédito Logística Reversa',
      tipo: 'Empresas',
      descricao: 'Desconto de 10% em taxas ambientais',
      meta: '80% de reciclagem',
      pagamento: 'Trimestral',
      ativo: false
    },
    {
      id: 4,
      nome: 'Cashback Verde',
      tipo: 'Consumidores',
      descricao: 'R$ 2,00 por embalagem retornável devolvida',
      meta: '10 embalagens/mês',
      pagamento: 'Via carteira digital',
      ativo: true
    }
  ];

  const historicoCreditos = [
    {
      id: 1,
      data: '2024-01-25',
      tipo: 'Coleta Semanal',
      descricao: 'Plásticos e papéis - 45kg',
      valor: 6.75,
      status: 'Pago'
    },
    {
      id: 2,
      data: '2024-01-20',
      tipo: 'Bônus Meta',
      descricao: 'Meta semanal atingida',
      valor: 25.00,
      status: 'Pago'
    },
    {
      id: 3,
      tipo: 'Coleta Eletrônicos',
      data: '2024-01-18',
      descricao: 'Baterias e componentes - 8 itens',
      valor: 12.00,
      status: 'Processando'
    },
    {
      id: 4,
      data: '2024-01-15',
      tipo: 'Cashback Verde',
      descricao: 'Devolução de embalagens',
      valor: 8.00,
      status: 'Pago'
    }
  ];

  const metasAtivas = [
    {
      titulo: 'Meta Semanal',
      objetivo: 'Coletar 50kg de resíduos',
      progresso: 75,
      atual: '37.5kg',
      total: '50kg',
      prazo: '2 dias restantes',
      credito: 'R$ 30,00'
    },
    {
      titulo: 'Meta Mensal',
      objetivo: 'Participar de 20 coletas',
      progresso: 60,
      atual: '12 coletas',
      total: '20 coletas',
      prazo: '8 dias restantes',
      credito: 'R$ 100,00'
    },
    {
      titulo: 'Meta Trimestral',
      objetivo: 'Reciclar 500kg total',
      progresso: 45,
      atual: '225kg',
      total: '500kg',
      prazo: '45 dias restantes',
      credito: 'R$ 250,00'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Coins className="h-6 w-6 text-green-600" />
            <span>Créditos Financeiros</span>
          </CardTitle>
          <CardDescription>
            Ganhe dinheiro real por suas contribuições à economia circular
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Saldo e Retirada */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6">
                <div className="text-center">
                  <Banknote className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">R$ {saldoCreditos.toFixed(2)}</h3>
                  <p className="text-green-100">Créditos Disponíveis</p>
                </div>
              </div>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-3">Solicitar Saque</h4>
                  <div className="space-y-3">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Saque via PIX
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Transferência Bancária
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Valor mínimo: R$ 25,00 | Processamento em até 2 horas
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Programas de Crédito */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-lg font-semibold">Programas de Crédito Ativos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programasCredito.map((programa) => (
                  <Card key={programa.id} className={`${programa.ativo ? 'border-green-200' : 'border-gray-200'}`}>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{programa.nome}</h4>
                          <Badge 
                            variant={programa.ativo ? 'default' : 'secondary'}
                            className={programa.ativo ? 'bg-green-600' : ''}
                          >
                            {programa.ativo ? 'Ativo' : 'Inativo'}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <p className="text-gray-600">{programa.descricao}</p>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Público:</span>
                            <span className="font-medium">{programa.tipo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Meta:</span>
                            <span className="font-medium">{programa.meta}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Pagamento:</span>
                            <span className="font-medium">{programa.pagamento}</span>
                          </div>
                        </div>
                        
                        {programa.ativo && (
                          <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                            Participar
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metas e Progresso */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <span>Metas e Progresso</span>
          </CardTitle>
          <CardDescription>
            Acompanhe seu progresso e ganhe créditos por metas atingidas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metasAtivas.map((meta, index) => (
              <Card key={index} className="border-blue-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{meta.titulo}</h4>
                      <Badge className="bg-blue-100 text-blue-800">
                        {meta.credito}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600">{meta.objetivo}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{meta.atual}</span>
                        <span>{meta.total}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${meta.progresso}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{meta.progresso}% completo</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{meta.prazo}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Histórico de Transações */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Histórico de Créditos</CardTitle>
          <CardDescription>
            Acompanhe todos os créditos recebidos e seus status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {historicoCreditos.map((credito) => (
              <div key={credito.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Coins className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{credito.tipo}</h4>
                      <p className="text-sm text-gray-600">{credito.descricao}</p>
                      <p className="text-xs text-gray-500">{credito.data}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">
                    +R$ {credito.valor.toFixed(2)}
                  </p>
                  <Badge 
                    variant={credito.status === 'Pago' ? 'default' : 'secondary'}
                    className={credito.status === 'Pago' ? 'bg-green-600' : ''}
                  >
                    {credito.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreditosFinanceiros;
