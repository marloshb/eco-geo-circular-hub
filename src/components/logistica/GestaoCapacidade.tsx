
import React, { useState } from 'react';
import { Truck, BarChart3, TrendingUp, Package, Scale, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GestaoCapacidade = () => {
  const [periodoSelecionado, setPeriodoSelecionado] = useState('semana');

  const capacidades = [
    {
      id: 1,
      setor: 'Centro',
      capacidadeTotal: '25 ton/dia',
      capacidadeAtual: '18.5 ton',
      utilizacao: '74%',
      veiculos: 8,
      status: 'Normal',
      tendencia: 'Estável'
    },
    {
      id: 2,
      setor: 'Zona Norte',
      capacidadeTotal: '15 ton/dia',
      capacidadeAtual: '14.2 ton',
      utilizacao: '95%',
      veiculos: 5,
      status: 'Crítico',
      tendencia: 'Crescendo'
    },
    {
      id: 3,
      setor: 'Zona Sul',
      capacidadeTotal: '20 ton/dia',
      capacidadeAtual: '12.8 ton',
      utilizacao: '64%',
      veiculos: 6,
      status: 'Baixo',
      tendencia: 'Decrescendo'
    },
    {
      id: 4,
      setor: 'Industrial',
      capacidadeTotal: '40 ton/dia',
      capacidadeAtual: '32.5 ton',
      utilizacao: '81%',
      veiculos: 12,
      status: 'Normal',
      tendencia: 'Estável'
    }
  ];

  const previsoes = [
    {
      dia: 'Segunda',
      demanda: 28.5,
      capacidade: 35,
      status: 'Normal'
    },
    {
      dia: 'Terça',
      demanda: 32.8,
      capacidade: 35,
      status: 'Normal'
    },
    {
      dia: 'Quarta',
      demanda: 36.2,
      capacidade: 35,
      status: 'Crítico'
    },
    {
      dia: 'Quinta',
      demanda: 29.5,
      capacidade: 35,
      status: 'Normal'
    },
    {
      dia: 'Sexta',
      demanda: 34.1,
      capacidade: 35,
      status: 'Normal'
    }
  ];

  const recursos = [
    {
      tipo: 'Veículos Comerciais',
      total: 45,
      ativo: 38,
      manutencao: 4,
      disponivel: 3,
      utilizacao: '84%'
    },
    {
      tipo: 'Carrinhos Catadores',
      total: 156,
      ativo: 132,
      manutencao: 8,
      disponivel: 16,
      utilizacao: '85%'
    },
    {
      tipo: 'Bicicletas Cargo',
      total: 28,
      ativo: 22,
      manutencao: 2,
      disponivel: 4,
      utilizacao: '79%'
    },
    {
      tipo: 'Caminhões Pesados',
      total: 12,
      ativo: 10,
      manutencao: 1,
      disponivel: 1,
      utilizacao: '83%'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Scale className="h-6 w-6 text-purple-600" />
            <span>Gestão de Capacidade e Recursos</span>
          </CardTitle>
          <CardDescription>
            Monitoramento e otimização da capacidade operacional
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Controles de Período */}
            <div className="flex space-x-2">
              {['dia', 'semana', 'mês'].map((periodo) => (
                <Button
                  key={periodo}
                  variant={periodoSelecionado === periodo ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPeriodoSelecionado(periodo)}
                  className="capitalize"
                >
                  {periodo}
                </Button>
              ))}
            </div>

            {/* Capacidade por Setor */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {capacidades.map((setor) => (
                <Card key={setor.id} className={`border-l-4 ${
                  setor.status === 'Crítico' ? 'border-l-red-500' :
                  setor.status === 'Normal' ? 'border-l-green-500' :
                  'border-l-yellow-500'
                }`}>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{setor.setor}</h4>
                        <Badge 
                          variant="outline"
                          className={
                            setor.status === 'Crítico' ? 'text-red-600 border-red-600' :
                            setor.status === 'Normal' ? 'text-green-600 border-green-600' :
                            'text-yellow-600 border-yellow-600'
                          }
                        >
                          {setor.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Capacidade:</span>
                          <span className="font-medium">{setor.capacidadeTotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Atual:</span>
                          <span className="font-medium">{setor.capacidadeAtual}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Utilização:</span>
                          <span className={`font-medium ${
                            setor.utilizacao.includes('95') ? 'text-red-600' :
                            setor.utilizacao.includes('74') || setor.utilizacao.includes('81') ? 'text-green-600' :
                            'text-yellow-600'
                          }`}>
                            {setor.utilizacao}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Veículos:</span>
                          <span className="font-medium">{setor.veiculos}</span>
                        </div>
                      </div>
                      
                      <div className="pt-2 border-t">
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="h-3 w-3 text-gray-500" />
                          <span className="text-xs text-gray-600">
                            Tendência: {setor.tendencia}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Previsão de Demanda */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-blue-600" />
            <span>Previsão Inteligente de Demanda</span>
          </CardTitle>
          <CardDescription>
            Análise preditiva baseada em machine learning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-4">
              {previsoes.map((previsao, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">{previsao.dia}</h4>
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-blue-600">
                          {previsao.demanda} ton
                        </div>
                        <div className="text-xs text-gray-600">
                          Cap: {previsao.capacidade} ton
                        </div>
                        <Badge 
                          variant="outline"
                          className={
                            previsao.status === 'Crítico' ? 'text-red-600 border-red-600' :
                            'text-green-600 border-green-600'
                          }
                        >
                          {previsao.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Insights da IA</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Quarta-feira terá pico de demanda (+3.5% acima da capacidade)</li>
                <li>• Recomendação: Alocar 2 veículos extras da Zona Sul</li>
                <li>• Padrão sazonal detectado: aumento de 15% em fins de semana</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recursos Disponíveis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-green-600" />
            <span>Recursos e Frota</span>
          </CardTitle>
          <CardDescription>
            Monitoramento em tempo real da frota disponível
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recursos.map((recurso, index) => (
              <Card key={index} className="border-green-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Truck className="h-6 w-6 text-green-600" />
                      <Badge className="bg-green-100 text-green-800">
                        {recurso.utilizacao}
                      </Badge>
                    </div>
                    
                    <h4 className="font-semibold text-sm">{recurso.tipo}</h4>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total:</span>
                        <span className="font-medium">{recurso.total}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-600">Ativo:</span>
                        <span className="font-medium text-green-600">{recurso.ativo}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-orange-600">Manutenção:</span>
                        <span className="font-medium text-orange-600">{recurso.manutencao}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-600">Disponível:</span>
                        <span className="font-medium text-blue-600">{recurso.disponivel}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Otimizações Sugeridas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-6 w-6 text-orange-600" />
            <span>Otimizações Recomendadas</span>
          </CardTitle>
          <CardDescription>
            Sugestões automáticas para melhorar eficiência
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-orange-200">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-orange-900">Redistribuição de Frota</h4>
                    <p className="text-sm text-orange-800">
                      Transferir 2 veículos da Zona Sul (64% utilização) para Zona Norte (95% utilização)
                    </p>
                    <div className="flex space-x-2 mt-3">
                      <Badge className="bg-orange-100 text-orange-800">Economia: 15%</Badge>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        Aplicar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-900">Otimização de Rotas</h4>
                    <p className="text-sm text-blue-800">
                      Consolidar 3 rotas no setor Industrial pode reduzir 25% do tempo de operação
                    </p>
                    <div className="flex space-x-2 mt-3">
                      <Badge className="bg-blue-100 text-blue-800">Tempo: -2h</Badge>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Simular
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GestaoCapacidade;
