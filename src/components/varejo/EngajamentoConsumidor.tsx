
import React, { useState } from 'react';
import { Users, Star, Gift, Trophy, TrendingUp, PlayCircle, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const EngajamentoConsumidor = () => {
  const [selectedCampaign, setSelectedCampaign] = useState('devolucao-embalagens');

  const campanhas = [
    {
      id: 'devolucao-embalagens',
      titulo: 'Devolva e Ganhe',
      descricao: 'Traga suas embalagens plásticas e ganhe descontos',
      tipo: 'Logística Reversa',
      premio: '10% de desconto',
      participantes: 2847,
      meta: 5000,
      status: 'Ativa',
      cor: 'from-green-500 to-green-600'
    },
    {
      id: 'segunda-mao',
      titulo: 'Mercado Circular',
      descricao: 'Venda seus produtos usados na nossa plataforma',
      tipo: 'Segunda Mão',
      premio: 'Comissão reduzida',
      participantes: 1523,
      meta: 3000,
      status: 'Ativa',
      cor: 'from-blue-500 to-blue-600'
    },
    {
      id: 'consumo-consciente',
      titulo: 'Eco Challenge',
      descricao: 'Complete desafios de consumo consciente',
      tipo: 'Educação',
      premio: 'Produtos sustentáveis',
      participantes: 3942,
      meta: 4000,
      status: 'Finalizada',
      cor: 'from-purple-500 to-purple-600'
    }
  ];

  const ranking = [
    { posicao: 1, nome: 'Ana Silva', pontos: 2450, nivel: 'Eco Expert', avatar: '👩‍💼' },
    { posicao: 2, nome: 'Carlos Santos', pontos: 2180, nivel: 'Eco Master', avatar: '👨‍💻' },
    { posicao: 3, nome: 'Maria Costa', pontos: 1960, nivel: 'Eco Master', avatar: '👩‍🎓' },
    { posicao: 4, nome: 'João Oliveira', pontos: 1875, nivel: 'Eco Avançado', avatar: '👨‍🔬' },
    { posicao: 5, nome: 'Lucia Ferreira', pontos: 1720, nivel: 'Eco Avançado', avatar: '👩‍🏫' }
  ];

  const conteudosEducativos = [
    {
      tipo: 'Vídeo',
      titulo: 'Como Separar Embalagens para Reciclagem',
      duracao: '5 min',
      visualizacoes: 12450,
      rating: 4.8,
      categoria: 'Básico'
    },
    {
      tipo: 'Tutorial',
      titulo: 'Guia de Compra Consciente',
      duracao: 'Leitura',
      visualizacoes: 8960,
      rating: 4.6,
      categoria: 'Intermediário'
    },
    {
      tipo: 'Quiz',
      titulo: 'Teste Seus Conhecimentos em Economia Circular',
      duracao: '10 min',
      visualizacoes: 15680,
      rating: 4.9,
      categoria: 'Avançado'
    }
  ];

  const campanhaAtual = campanhas.find(c => c.id === selectedCampaign) || campanhas[0];
  const progressoCampanha = (campanhaAtual.participantes / campanhaAtual.meta) * 100;

  return (
    <div className="space-y-6">
      {/* Dashboard de Engajamento */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span>Usuários Ativos</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">12,584</div>
            <p className="text-sm text-gray-600">+23% este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Gift className="h-5 w-5 text-green-600" />
              <span>Recompensas Distribuídas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">R$ 45,2K</div>
            <p className="text-sm text-gray-600">Em descontos e prêmios</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-yellow-600" />
              <span>Campanhas Ativas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">8</div>
            <p className="text-sm text-gray-600">Diferentes modalidades</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              <span>Taxa de Engajamento</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">76.3%</div>
            <p className="text-sm text-gray-600">Participação ativa</p>
          </CardContent>
        </Card>
      </div>

      {/* Campanhas de Incentivo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Gift className="h-6 w-6 text-green-600" />
            <span>Campanhas de Incentivo Ativas</span>
          </CardTitle>
          <CardDescription>
            Programas de recompensas para engajamento em práticas circulares
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-6">
            {campanhas.map((campanha) => (
              <Button 
                key={campanha.id}
                variant={selectedCampaign === campanha.id ? 'default' : 'outline'}
                onClick={() => setSelectedCampaign(campanha.id)}
                size="sm"
              >
                {campanha.titulo}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{campanhaAtual.titulo}</CardTitle>
                    <Badge variant={campanhaAtual.status === 'Ativa' ? 'default' : 'secondary'}>
                      {campanhaAtual.status}
                    </Badge>
                  </div>
                  <CardDescription>{campanhaAtual.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Tipo de Campanha</p>
                        <p className="text-lg">{campanhaAtual.tipo}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Recompensa</p>
                        <p className="text-lg text-green-600">{campanhaAtual.premio}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progresso da Meta</span>
                        <span>{campanhaAtual.participantes}/{campanhaAtual.meta} participantes</span>
                      </div>
                      <Progress value={progressoCampanha} className="h-3" />
                      <p className="text-sm text-gray-600 mt-1">{progressoCampanha.toFixed(1)}% da meta atingida</p>
                    </div>

                    <div className={`bg-gradient-to-r ${campanhaAtual.cor} rounded-lg p-4 text-white`}>
                      <h4 className="font-semibold mb-2">Como Participar:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Cadastre-se na plataforma</li>
                        <li>• Participe das atividades da campanha</li>
                        <li>• Acumule pontos e ganhe recompensas</li>
                        <li>• Compartilhe com amigos e multiplique seus ganhos</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Trophy className="h-5 w-5 text-yellow-600" />
                    <span>Ranking</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {ranking.map((usuario) => (
                      <div key={usuario.posicao} className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-sm">
                          {usuario.posicao}
                        </div>
                        <div className="text-2xl">{usuario.avatar}</div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{usuario.nome}</p>
                          <p className="text-xs text-gray-600">{usuario.nivel}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-sm">{usuario.pontos}</p>
                          <p className="text-xs text-gray-600">pts</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conteúdos Educativos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span>Capacitação e Conscientização</span>
          </CardTitle>
          <CardDescription>
            Conteúdos educativos para promover o consumo consciente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conteudosEducativos.map((conteudo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{conteudo.tipo}</Badge>
                      <Badge className={
                        conteudo.categoria === 'Básico' ? 'bg-green-100 text-green-800' :
                        conteudo.categoria === 'Intermediário' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {conteudo.categoria}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {conteudo.tipo === 'Vídeo' && <PlayCircle className="h-12 w-12 text-purple-600" />}
                      {conteudo.tipo === 'Tutorial' && <BookOpen className="h-12 w-12 text-blue-600" />}
                      {conteudo.tipo === 'Quiz' && <Award className="h-12 w-12 text-green-600" />}
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{conteudo.titulo}</h3>
                        <p className="text-sm text-gray-600">{conteudo.duracao}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{conteudo.rating}</span>
                      </div>
                      <span>{conteudo.visualizacoes.toLocaleString()} visualizações</span>
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      Acessar Conteúdo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Transforme Seus Hábitos de Consumo
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Junte-se a milhares de consumidores que já estão fazendo a diferença 
            através de práticas de consumo consciente e economia circular.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100">
              Começar Agora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              Saiba Mais
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EngajamentoConsumidor;
