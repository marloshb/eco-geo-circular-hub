
import React, { useState } from 'react';
import { BookOpen, Play, Award, Clock, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const ModulosCapacitacao = () => {
  const [moduloAtivo, setModuloAtivo] = useState<number | null>(null);

  const cursosDisponiveis = [
    {
      id: 1,
      titulo: 'Fundamentos da Reciclagem',
      descricao: 'Aprenda os conceitos básicos da reciclagem e separação de materiais',
      duracao: '2h 30min',
      nivel: 'Iniciante',
      progresso: 85,
      modulos: 8,
      certificado: true,
      categoria: 'Básico'
    },
    {
      id: 2,
      titulo: 'Segurança no Trabalho',
      descricao: 'Práticas essenciais de segurança para catadores e recicladores',
      duracao: '1h 45min',
      nivel: 'Essencial',
      progresso: 100,
      modulos: 6,
      certificado: true,
      categoria: 'Segurança'
    },
    {
      id: 3,
      titulo: 'Identificação de Materiais Recicláveis',
      descricao: 'Como identificar e valorizar diferentes tipos de materiais',
      duracao: '3h 15min',
      nivel: 'Intermediário',
      progresso: 45,
      modulos: 12,
      certificado: true,
      categoria: 'Técnico'
    },
    {
      id: 4,
      titulo: 'Gestão de Cooperativas',
      descricao: 'Organização e administração de cooperativas de reciclagem',
      duracao: '4h 00min',
      nivel: 'Avançado',
      progresso: 0,
      modulos: 15,
      certificado: true,
      categoria: 'Gestão'
    },
    {
      id: 5,
      titulo: 'Uso de Tecnologia na Reciclagem',
      descricao: 'Como usar aplicativos e ferramentas digitais no seu trabalho',
      duracao: '1h 20min',
      nivel: 'Iniciante',
      progresso: 25,
      modulos: 5,
      certificado: false,
      categoria: 'Digital'
    }
  ];

  const conquistas = [
    {
      id: 1,
      nome: 'Primeiro Certificado',
      descricao: 'Complete seu primeiro curso',
      obtida: true,
      icone: '🏆'
    },
    {
      id: 2,
      nome: 'Especialista em Segurança',
      descricao: 'Complete todos os cursos de segurança',
      obtida: true,
      icone: '🛡️'
    },
    {
      id: 3,
      nome: 'Reciclador Expert',
      descricao: 'Complete 5 cursos técnicos',
      obtida: false,
      icone: '♻️'
    },
    {
      id: 4,
      nome: 'Líder da Comunidade',
      descricao: 'Complete cursos de gestão',
      obtida: false,
      icone: '👥'
    }
  ];

  const estatisticasAprendizado = [
    { titulo: 'Cursos Concluídos', valor: '2', icone: Award, cor: 'text-green-600' },
    { titulo: 'Horas Estudadas', valor: '8.5h', icone: Clock, cor: 'text-blue-600' },
    { titulo: 'Certificados', valor: '2', icone: CheckCircle, cor: 'text-purple-600' },
    { titulo: 'Ranking Mensal', valor: '#15', icone: Users, cor: 'text-orange-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Estatísticas de Aprendizado */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {estatisticasAprendizado.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.titulo}</p>
                  <p className={`text-2xl font-bold ${stat.cor}`}>{stat.valor}</p>
                </div>
                <stat.icone className={`h-8 w-8 ${stat.cor}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cursos Disponíveis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span>Módulos de Capacitação</span>
          </CardTitle>
          <CardDescription>
            Desenvolva suas habilidades e aumente seus ganhos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cursosDisponiveis.map((curso) => (
              <Card key={curso.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-lg font-semibold">{curso.titulo}</h3>
                        <Badge variant="outline">{curso.categoria}</Badge>
                        <Badge variant={curso.nivel === 'Essencial' ? 'destructive' : 'secondary'}>
                          {curso.nivel}
                        </Badge>
                      </div>

                      <p className="text-gray-600 mb-4">{curso.descricao}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{curso.duracao}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <BookOpen className="h-4 w-4" />
                          <span>{curso.modulos} módulos</span>
                        </div>
                        {curso.certificado && (
                          <div className="flex items-center space-x-2 text-green-600">
                            <Award className="h-4 w-4" />
                            <span>Certificado</span>
                          </div>
                        )}
                      </div>

                      {curso.progresso > 0 && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progresso</span>
                            <span>{curso.progresso}%</span>
                          </div>
                          <Progress value={curso.progresso} className="h-2" />
                        </div>
                      )}

                      <div className="flex space-x-3">
                        {curso.progresso === 0 ? (
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            <Play className="h-4 w-4 mr-2" />
                            Iniciar Curso
                          </Button>
                        ) : curso.progresso === 100 ? (
                          <Button variant="outline">
                            <Award className="h-4 w-4 mr-2" />
                            Ver Certificado
                          </Button>
                        ) : (
                          <Button>
                            <Play className="h-4 w-4 mr-2" />
                            Continuar
                          </Button>
                        )}
                        <Button variant="outline">
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Conquistas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-6 w-6 text-yellow-600" />
            <span>Conquistas</span>
          </CardTitle>
          <CardDescription>
            Reconhecimento pelo seu progresso e dedicação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conquistas.map((conquista) => (
              <div 
                key={conquista.id} 
                className={`p-4 rounded-lg border-2 ${
                  conquista.obtida ? 'border-yellow-200 bg-yellow-50' : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{conquista.icone}</div>
                  <div className="flex-1">
                    <h4 className={`font-medium ${conquista.obtida ? 'text-yellow-800' : 'text-gray-500'}`}>
                      {conquista.nome}
                    </h4>
                    <p className={`text-sm ${conquista.obtida ? 'text-yellow-600' : 'text-gray-400'}`}>
                      {conquista.descricao}
                    </p>
                  </div>
                  {conquista.obtida && (
                    <CheckCircle className="h-6 w-6 text-yellow-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModulosCapacitacao;
