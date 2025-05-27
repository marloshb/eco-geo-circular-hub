
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TreinamentosPresenciais = () => {
  const [selectedRegion, setSelectedRegion] = useState('todos');

  const regions = [
    { id: 'todos', name: 'Todas as Regiões' },
    { id: 'sudeste', name: 'Sudeste' },
    { id: 'nordeste', name: 'Nordeste' },
    { id: 'sul', name: 'Sul' },
    { id: 'norte', name: 'Norte' },
    { id: 'centro-oeste', name: 'Centro-Oeste' }
  ];

  const treinamentos = [
    {
      id: 1,
      title: 'Oficina de Segurança para Catadores',
      description: 'Treinamento prático sobre uso de EPIs e manuseio seguro de resíduos.',
      date: '2024-02-15',
      time: '14:00 - 17:00',
      location: 'Cooperativa Recicla SP, São Paulo - SP',
      region: 'sudeste',
      maxParticipants: 30,
      currentParticipants: 18,
      instructor: 'Ana Silva - Especialista em Segurança do Trabalho',
      status: 'agendado',
      target: 'catadores',
      topics: ['EPIs obrigatórios', 'Primeiros socorros', 'Manuseio de resíduos perigosos'],
      partner: 'Cooperativa Recicla SP'
    },
    {
      id: 2,
      title: 'Eco-Design para Indústrias',
      description: 'Workshop sobre design circular e desenvolvimento de produtos sustentáveis.',
      date: '2024-02-20',
      time: '09:00 - 16:00',
      location: 'SENAI, Belo Horizonte - MG',
      region: 'sudeste',
      maxParticipants: 25,
      currentParticipants: 25,
      instructor: 'Dr. Carlos Mendes - Engenheiro de Produto',
      status: 'lotado',
      target: 'empresas',
      topics: ['Design circular', 'Análise de ciclo de vida', 'Materiais sustentáveis'],
      partner: 'SENAI'
    },
    {
      id: 3,
      title: 'Compostagem Comunitária',
      description: 'Técnicas de compostagem para resíduos orgânicos em comunidades rurais.',
      date: '2024-02-18',
      time: '08:00 - 12:00',
      location: 'Centro Comunitário, Petrolina - PE',
      region: 'nordeste',
      maxParticipants: 40,
      currentParticipants: 12,
      instructor: 'Maria Santos - Agrônoma',
      status: 'agendado',
      target: 'comunidades',
      topics: ['Separação de orgânicos', 'Técnicas de compostagem', 'Uso do composto'],
      partner: 'Prefeitura de Petrolina'
    },
    {
      id: 4,
      title: 'Gestão de Resíduos da Construção',
      description: 'Manejo adequado de entulho e materiais de construção civil.',
      date: '2024-02-12',
      time: '13:30 - 17:30',
      location: 'Centro de Treinamento SINDUSCON, Porto Alegre - RS',
      region: 'sul',
      maxParticipants: 35,
      currentParticipants: 28,
      instructor: 'Eng. Roberto Lima',
      status: 'confirmado',
      target: 'empresas',
      topics: ['Classificação de entulho', 'Reutilização de materiais', 'Logística reversa'],
      partner: 'SINDUSCON-RS'
    },
    {
      id: 5,
      title: 'Uso da Plataforma Digital',
      description: 'Capacitação para catadores usarem ferramentas digitais da plataforma.',
      date: '2024-02-25',
      time: '10:00 - 15:00',
      location: 'Centro Digital, Manaus - AM',
      region: 'norte',
      maxParticipants: 20,
      currentParticipants: 8,
      instructor: 'João Pereira - Instrutor Digital',
      status: 'agendado',
      target: 'catadores',
      topics: ['Navegação na plataforma', 'Localização de resíduos', 'Sistema de pagamentos'],
      partner: 'ONG TecnoSocial'
    },
    {
      id: 6,
      title: 'Logística Reversa no Varejo',
      description: 'Implementação de sistemas de logística reversa em empresas de varejo.',
      date: '2024-02-22',
      time: '09:00 - 13:00',
      location: 'Câmara de Comércio, Brasília - DF',
      region: 'centro-oeste',
      maxParticipants: 30,
      currentParticipants: 15,
      instructor: 'Dra. Fernanda Costa - Consultora em Sustentabilidade',
      status: 'agendado',
      target: 'empresas',
      topics: ['Marco legal da logística reversa', 'Implementação prática', 'Cases de sucesso'],
      partner: 'Câmara de Comércio do DF'
    }
  ];

  const filteredTreinamentos = selectedRegion === 'todos' 
    ? treinamentos 
    : treinamentos.filter(treinamento => treinamento.region === selectedRegion);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'agendado': return 'bg-blue-100 text-blue-800';
      case 'confirmado': return 'bg-green-100 text-green-800';
      case 'lotado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmado': return CheckCircle;
      case 'lotado': return AlertCircle;
      default: return Calendar;
    }
  };

  const getTargetColor = (target: string) => {
    switch (target) {
      case 'catadores': return 'bg-green-100 text-green-800';
      case 'empresas': return 'bg-blue-100 text-blue-800';
      case 'comunidades': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Treinamentos Presenciais</h2>
        <p className="text-gray-600 mb-6">
          Workshops e oficinas presenciais em parceria com ONGs, cooperativas e governos locais,
          focando em habilidades práticas para diferentes públicos da economia circular.
        </p>

        {/* Filtros por região */}
        <div className="flex flex-wrap gap-3 mb-6">
          {regions.map((region) => (
            <Button
              key={region.id}
              variant={selectedRegion === region.id ? "default" : "outline"}
              onClick={() => setSelectedRegion(region.id)}
            >
              {region.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Lista de treinamentos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTreinamentos.map((treinamento) => {
          const StatusIcon = getStatusIcon(treinamento.status);
          const isAvailable = treinamento.currentParticipants < treinamento.maxParticipants;
          
          return (
            <Card key={treinamento.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(treinamento.status)}>
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {treinamento.status === 'agendado' && 'Agendado'}
                      {treinamento.status === 'confirmado' && 'Confirmado'}
                      {treinamento.status === 'lotado' && 'Lotado'}
                    </Badge>
                    <Badge className={getTargetColor(treinamento.target)}>
                      {treinamento.target === 'catadores' && 'Catadores'}
                      {treinamento.target === 'empresas' && 'Empresas'}
                      {treinamento.target === 'comunidades' && 'Comunidades'}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {treinamento.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {treinamento.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Informações do evento */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>{new Date(treinamento.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{treinamento.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm md:col-span-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{treinamento.location}</span>
                    </div>
                  </div>

                  {/* Participantes */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>{treinamento.currentParticipants}/{treinamento.maxParticipants} participantes</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        {Math.round((treinamento.currentParticipants / treinamento.maxParticipants) * 100)}% ocupado
                      </div>
                    </div>
                  </div>

                  {/* Instrutor */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Instrutor: </span>
                      <span className="text-gray-600">{treinamento.instructor}</span>
                    </div>
                    <div className="text-sm mt-1">
                      <span className="font-medium text-gray-900">Parceiro: </span>
                      <span className="text-gray-600">{treinamento.partner}</span>
                    </div>
                  </div>

                  {/* Tópicos */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900">Tópicos abordados:</h4>
                    <div className="flex flex-wrap gap-1">
                      {treinamento.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Botão de ação */}
                  <Button 
                    className={`w-full ${
                      isAvailable 
                        ? 'bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700' 
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!isAvailable}
                  >
                    {isAvailable ? 'Inscrever-se' : 'Treinamento Lotado'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Seção de solicitação de treinamento */}
      <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Solicitar Novo Treinamento</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 mb-4">
              Não encontrou um treinamento na sua região? Solicite a organização de um novo workshop 
              para sua comunidade, cooperativa ou empresa.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700">
              Solicitar Treinamento
            </Button>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium text-gray-900 mb-2">Requisitos Mínimos</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Mínimo de 15 participantes interessados</li>
              <li>• Local adequado para realização</li>
              <li>• Parceiro local (ONG, cooperativa ou governo)</li>
              <li>• Antecedência mínima de 30 dias</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreinamentosPresenciais;
