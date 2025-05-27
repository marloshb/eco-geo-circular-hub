import React, { useState } from 'react';
import { Play, Clock, Users, CheckCircle, BookOpen, Video, FileText, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const TutoriaisInterativos = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos os Cursos', count: 45 },
    { id: 'catadores', name: 'Para Catadores', count: 12 },
    { id: 'empresas', name: 'Para Empresas', count: 15 },
    { id: 'consumidores', name: 'Para Consumidores', count: 18 }
  ];

  const tutoriais = [
    {
      id: 1,
      title: 'Separação de Resíduos Recicláveis',
      description: 'Aprenda a identificar e separar diferentes tipos de resíduos recicláveis.',
      category: 'catadores',
      duration: '15 min',
      type: 'video',
      participants: 324,
      progress: 85,
      difficulty: 'Básico',
      icon: Video,
      topics: ['Classificação de plásticos', 'Identificação de metais', 'Papel e papelão']
    },
    {
      id: 2,
      title: 'Economia Circular para Empresas',
      description: 'Fundamentos da economia circular e estratégias de implementação.',
      category: 'empresas',
      duration: '30 min',
      type: 'interactive',
      participants: 156,
      progress: 92,
      difficulty: 'Intermediário',
      icon: BookOpen,
      topics: ['Design circular', 'Logística reversa', 'Métricas de impacto']
    },
    {
      id: 3,
      title: 'Consumo Consciente',
      description: 'Dicas práticas para reduzir desperdícios no dia a dia.',
      category: 'consumidores',
      duration: '12 min',
      type: 'quiz',
      participants: 789,
      progress: 78,
      difficulty: 'Básico',
      icon: HelpCircle,
      topics: ['Reduzir, reutilizar, reciclar', 'Compras sustentáveis', 'Descarte correto']
    },
    {
      id: 4,
      title: 'Segurança no Trabalho de Coleta',
      description: 'Protocolos de segurança para catadores e trabalhadores de reciclagem.',
      category: 'catadores',
      duration: '20 min',
      type: 'video',
      participants: 267,
      progress: 94,
      difficulty: 'Essencial',
      icon: Video,
      topics: ['EPIs obrigatórios', 'Manuseio seguro', 'Primeiros socorros']
    },
    {
      id: 5,
      title: 'Gestão de Resíduos Industriais',
      description: 'Estratégias para gerenciar resíduos em processos industriais.',
      category: 'empresas',
      duration: '45 min',
      type: 'interactive',
      participants: 98,
      progress: 67,
      difficulty: 'Avançado',
      icon: FileText,
      topics: ['Classificação de resíduos', 'Tratamento adequado', 'Conformidade legal']
    },
    {
      id: 6,
      title: 'Pontos de Coleta na Sua Região',
      description: 'Como encontrar e usar pontos de coleta seletiva.',
      category: 'consumidores',
      duration: '8 min',
      type: 'interactive',
      participants: 542,
      progress: 88,
      difficulty: 'Básico',
      icon: BookOpen,
      topics: ['Localização via app', 'Tipos de materiais', 'Horários de coleta']
    }
  ];

  const filteredTutoriais = selectedCategory === 'todos' 
    ? tutoriais 
    : tutoriais.filter(tutorial => tutorial.category === selectedCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'interactive': return BookOpen;
      case 'quiz': return HelpCircle;
      default: return FileText;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Básico': return 'bg-green-100 text-green-800';
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800';
      case 'Avançado': return 'bg-red-100 text-red-800';
      case 'Essencial': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tutoriais Interativos</h2>
        <p className="text-gray-600 mb-6">
          Biblioteca de recursos digitais com vídeos, infográficos e guias interativos sobre economia circular,
          adaptados para diferentes públicos e contextos regionais.
        </p>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center space-x-2"
            >
              <span>{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Grid de tutoriais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutoriais.map((tutorial) => {
          const TypeIcon = getTypeIcon(tutorial.type);
          
          return (
            <Card key={tutorial.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <TypeIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <Badge className={getDifficultyColor(tutorial.difficulty)}>
                        {tutorial.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{tutorial.duration}</span>
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {tutorial.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {tutorial.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{tutorial.participants} participantes</span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>{tutorial.progress}% concluído</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Progresso</span>
                      <span className="text-gray-900 font-medium">{tutorial.progress}%</span>
                    </div>
                    <Progress value={tutorial.progress} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900">Tópicos abordados:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tutorial.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700">
                    <Play className="h-4 w-4 mr-2" />
                    Iniciar Tutorial
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Seção de recursos adicionais */}
      <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recursos Adicionais</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900">Guias Offline</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Baixe conteúdos para acesso sem internet em áreas com conectividade limitada.
            </p>
            <Button variant="outline" size="sm">Download</Button>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900">Suporte Multilíngue</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Conteúdos disponíveis em português e línguas indígenas com comandos por voz.
            </p>
            <Button variant="outline" size="sm">Configurar</Button>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <HelpCircle className="h-5 w-5 text-purple-600" />
              </div>
              <h4 className="font-medium text-gray-900">Quiz Interativo</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Teste seus conhecimentos com quizzes adaptativos baseados no seu progresso.
            </p>
            <Button variant="outline" size="sm">Iniciar Quiz</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutoriaisInterativos;
