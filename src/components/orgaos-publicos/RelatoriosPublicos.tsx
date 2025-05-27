
import React from 'react';
import { FileText, Download, Calendar, Filter, Award, Building, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const RelatoriosPublicos = () => {
  const relatoriosRecentes = [
    {
      id: 'REL-2024-001',
      titulo: 'Relatório Anual PNEC 2023',
      categoria: 'Conformidade Nacional',
      dataGeracao: '2024-01-15',
      autor: 'Ministério do Meio Ambiente',
      status: 'finalizado',
      downloads: 2847,
      paginas: 156,
      formato: 'PDF'
    },
    {
      id: 'REL-2024-002',
      titulo: 'Indicadores Regionais Q4 2023',
      categoria: 'Desempenho Regional',
      dataGeracao: '2024-01-10',
      autor: 'IBGE - Divisão Ambiental',
      status: 'finalizado',
      downloads: 1523,
      paginas: 89,
      formato: 'PDF/Excel'
    },
    {
      id: 'REL-2024-003',
      titulo: 'Auditoria Logística Reversa SP',
      categoria: 'Auditoria Setorial',
      dataGeracao: '2024-01-12',
      autor: 'CETESB São Paulo',
      status: 'em-revisao',
      downloads: 892,
      paginas: 134,
      formato: 'PDF'
    }
  ];

  const tiposRelatorios = [
    {
      categoria: 'Conformidade PNRS',
      descricao: 'Relatórios de conformidade com a Política Nacional de Resíduos Sólidos',
      frequencia: 'Trimestral',
      ultimaAtualizacao: '2024-01-10',
      proxima: '2024-04-10',
      icone: Award
    },
    {
      categoria: 'Indicadores ENEC',
      descricao: 'Monitoramento da Estratégia Nacional de Economia Circular',
      frequencia: 'Semestral',
      ultimaAtualizacao: '2024-01-15',
      proxima: '2024-07-15',
      icone: TrendingUp
    },
    {
      categoria: 'Desempenho Setorial',
      descricao: 'Análise por setor: manufatura, agricultura, construção, varejo, energia',
      frequencia: 'Anual',
      ultimaAtualizacao: '2023-12-31',
      proxima: '2024-12-31',
      icone: Building
    },
    {
      categoria: 'Inclusão Social',
      descricao: 'Relatórios sobre formalização de catadores e cooperativas',
      frequencia: 'Trimestral',
      ultimaAtualizacao: '2024-01-08',
      proxima: '2024-04-08',
      icone: Users
    }
  ];

  const metricas = [
    { nome: 'Relatórios Gerados (2023)', valor: 892, crescimento: '+23%' },
    { nome: 'Downloads Totais', valor: 45623, crescimento: '+67%' },
    { nome: 'Órgãos Participantes', valor: 156, crescimento: '+12%' },
    { nome: 'Auditorias Realizadas', valor: 234, crescimento: '+34%' }
  ];

  const dadosExportacao = [
    {
      tipo: 'Dados Geoespaciais',
      formato: 'GeoJSON, KML, Shapefile',
      tamanho: '2.3 GB',
      atualizacao: 'Tempo Real'
    },
    {
      tipo: 'Indicadores PNEC',
      formato: 'CSV, Excel, JSON',
      tamanho: '156 MB',
      atualizacao: 'Diária'
    },
    {
      tipo: 'Dados de Sensores IoT',
      formato: 'JSON, CSV',
      tamanho: '892 MB',
      atualizacao: 'Tempo Real'
    },
    {
      tipo: 'Relatórios Consolidados',
      formato: 'PDF, Word, Excel',
      tamanho: '445 MB',
      atualizacao: 'Semanal'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'finalizado': return 'text-green-600';
      case 'em-revisao': return 'text-yellow-600';
      case 'rascunho': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'finalizado': return 'default';
      case 'em-revisao': return 'secondary';
      case 'rascunho': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Métricas de Relatórios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricas.map((metrica, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600">{metrica.nome}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metrica.valor.toLocaleString()}
                  </p>
                </div>
                <Badge variant="outline" className="text-green-600 border-green-300">
                  {metrica.crescimento}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Relatórios Recentes */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-blue-600" />
                <span>Relatórios Recentes</span>
              </CardTitle>
              <CardDescription>
                Últimos relatórios gerados e disponíveis para download
              </CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtrar
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Período
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {relatoriosRecentes.map((relatorio, index) => (
              <div key={index} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium text-gray-900">{relatorio.titulo}</h4>
                    <Badge variant={getStatusBadge(relatorio.status)}>
                      {relatorio.status === 'finalizado' ? 'Finalizado' :
                       relatorio.status === 'em-revisao' ? 'Em Revisão' : 'Rascunho'}
                    </Badge>
                    <Badge variant="outline">{relatorio.id}</Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Categoria:</span>
                      <p>{relatorio.categoria}</p>
                    </div>
                    <div>
                      <span className="font-medium">Autor:</span>
                      <p>{relatorio.autor}</p>
                    </div>
                    <div>
                      <span className="font-medium">Data:</span>
                      <p>{new Date(relatorio.dataGeracao).toLocaleDateString('pt-BR')}</p>
                    </div>
                    <div>
                      <span className="font-medium">Downloads:</span>
                      <p>{relatorio.downloads.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right text-sm text-gray-600">
                    <p>{relatorio.paginas} páginas</p>
                    <p>{relatorio.formato}</p>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tipos de Relatórios */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-green-600" />
              <span>Tipos de Relatórios</span>
            </CardTitle>
            <CardDescription>
              Categorias de relatórios disponíveis na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tiposRelatorios.map((tipo, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex items-start space-x-3">
                    <tipo.icone className="h-5 w-5 text-blue-600 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{tipo.categoria}</h4>
                      <p className="text-sm text-gray-600 mb-2">{tipo.descricao}</p>
                      <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                        <div>
                          <span className="font-medium">Frequência:</span>
                          <p>{tipo.frequencia}</p>
                        </div>
                        <div>
                          <span className="font-medium">Próximo:</span>
                          <p>{new Date(tipo.proxima).toLocaleDateString('pt-BR')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Exportação de Dados */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="h-6 w-6 text-purple-600" />
              <span>Exportação de Dados</span>
            </CardTitle>
            <CardDescription>
              Dados brutos disponíveis para análise personalizada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dadosExportacao.map((dados, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{dados.tipo}</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Formatos: {dados.formato}</p>
                      <p>Tamanho: {dados.tamanho}</p>
                      <p>Atualização: {dados.atualizacao}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Exportar
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Relatórios Customizados */}
      <Card>
        <CardHeader>
          <CardTitle>Gerador de Relatórios Customizados</CardTitle>
          <CardDescription>
            Crie relatórios personalizados com filtros específicos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Ferramenta de Geração de Relatórios
            </h3>
            <p className="text-gray-500 mb-6">
              Configure filtros personalizados por região, período, setor e indicadores específicos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="p-3 bg-white rounded border">
                <h4 className="font-medium text-gray-900 mb-1">Período</h4>
                <p className="text-sm text-gray-600">Selecione datas específicas</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h4 className="font-medium text-gray-900 mb-1">Região</h4>
                <p className="text-sm text-gray-600">Estados, municípios ou áreas</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h4 className="font-medium text-gray-900 mb-1">Setores</h4>
                <p className="text-sm text-gray-600">Manufatura, agricultura, etc.</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h4 className="font-medium text-gray-900 mb-1">Indicadores</h4>
                <p className="text-sm text-gray-600">PNEC, ENEC, PNRS</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Gerar Relatório Customizado
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RelatoriosPublicos;
