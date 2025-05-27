
import React, { useState } from 'react';
import { Award, TrendingUp, Target, Gift, Star, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const IncentivosIndustriais = () => {
  const [selectedProgram, setSelectedProgram] = useState('geral');

  const programas = [
    { id: 'geral', nome: 'Visão Geral', icone: Award },
    { id: 'certificacao', nome: 'Certificações', icone: Trophy },
    { id: 'fiscal', nome: 'Incentivos Fiscais', icone: TrendingUp },
    { id: 'premios', nome: 'Prêmios e Reconhecimentos', icone: Star }
  ];

  const certificacoes = [
    {
      id: 1,
      nome: 'Selo Verde Brasil',
      descricao: 'Certificação para empresas com alta taxa de reciclagem',
      progresso: 87,
      meta: 85,
      status: 'Qualificado',
      beneficios: ['Redução de 15% no ICMS', 'Marketing verde', 'Prioridade em licitações']
    },
    {
      id: 2,
      nome: 'ISO 14001 Circular',
      descricao: 'Gestão ambiental com foco em economia circular',
      progresso: 76,
      meta: 80,
      status: 'Em progresso',
      beneficios: ['Acesso a financiamentos verdes', 'Redução de seguros', 'Melhoria da reputação']
    },
    {
      id: 3,
      nome: 'ENEC Industrial',
      descricao: 'Conformidade com a Estratégia Nacional de Economia Circular',
      progresso: 92,
      meta: 90,
      status: 'Certificado',
      beneficios: ['Créditos de carbono', 'Subsídios governamentais', 'Parcerias preferenciais']
    }
  ];

  const incentivos = [
    {
      tipo: 'Fiscal',
      descricao: 'Redução de 20% no IPTU para fábricas sustentáveis',
      valor: 'R$ 450.000/ano',
      status: 'Ativo'
    },
    {
      tipo: 'Financeiro',
      descricao: 'Linha de crédito verde com juros reduzidos',
      valor: 'R$ 2.5M disponível',
      status: 'Aprovado'
    },
    {
      tipo: 'Operacional',
      descricao: 'Prioridade na coleta de resíduos industriais',
      valor: 'Economia de 30%',
      status: 'Ativo'
    }
  ];

  const ranking = [
    { posicao: 1, empresa: 'Metalúrgica Santos', pontos: 9500, categoria: 'Metais' },
    { posicao: 2, empresa: 'PlastiCorp Industrial', pontos: 8750, categoria: 'Plásticos' },
    { posicao: 3, empresa: 'TechRecycle Ltd', pontos: 8200, categoria: 'Eletrônicos' },
    { posicao: 4, empresa: 'Química Verde SA', pontos: 7800, categoria: 'Químicos' },
    { posicao: 5, empresa: 'Têxtil Sustentável', pontos: 7500, categoria: 'Têxtil' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-6 w-6 text-green-600" />
            <span>Sistema de Incentivos Industriais</span>
          </CardTitle>
          <CardDescription>
            Programa de recompensas e incentivos para indústrias engajadas na economia circular
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Navegação entre programas */}
          <div className="flex flex-wrap gap-2 mb-6">
            {programas.map((programa) => {
              const IconePrograma = programa.icone;
              return (
                <Button
                  key={programa.id}
                  variant={selectedProgram === programa.id ? "default" : "outline"}
                  onClick={() => setSelectedProgram(programa.id)}
                  className="flex items-center space-x-2"
                >
                  <IconePrograma className="h-4 w-4" />
                  <span>{programa.nome}</span>
                </Button>
              );
            })}
          </div>

          {selectedProgram === 'geral' && (
            <div className="space-y-6">
              {/* Métricas gerais */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-600">15</p>
                  <p className="text-sm text-green-700">Certificações Obtidas</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600">R$ 2.8M</p>
                  <p className="text-sm text-blue-700">Incentivos Recebidos</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-600">9,247</p>
                  <p className="text-sm text-purple-700">Pontos Acumulados</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-orange-600">3º</p>
                  <p className="text-sm text-orange-700">Posição no Ranking</p>
                </div>
              </div>

              {/* Ranking regional */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ranking Regional - São Paulo</CardTitle>
                  <CardDescription>
                    Classificação das indústrias por desempenho em economia circular
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {ranking.map((empresa) => (
                      <div
                        key={empresa.posicao}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          empresa.posicao <= 3 ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                            empresa.posicao === 1 ? 'bg-yellow-500' :
                            empresa.posicao === 2 ? 'bg-gray-400' :
                            empresa.posicao === 3 ? 'bg-orange-400' : 'bg-gray-300'
                          }`}>
                            {empresa.posicao}
                          </div>
                          <div>
                            <p className="font-medium">{empresa.empresa}</p>
                            <p className="text-sm text-gray-600">{empresa.categoria}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">{empresa.pontos.toLocaleString()} pts</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {selectedProgram === 'certificacao' && (
            <div className="space-y-4">
              {certificacoes.map((cert) => (
                <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{cert.nome}</h3>
                          <p className="text-gray-600">{cert.descricao}</p>
                        </div>
                        <Badge 
                          className={
                            cert.status === 'Certificado' ? 'bg-green-100 text-green-800' :
                            cert.status === 'Qualificado' ? 'bg-blue-100 text-blue-800' :
                            'bg-orange-100 text-orange-800'
                          }
                        >
                          {cert.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Progresso</span>
                          <span className="font-medium">{cert.progresso}% (Meta: {cert.meta}%)</span>
                        </div>
                        <Progress value={cert.progresso} className="h-2" />
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-900">Benefícios:</h4>
                        <div className="flex flex-wrap gap-1">
                          {cert.beneficios.map((beneficio, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {beneficio}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {selectedProgram === 'fiscal' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {incentivos.map((incentivo, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{incentivo.tipo}</Badge>
                          <Badge 
                            className={
                              incentivo.status === 'Ativo' ? 'bg-green-100 text-green-800' :
                              incentivo.status === 'Aprovado' ? 'bg-blue-100 text-blue-800' :
                              'bg-orange-100 text-orange-800'
                            }
                          >
                            {incentivo.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{incentivo.descricao}</p>
                        <p className="text-lg font-bold text-green-600">{incentivo.valor}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Como Solicitar Incentivos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">1</div>
                      <div>
                        <p className="font-medium">Avaliação de Elegibilidade</p>
                        <p className="text-sm text-gray-600">Complete o questionário de sustentabilidade industrial</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">2</div>
                      <div>
                        <p className="font-medium">Documentação</p>
                        <p className="text-sm text-gray-600">Envie relatórios de gestão de resíduos e certificações</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">3</div>
                      <div>
                        <p className="font-medium">Aprovação</p>
                        <p className="text-sm text-gray-600">Aguarde análise e aprovação em até 30 dias</p>
                      </div>
                    </div>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                      Solicitar Incentivos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {selectedProgram === 'premios' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Prêmios Disponíveis</CardTitle>
                  <CardDescription>
                    Reconhecimentos especiais por excelência em economia circular
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <Trophy className="h-8 w-8 text-yellow-500" />
                        <div>
                          <h4 className="font-semibold">Prêmio Inovação Circular</h4>
                          <p className="text-sm text-gray-600">Para soluções inovadoras</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Reconhece empresas que desenvolveram tecnologias ou processos inovadores para economia circular.
                      </p>
                      <Badge className="bg-yellow-100 text-yellow-800">R$ 100.000 em créditos</Badge>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <Star className="h-8 w-8 text-purple-500" />
                        <div>
                          <h4 className="font-semibold">Selo de Excelência</h4>
                          <p className="text-sm text-gray-600">Para performance excepcional</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Concedido a empresas com mais de 90% de taxa de reciclagem e zero desperdício.
                      </p>
                      <Badge className="bg-purple-100 text-purple-800">Certificação Premium</Badge>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <Gift className="h-8 w-8 text-green-500" />
                        <div>
                          <h4 className="font-semibold">Impacto Social</h4>
                          <p className="text-sm text-gray-600">Para inclusão de catadores</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Premia empresas que promovem a inclusão social de catadores e comunidades.
                      </p>
                      <Badge className="bg-green-100 text-green-800">R$ 50.000 + Menção</Badge>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <Target className="h-8 w-8 text-blue-500" />
                        <div>
                          <h4 className="font-semibold">Meta ENEC</h4>
                          <p className="text-sm text-gray-600">Conformidade nacional</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Para empresas que atingem as metas da Estratégia Nacional de Economia Circular.
                      </p>
                      <Badge className="bg-blue-100 text-blue-800">Benefícios Fiscais</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default IncentivosIndustriais;
