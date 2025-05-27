
import React, { useState } from 'react';
import { Gift, Star, Trophy, TrendingUp, Users, Calendar, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SistemaRecompensas = () => {
  const [abaAtiva, setAbaAtiva] = useState('pontos');

  const statusUsuario = {
    pontosAtual: 2847,
    nivel: 'Ecoherói',
    proximoNivel: 'Embaixador Verde',
    pontosProximoNivel: 3000,
    ranking: 47,
    totalUsuarios: 12847,
    impactoTotal: {
      co2Evitado: 124.5,
      itensReciclados: 456,
      economiagerada: 1247
    }
  };

  const recompensasDisponiveis = [
    {
      id: 1,
      nome: 'Desconto 20% - Loja Sustentável',
      pontos: 200,
      categoria: 'Desconto',
      empresa: 'EcoShop Brasil',
      validade: '30 dias',
      descricao: '20% de desconto em toda a loja de produtos sustentáveis',
      disponivel: true,
      popular: true
    },
    {
      id: 2,
      nome: 'Transporte Público - 5 Viagens',
      pontos: 150,
      categoria: 'Mobilidade',
      empresa: 'TranspUrb',
      validade: '15 dias',
      descricao: '5 viagens gratuitas no transporte público',
      disponivel: true,
      popular: false
    },
    {
      id: 3,
      nome: 'Plantio de 1 Árvore',
      pontos: 100,
      categoria: 'Impacto',
      empresa: 'Fundação Verde',
      validade: 'Permanente',
      descricao: 'Contribua para o plantio de uma árvore nativa',
      disponivel: true,
      popular: true
    },
    {
      id: 4,
      nome: 'Kit Produtos Orgânicos',
      pontos: 500,
      categoria: 'Produto',
      empresa: 'Fazenda Orgânica',
      validade: '7 dias',
      descricao: 'Kit com produtos orgânicos da estação',
      disponivel: false,
      popular: false
    },
    {
      id: 5,
      nome: 'Curso Online - Permacultura',
      pontos: 300,
      categoria: 'Educação',
      empresa: 'EcoEducação',
      validade: '60 dias',
      descricao: 'Curso completo de permacultura urbana',
      disponivel: true,
      popular: false
    },
    {
      id: 6,
      nome: 'Doação para ONG Ambiental',
      pontos: 250,
      categoria: 'Doação',
      empresa: 'Rede de ONGs',
      validade: 'Permanente',
      descricao: 'Sua pontuação vira doação para ONGs ambientais',
      disponivel: true,
      popular: true
    }
  ];

  const acoesRapidas = [
    {
      id: 1,
      acao: 'Reciclar 1kg de plástico',
      pontos: 50,
      impacto: '2kg CO₂ evitado',
      icone: Trophy
    },
    {
      id: 2,
      acao: 'Completar quiz ambiental',
      pontos: 25,
      impacto: 'Conhecimento++',
      icone: Star
    },
    {
      id: 3,
      acao: 'Compartilhar no marketplace',
      pontos: 30,
      impacto: 'Reutilização',
      icone: Gift
    },
    {
      id: 4,
      acao: 'Visitar ponto de coleta',
      pontos: 40,
      impacto: '1.5kg CO₂ evitado',
      icone: Target
    }
  ];

  const historicoPontos = [
    { data: '2024-01-15', acao: 'Reciclagem de eletrônicos', pontos: +75, saldo: 2847 },
    { data: '2024-01-14', acao: 'Quiz sobre energia solar', pontos: +25, saldo: 2772 },
    { data: '2024-01-13', acao: 'Resgate: Desconto EcoShop', pontos: -200, saldo: 2747 },
    { data: '2024-01-12', acao: 'Doação de roupas usadas', pontos: +60, saldo: 2947 },
    { data: '2024-01-11', acao: 'Participação em desafio', pontos: +100, saldo: 2887 }
  ];

  const rankings = [
    { posicao: 1, nome: 'Ana Silva', pontos: 4521, cidade: 'São Paulo' },
    { posicao: 2, nome: 'Carlos Oliveira', pontos: 4298, cidade: 'Rio de Janeiro' },
    { posicao: 3, nome: 'Maria Santos', pontos: 3876, cidade: 'Belo Horizonte' },
    { posicao: 47, nome: 'Você', pontos: 2847, cidade: 'São Paulo', destaque: true },
    { posicao: 48, nome: 'Pedro Costa', pontos: 2834, cidade: 'Brasília' },
    { posicao: 49, nome: 'Julia Lima', pontos: 2801, cidade: 'Porto Alegre' }
  ];

  const getCorCategoria = (categoria: string) => {
    switch (categoria) {
      case 'Desconto': return 'bg-blue-100 text-blue-800';
      case 'Mobilidade': return 'bg-green-100 text-green-800';
      case 'Impacto': return 'bg-purple-100 text-purple-800';
      case 'Produto': return 'bg-orange-100 text-orange-800';
      case 'Educação': return 'bg-indigo-100 text-indigo-800';
      case 'Doação': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const progressoProximoNivel = (statusUsuario.pontosAtual / statusUsuario.pontosProximoNivel) * 100;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Gift className="h-6 w-6 text-orange-600" />
            <span>Sistema de Recompensas</span>
          </CardTitle>
          <CardDescription>
            Ganhe pontos por ações sustentáveis e troque por recompensas incríveis
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Status do Usuário */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-500 rounded-full">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{statusUsuario.pontosAtual} Pontos</h3>
                    <p className="text-orange-600 font-medium">Nível: {statusUsuario.nivel}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progresso para {statusUsuario.proximoNivel}</span>
                    <span className="font-medium">{statusUsuario.pontosAtual}/{statusUsuario.pontosProximoNivel}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all"
                      style={{ width: `${progressoProximoNivel}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>Ranking: #{statusUsuario.ranking}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span>de {statusUsuario.totalUsuarios.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Seu Impacto Total</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <p className="text-lg font-bold text-green-600">{statusUsuario.impactoTotal.co2Evitado}kg</p>
                    <p className="text-xs text-gray-600">CO₂ Evitado</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <p className="text-lg font-bold text-blue-600">{statusUsuario.impactoTotal.itensReciclados}</p>
                    <p className="text-xs text-gray-600">Itens Reciclados</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <p className="text-lg font-bold text-purple-600">R$ {statusUsuario.impactoTotal.economiagerada}</p>
                    <p className="text-xs text-gray-600">Economia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Abas */}
          <div className="mb-6">
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {[
                { id: 'pontos', nome: 'Ganhar Pontos' },
                { id: 'recompensas', nome: 'Recompensas' },
                { id: 'ranking', nome: 'Ranking' },
                { id: 'historico', nome: 'Histórico' }
              ].map((aba) => (
                <button
                  key={aba.id}
                  onClick={() => setAbaAtiva(aba.id)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    abaAtiva === aba.id
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {aba.nome}
                </button>
              ))}
            </div>
          </div>

          {/* Conteúdo das Abas */}
          {abaAtiva === 'pontos' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Ações Rápidas para Ganhar Pontos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {acoesRapidas.map((acao) => (
                  <Card key={acao.id} className="border-orange-200 hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <acao.icone className="h-5 w-5 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{acao.acao}</h4>
                          <p className="text-sm text-gray-600">{acao.impacto}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-orange-600">+{acao.pontos}</p>
                          <p className="text-xs text-gray-500">pontos</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {abaAtiva === 'recompensas' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">Recompensas Disponíveis</h3>
                <select className="text-sm border rounded-md px-2 py-1">
                  <option>Todas as categorias</option>
                  <option>Descontos</option>
                  <option>Produtos</option>
                  <option>Experiências</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recompensasDisponiveis.map((recompensa) => (
                  <Card key={recompensa.id} className={`relative ${!recompensa.disponivel ? 'opacity-60' : ''}`}>
                    <CardContent className="p-4">
                      {recompensa.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs">
                          Popular
                        </Badge>
                      )}
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <Badge className={`text-xs ${getCorCategoria(recompensa.categoria)}`}>
                            {recompensa.categoria}
                          </Badge>
                          <div className="text-right">
                            <p className="text-lg font-bold text-orange-600">{recompensa.pontos}</p>
                            <p className="text-xs text-gray-500">pontos</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900">{recompensa.nome}</h4>
                          <p className="text-sm text-gray-600 mt-1">{recompensa.descricao}</p>
                        </div>

                        <div className="space-y-1 text-xs text-gray-500">
                          <p>Empresa: {recompensa.empresa}</p>
                          <p>Validade: {recompensa.validade}</p>
                        </div>

                        <Button 
                          size="sm" 
                          className="w-full" 
                          disabled={!recompensa.disponivel || statusUsuario.pontosAtual < recompensa.pontos}
                        >
                          {!recompensa.disponivel ? 'Indisponível' : 
                           statusUsuario.pontosAtual < recompensa.pontos ? 'Pontos Insuficientes' : 'Resgatar'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {abaAtiva === 'ranking' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Ranking de Usuários</h3>
              <div className="space-y-2">
                {rankings.map((usuario) => (
                  <div 
                    key={usuario.posicao}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      usuario.destaque ? 'bg-orange-50 border border-orange-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        usuario.posicao <= 3 ? 'bg-yellow-500 text-white' :
                        usuario.destaque ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-700'
                      }`}>
                        {usuario.posicao <= 3 ? (
                          usuario.posicao === 1 ? '🥇' : usuario.posicao === 2 ? '🥈' : '🥉'
                        ) : (
                          usuario.posicao
                        )}
                      </div>
                      <div>
                        <p className={`font-medium ${usuario.destaque ? 'text-orange-700' : 'text-gray-900'}`}>
                          {usuario.nome}
                        </p>
                        <p className="text-sm text-gray-600">{usuario.cidade}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${usuario.destaque ? 'text-orange-600' : 'text-gray-900'}`}>
                        {usuario.pontos.toLocaleString()} pts
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {abaAtiva === 'historico' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Histórico de Pontos</h3>
              <div className="space-y-2">
                {historicoPontos.map((transacao, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        transacao.pontos > 0 ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transacao.pontos > 0 ? 
                          <TrendingUp className="h-4 w-4 text-green-600" /> :
                          <Gift className="h-4 w-4 text-red-600" />
                        }
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{transacao.acao}</p>
                        <p className="text-sm text-gray-600">{transacao.data}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${
                        transacao.pontos > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transacao.pontos > 0 ? '+' : ''}{transacao.pontos}
                      </p>
                      <p className="text-sm text-gray-500">Saldo: {transacao.saldo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SistemaRecompensas;
