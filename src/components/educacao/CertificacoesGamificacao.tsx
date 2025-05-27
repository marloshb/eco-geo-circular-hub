
import React, { useState } from 'react';
import { Award, Trophy, Star, Medal, Target, Users, TrendingUp, Gift } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const CertificacoesGamificacao = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todas as Certificações' },
    { id: 'catadores', name: 'Para Catadores' },
    { id: 'empresas', name: 'Para Empresas' },
    { id: 'consumidores', name: 'Para Consumidores' }
  ];

  const certificacoes = [
    {
      id: 1,
      title: 'Especialista em Reciclagem',
      description: 'Certificação para catadores que dominam técnicas avançadas de separação e classificação.',
      category: 'catadores',
      level: 'Avançado',
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      requirements: ['Completar 5 módulos de treinamento', 'Coletar 500kg de recicláveis', 'Participar de 2 oficinas presenciais'],
      benefits: ['Reconhecimento no perfil', '+50% bônus em pontos', 'Acesso a materiais premium'],
      holders: 342,
      progress: 78
    },
    {
      id: 2,
      title: 'Líder em Eco-Design',
      description: 'Para empresas que implementam princípios de design circular em seus produtos.',
      category: 'empresas',
      level: 'Intermediário',
      icon: Medal,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      requirements: ['Redesenhar 3 produtos', 'Reduzir 20% do uso de materiais virgens', 'Implementar logística reversa'],
      benefits: ['Selo Verde Brasil', 'Destaque no marketplace', 'Relatórios de impacto'],
      holders: 89,
      progress: 65
    },
    {
      id: 3,
      title: 'Cidadão Circular',
      description: 'Reconhecimento para consumidores engajados em práticas de economia circular.',
      category: 'consumidores',
      level: 'Básico',
      icon: Star,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      requirements: ['Devolver 50 embalagens', 'Comprar 10 produtos reutilizados', 'Compartilhar 5 dicas sustentáveis'],
      benefits: ['Descontos em parceiros', 'Acesso a eventos exclusivos', 'Badge no perfil social'],
      holders: 1247,
      progress: 92
    },
    {
      id: 4,
      title: 'Mestre em Compostagem',
      description: 'Para especialistas em gestão de resíduos orgânicos e técnicas de compostagem.',
      category: 'catadores',
      level: 'Avançado',
      icon: Trophy,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      requirements: ['Processar 1 tonelada de orgânicos', 'Ministrar workshop sobre compostagem', 'Criar sistema de compostagem comunitária'],
      benefits: ['Status de instrutor', 'Oportunidades de consultoria', 'Equipamentos subsidiados'],
      holders: 67,
      progress: 45
    }
  ];

  const desafios = [
    {
      id: 1,
      title: 'Desafio da Semana Verde',
      description: 'Colete 100kg de recicláveis em 7 dias',
      type: 'individual',
      duration: '7 dias',
      participants: 324,
      reward: '500 pontos + distintivo',
      progress: 67,
      icon: Target,
      status: 'ativo'
    },
    {
      id: 2,
      title: 'Competição Regional Nordeste',
      description: 'Cooperativas competem por maior volume reciclado',
      type: 'equipe',
      duration: '30 dias',
      participants: 45,
      reward: 'R$ 5.000 + equipamentos',
      progress: 23,
      icon: Users,
      status: 'ativo'
    },
    {
      id: 3,
      title: 'Maratona de Devolução',
      description: 'Consumidores devolvem embalagens em massa',
      type: 'comunidade',
      duration: '14 dias',
      participants: 1567,
      reward: 'Desconto de 20% em produtos parceiros',
      progress: 89,
      icon: Gift,
      status: 'finalizando'
    }
  ];

  const rankings = [
    { position: 1, name: 'Cooperativa Recicla SP', points: 12450, badge: '🥇', change: '+2' },
    { position: 2, name: 'João Silva (Catador)', points: 8920, badge: '🥈', change: '0' },
    { position: 3, name: 'EcoTech Indústrias', points: 7830, badge: '🥉', change: '-1' },
    { position: 4, name: 'Maria Santos (Catadora)', points: 6750, badge: '🏅', change: '+1' },
    { position: 5, name: 'Recicla Norte', points: 5640, badge: '🏅', change: '-2' }
  ];

  const distintivos = [
    { name: 'Pioneiro', description: 'Primeiro cadastro na região', icon: '🚀', rarity: 'Raro' },
    { name: 'Mentor', description: 'Ajudou 10+ novos usuários', icon: '👨‍🏫', rarity: 'Épico' },
    { name: 'Eco Warrior', description: 'Evitou 1 tonelada de CO2', icon: '🌱', rarity: 'Lendário' },
    { name: 'Colaborador', description: 'Participou de 5+ projetos', icon: '🤝', rarity: 'Comum' },
    { name: 'Inovador', description: 'Propôs solução implementada', icon: '💡', rarity: 'Épico' }
  ];

  const filteredCertificacoes = selectedCategory === 'todos' 
    ? certificacoes 
    : certificacoes.filter(cert => cert.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Básico': return 'bg-green-100 text-green-800';
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800';
      case 'Avançado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo': return 'bg-green-100 text-green-800';
      case 'finalizando': return 'bg-yellow-100 text-yellow-800';
      case 'finalizado': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Certificações e Gamificação</h2>
        <p className="text-gray-600 mb-6">
          Sistema de reconhecimento com certificações digitais, elementos de gamificação e recompensas
          para incentivar a participação contínua na economia circular.
        </p>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Certificações Disponíveis */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">Certificações Disponíveis</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCertificacoes.map((cert) => {
            const Icon = cert.icon;
            
            return (
              <Card key={cert.id} className={`${cert.bgColor} border-0 hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-white rounded-lg">
                        <Icon className={`h-8 w-8 ${cert.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {cert.title}
                        </CardTitle>
                        <Badge className={getLevelColor(cert.level)}>
                          {cert.level}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{cert.holders} portadores</div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-700 mt-4">
                    {cert.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Requisitos:</h4>
                      <ul className="space-y-1">
                        {cert.requirements.map((req, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Benefícios:</h4>
                      <ul className="space-y-1">
                        {cert.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-green-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progresso para certificação</span>
                        <span className="text-gray-900 font-medium">{cert.progress}%</span>
                      </div>
                      <Progress value={cert.progress} className="h-2" />
                    </div>

                    <Button className="w-full bg-white text-gray-900 hover:bg-gray-50 border">
                      Iniciar Certificação
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Desafios Ativos */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">Desafios Ativos</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {desafios.map((desafio) => {
            const Icon = desafio.icon;
            
            return (
              <Card key={desafio.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <Badge className={getStatusColor(desafio.status)}>
                          {desafio.status === 'ativo' && 'Ativo'}
                          {desafio.status === 'finalizando' && 'Finalizando'}
                          {desafio.status === 'finalizado' && 'Finalizado'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {desafio.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {desafio.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Tipo:</span>
                        <p className="font-medium capitalize">{desafio.type}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Duração:</span>
                        <p className="font-medium">{desafio.duration}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{desafio.participants} participantes</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progresso geral</span>
                        <span className="text-gray-900 font-medium">{desafio.progress}%</span>
                      </div>
                      <Progress value={desafio.progress} className="h-2" />
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">Recompensa: </span>
                        <span className="text-purple-600">{desafio.reward}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700">
                      Participar do Desafio
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Rankings e Distintivos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rankings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-yellow-600" />
              <span>Ranking Regional</span>
            </CardTitle>
            <CardDescription>
              Classificação dos participantes mais ativos da região
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rankings.map((item) => (
                <div key={item.position} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.badge}</span>
                    <div>
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.points} pontos</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`text-sm ${
                      item.change.startsWith('+') ? 'text-green-600' : 
                      item.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {item.change !== '0' && (item.change.startsWith('+') ? '↗' : '↘')} {item.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Ver Ranking Completo
            </Button>
          </CardContent>
        </Card>

        {/* Distintivos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Medal className="h-5 w-5 text-purple-600" />
              <span>Distintivos Disponíveis</span>
            </CardTitle>
            <CardDescription>
              Conquiste distintivos por suas contribuições especiais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {distintivos.map((distintivo, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{distintivo.icon}</span>
                    <div>
                      <div className="font-medium text-gray-900">{distintivo.name}</div>
                      <div className="text-sm text-gray-600">{distintivo.description}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className={`
                    ${distintivo.rarity === 'Comum' ? 'border-gray-300 text-gray-600' : ''}
                    ${distintivo.rarity === 'Raro' ? 'border-blue-300 text-blue-600' : ''}
                    ${distintivo.rarity === 'Épico' ? 'border-purple-300 text-purple-600' : ''}
                    ${distintivo.rarity === 'Lendário' ? 'border-yellow-300 text-yellow-600' : ''}
                  `}>
                    {distintivo.rarity}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Ver Meus Distintivos
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CertificacoesGamificacao;
