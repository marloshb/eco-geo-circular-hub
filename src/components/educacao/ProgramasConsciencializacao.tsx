
import React, { useState } from 'react';
import { Heart, Users, Megaphone, Calendar, Target, BookOpen, Video, Share2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const ProgramasConsciencializacao = () => {
  const [selectedProgram, setSelectedProgram] = useState('consumidores');

  const programas = [
    {
      id: 'consumidores',
      title: 'Conscientização para Consumidores',
      description: 'Campanhas educativas para promover consumo consciente e práticas sustentáveis',
      icon: Users,
      color: 'text-green-600',
      participants: 15420,
      impact: '2.3M kg de resíduos evitados'
    },
    {
      id: 'escolas',
      title: 'Educação Ambiental Escolar',
      description: 'Programas educacionais para crianças e jovens sobre economia circular',
      icon: BookOpen,
      color: 'text-blue-600',
      participants: 8950,
      impact: '340 escolas participantes'
    },
    {
      id: 'comunidades',
      title: 'Mobilização Comunitária',
      description: 'Iniciativas locais para engajar comunidades em práticas circulares',
      icon: Heart,
      color: 'text-purple-600',
      participants: 6780,
      impact: '120 comunidades ativas'
    },
    {
      id: 'empresas',
      title: 'Sensibilização Empresarial',
      description: 'Workshops e palestras para empresas sobre sustentabilidade corporativa',
      icon: Target,
      color: 'text-orange-600',
      participants: 2340,
      impact: '580 empresas capacitadas'
    }
  ];

  const campanhas = [
    {
      id: 1,
      title: 'Setembro Sem Desperdício',
      description: 'Campanha nacional de redução de desperdício de alimentos e materiais.',
      status: 'ativa',
      duration: '30 dias',
      participants: 45200,
      goal: 'Reduzir 50% do desperdício doméstico',
      progress: 67,
      materials: ['Vídeos educativos', 'Infográficos', 'Dicas diárias', 'Receitas aproveitamento'],
      social: { shares: 12400, likes: 8900, comments: 2100 }
    },
    {
      id: 2,
      title: 'Outubro Rosa Circular',
      description: 'Conectando consciência sobre saúde com práticas sustentáveis.',
      status: 'planejada',
      duration: '31 dias',
      participants: 0,
      goal: 'Coletar 100 toneladas de materiais recicláveis',
      progress: 0,
      materials: ['Kits educativos', 'Palestras online', 'Pontos de coleta temáticos'],
      social: { shares: 0, likes: 0, comments: 0 }
    },
    {
      id: 3,
      title: 'Natal Sustentável',
      description: 'Promovendo presentes conscientes e decorações reutilizáveis.',
      status: 'planejada',
      duration: '45 dias',
      participants: 0,
      goal: 'Reduzir 30% dos resíduos natalinos',
      progress: 0,
      materials: ['Guias de presentes', 'Oficinas DIY', 'Receitas sustentáveis'],
      social: { shares: 0, likes: 0, comments: 0 }
    }
  ];

  const conteudos = [
    {
      id: 1,
      title: 'Como Reduzir o Lixo na Cozinha',
      type: 'video',
      duration: '8 min',
      views: 12400,
      rating: 4.8,
      description: 'Dicas práticas para minimizar desperdício alimentar e embalagens.',
      topics: ['Planejamento de compras', 'Armazenamento correto', 'Aproveitamento integral']
    },
    {
      id: 2,
      title: 'Guia de Compras Sustentáveis',
      type: 'guide',
      duration: '15 min leitura',
      views: 8900,
      rating: 4.6,
      description: 'Manual completo para fazer escolhas mais conscientes no consumo.',
      topics: ['Critérios de escolha', 'Certificações', 'Marcas sustentáveis']
    },
    {
      id: 3,
      title: 'Quiz: Você é um Consumidor Consciente?',
      type: 'interactive',
      duration: '5 min',
      views: 15600,
      rating: 4.9,
      description: 'Teste interativo para avaliar seus hábitos de consumo.',
      topics: ['Autoavaliação', 'Dicas personalizadas', 'Plano de ação']
    },
    {
      id: 4,
      title: 'DIY: Transforme Embalagens em Organizadores',
      type: 'tutorial',
      duration: '12 min',
      views: 6780,
      rating: 4.7,
      description: 'Tutorial passo a passo para reutilizar embalagens criativamete.',
      topics: ['Materiais necessários', 'Passo a passo', 'Variações criativas']
    }
  ];

  const iniciativas = [
    {
      id: 1,
      title: 'Escola Verde',
      description: 'Programa de educação ambiental em escolas públicas',
      target: 'Estudantes de 6-18 anos',
      reach: '340 escolas',
      impact: '45,000 estudantes capacitados',
      activities: ['Palestras interativas', 'Hortas escolares', 'Oficinas de reciclagem', 'Feira de ciências']
    },
    {
      id: 2,
      title: 'Comunidade Circular',
      description: 'Mobilização de bairros para práticas sustentáveis',
      target: 'Moradores de comunidades',
      reach: '120 comunidades',
      impact: '25,000 famílias engajadas',
      activities: ['Mutirões de limpeza', 'Composteiras comunitárias', 'Troca de saberes', 'Pontos de coleta']
    },
    {
      id: 3,
      title: 'Empresa Responsável',
      description: 'Capacitação empresarial em sustentabilidade',
      target: 'Gestores e funcionários',
      reach: '580 empresas',
      impact: 'R$ 12M em economia de recursos',
      activities: ['Workshops executivos', 'Auditorias ambientais', 'Certificações', 'Networking sustentável']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativa': return 'bg-green-100 text-green-800';
      case 'planejada': return 'bg-blue-100 text-blue-800';
      case 'finalizada': return 'bg-gray-100 text-gray-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'guide': return BookOpen;
      case 'interactive': return Target;
      case 'tutorial': return Users;
      default: return BookOpen;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Programas de Conscientização</h2>
        <p className="text-gray-600 mb-6">
          Campanhas educativas e iniciativas de conscientização para promover práticas de economia circular,
          consumo consciente e sustentabilidade em diferentes públicos e contextos.
        </p>

        {/* Seletor de programas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {programas.map((programa) => {
            const Icon = programa.icon;
            
            return (
              <Card 
                key={programa.id} 
                className={`cursor-pointer transition-all duration-300 ${
                  selectedProgram === programa.id 
                    ? 'ring-2 ring-purple-500 shadow-lg' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedProgram(programa.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Icon className={`h-5 w-5 ${programa.color}`} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{programa.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{programa.description}</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Participantes:</span>
                      <span className="font-medium">{programa.participants.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Impacto:</span>
                      <span className="font-medium text-green-600">{programa.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Campanhas Ativas */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">Campanhas Nacionais</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {campanhas.map((campanha) => (
            <Card key={campanha.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className={getStatusColor(campanha.status)}>
                      {campanha.status === 'ativa' && 'Campanha Ativa'}
                      {campanha.status === 'planejada' && 'Em Planejamento'}
                      {campanha.status === 'finalizada' && 'Finalizada'}
                    </Badge>
                    <CardTitle className="text-lg font-bold text-gray-900 mt-2">
                      {campanha.title}
                    </CardTitle>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">{campanha.duration}</div>
                  </div>
                </div>
                <CardDescription className="text-gray-600">
                  {campanha.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Participantes:</span>
                      <p className="font-medium">{campanha.participants.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Meta:</span>
                      <p className="font-medium text-green-600">{campanha.goal}</p>
                    </div>
                  </div>

                  {campanha.status === 'ativa' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progresso</span>
                        <span className="text-gray-900 font-medium">{campanha.progress}%</span>
                      </div>
                      <Progress value={campanha.progress} className="h-2" />
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Materiais disponíveis:</h4>
                    <div className="flex flex-wrap gap-1">
                      {campanha.materials.map((material, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {campanha.status === 'ativa' && (
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-1">
                        <Share2 className="h-4 w-4" />
                        <span>Engajamento Social</span>
                      </h4>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center">
                          <div className="font-medium">{campanha.social.shares}</div>
                          <div className="text-gray-600">Compartilhamentos</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium">{campanha.social.likes}</div>
                          <div className="text-gray-600">Curtidas</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium">{campanha.social.comments}</div>
                          <div className="text-gray-600">Comentários</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button 
                    className={`w-full ${
                      campanha.status === 'ativa' 
                        ? 'bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700' 
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    disabled={campanha.status !== 'ativa'}
                  >
                    {campanha.status === 'ativa' ? 'Participar da Campanha' : 'Em Breve'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Conteúdos Educativos */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">Conteúdos Populares</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conteudos.map((conteudo) => {
            const TypeIcon = getTypeIcon(conteudo.type);
            
            return (
              <Card key={conteudo.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <TypeIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {conteudo.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span>{conteudo.duration}</span>
                        <span>•</span>
                        <span>{conteudo.views.toLocaleString()} visualizações</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <span>⭐</span>
                          <span>{conteudo.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {conteudo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Tópicos abordados:</h4>
                      <div className="flex flex-wrap gap-1">
                        {conteudo.topics.map((topic, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700">
                      Acessar Conteúdo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Iniciativas Locais */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">Iniciativas Locais</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {iniciativas.map((iniciativa) => (
            <Card key={iniciativa.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">
                  {iniciativa.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {iniciativa.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Público-alvo:</span>
                      <span className="font-medium">{iniciativa.target}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Alcance:</span>
                      <span className="font-medium">{iniciativa.reach}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Impacto:</span>
                      <span className="font-medium text-green-600">{iniciativa.impact}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Atividades:</h4>
                    <ul className="space-y-1">
                      {iniciativa.activities.map((activity, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full">
                    Saiba Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Chamada para ação */}
      <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Participe dos Programas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 mb-4">
              Engaje-se em nossas campanhas de conscientização, compartilhe conhecimento 
              e ajude a construir uma sociedade mais sustentável e circular.
            </p>
            <div className="space-y-2">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700">
                <Megaphone className="h-4 w-4 mr-2" />
                Participar de Campanha
              </Button>
              <Button variant="outline" className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Agendar Palestra
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium text-gray-900 mb-2">Próximos Eventos</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Workshop de Compostagem</span>
                <span className="font-medium">15/02</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Feira de Sustentabilidade</span>
                <span className="font-medium">22/02</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Palestra Empresarial</span>
                <span className="font-medium">28/02</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramasConsciencializacao;
