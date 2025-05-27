
import React, { useState } from 'react';
import { Store, ShoppingCart, Gavel, FileText, Handshake, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MercadoDigital = () => {
  const [activeMarketTab, setActiveMarketTab] = useState('compra-venda');

  const transacoesRecentes = [
    {
      id: 1,
      tipo: 'venda',
      produto: 'Aparas de PET',
      quantidade: '2 toneladas',
      preco: 'R$ 2.400',
      comprador: 'Recicladora São Paulo',
      vendedor: 'EcoPlast Ind.',
      status: 'Concluída',
      data: '2024-01-15'
    },
    {
      id: 2,
      tipo: 'leilao',
      produto: 'Sucata de Cobre',
      quantidade: '500kg',
      preco: 'R$ 15.000',
      comprador: 'MetalRecycle Corp',
      vendedor: 'Construção ABC',
      status: 'Em andamento',
      data: '2024-01-14'
    },
    {
      id: 3,
      tipo: 'troca',
      produto: 'Papel para Plástico',
      quantidade: '1 ton cada',
      preco: 'Troca direta',
      comprador: 'Cooperativa Verde',
      vendedor: 'Gráfica Digital',
      status: 'Negociando',
      data: '2024-01-13'
    }
  ];

  const leiloesAtivos = [
    {
      id: 1,
      produto: 'Lote de Eletrônicos',
      lanceAtual: 'R$ 18.500',
      proximoLance: 'R$ 19.000',
      participantes: 12,
      tempoRestante: '2h 15min',
      vendedor: 'TechRecycle Ltd'
    },
    {
      id: 2,
      produto: 'Madeira de Demolição',
      lanceAtual: 'R$ 3.200',
      proximoLance: 'R$ 3.500',
      participantes: 8,
      tempoRestante: '4h 32min',
      vendedor: 'Demolidora Santos'
    }
  ];

  const contratos = [
    {
      id: 1,
      tipo: 'Fornecimento Regular',
      produto: 'Resíduos Orgânicos',
      fornecedor: 'Mercado Central',
      comprador: 'Usina de Compostagem',
      valor: 'R$ 5.000/mês',
      vigencia: '12 meses',
      status: 'Ativo'
    },
    {
      id: 2,
      tipo: 'Coleta Programada',
      produto: 'Aparas Metálicas',
      fornecedor: 'Metalúrgica XYZ',
      comprador: 'Cooperativa Metal+',
      valor: 'R$ 12.000/mês',
      vigencia: '6 meses',
      status: 'Pendente'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Store className="h-6 w-6 text-blue-600" />
            <span>Mercado Digital Integrado</span>
          </CardTitle>
          <CardDescription>
            Plataforma de comércio para compra, venda e troca de materiais recicláveis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeMarketTab} onValueChange={setActiveMarketTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="compra-venda">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Compra/Venda
              </TabsTrigger>
              <TabsTrigger value="leiloes">
                <Gavel className="h-4 w-4 mr-2" />
                Leilões
              </TabsTrigger>
              <TabsTrigger value="trocas">
                <Handshake className="h-4 w-4 mr-2" />
                Trocas
              </TabsTrigger>
              <TabsTrigger value="contratos">
                <FileText className="h-4 w-4 mr-2" />
                Contratos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="compra-venda" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Transações Recentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transacoesRecentes.map((transacao) => (
                        <div key={transacao.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{transacao.produto}</h4>
                            <Badge 
                              variant={transacao.status === 'Concluída' ? 'default' : 'secondary'}
                              className={transacao.status === 'Concluída' ? 'bg-green-600' : ''}
                            >
                              {transacao.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{transacao.quantidade}</p>
                          <p className="text-lg font-bold text-blue-600 mb-2">{transacao.preco}</p>
                          <div className="text-xs text-gray-500">
                            <p>Vendedor: {transacao.vendedor}</p>
                            <p>Comprador: {transacao.comprador}</p>
                            <p>Data: {transacao.data}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Painel do Vendedor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Listar Novo Produto
                      </Button>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <p className="text-2xl font-bold text-blue-600">23</p>
                          <p className="text-sm text-blue-700">Produtos Ativos</p>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <p className="text-2xl font-bold text-green-600">R$ 45K</p>
                          <p className="text-sm text-green-700">Vendas do Mês</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-medium">Produtos Mais Vendidos</h5>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Aparas de PET</span>
                            <span className="text-green-600">47 vendas</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sucata de Alumínio</span>
                            <span className="text-green-600">32 vendas</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Papel/Papelão</span>
                            <span className="text-green-600">28 vendas</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="leiloes" className="space-y-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Leilões Ativos</h3>
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <Gavel className="h-4 w-4 mr-2" />
                    Criar Leilão
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {leiloesAtivos.map((leilao) => (
                    <Card key={leilao.id} className="border-orange-200">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-lg">{leilao.produto}</h4>
                            <Badge className="bg-orange-100 text-orange-800">
                              {leilao.tempoRestante}
                            </Badge>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Lance Atual:</span>
                              <span className="font-bold text-orange-600">{leilao.lanceAtual}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Próximo Lance:</span>
                              <span className="font-medium">{leilao.proximoLance}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Participantes:</span>
                              <span>{leilao.participantes}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Vendedor:</span>
                              <span>{leilao.vendedor}</span>
                            </div>
                          </div>
                          
                          <Button className="w-full bg-orange-600 hover:bg-orange-700">
                            Fazer Lance
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="trocas" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sistema de Trocas</CardTitle>
                  <CardDescription>
                    Troque materiais diretamente sem transações monetárias
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Ofertas de Troca</h4>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">2 ton de Papel</span>
                            <Badge variant="outline">Troca Direta</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">Por: 1.5 ton de Plástico PET</p>
                          <p className="text-xs text-gray-500">Gráfica ABC - São Paulo, SP</p>
                          <Button size="sm" className="mt-2 w-full">
                            Propor Troca
                          </Button>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">500kg de Alumínio</span>
                            <Badge variant="outline">Troca Direta</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">Por: 300kg de Cobre</p>
                          <p className="text-xs text-gray-500">Metalúrgica XYZ - Rio de Janeiro, RJ</p>
                          <Button size="sm" className="mt-2 w-full">
                            Propor Troca
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Calculadora de Trocas</h4>
                      <div className="border rounded-lg p-4 bg-green-50">
                        <div className="space-y-3">
                          <div>
                            <label className="text-sm font-medium">Você oferece:</label>
                            <p className="text-lg">1 ton de Papel Branco</p>
                            <p className="text-sm text-gray-600">Valor estimado: R$ 800</p>
                          </div>
                          <div className="border-t pt-3">
                            <label className="text-sm font-medium">Equivale a:</label>
                            <div className="space-y-1 text-sm">
                              <p>• 650kg de PET cristal</p>
                              <p>• 1.2 ton de papelão</p>
                              <p>• 200kg de alumínio</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contratos" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contratos Digitais</CardTitle>
                  <CardDescription>
                    Gestão de contratos com rastreabilidade blockchain
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <FileText className="h-4 w-4 mr-2" />
                      Novo Contrato
                    </Button>
                    
                    <div className="space-y-4">
                      {contratos.map((contrato) => (
                        <div key={contrato.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold">{contrato.tipo}</h4>
                            <Badge 
                              variant={contrato.status === 'Ativo' ? 'default' : 'secondary'}
                              className={contrato.status === 'Ativo' ? 'bg-green-600' : ''}
                            >
                              {contrato.status}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-600">Produto:</p>
                              <p className="font-medium">{contrato.produto}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Valor:</p>
                              <p className="font-medium text-green-600">{contrato.valor}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Fornecedor:</p>
                              <p className="font-medium">{contrato.fornecedor}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Vigência:</p>
                              <p className="font-medium">{contrato.vigencia}</p>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2 mt-3">
                            <Button size="sm" variant="outline">
                              Ver Detalhes
                            </Button>
                            <Button size="sm" variant="outline">
                              <CreditCard className="h-4 w-4 mr-1" />
                              Pagamentos
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default MercadoDigital;
