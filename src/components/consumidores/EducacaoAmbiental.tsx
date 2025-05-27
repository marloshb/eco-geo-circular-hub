
import React, { useState } from 'react';
import { GraduationCap, Play, Trophy, BookOpen, Target, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducacaoAmbiental = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');

  const categorias = [
    { id: 'todos', nome: 'Todos', count: 47 },
    { id: 'reciclagem', nome: 'Reciclagem', count: 12 },
    { id: 'consumo', nome: 'Consumo Consciente', count: 8 },
    { id: 'energia', nome: 'Energia Sustentável', count: 6 },
    { id: 'agua', nome: 'Conservação da Água', count: 5 },
    { id: 'transporte', nome: 'Mobilidade Verde', count: 4 },
    { id: 'alimentacao', nome: 'Alimentação Sustentável', count: 12 }
  ];

  const conteudos = [
    {
      id: 1,
      titulo: 'Como Separar Resíduos Corretamente',
      tipo: 'Vídeo',
      duracao: '3:45',
      categoria: 'reciclagem',
      nivel: 'Iniciante',
      impacto: 'Reduz 2kg CO₂/mês',
      visualizacoes: 12456,
      curtidas: 89,
      descricao: 'Aprenda a separar seus resíduos de forma eficiente e contribua para a reciclagem.',
      progresso: 0
    },
    {
      id: 2,
      titulo: 'Compostagem Doméstica Fácil',
      tipo: 'Tutorial',
      duracao: '5:20',
      categoria: 'reciclagem',
      nivel: 'Intermediário',
      impacto: 'Reduz 5kg CO₂/mês',
      visualizacoes: 8743,
      curtidas: 134,
      descricao: 'Transforme seus resíduos orgânicos em adubo rico para suas plantas.',
      progresso: 45
    },
    {
      id: 3,
      titulo: 'Desafio: 30 Dias Sem Plástico',
      tipo: 'Desafio',
      duracao: '30 dias',
      categoria: 'consumo',
      nivel: 'Avançado',
      impacto: 'Reduz 15kg CO₂/mês',
      visualizacoes: 15234,
      curtidas: 298,
      descricao: 'Participe do desafio e descubra alternativas sustentáveis ao plástico.',
      progresso: 0
    },
    {
      id: 4,
      titulo: 'Economia de Energia em Casa',
      tipo: 'Infográfico',
      duracao: '2 min',
      categoria: 'energia',
      nivel: 'Iniciante',
      impacto: 'Reduz 8kg CO₂/mês',
      visualizacoes: 6789,
      curtidas: 67,
      descricao: 'Dicas práticas para reduzir o consumo de energia em sua residência.',
      progresso: 100
    },
    {
      id: 5,
      titulo: 'Consumo Consciente de Água',
      tipo: 'Quiz',
      duracao: '10 min',
      categoria: 'agua',
      nivel: 'Iniciante',
      impacto: 'Reduz 3kg CO₂/mês',
      visualizacoes: 4321,
      curtidas: 45,
      descricao: 'Teste seus conhecimentos sobre uso responsável da água.',
      progresso: 75
    },
    {
      id: 6,
      titulo: 'Alimentação Sustentável',
      tipo: 'Artigo',
      duracao: '8 min',
      categoria: 'alimentacao',
      nivel: 'Intermediário',
      impacto: 'Reduz 12kg CO₂/mês',
      visualizacoes: 9876,
      curtidas: 156,
      descricao: 'Como suas escolhas alimentares impactam o meio ambiente.',
      progresso: 0
    }
  ];

  const desafiosAtivos = [
    {
      id: 1,
      titulo: 'Semana da Reciclagem',
      participantes: 1247,
      prazo: '5 dias restantes',
      recompensa: '50 pontos',
      progresso: 65
    },
    {
      id: 2,
      titulo: 'Mês da Mobilidade Verde',
      participantes: 892,
      prazo: '18 dias restantes',
      recompensa: '150 pontos',
      progresso: 23
    },
    {
      id: 3,
      titulo: 'Desafio Zero Desperdício',
      participantes: 567,
      prazo: '12 dias restantes',
      recompensa: '100 pontos',
      progresso: 41
    }
  ];

  const conteudosFiltrados = conteudos.filter(conteudo => 
    categoriaAtiva === 'todos' || conteudo.categoria === categoriaAtiva
  );

  const getIconeConteudo = (tipo: string) => {
    switch (tipo) {
      case 'Vídeo': return <Play className="h-4 w-4" />;
      case 'Tutorial': return <BookOpen className="h-4 w-4" />;
      case 'Desafio': return <Target className="h-4 w-4" />;
      case 'Quiz': return <Trophy className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getCorNivel = (nivel: string) => {
    switch (nivel) {
      case 'Iniciante': return 'text-green-600 border-green-600';
      case 'Intermediário': return 'text-yellow-600 border-yellow-600';
      case 'Avançado': return 'text-red-600 border-red-600';
      default: return 'text-gray-600 border-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-purple-600" />
            <span>Educação Ambiental</span>
          </CardTitle>
          <CardDescription>
            Aprenda sobre sustentabilidade e economia circular de forma interativa
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Categorias e Filtros */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Categorias</h3>
              <div className="space-y-2">
                {categorias.map((categoria) => (
                  <button
                    key={categoria.id}
                    onClick={() => setCategoriaAtiva(categoria.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      categoriaAtiva === categoria.id
                        ? 'bg-purple-100 text-purple-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{categoria.nome}</span>
                      <Badge variant="outline" className="text-xs">
                        {categoria.count}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>

              {/* Desafios Ativos */}
              <div className="mt-6">
                <h3 className="font-semibold text-gray-800 mb-4">Desafios Ativos</h3>
                <div className="space-y-3">
                  {desafiosAtivos.map((desafio) => (
                    <Card key={desafio.id} className="border border-purple-200">
                      <CardContent className="p-3">
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">{desafio.titulo}</h4>
                          <div className="flex items-center space-x-2 text-xs text-gray-600">
                            <Users className="h-3 w-3" />
                            <span>{desafio.participantes} participantes</span>
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-600">
                            <Clock className="h-3 w-3" />
                            <span>{desafio.prazo}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-600 h-2 rounded-full transition-all"
                              style={{ width: `${desafio.progresso}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <Badge className="bg-purple-100 text-purple-700 text-xs">
                              {desafio.recompensa}
                            </Badge>
                            <Button size="sm" className="text-xs h-6 bg-purple-600 hover:bg-purple-700">
                              Participar
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Conteúdos */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                  Conteúdos ({conteudosFiltrados.length})
                </h3>
                <select className="text-sm border rounded-md px-2 py-1">
                  <option>Mais recentes</option>
                  <option>Mais populares</option>
                  <option>Maior impacto</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {conteudosFiltrados.map((conteudo) => (
                  <Card key={conteudo.id} className="group hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="p-1 bg-purple-100 rounded">
                              {getIconeConteudo(conteudo.tipo)}
                            </div>
                            <div>
                              <Badge variant="outline" className="text-xs">
                                {conteudo.tipo}
                              </Badge>
                            </div>
                          </div>
                          <Badge variant="outline" className={`text-xs ${getCorNivel(conteudo.nivel)}`}>
                            {conteudo.nivel}
                          </Badge>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {conteudo.titulo}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{conteudo.descricao}</p>
                        </div>

                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{conteudo.duracao}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Play className="h-3 w-3" />
                            <span>{conteudo.visualizacoes.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="bg-green-50 rounded-lg p-2">
                          <p className="text-xs text-green-700 font-medium">
                            Impacto: {conteudo.impacto}
                          </p>
                        </div>

                        {conteudo.progresso > 0 && (
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">Progresso</span>
                              <span className="font-medium">{conteudo.progresso}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="bg-purple-600 h-1.5 rounded-full transition-all"
                                style={{ width: `${conteudo.progresso}%` }}
                              ></div>
                            </div>
                          </div>
                        )}

                        <Button 
                          size="sm" 
                          className="w-full bg-purple-600 hover:bg-purple-700"
                        >
                          {conteudo.progresso === 0 ? 'Começar' : 
                           conteudo.progresso === 100 ? 'Revisar' : 'Continuar'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducacaoAmbiental;
