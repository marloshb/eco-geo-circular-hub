
import React, { useState } from 'react';
import { Wheat, Truck, Recycle, AlertTriangle, CheckCircle, MapPin, FileText, Leaf } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const GestaoResiduosOrganicos = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categorias = [
    { id: 'todos', nome: 'Todos os Resíduos', cor: 'bg-gray-100 text-gray-800' },
    { id: 'organicos', nome: 'Orgânicos', cor: 'bg-green-100 text-green-800' },
    { id: 'embalagens', nome: 'Embalagens', cor: 'bg-blue-100 text-blue-800' },
    { id: 'agrotoxicos', nome: 'Agrotóxicos', cor: 'bg-red-100 text-red-800' },
    { id: 'fertilizantes', nome: 'Fertilizantes', cor: 'bg-yellow-100 text-yellow-800' },
  ];

  const residuosAgricolas = [
    {
      id: 1,
      tipo: 'Bagaço de Cana-de-açúcar',
      categoria: 'organicos',
      quantidade: '15 toneladas',
      origem: 'Usina São Carlos',
      destinacao: 'Bioenergia Renovável',
      status: 'Coletado',
      valor: 'R$ 750',
      impactoAmbiental: 'Geração de energia limpa',
      certificacao: 'ABNT NBR 10004'
    },
    {
      id: 2,
      tipo: 'Cascas de Frutas Cítricas',
      categoria: 'organicos',
      quantidade: '2.3 toneladas',
      origem: 'Processadora Citros Brasil',
      destinacao: 'Compostagem Cooperativa',
      status: 'Em trânsito',
      valor: 'R$ 320',
      impactoAmbiental: 'Produção de biofertilizante',
      certificacao: 'Orgânico Certificado'
    },
    {
      id: 3,
      tipo: 'Embalagens de Fertilizantes',
      categoria: 'embalagens',
      quantidade: '800 unidades',
      origem: 'Fazenda Três Irmãos',
      destinacao: 'Recicladora PlastiAgro',
      status: 'Aguardando coleta',
      valor: 'R$ 480',
      impactoAmbiental: 'Reciclagem em novos produtos',
      certificacao: 'inpEV Logística Reversa'
    }
  ];

  const filteredResiduos = selectedCategory === 'todos' 
    ? residuosAgricolas 
    : residuosAgricolas.filter(residuo => residuo.categoria === selectedCategory);

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
            <Leaf className="h-6 w-6 text-green-600" />
            <span>Gestão de Resíduos Orgânicos e Agrícolas</span>
          </CardTitle>
          <CardDescription>
            Sistema integrado para gestão sustentável de resíduos do setor agropecuário
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="bioenergia">Bioenergia</TabsTrigger>
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
                        ? 'bg-green-600 text-white'
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
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bioenergia" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center space-x-2">
                      <Leaf className="h-4 w-4 text-green-600" />
                      <span>Biomassa Disponível</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">45.2 ton</div>
                    <p className="text-xs text-gray-600">Pronta para processamento</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Energia Gerada</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">1,250 MWh</div>
                    <p className="text-xs text-gray-600">Neste mês</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center space-x-2">
                      <Recycle className="h-4 w-4 text-orange-600" />
                      <span>CO2 Evitado</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">890 ton</div>
                    <p className="text-xs text-gray-600">Emissões reduzidas</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Oportunidades de Bioenergia</CardTitle>
                  <CardDescription>
                    Potencial energético dos resíduos agrícolas disponíveis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-green-900">Bagaço de Cana</h4>
                        <p className="text-sm text-green-700">Alto potencial energético</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">2,400 MWh</p>
                        <p className="text-xs text-green-600">Potencial mensal</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-blue-900">Cascas de Arroz</h4>
                        <p className="text-sm text-blue-700">Biomassa para queima direta</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-blue-600">1,800 MWh</p>
                        <p className="text-xs text-blue-600">Potencial mensal</p>
                      </div>
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
                        <span className="text-sm font-medium">Lei nº 7.802/1989 - Agrotóxicos</span>
                        <Badge className="bg-green-100 text-green-800">Conforme</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">inpEV - Embalagens Vazias</span>
                        <Badge className="bg-orange-100 text-orange-800">Pendente</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">ENEC - Metas Circulares</span>
                        <Badge className="bg-green-100 text-green-800">Conforme</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Relatórios de Gestão</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Relatório de Resíduos Orgânicos
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Compostagem e Bioenergia
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Logística Reversa - Embalagens
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Certificação Orgânica
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Metas de Sustentabilidade Agrícola</CardTitle>
                  <CardDescription>
                    Acompanhamento das metas PNEC e ENEC para o setor
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">92%</p>
                      <p className="text-sm text-green-700">Compostagem</p>
                      <p className="text-xs text-gray-600">Meta: 85%</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">78%</p>
                      <p className="text-sm text-blue-700">Bioenergia</p>
                      <p className="text-xs text-gray-600">Meta: 75%</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">65%</p>
                      <p className="text-sm text-orange-700">Logística Reversa</p>
                      <p className="text-xs text-gray-600">Meta: 70%</p>
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

export default GestaoResiduosOrganicos;
