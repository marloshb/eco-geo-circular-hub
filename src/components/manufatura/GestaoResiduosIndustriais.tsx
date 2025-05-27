
import React, { useState } from 'react';
import { Factory, Truck, Recycle, AlertTriangle, CheckCircle, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const GestaoResiduosIndustriais = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categorias = [
    { id: 'todos', nome: 'Todos os Resíduos', cor: 'bg-gray-100 text-gray-800' },
    { id: 'metais', nome: 'Metais', cor: 'bg-yellow-100 text-yellow-800' },
    { id: 'plasticos', nome: 'Plásticos', cor: 'bg-blue-100 text-blue-800' },
    { id: 'quimicos', nome: 'Químicos', cor: 'bg-red-100 text-red-800' },
    { id: 'eletronicos', nome: 'Eletrônicos', cor: 'bg-purple-100 text-purple-800' },
  ];

  const residuosIndustriais = [
    {
      id: 1,
      tipo: 'Aparas de Aço Inoxidável',
      categoria: 'metais',
      quantidade: '2.5 toneladas',
      origem: 'Metalúrgica Santos',
      destinacao: 'Fundição São Paulo',
      status: 'Coletado',
      valor: 'R$ 15.000',
      impactoAmbiental: 'Alto potencial de reciclagem',
      certificacao: 'ABNT NBR 10004'
    },
    {
      id: 2,
      tipo: 'Retalhos de PET',
      categoria: 'plasticos',
      quantidade: '800 kg',
      origem: 'Indústria de Embalagens',
      destinacao: 'Cooperativa ReciclaPlast',
      status: 'Em trânsito',
      valor: 'R$ 2.400',
      impactoAmbiental: 'Redução de 60% nas emissões',
      certificacao: 'FSC Reciclado'
    },
    {
      id: 3,
      tipo: 'Solventes Recuperáveis',
      categoria: 'quimicos',
      quantidade: '300 litros',
      origem: 'Indústria Farmacêutica',
      destinacao: 'Centro de Tratamento Químico',
      status: 'Aguardando coleta',
      valor: 'R$ 8.500',
      impactoAmbiental: 'Tratamento especializado',
      certificacao: 'IBAMA Classe I'
    }
  ];

  const filteredResiduos = selectedCategory === 'todos' 
    ? residuosIndustriais 
    : residuosIndustriais.filter(residuo => residuo.categoria === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Coletado': return 'bg-green-100 text-green-800';
      case 'Em trânsito': return 'bg-blue-100 text-blue-800';
      case 'Aguardando coleta': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Factory className="h-6 w-6 text-purple-600" />
            <span>Gestão de Resíduos Industriais</span>
          </CardTitle>
          <CardDescription>
            Sistema integrado para gestão, rastreamento e destinação de resíduos industriais
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="tracking">Rastreamento</TabsTrigger>
              <TabsTrigger value="compliance">Conformidade</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              {/* Filtros por categoria */}
              <div className="flex flex-wrap gap-2 mb-4">
                {categorias.map((categoria) => (
                  <Badge
                    key={categoria.id}
                    className={`cursor-pointer transition-all ${
                      selectedCategory === categoria.id
                        ? 'bg-purple-600 text-white'
                        : categoria.cor
                    }`}
                    onClick={() => setSelectedCategory(categoria.id)}
                  >
                    {categoria.nome}
                  </Badge>
                ))}
              </div>

              {/* Lista de resíduos */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredResiduos.map((residuo) => (
                  <Card key={residuo.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-lg">{residuo.tipo}</h3>
                          <Badge className={getStatusColor(residuo.status)}>
                            {residuo.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Quantidade:</p>
                            <p className="font-medium">{residuo.quantidade}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Valor:</p>
                            <p className="font-medium text-green-600">{residuo.valor}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Origem:</p>
                            <p className="font-medium">{residuo.origem}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Destinação:</p>
                            <p className="font-medium">{residuo.destinacao}</p>
                          </div>
                        </div>

                        <div className="pt-2 border-t">
                          <p className="text-sm text-gray-600 mb-1">Impacto Ambiental:</p>
                          <p className="text-sm font-medium text-green-700">{residuo.impactoAmbiental}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {residuo.certificacao}
                          </Badge>
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tracking" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center space-x-2">
                      <Truck className="h-4 w-4 text-blue-600" />
                      <span>Em Trânsito</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <p className="text-xs text-gray-600">Carregamentos ativos</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Entregues</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">89</div>
                    <p className="text-xs text-gray-600">Neste mês</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-orange-600" />
                      <span>Pendentes</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">5</div>
                    <p className="text-xs text-gray-600">Aguardando coleta</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Mapa de Rastreamento</CardTitle>
                  <CardDescription>
                    Localização em tempo real dos resíduos industriais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Mapa interativo com rastreamento GPS</p>
                      <p className="text-sm text-gray-500">Visualização de rotas otimizadas e pontos de coleta</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compliance" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Conformidade Regulatória</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">PNRS - Logística Reversa</span>
                        <Badge className="bg-green-100 text-green-800">Conforme</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">ABNT NBR 10004</span>
                        <Badge className="bg-green-100 text-green-800">Conforme</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">IBAMA - Resíduos Perigosos</span>
                        <Badge className="bg-orange-100 text-orange-800">Pendente</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">ISO 14001 - Gestão Ambiental</span>
                        <Badge className="bg-green-100 text-green-800">Conforme</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Relatórios de Conformidade</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Relatório Mensal PNRS
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Inventário de Resíduos
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Certificados de Destinação
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Auditoria Ambiental
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Metas de Sustentabilidade</CardTitle>
                  <CardDescription>
                    Acompanhamento das metas ENEC e objetivos corporativos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">87%</p>
                      <p className="text-sm text-green-700">Taxa de Reciclagem</p>
                      <p className="text-xs text-gray-600">Meta: 85%</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">92%</p>
                      <p className="text-sm text-blue-700">Redução de Resíduos</p>
                      <p className="text-xs text-gray-600">Meta: 90%</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">76%</p>
                      <p className="text-sm text-purple-700">Economia Circular</p>
                      <p className="text-xs text-gray-600">Meta: 80%</p>
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

export default GestaoResiduosIndustriais;
