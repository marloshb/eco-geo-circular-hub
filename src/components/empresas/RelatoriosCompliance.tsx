
import React, { useState } from 'react';
import { FileText, Download, CheckCircle, Clock, AlertTriangle, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const RelatoriosCompliance = () => {
  const [selectedRegulacao, setSelectedRegulacao] = useState('pnrs');

  const statusCompliance = [
    {
      regulacao: 'PNRS',
      status: 'compliant',
      proximaAuditoria: '2024-08-15',
      itensAtendidos: 24,
      itensTotal: 26,
      ultimoRelatorio: '2024-01-15'
    },
    {
      regulacao: 'ENEC',
      status: 'warning',
      proximaAuditoria: '2024-06-30',
      itensAtendidos: 18,
      itensTotal: 22,
      ultimoRelatorio: '2024-01-10'
    },
    {
      regulacao: 'ISO 59000',
      status: 'compliant',
      proximaAuditoria: '2024-09-20',
      itensAtendidos: 32,
      itensTotal: 32,
      ultimoRelatorio: '2024-01-20'
    },
    {
      regulacao: 'CONAMA 307',
      status: 'pending',
      proximaAuditoria: '2024-05-10',
      itensAtendidos: 12,
      itensTotal: 16,
      ultimoRelatorio: '2023-12-20'
    }
  ];

  const relatoriosDisponiveis = [
    {
      id: 1,
      titulo: 'Relatório PNRS - Janeiro 2024',
      tipo: 'PNRS',
      dataGeracao: '2024-01-31',
      tamanho: '2.4 MB',
      formato: 'PDF',
      status: 'Aprovado'
    },
    {
      id: 2,
      titulo: 'Análise de Conformidade ENEC',
      tipo: 'ENEC',
      dataGeracao: '2024-01-28',
      tamanho: '1.8 MB',
      formato: 'PDF',
      status: 'Pendente'
    },
    {
      id: 3,
      titulo: 'Certificação ISO 59000',
      tipo: 'ISO',
      dataGeracao: '2024-01-25',
      tamanho: '3.2 MB',
      formato: 'PDF',
      status: 'Aprovado'
    },
    {
      id: 4,
      titulo: 'Gestão RCD - CONAMA 307',
      tipo: 'CONAMA',
      dataGeracao: '2024-01-20',
      tamanho: '1.5 MB',
      formato: 'PDF',
      status: 'Revisão'
    }
  ];

  const indicadoresENEC = [
    { indicador: 'Taxa de Reciclagem', atual: '87.3%', meta: '90%', status: 'warning' },
    { indicador: 'Redução de Emissões', atual: '342 tCO2e', meta: '400 tCO2e', status: 'success' },
    { indicador: 'Materiais Circulares', atual: '68%', meta: '70%', status: 'warning' },
    { indicador: 'Inclusão Social', atual: '12 catadores', meta: '15 catadores', status: 'warning' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant':
      case 'success':
      case 'Aprovado':
        return 'bg-green-100 text-green-800';
      case 'warning':
      case 'Pendente':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
      case 'Revisão':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant':
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-orange-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Relatórios de Compliance</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <FileText className="h-4 w-4 mr-2" />
          Gerar Novo Relatório
        </Button>
      </div>

      {/* Status de Conformidade */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statusCompliance.map((item, index) => (
          <Card key={index} className="relative">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{item.regulacao}</CardTitle>
                {getStatusIcon(item.status)}
              </div>
              <Badge className={getStatusColor(item.status)}>
                {item.status === 'compliant' ? 'Conforme' : 
                 item.status === 'warning' ? 'Atenção' : 'Pendente'}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Conformidade:</span>
                  <span className="font-medium">{item.itensAtendidos}/{item.itensTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Próxima Auditoria:</span>
                  <span className="font-medium">{new Date(item.proximaAuditoria).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Último Relatório:</span>
                  <span className="font-medium">{new Date(item.ultimoRelatorio).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs value={selectedRegulacao} onValueChange={setSelectedRegulacao} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pnrs">PNRS</TabsTrigger>
          <TabsTrigger value="enec">ENEC</TabsTrigger>
          <TabsTrigger value="iso">ISO 59000</TabsTrigger>
          <TabsTrigger value="conama">CONAMA</TabsTrigger>
        </TabsList>

        <TabsContent value="pnrs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Política Nacional de Resíduos Sólidos</CardTitle>
              <CardDescription>
                Monitoramento da conformidade com a Lei 12.305/2010 e regulamentações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Logística Reversa</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Embalagens Plásticas:</span>
                      <Badge className="bg-green-100 text-green-800">92% coletadas</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Eletrônicos:</span>
                      <Badge className="bg-green-100 text-green-800">88% coletados</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Papel/Papelão:</span>
                      <Badge className="bg-yellow-100 text-yellow-800">76% coletados</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Destinação Final</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Reciclagem:</span>
                      <span className="font-medium">87.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reutilização:</span>
                      <span className="font-medium">8.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Aterro Sanitário:</span>
                      <span className="font-medium">4.0%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="enec" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Estratégia Nacional de Economia Circular</CardTitle>
              <CardDescription>
                Indicadores de performance conforme Decreto nº 12.082/2024
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {indicadoresENEC.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{item.indicador}</h4>
                      <p className="text-sm text-gray-600">Meta: {item.meta}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="font-bold text-lg">{item.atual}</span>
                      <Badge className={getStatusColor(item.status)}>
                        {item.status === 'success' ? 'Atingido' : 'Em progresso'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="iso" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>ISO 59000 - Economia Circular</CardTitle>
              <CardDescription>
                Gestão de sistemas de economia circular e medição de circularidade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Princípios Circulares</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Design Circular</span>
                      <Badge className="bg-green-100 text-green-800">Implementado</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Extensão de Vida</span>
                      <Badge className="bg-green-100 text-green-800">Implementado</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Recuperação de Valor</span>
                      <Badge className="bg-green-100 text-green-800">Implementado</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Métricas de Circularidade</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Índice Material Circular:</span>
                      <span className="font-medium">0.73</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxa de Circularidade:</span>
                      <span className="font-medium">68%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Redução de Pegada:</span>
                      <span className="font-medium">42%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conama" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>CONAMA 307/2002</CardTitle>
              <CardDescription>
                Gestão de resíduos da construção civil e demolição
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">87%</p>
                    <p className="text-sm text-blue-700">Classe A Reciclados</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">92%</p>
                    <p className="text-sm text-green-700">Madeira Reutilizada</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-2xl font-bold text-orange-600">78%</p>
                    <p className="text-sm text-orange-700">Metais Recuperados</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">65%</p>
                    <p className="text-sm text-purple-700">Gesso Tratado</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Lista de Relatórios */}
      <Card>
        <CardHeader>
          <CardTitle>Relatórios Gerados</CardTitle>
          <CardDescription>
            Histórico de relatórios de conformidade e certificações
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {relatoriosDisponiveis.map((relatorio) => (
              <div key={relatorio.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">{relatorio.titulo}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{relatorio.dataGeracao}</span>
                      <span>{relatorio.tamanho}</span>
                      <span>{relatorio.formato}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={getStatusColor(relatorio.status)}>
                    {relatorio.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gerador de Relatório Personalizado */}
      <Card>
        <CardHeader>
          <CardTitle>Gerar Relatório Personalizado</CardTitle>
          <CardDescription>
            Configure um relatório específico para suas necessidades
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="periodo">Período</Label>
              <Input type="month" id="periodo" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="regulacao">Regulamentação</Label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>PNRS</option>
                <option>ENEC</option>
                <option>ISO 59000</option>
                <option>CONAMA 307</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="formato">Formato</Label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>PDF</option>
                <option>Excel</option>
                <option>CSV</option>
              </select>
            </div>
          </div>
          <Button className="mt-4 bg-green-600 hover:bg-green-700">
            <Calendar className="h-4 w-4 mr-2" />
            Gerar Relatório
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RelatoriosCompliance;
