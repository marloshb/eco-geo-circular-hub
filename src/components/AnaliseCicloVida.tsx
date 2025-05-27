
import React, { useState } from 'react';
import { TrendingUp, BarChart3, Leaf, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const AnaliseCicloVida = () => {
  const [selectedProduct, setSelectedProduct] = useState('smartphone');

  const produtos = {
    smartphone: {
      nome: 'Smartphone EcoTech X1',
      fases: [
        { nome: 'Extração de Materiais', impacto: 35, co2: '15.2 kg', status: 'alto' },
        { nome: 'Produção', impacto: 28, co2: '12.8 kg', status: 'medio' },
        { nome: 'Transporte', impacto: 8, co2: '3.1 kg', status: 'baixo' },
        { nome: 'Uso', impacto: 15, co2: '8.5 kg', status: 'baixo' },
        { nome: 'Descarte/Reciclagem', impacto: 14, co2: '4.2 kg', status: 'medio' }
      ],
      total: { co2: '43.8 kg', agua: '180 L', energia: '285 kWh' },
      melhorias: [
        'Usar 60% mais alumínio reciclado (-8.2 kg CO2)',
        'Otimizar embalagem (-1.5 kg CO2)',
        'Melhorar eficiência energética (-3.1 kg CO2)'
      ]
    },
    mesa: {
      nome: 'Mesa de Escritório Sustentável',
      fases: [
        { nome: 'Extração de Madeira', impacto: 25, co2: '8.5 kg', status: 'medio' },
        { nome: 'Processamento', impacto: 30, co2: '12.3 kg', status: 'alto' },
        { nome: 'Montagem', impacto: 15, co2: '5.8 kg', status: 'baixo' },
        { nome: 'Transporte', impacto: 12, co2: '4.2 kg', status: 'baixo' },
        { nome: 'Fim de Vida', impacto: 18, co2: '2.1 kg', status: 'baixo' }
      ],
      total: { co2: '32.9 kg', agua: '95 L', energia: '156 kWh' },
      melhorias: [
        'Certificação FSC reduz impacto em 25%',
        'Transporte local (-2.1 kg CO2)',
        'Design modular para reutilização'
      ]
    }
  };

  const produtoAtual = produtos[selectedProduct as keyof typeof produtos];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-green-600" />
            <span>Análise de Ciclo de Vida (ACV)</span>
          </CardTitle>
          <CardDescription>
            Avaliação completa do impacto ambiental baseada na norma ISO 14040
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex space-x-4">
              <Button 
                variant={selectedProduct === 'smartphone' ? 'default' : 'outline'}
                onClick={() => setSelectedProduct('smartphone')}
              >
                Smartphone EcoTech
              </Button>
              <Button 
                variant={selectedProduct === 'mesa' ? 'default' : 'outline'}
                onClick={() => setSelectedProduct('mesa')}
              >
                Mesa Sustentável
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{produtoAtual.nome}</CardTitle>
                <CardDescription>Impacto por fase do ciclo de vida</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {produtoAtual.fases.map((fase, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{fase.nome}</span>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={fase.status === 'alto' ? 'destructive' : fase.status === 'medio' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {fase.status === 'alto' ? 'Alto' : fase.status === 'medio' ? 'Médio' : 'Baixo'}
                          </Badge>
                          <span className="text-sm text-gray-600">{fase.co2}</span>
                        </div>
                      </div>
                      <Progress value={fase.impacto} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Impacto Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{produtoAtual.total.co2}</div>
                      <p className="text-sm text-gray-600">CO2 Emitido</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{produtoAtual.total.agua}</div>
                      <p className="text-sm text-gray-600">Água Utilizada</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">{produtoAtual.total.energia}</div>
                      <p className="text-sm text-gray-600">Energia Consumida</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    <span>Oportunidades de Melhoria</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {produtoAtual.melhorias.map((melhoria, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{melhoria}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Produtos Analisados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-gray-600">+12 esta semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Economia CO2</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">2.4t</div>
            <p className="text-xs text-gray-600">Por melhorias implementadas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Conformidade ISO</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">98%</div>
            <p className="text-xs text-gray-600">Relatórios em conformidade</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Setores Atendidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">5</div>
            <p className="text-xs text-gray-600">Manufatura, construção, etc.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-blue-600" />
            <span>Comparativo por Setor</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { setor: 'Eletrônicos', impacto: 85, cor: 'bg-red-500' },
              { setor: 'Móveis', impacto: 45, cor: 'bg-yellow-500' },
              { setor: 'Têxtil', impacto: 60, cor: 'bg-orange-500' },
              { setor: 'Embalagens', impacto: 25, cor: 'bg-green-500' },
              { setor: 'Construção', impacto: 70, cor: 'bg-red-400' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-24 text-sm font-medium">{item.setor}</div>
                <div className="flex-1">
                  <Progress value={item.impacto} className="h-3" />
                </div>
                <div className="w-12 text-sm text-gray-600">{item.impacto}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnaliseCicloVida;
