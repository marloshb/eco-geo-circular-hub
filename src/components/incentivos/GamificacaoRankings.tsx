
import React, { useState } from 'react';
import { Trophy, Star, Medal, Crown, TrendingUp, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GamificacaoRankings = () => {
  const [categoriaRanking, setCategoriaRanking] = useState('geral');
  const [periodoRanking, setPeriodoRanking] = useState('mensal');

  const rankings = {
    geral: [
      { posicao: 1, nome: 'Maria Silva', tipo: 'Catadora', pontos: 3247, distintivo: '👑', regiao: 'São Paulo - SP' },
      { posicao: 2, nome: 'EcoTech Ltda', tipo: 'Empresa', pontos: 2890, distintivo: '🏆', regiao: 'Rio de Janeiro - RJ' },
      { posicao: 3, nome: 'Cooperativa Verde', tipo: 'Cooperativa', pontos: 2654, distintivo: '🥉', regiao: 'Belo Horizonte - MG' },
      { posicao: 4, nome: 'João Santos', tipo: 'Catador', pontos: 2341, distintivo: '⭐', regiao: 'Salvador - BA' },
      { posicao: 5, nome: 'GreenCorp', tipo: 'Empresa', pontos: 2156, distintivo: '⭐', regiao: 'Curitiba - PR' }
    ],
    catadores: [
      { posicao: 1, nome: 'Maria Silva', tipo: 'Catadora', pontos: 3247, distintivo: '👑', regiao: 'São Paulo - SP' },
      { posicao: 2, nome: 'João Santos', tipo: 'Catador', pontos: 2341, distintivo: '🏆', regiao: 'Salvador - BA' },
      { posicao: 3, nome: 'Ana Costa', tipo: 'Catadora', pontos: 1987, distintivo: '🥉', regiao: 'Fortaleza - CE' },
      { posicao: 4, nome: 'Pedro Lima', tipo: 'Catador', pontos: 1654, distintivo: '⭐', regiao: 'Recife - PE' },
      { posicao: 5, nome: 'Carmen Souza', tipo: 'Catadora', pontos: 1432, distintivo: '⭐', regiao: 'Porto Alegre - RS' }
    ],
    empresas: [
      { posicao: 1, nome: 'EcoTech Ltda', tipo: 'Empresa', pontos: 2890, distintivo: '👑', regiao: 'Rio de Janeiro - RJ' },
      { posicao: 2, nome: 'GreenCorp', tipo: 'Empresa', pontos: 2156, distintivo: '🏆', regiao: 'Curitiba - PR' },
      { posicao: 3, nome: 'Sustentável S.A.', tipo: 'Empresa', pontos: 1923, distintivo: '🥉', regiao: 'Brasília - DF' },
      { posicao: 4, nome: 'CircularTech', tipo: 'Empresa', pontos: 1567, distintivo: '⭐', regiao: 'Florianópolis - SC' },
      { posicao: 5, nome: 'EcoIndustrial', tipo: 'Empresa', pontos: 1234, distintivo: '⭐', regiao: 'Manaus - AM' }
    ]
  };

  const desafiosAtivos = [
    {
      id: 1,
      titulo: 'Semana do Plástico',
      descricao: 'Colete o máximo de plástico em 7 dias',
      meta: '100 kg',
      progresso: 67,
      premio: '500 pontos + distintivo',
      participantes: 156,
      tempoRestante: '3 dias'
    },
    {
      id: 2,
      titulo: 'Desafio Cooperativo',
      descricao: 'Trabalhe em equipe para meta coletiva',
      meta: '1 tonelada',
      progresso: 43,
      premio: '1000 pontos + bônus equipe',
      participantes: 89,
      tempoRestante: '8 dias'
    },
    {
      id: 3,
      titulo: 'Maratona Verde',
      descricao: 'Percorra a maior distância coletando',
      meta: '50 km',
      progresso: 81,
      premio: '750 pontos + combustível',
      participantes: 34,
      tempoRestante: '5 dias'
    }
  ];

  const distintivos = [
    { nome: 'Primeiro Passo', icon: '🚶', descricao: 'Primeira coleta realizada', conquistado: true },
    { nome: 'Centena', icon: '💯', descricao: '100 kg reciclados', conquistado: true },
    { nome: 'Guerreiro Verde', icon: '⚔️', descricao: '30 dias consecutivos', conquistado: true },
    { nome: 'Especialista', icon: '🎯', descricao: '10 tipos diferentes coletados', conquistado: false },
    { nome: 'Mentor', icon: '👨‍🏫', descricao: 'Treinou 5 novos catadores', conquistado: false },
    { nome: 'Lenda', icon: '🏆', descricao: '1 tonelada reciclada', conquistado: false }
  ];

  const rankingAtual = rankings[categoriaRanking] || rankings.geral;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="h-6 w-6 text-yellow-600" />
            <span>Rankings e Gamificação</span>
          </CardTitle>
          <CardDescription>
            Compete, conquiste distintivos e seja reconhecido pela comunidade
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Rankings */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Rankings</h3>
                <div className="flex space-x-2">
                  <select 
                    value={categoriaRanking}
                    onChange={(e) => setCategoriaRanking(e.target.value)}
                    className="text-sm border rounded-md px-2 py-1"
                  >
                    <option value="geral">Geral</option>
                    <option value="catadores">Catadores</option>
                    <option value="empresas">Empresas</option>
                  </select>
                  <select 
                    value={periodoRanking}
                    onChange={(e) => setPeriodoRanking(e.target.value)}
                    className="text-sm border rounded-md px-2 py-1"
                  >
                    <option value="mensal">Mensal</option>
                    <option value="semanal">Semanal</option>
                    <option value="anual">Anual</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                {rankingAtual.map((participante) => (
                  <Card key={participante.posicao} className={`${
                    participante.posicao <= 3 ? 'border-yellow-200 bg-yellow-50' : ''
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl">{participante.distintivo}</div>
                          <div className="text-sm font-bold">#{participante.posicao}</div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold">{participante.nome}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Badge variant="outline">{participante.tipo}</Badge>
                            <span className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{participante.regiao}</span>
                            </span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="font-bold text-lg text-yellow-600">
                            {participante.pontos.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">pontos</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl">🎯</div>
                      <div className="text-sm font-bold">#12</div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold">Você</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Badge variant="outline">Catador</Badge>
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>São Paulo - SP</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-lg text-blue-600">1,247</div>
                      <div className="text-sm text-gray-500">pontos</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Distintivos */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Seus Distintivos</h3>
              <div className="grid grid-cols-2 gap-3">
                {distintivos.map((distintivo, index) => (
                  <Card 
                    key={index} 
                    className={`text-center ${
                      distintivo.conquistado ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <CardContent className="p-3">
                      <div className={`text-2xl mb-1 ${!distintivo.conquistado ? 'grayscale' : ''}`}>
                        {distintivo.icon}
                      </div>
                      <h4 className="font-medium text-xs">{distintivo.nome}</h4>
                      <p className="text-xs text-gray-600 mt-1">{distintivo.descricao}</p>
                      {distintivo.conquistado && (
                        <Badge className="bg-green-600 text-xs mt-2">
                          Conquistado
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Desafios Ativos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-6 w-6 text-purple-600" />
            <span>Desafios Ativos</span>
          </CardTitle>
          <CardDescription>
            Participe de desafios especiais e ganhe recompensas extras
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {desafiosAtivos.map((desafio) => (
              <Card key={desafio.id} className="border-purple-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{desafio.titulo}</h4>
                      <Badge className="bg-purple-100 text-purple-800">
                        {desafio.tempoRestante}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600">{desafio.descricao}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progresso</span>
                        <span>{desafio.progresso}% de {desafio.meta}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{ width: `${desafio.progresso}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Prêmio:</span>
                        <span className="font-medium">{desafio.premio}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Participantes:</span>
                        <span className="font-medium">{desafio.participantes}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-purple-600 hover:bg-purple-700" size="sm">
                      Participar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Conquistas Recentes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Conquistas Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="text-2xl">🏆</div>
              <div>
                <h4 className="font-medium text-green-900">Meta Semanal Atingida!</h4>
                <p className="text-sm text-green-700">Você coletou 55kg esta semana</p>
              </div>
              <Badge className="bg-green-600">+100 pontos</Badge>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl">⭐</div>
              <div>
                <h4 className="font-medium text-blue-900">Novo Distintivo!</h4>
                <p className="text-sm text-blue-700">Conquistou "Guerreiro Verde"</p>
              </div>
              <Badge className="bg-blue-600">Distintivo</Badge>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
              <div className="text-2xl">🎯</div>
              <div>
                <h4 className="font-medium text-purple-900">Subiu no Ranking!</h4>
                <p className="text-sm text-purple-700">Agora você está em #12</p>
              </div>
              <Badge className="bg-purple-600">Ranking</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GamificacaoRankings;
