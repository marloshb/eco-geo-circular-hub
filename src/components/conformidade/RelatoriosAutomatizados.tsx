
import React, { useState } from 'react';
import { FileText, Download, Calendar, Filter, Building, Users, Recycle, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const RelatoriosAutomatizados = () => {
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [periodoFiltro, setPeriodoFiltro] = useState('mes');

  const tiposRelatorio = [
    { id: 'pnrs', nome: 'PNRS - Logística Reversa', cor: 'bg-blue-100 text-blue-800' },
    { id: 'enec', nome: 'ENEC - Metas Circulares', cor: 'bg-green-100 text-green-800' },
    { id: 'pnec', nome: 'PNEC - Inclusão Social', cor: 'bg-purple-100 text-purple-800' },
    { id: 'geral', nome: 'Conformidade Geral', cor: 'bg-orange-100 text-orange-800' }
  ];

  const relatorios = [
    {
      id: 'REL-2024-001',
      titulo: 'Relatório Mensal PNRS - Janeiro 2024',
      tipo: 'pnrs',
      dataGeracao: '2024-01-31',
      periodo: 'Janeiro 2024',
      entidades: ['TechCorp', 'AgroVerde', 'RetailVerde'],
      metricas: {
        residuosColetados: '847 toneladas',
        taxaReciclagem: '78%',
        empresasConformes: '24 de 30',
        catadoresEnvolvidos: '156'
      },
      status: 'Aprovado',
      tamanho: '2.4 MB'
    },
    {
      id: 'REL-2024-002',
      titulo: 'Análise de Inclusão Social - Catadores Q1',
      tipo: 'pnec',
      dataGeracao: '2024-01-25',
      periodo: 'Q1 2024',
      entidades: ['Cooperativa Centro', 'Cooperativa Norte', 'Catadores Independentes'],
      metricas: {
        catadoresRegistrados: '1.247',
        rendaMedia: 'R$ 1.340',
        cooperativasAtivas: '12',
        coletasRealizadas: '3.456'
      },
      status: 'Em Análise',
      tamanho: '1.8 MB'
    },
    {
      id: 'REL-2024-003',
      titulo: 'Indicadores ENEC - Economia Circular',
      tipo: 'enec',
      dataGeracao: '2024-01-20',
      periodo: 'Janeiro 2024',
      entidades: ['Setor Manufatura', 'Setor Agricultura', 'Setor Construção'],
      metricas: {
        materiaisReutilizados: '2.145 toneladas',
        reducaoResiduos: '34%',
        eficienciaRecursos: '67%',
        emissoesCO2Evitadas: '1.890 tCO2'
      },
      status: 'Aprovado',
      tamanho: '3.1 MB'
    },
    {
      id: 'REL-2024-004',
      titulo: 'Conformidade Geral - Dashboard Executivo',
      tipo: 'geral',
      dataGeracao: '2024-01-28',
      periodo: 'Janeiro 2024',
      entidades: ['Todas as Entidades Registradas'],
      metricas: {
        conformidadeGeral: '87%',
        auditoriasRealizadas: '45',
        naoConformidades: '23',
        acoesPendentes: '12'
      },
      status: 'Publicado',
      tamanho: '5.2 MB'
    }
  ];

  const modelosRelatorio = [
    {
      nome: 'Relatório PNRS Empresarial',
      descricao: 'Modelo padrão para empresas reportarem logística reversa',
      frequencia: 'Mensal',
      setores: ['Manufatura', 'Varejo', 'Energia']
    },
    {
      nome: 'Relatório ENEC Setorial',
      descricao: 'Indicadores de economia circular por setor',
      frequencia: 'Trimestral',
      setores: ['Todos os setores']
    },
    {
      nome: 'Relatório Inclusão Social',
      descricao: 'Monitoramento da participação de catadores',
      frequencia: 'Mensal',
      setores: ['Cooperativas', 'Catadores']
    }
  ];

  const relatoriosFiltrados = relatorios.filter(rel => {
    if (filtroTipo === 'todos') return true;
    return rel.tipo === filtroTipo;
  });

  const getTipoInfo = (tipo: string) => {
    return tiposRelatorio.find(t => t.id === tipo) || tiposRelatorio[0];
  };

  return (
    <div className="space-y-6">
      {/* Filtros e Ações */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-blue-600" />
            <span>Relatórios Automatizados</span>
          </CardTitle>
          <CardDescription>
            Geração e gerenciamento de relatórios de conformidade regulatória
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <select
                className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.target.value)}
              >
                <option value="todos">Todos os Tipos</option>
                {tiposRelatorio.map(tipo => (
                  <option key={tipo.id} value={tipo.id}>{tipo.nome}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                className="h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
                value={periodoFiltro}
                onChange={(e) => setPeriodoFiltro(e.target.value)}
              >
                <option value="mes">Este Mês</option>
                <option value="trimestre">Este Trimestre</option>
                <option value="ano">Este Ano</option>
              </select>
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros Avançados
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <FileText className="h-4 w-4 mr-2" />
              Novo Relatório
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Relatórios */}
      <div className="space-y-4">
        {relatoriosFiltrados.map((relatorio) => {
          const tipoInfo = getTipoInfo(relatorio.tipo);
          return (
            <Card key={relatorio.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{relatorio.titulo}</h3>
                      <Badge className={tipoInfo.cor}>
                        {tipoInfo.nome}
                      </Badge>
                      <Badge 
                        variant={relatorio.status === 'Aprovado' || relatorio.status === 'Publicado' ? 'default' : 'secondary'}
                      >
                        {relatorio.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      ID: {relatorio.id} • Gerado em {relatorio.dataGeracao} • {relatorio.tamanho}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Entidades Incluídas</h4>
                    <div className="flex flex-wrap gap-2">
                      {relatorio.entidades.map((entidade, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {entidade}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Métricas Principais</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(relatorio.metricas).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                          </span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar PDF
                  </Button>
                  <Button variant="outline" size="sm">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Ver Gráficos
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar Envio
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Compartilhar
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Modelos de Relatório */}
      <Card>
        <CardHeader>
          <CardTitle>Modelos de Relatório</CardTitle>
          <CardDescription>
            Templates pré-configurados para diferentes tipos de conformidade
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modelosRelatorio.map((modelo, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{modelo.nome}</h4>
                  <Badge variant="secondary">{modelo.frequencia}</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{modelo.descricao}</p>
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-1">Setores aplicáveis:</p>
                  <div className="flex flex-wrap gap-1">
                    {modelo.setores.map((setor, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{setor}</Badge>
                    ))}
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full">
                  Usar Modelo
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RelatoriosAutomatizados;
