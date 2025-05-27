
import React, { useState } from 'react';
import { TrendingUp, DollarSign, BarChart3, Calculator, Award, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const PrecificacaoDinamica = () => {
  const [materialSelecionado, setMaterialSelecionado] = useState('pet');
  const [quantidade, setQuantidade] = useState('');
  const [qualidade, setQualidade] = useState('alta');

  const precosMateriais = {
    pet: { nome: 'PET', precoBase: 1200, unidade: '/ton', tendencia: 'alta', variacao: '+8%' },
    aluminio: { nome: 'Alumínio', precoBase: 4500, unidade: '/ton', tendencia: 'estavel', variacao: '+2%' },
    papel: { nome: 'Papel', precoBase: 800, unidade: '/ton', tendencia: 'baixa', variacao: '-3%' },
    cobre: { nome: 'Cobre', precoBase: 25000, unidade: '/ton', tendencia: 'alta', variacao: '+12%' },
    organico: { nome: 'Orgânico', precoBase: 150, unidade: '/ton', tendencia: 'estavel', variacao: '+1%' }
  };

  const fatoresPreco = [
    { fator: 'Oferta Regional', impacto: 'Médio', descricao: 'Disponibilidade na região' },
    { fator: 'Demanda Sazonal', impacto: 'Alto', descricao: 'Variação conforme época do ano' },
    { fator: 'Qualidade do Material', impacto: 'Alto', descricao: 'Estado de conservação e pureza' },
    { fator: 'Distância Logística', impacto: 'Médio', descricao: 'Custo de transporte' },
    { fator: 'Volume da Transação', impacto: 'Baixo', descricao: 'Desconto por quantidade' }
  ];

  const historicoPrecosSemanais = [
    { semana: 'Sem 1', pet: 1150, aluminio: 4300, papel: 820 },
    { semana: 'Sem 2', pet: 1180, aluminio: 4350, papel: 810 },
    { semana: 'Sem 3', pet: 1200, aluminio: 4400, papel: 800 },
    { semana: 'Sem 4', pet: 1220, aluminio: 4500, papel: 790 }
  ];

  const calcularPreco = () => {
    const material = precosMateriais[materialSelecionado];
    if (!material || !quantidade) return 0;
    
    let precoFinal = material.precoBase;
    
    // Ajuste por qualidade
    if (qualidade === 'alta') precoFinal *= 1.1;
    else if (qualidade === 'media') precoFinal *= 1.0;
    else precoFinal *= 0.85;
    
    // Ajuste por quantidade (desconto para grandes volumes)
    const qtd = parseFloat(quantidade);
    if (qtd > 10) precoFinal *= 0.95;
    if (qtd > 50) precoFinal *= 0.90;
    
    return (precoFinal * qtd).toFixed(2);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-green-600" />
            <span>Precificação Dinâmica</span>
          </CardTitle>
          <CardDescription>
            Algoritmos baseados em oferta/demanda regional com preços justos para catadores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Calculadora de Preços */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Calculator className="h-5 w-5 text-blue-600" />
                  <span>Calculadora de Preços</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Material</label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(precosMateriais).map(([key, material]) => (
                      <Button
                        key={key}
                        variant={materialSelecionado === key ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setMaterialSelecionado(key)}
                        className="text-xs"
                      >
                        {material.nome}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Quantidade (toneladas)</label>
                  <Input
                    type="number"
                    placeholder="Ex: 2.5"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Qualidade</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['alta', 'media', 'baixa'].map((qual) => (
                      <Button
                        key={qual}
                        variant={qualidade === qual ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setQualidade(qual)}
                        className="text-xs capitalize"
                      >
                        {qual}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Preço Estimado:</span>
                    <span className="text-2xl font-bold text-green-600">
                      R$ {calcularPreco()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Baseado em {precosMateriais[materialSelecionado]?.nome} - 
                    R$ {precosMateriais[materialSelecionado]?.precoBase}{precosMateriais[materialSelecionado]?.unidade}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tabela de Preços Atual */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span>Preços Atuais por Material</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(precosMateriais).map(([key, material]) => (
                    <div key={key} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{material.nome}</p>
                        <p className="text-sm text-gray-600">
                          R$ {material.precoBase.toLocaleString()}{material.unidade}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant="outline"
                          className={
                            material.tendencia === 'alta' ? 'text-green-600 border-green-600' :
                            material.tendencia === 'baixa' ? 'text-red-600 border-red-600' :
                            'text-blue-600 border-blue-600'
                          }
                        >
                          {material.variacao}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1 capitalize">
                          {material.tendencia}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Fatores que Influenciam o Preço */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-purple-600" />
            <span>Fatores de Formação de Preços</span>
          </CardTitle>
          <CardDescription>
            Transparência na formação dos preços de mercado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fatoresPreco.map((fator, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{fator.fator}</h4>
                  <Badge 
                    variant="outline"
                    className={
                      fator.impacto === 'Alto' ? 'text-red-600 border-red-600' :
                      fator.impacto === 'Médio' ? 'text-orange-600 border-orange-600' :
                      'text-green-600 border-green-600'
                    }
                  >
                    {fator.impacto}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{fator.descricao}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Histórico de Preços */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Preços - Últimas 4 Semanas</CardTitle>
          <CardDescription>
            Evolução dos preços dos principais materiais
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {historicoPrecosSemanais.map((periodo, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium mb-3">{periodo.semana}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>PET:</span>
                      <span className="font-medium">R$ {periodo.pet}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Alumínio:</span>
                      <span className="font-medium">R$ {periodo.aluminio}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Papel:</span>
                      <span className="font-medium">R$ {periodo.papel}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Programa de Preços Justos para Catadores */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-6 w-6 text-yellow-600" />
            <span>Programa Preços Justos - Catadores</span>
          </CardTitle>
          <CardDescription>
            Garantia de preços mínimos e transparentes para catadores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <h4 className="font-semibold text-yellow-800">Preço Mínimo Garantido</h4>
                </div>
                <p className="text-sm text-yellow-700">
                  Catadores recebem no mínimo 85% do preço de mercado, 
                  garantindo renda justa e previsível.
                </p>
              </div>
              
              <div className="space-y-2">
                <h5 className="font-medium">Benefícios Exclusivos</h5>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Antecipação de pagamentos</li>
                  <li>• Bônus por volume mensal</li>
                  <li>• Capacitação em precificação</li>
                  <li>• Acesso prioritário a compradores</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-medium">Transparência nos Preços</h5>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="text-sm">Preço de Mercado (PET)</span>
                  <span className="font-medium">R$ 1.200/ton</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="text-sm">Preço Mínimo Catador</span>
                  <span className="font-medium text-green-600">R$ 1.020/ton</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span className="text-sm">Bônus Qualidade Alta</span>
                  <span className="font-medium text-blue-600">+10%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrecificacaoDinamica;
