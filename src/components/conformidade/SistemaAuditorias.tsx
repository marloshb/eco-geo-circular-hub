
import React, { useState } from 'react';
import { Search, Filter, FileText, Calendar, MapPin, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

const SistemaAuditorias = () => {
  const [filtroStatus, setFiltroStatus] = useState<string[]>([]);
  const [busca, setBusca] = useState('');

  const statusAuditoria = ['Agendada', 'Em Andamento', 'Concluída', 'Pendente', 'Aprovada'];

  const auditorias = [
    {
      id: 'AUD-2024-001',
      empresa: 'TechCorp Industrial Ltda',
      tipo: 'PNRS - Logística Reversa',
      status: 'Em Andamento',
      auditor: 'Maria Silva',
      dataInicio: '2024-01-15',
      dataFim: '2024-01-20',
      localizacao: 'São Paulo - SP',
      conformidade: 85,
      setor: 'Manufatura',
      itensVerificados: ['Eletrônicos', 'Baterias', 'Embalagens'],
      observacoes: 'Documentação da logística reversa de eletrônicos incompleta'
    },
    {
      id: 'AUD-2024-002',
      empresa: 'AgroVerde Cooperativa',
      tipo: 'ENEC - Resíduos Orgânicos',
      status: 'Concluída',
      auditor: 'João Santos',
      dataInicio: '2024-01-10',
      dataFim: '2024-01-12',
      localizacao: 'Campinas - SP',
      conformidade: 92,
      setor: 'Agricultura',
      itensVerificados: ['Compostagem', 'Bioenergia', 'Rastreamento'],
      observacoes: 'Excelente gestão de resíduos orgânicos'
    },
    {
      id: 'AUD-2024-003',
      empresa: 'Construções Sustentáveis S.A.',
      tipo: 'PNEC - Inclusão Social',
      status: 'Agendada',
      auditor: 'Ana Costa',
      dataInicio: '2024-01-25',
      dataFim: '2024-01-27',
      localizacao: 'Rio de Janeiro - RJ',
      conformidade: 0,
      setor: 'Construção',
      itensVerificados: ['Catadores', 'Cooperativas', 'Pagamentos'],
      observacoes: 'Auditoria focada na integração de catadores'
    },
    {
      id: 'AUD-2024-004',
      empresa: 'RetailVerde Shopping',
      tipo: 'PNRS - Gestão de Resíduos',
      status: 'Pendente',
      auditor: 'Carlos Lima',
      dataInicio: '2024-01-18',
      dataFim: '2024-01-22',
      localizacao: 'Brasília - DF',
      conformidade: 78,
      setor: 'Varejo',
      itensVerificados: ['Embalagens', 'Logística Reversa', 'Separação'],
      observacoes: 'Melhorias necessárias na separação de resíduos'
    }
  ];

  const handleFiltroChange = (status: string) => {
    setFiltroStatus(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  const auditoriasFiltradas = auditorias.filter(auditoria => {
    const correspondeTexto = auditoria.empresa.toLowerCase().includes(busca.toLowerCase()) ||
                           auditoria.tipo.toLowerCase().includes(busca.toLowerCase());
    const correspondeStatus = filtroStatus.length === 0 || filtroStatus.includes(auditoria.status);
    return correspondeTexto && correspondeStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Agendada': return Clock;
      case 'Em Andamento': return AlertTriangle;
      case 'Concluída': return CheckCircle;
      case 'Pendente': return AlertTriangle;
      case 'Aprovada': return CheckCircle;
      default: return FileText;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Agendada': return 'text-blue-600';
      case 'Em Andamento': return 'text-orange-600';
      case 'Concluída': return 'text-green-600';
      case 'Pendente': return 'text-red-600';
      case 'Aprovada': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filtros e Busca */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-6 w-6 text-blue-600" />
            <span>Sistema de Auditorias</span>
          </CardTitle>
          <CardDescription>
            Registro e acompanhamento de auditorias de conformidade regulatória
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Buscar por empresa ou tipo de auditoria..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Exportar Relatório
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="h-4 w-4 mr-2" />
              Agendar Auditoria
            </Button>
          </div>

          <div>
            <h4 className="font-medium mb-3">Filtrar por Status:</h4>
            <div className="flex flex-wrap gap-3">
              {statusAuditoria.map(status => (
                <div key={status} className="flex items-center space-x-2">
                  <Checkbox
                    id={status}
                    checked={filtroStatus.includes(status)}
                    onCheckedChange={() => handleFiltroChange(status)}
                  />
                  <label htmlFor={status} className="text-sm">{status}</label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Auditorias */}
      <div className="space-y-4">
        {auditoriasFiltradas.map((auditoria) => {
          const StatusIcon = getStatusIcon(auditoria.status);
          return (
            <Card key={auditoria.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{auditoria.empresa}</h3>
                      <Badge variant="outline">{auditoria.setor}</Badge>
                      <Badge 
                        variant={auditoria.status === 'Aprovada' || auditoria.status === 'Concluída' ? 'default' : 
                               auditoria.status === 'Em Andamento' ? 'secondary' : 'destructive'}
                        className="flex items-center space-x-1"
                      >
                        <StatusIcon className="h-3 w-3" />
                        <span>{auditoria.status}</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">ID: {auditoria.id} • {auditoria.tipo}</p>
                  </div>
                  {auditoria.conformidade > 0 && (
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Conformidade</p>
                      <p className={`text-2xl font-bold ${auditoria.conformidade >= 90 ? 'text-green-600' : 
                                   auditoria.conformidade >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {auditoria.conformidade}%
                      </p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <div>
                      <p className="text-xs">Período</p>
                      <p className="text-sm font-medium">{auditoria.dataInicio} a {auditoria.dataFim}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <div>
                      <p className="text-xs">Localização</p>
                      <p className="text-sm font-medium">{auditoria.localizacao}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FileText className="h-4 w-4" />
                    <div>
                      <p className="text-xs">Auditor</p>
                      <p className="text-sm font-medium">{auditoria.auditor}</p>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    <p className="text-xs">Itens Verificados</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {auditoria.itensVerificados.map((item, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{item}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {auditoria.observacoes && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-700">
                      <strong>Observações:</strong> {auditoria.observacoes}
                    </p>
                  </div>
                )}

                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Ver Relatório
                  </Button>
                  <Button variant="outline" size="sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    Localização GIS
                  </Button>
                  {auditoria.status === 'Pendente' && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Revisar Pendências
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {auditoriasFiltradas.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Nenhuma auditoria encontrada
            </h3>
            <p className="text-gray-500">
              Tente ajustar os filtros ou verifique novamente mais tarde
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SistemaAuditorias;
