
import React, { useState } from 'react';
import { Gift, Star, Package, ShoppingCart, Trophy, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PontosRecompensas = () => {
  const [saldoPontos] = useState(2847);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');

  const recompensas = [
    {
      id: 1,
      nome: 'Kit Ferramentas Catador',
      pontos: 500,
      categoria: 'equipamentos',
      descricao: 'Luvas, saco de coleta e carrinho pequeno',
      disponivel: 15,
      imagem: '🛠️',
      popular: true
    },
    {
      id: 2,
      nome: 'Vale Alimentação R$ 50',
      pontos: 400,
      categoria: 'alimentacao',
      descricao: 'Voucher para supermercados parceiros',
      disponivel: 50,
      imagem: '🍽️',
      popular: false
    },
    {
      id: 3,
      nome: 'Curso Reciclagem Avançada',
      pontos: 300,
      categoria: 'educacao',
      descricao: 'Capacitação online com certificado',
      disponivel: 25,
      imagem: '📚',
      popular: true
    },
    {
      id: 4,
      nome: 'Combustível/Transporte',
      pontos: 200,
      categoria: 'transporte',
      descricao: 'Vale combustível ou cartão de transporte',
      disponivel: 30,
      imagem: '⛽',
      popular: false
    },
    {
      id: 5,
      nome: 'Equipamento Proteção',
      pontos: 250,
      categoria: 'equipamentos',
      descricao: 'Óculos, máscara e colete de segurança',
      disponivel: 20,
      imagem: '🦺',
      popular: true
    },
    {
      id: 6,
      nome: 'Desconto Cooperativa',
      pontos: 150,
      categoria: 'servicos',
      descricao: '20% desconto em produtos da cooperativa',
      disponivel: 100,
      imagem: '🏪',
      popular: false
    }
  ];

  const acoesPontos = [
    {
      acao: 'Coleta de Plástico (kg)',
      pontos: 5,
      multiplicador: 'por kg',
      descricao: 'Plásticos PET, embalagens e sacolas'
    },
    {
      acao: 'Coleta de Metal (kg)',
      pontos: 8,
      multiplicador: 'por kg',
      descricao: 'Alumínio, ferro e outros metais'
    },
    {
      acao: 'Coleta de Papel (kg)',
      pontos: 3,
      multiplicador: 'por kg',
      descricao: 'Papel, papelão e revista'
    },
    {
      acao: 'Coleta Eletrônicos (unidade)',
      pontos: 15,
      multiplicador: 'por item',
      descricao: 'Celulares, baterias e componentes'
    },
    {
      acao: 'Distância Percorrida (km)',
      pontos: 2,
      multiplicador: 'por km',
      descricao: 'Rastreamento GPS de coletas'
    },
    {
      acao: 'Meta Semanal Atingida',
      pontos: 100,
      multiplicador: 'bônus',
      descricao: 'Coleta mínima de 50kg por semana'
    }
  ];

  const categorias = [
    { id: 'todos', nome: 'Todas', icon: Gift },
    { id: 'equipamentos', nome: 'Equipamentos', icon: Package },
    { id: 'alimentacao', nome: 'Alimentação', icon: ShoppingCart },
    { id: 'educacao', nome: 'Educação', icon: Star },
    { id: 'transporte', nome: 'Transporte', icon: MapPin },
    { id: 'servicos', nome: 'Serviços', icon: Trophy }
  ];

  const recompensasFiltradas = categoriaSelecionada === 'todos' 
    ? recompensas 
    : recompensas.filter(r => r.categoria === categoriaSelecionada);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Gift className="h-6 w-6 text-purple-600" />
            <span>Sistema de Pontos e Recompensas</span>
          </CardTitle>
          <CardDescription>
            Acumule pontos por ações sustentáveis e troque por recompensas valiosas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Saldo e Ações */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-6">
                <div className="text-center">
                  <Star className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">{saldoPontos}</h3>
                  <p className="text-purple-100">Pontos Disponíveis</p>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Como Ganhar Pontos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {acoesPontos.map((acao, index) => (
                      <div key={index} className="border-b pb-3 last:border-b-0">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{acao.acao}</h4>
                            <p className="text-xs text-gray-600">{acao.descricao}</p>
                          </div>
                          <Badge className="bg-purple-100 text-purple-800">
                            +{acao.pontos} {acao.multiplicador}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Catálogo de Recompensas */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Catálogo de Recompensas</h3>
                <div className="flex space-x-2">
                  {categorias.map((categoria) => (
                    <Button
                      key={categoria.id}
                      variant={categoriaSelecionada === categoria.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCategoriaSelecionada(categoria.id)}
                      className="flex items-center space-x-1"
                    >
                      <categoria.icon className="h-3 w-3" />
                      <span className="hidden md:inline">{categoria.nome}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recompensasFiltradas.map((recompensa) => (
                  <Card key={recompensa.id} className="relative hover:shadow-lg transition-shadow">
                    {recompensa.popular && (
                      <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">{recompensa.imagem}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{recompensa.nome}</h4>
                          <p className="text-sm text-gray-600 mb-2">{recompensa.descricao}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Badge className="bg-purple-600">
                                {recompensa.pontos} pontos
                              </Badge>
                              <span className="text-xs text-gray-500">
                                {recompensa.disponivel} disponíveis
                              </span>
                            </div>
                            <Button 
                              size="sm"
                              disabled={saldoPontos < recompensa.pontos}
                              className="bg-purple-600 hover:bg-purple-700"
                            >
                              Resgatar
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Histórico e Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Últimas Atividades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-green-900">Coleta de Plástico</p>
                  <p className="text-sm text-green-700">15kg coletados</p>
                </div>
                <Badge className="bg-green-600">+75 pontos</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium text-blue-900">Meta Semanal</p>
                  <p className="text-sm text-blue-700">Objetivo atingido</p>
                </div>
                <Badge className="bg-blue-600">+100 pontos</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <div>
                  <p className="font-medium text-orange-900">Kit Ferramentas</p>
                  <p className="text-sm text-orange-700">Recompensa resgatada</p>
                </div>
                <Badge variant="outline">-500 pontos</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Impacto dos Incentivos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Pontos Ganhos este Mês</span>
                <span className="font-bold text-purple-600">+1,247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Recompensas Resgatadas</span>
                <span className="font-bold text-green-600">8 itens</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Resíduos Coletados</span>
                <span className="font-bold text-blue-600">156 kg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">CO₂ Evitado</span>
                <span className="font-bold text-orange-600">42.3 kg</span>
              </div>
              
              <div className="pt-4 border-t">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-900 mb-1">Próxima Meta</h4>
                  <p className="text-sm text-gray-600">
                    Colete mais 25kg para ganhar bônus de 150 pontos
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PontosRecompensas;
