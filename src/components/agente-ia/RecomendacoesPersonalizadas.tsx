
import React, { useState } from 'react';
import { Lightbulb, Target, TrendingUp, Users, Leaf, Star, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const RecomendacoesPersonalizadas = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const recomendacoes = [
    {
      id: 1,
      titulo: 'Otimização de Rota de Coleta',
      categoria: 'Logística',
      prioridade: 'Alta',
      impacto: 'R$ 2.400/mês',
      economia: 85,
      prazo: '2 semanas',
      descricao: 'Reorganizar rotas de coleta na Zona Norte pode reduzir 25% do tempo de trajeto',
      detalhes: 'IA detectou padrão de congestionamento. Nova rota evita 3 pontos críticos.',
      confianca: 94,
      implementacao: 'Fácil',
      stakeholder: 'Catadores'
    },
    {
      id: 2,
      titulo: 'Campanha Educativa Direcionada',
      categoria: 'Educação',
      prioridade: 'Média',
      impacto: '+15% engajamento',
      economia: 60,
      prazo: '1 mês',
      descricao: 'Foco em jovens de 18-25 anos na região Sul para aumentar reciclagem de plásticos',
      detalhes: 'Análise de dados mostra baixa adesão neste perfil demográfico.',
      confianca: 87,
      implementacao: 'Média',
      stakeholder: 'Consumidores'
    },
    {
      id: 3,
      titulo: 'Parceria com Varejistas',
      categoria: 'Marketplace',
      prioridade: 'Alta',
      impacto: '+40% volume',
      economia: 92,
      prazo: '6 semanas',
      descricao: 'Expandir programa de logística reversa com 12 novos pontos de coleta',
      detalhes: 'Demanda por PET aumentou 30%. Varejistas próximos podem ser parceiros.',
      confianca: 91,
      implementacao: 'Complexa',
      stakeholder: 'Empresas'
    },
    {
      id: 4,
      titulo: 'Ajuste de Incentivos',
      categoria: 'Recompensas',
      prioridade: 'Média',
      impacto: '+25% participação',
      economia: 73,
      prazo: '1 semana',
      descricao: 'Aumentar pontos para devolução de eletrônicos em 20%',
      detalhes: 'Taxa de devolução está abaixo da meta. Incentivo maior pode melhorar.',
      confianca: 89,
      implementacao: 'Fácil',
      stakeholder: 'Consumidores'
    },
    {
      id: 5,
      titulo: 'Monitoramento IoT Expandido',
      categoria: 'Tecnologia',
      prioridade: 'Baixa',
      impacto: '+30% precisão',
      economia: 45,
      prazo: '3 meses',
      descricao: 'Instalar sensores em 25 pontos de coleta para monitoramento em tempo real',
      detalhes: 'Pontos sem sensores têm 40% mais erros de estimativa de capacidade.',
      confianca: 82,
      implementacao: 'Complexa',
      stakeholder: 'Órgãos Públicos'
    }
  ];

  const categorias = [
    { id: 'todas', nome: 'Todas', count: recomendacoes.length },
    { id: 'Logística', nome: 'Logística', count: 1 },
    { id: 'Educação', nome: 'Educação', count: 1 },
    { id: 'Marketplace', nome: 'Marketplace', count: 1 },
    { id: 'Recompensas', nome: 'Recompensas', count: 1 },
    { id: 'Tecnologia', nome: 'Tecnologia', count: 1 }
  ];

  const metricas = [
    { titulo: 'Recomendações Ativas', valor: 23, icone: Lightbulb, cor: 'text-yellow-600' },
    { titulo: 'Taxa de Implementação', valor: '78%', icone: Target, cor: 'text-green-600' },
    { titulo: 'ROI Médio', valor: '245%', icone: TrendingUp, cor: 'text-blue-600' },
    { titulo: 'Usuários Impactados', valor: '12.4K', icone: Users, cor: 'text-purple-600' }
  ];

  const impactosPrevistas = [
    { area: 'Redução de Custos', atual: 68, meta: 85, cor: 'bg-green-500' },
    { area: 'Aumento de Reciclagem', atual: 72, meta: 90, cor: 'bg-blue-500' },
    { area: 'Engajamento Social', atual: 65, meta: 80, cor: 'bg-purple-500' },
    { area: 'Eficiência Operacional', atual: 78, meta: 95, cor: 'bg-orange-500' }
  ];

  const getPrioridadeColor = (prioridade: string) => {
    switch (prioridade) {
      case 'Alta':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Média':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Baixa':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getImplementacaoColor = (implementacao: string) => {
    switch (implementacao) {
      case 'Fácil':
        return 'text-green-600';
      case 'Média':
        return 'text-yellow-600';
      case 'Complexa':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const recomendacoesFiltradas = selectedCategory === 'todas' 
    ? recomendacoes 
    : recomendacoes.filter(r => r.categoria === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Recomendações Personalizadas</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Star className="h-4 w-4 mr-2" />
            Favoritas
          </Button>
          <Button className="bg-yellow-600 hover:bg-yellow-700">
            <Lightbulb className="h-4 w-4 mr-2" />
            Nova Análise
          </Button>
        </div>
      </div>

      {/* Métricas de Recomendações */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricas.map((metrica, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <metrica.icone className={`h-8 w-8 ${metrica.cor}`} />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{metrica.valor}</p>
                  <p className="text-sm text-gray-600">{metrica.titulo}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Filtros por Categoria */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Categorias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  onClick={() => setSelectedCategory(categoria.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedCategory === categoria.id
                      ? 'bg-blue-100 text-blue-800 border border-blue-200'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{categoria.nome}</span>
                    <Badge variant="secondary">{categoria.count}</Badge>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Lista de Recomendações */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recomendações Ativas</CardTitle>
            <CardDescription>
              Geradas pela IA com base em análise de dados e padrões
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {recomendacoesFiltradas.map((recomendacao) => (
                <div key={recomendacao.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium text-gray-900">{recomendacao.titulo}</h4>
                        <Badge className={getPrioridadeColor(recomendacao.prioridade)}>
                          {recomendacao.prioridade}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{recomendacao.descricao}</p>
                      <p className="text-xs text-gray-500 mb-3">{recomendacao.detalhes}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-gray-500">Impacto</p>
                      <p className="font-medium text-green-600">{recomendacao.impacto}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Prazo</p>
                      <p className="font-medium">{recomendacao.prazo}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Confiança</p>
                      <p className="font-medium">{recomendacao.confianca}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Implementação</p>
                      <p className={`font-medium ${getImplementacaoColor(recomendacao.implementacao)}`}>
                        {recomendacao.implementacao}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{recomendacao.categoria}</Badge>
                      <Badge variant="outline">{recomendacao.stakeholder}</Badge>
                    </div>
                    <Button size="sm">
                      Implementar
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Impactos Previstos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-blue-600" />
            <span>Impactos Previstos</span>
          </CardTitle>
          <CardDescription>
            Benefícios esperados com a implementação das recomendações
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactosPrevistas.map((impacto, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{impacto.area}</h4>
                  <span className="text-sm font-bold">{impacto.atual}%</span>
                </div>
                <Progress value={impacto.atual} className="h-3" />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Atual: {impacto.atual}%</span>
                  <span>Meta: {impacto.meta}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Configurações de Personalização */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-purple-600" />
            <span>Personalização de Recomendações</span>
          </CardTitle>
          <CardDescription>
            Configure como a IA gera recomendações para seu perfil
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Prioridades</h4>
              <div className="space-y-2">
                {['Redução de Custos', 'Impacto Ambiental', 'Inclusão Social', 'Conformidade'].map((prioridade) => (
                  <div key={prioridade} className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked={prioridade === 'Redução de Custos'} />
                    <span className="text-sm">{prioridade}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Stakeholders</h4>
              <div className="space-y-2">
                {['Catadores', 'Empresas', 'Consumidores', 'Órgãos Públicos'].map((stakeholder) => (
                  <div key={stakeholder} className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked />
                    <span className="text-sm">{stakeholder}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Frequência</h4>
              <div className="space-y-2">
                {['Tempo real', 'Diário', 'Semanal', 'Mensal'].map((freq) => (
                  <div key={freq} className="flex items-center space-x-2">
                    <input type="radio" name="frequencia" defaultChecked={freq === 'Semanal'} />
                    <span className="text-sm">{freq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-gray-900">Notificações Inteligentes</h4>
                <p className="text-sm text-gray-600">
                  Receber alertas quando novas recomendações de alta prioridade forem geradas
                </p>
              </div>
              <Button>Configurar</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecomendacoesPersonalizadas;
