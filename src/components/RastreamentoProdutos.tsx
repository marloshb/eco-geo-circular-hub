
import React, { useState } from 'react';
import { MapPin, Package, Truck, Recycle, Clock, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RastreamentoProdutos = () => {
  const [selectedProduct, setSelectedProduct] = useState('ECO001');

  const produtos = [
    {
      id: 'ECO001',
      nome: 'Laptop Sustentável Pro',
      status: 'Em trânsito',
      localizacao: 'São Paulo - SP',
      destino: 'Centro de Reciclagem TechRecycle',
      etapa: 'Coleta realizada',
      progresso: 60,
      sensor: 'Ativo',
      timeline: [
        { data: '2024-01-15', evento: 'Produto registrado', local: 'Fábrica EcoTech' },
        { data: '2024-01-20', evento: 'Enviado para varejo', local: 'Centro de Distribuição' },
        { data: '2024-03-10', evento: 'Vendido', local: 'Loja TechStore SP' },
        { data: '2024-12-15', evento: 'Fim de vida útil', local: 'Residência do cliente' },
        { data: '2024-12-20', evento: 'Coleta agendada', local: 'Via app EcoCircular' },
        { data: '2024-12-25', evento: 'Em trânsito', local: 'Caminhão de coleta' }
      ]
    },
    {
      id: 'ECO002',
      nome: 'Mesa Modular Eco',
      status: 'Em uso',
      localizacao: 'Rio de Janeiro - RJ',
      destino: 'Escritório Sustentável Ltda',
      etapa: 'Uso normal',
      progresso: 30,
      sensor: 'Ativo',
      timeline: [
        { data: '2024-06-01', evento: 'Produção iniciada', local: 'Fábrica MóveisVerde' },
        { data: '2024-06-15', evento: 'Montagem concluída', local: 'Linha de produção' },
        { data: '2024-06-20', evento: 'Entregue', local: 'Escritório cliente RJ' }
      ]
    }
  ];

  const produtoAtual = produtos.find(p => p.id === selectedProduct) || produtos[0];

  const sensores = [
    { tipo: 'Localização GPS', status: 'Ativo', valor: '-23.5505, -46.6333' },
    { tipo: 'Temperatura', status: 'Normal', valor: '22°C' },
    { tipo: 'Umidade', status: 'Normal', valor: '45%' },
    { tipo: 'Vibração', status: 'Baixa', valor: '0.2g' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-green-600" />
            <span>Rastreamento em Tempo Real</span>
          </CardTitle>
          <CardDescription>
            Monitoramento completo usando IoT, GPS e GIS para produtos circulares
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-6">
            {produtos.map((produto) => (
              <Button 
                key={produto.id}
                variant={selectedProduct === produto.id ? 'default' : 'outline'}
                onClick={() => setSelectedProduct(produto.id)}
                size="sm"
              >
                {produto.id}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{produtoAtual.nome}</span>
                    <Badge variant={produtoAtual.status === 'Em uso' ? 'default' : 'secondary'}>
                      {produtoAtual.status}
                    </Badge>
                  </CardTitle>
                  <CardDescription>ID: {produtoAtual.id}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Localização Atual</p>
                        <p className="text-lg">{produtoAtual.localizacao}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Destino</p>
                        <p className="text-lg">{produtoAtual.destino}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Progresso da Jornada</p>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-green-600 h-3 rounded-full transition-all duration-300" 
                          style={{ width: `${produtoAtual.progresso}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{produtoAtual.etapa}</p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-medium text-green-900 mb-2">Linha do Tempo</h4>
                      <div className="space-y-3">
                        {produtoAtual.timeline.map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-3 h-3 bg-green-600 rounded-full mt-1.5"></div>
                            <div>
                              <p className="text-sm font-medium text-green-900">{item.evento}</p>
                              <p className="text-xs text-green-700">{item.data} - {item.local}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Wifi className="h-5 w-5 text-blue-600" />
                    <span>Sensores IoT</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sensores.map((sensor, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">{sensor.tipo}</p>
                          <p className="text-xs text-gray-600">{sensor.valor}</p>
                        </div>
                        <Badge 
                          variant={sensor.status === 'Ativo' || sensor.status === 'Normal' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {sensor.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Próximas Ações</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Chegada prevista: 26/12</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Recycle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Processo de reciclagem</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span className="text-sm">Relatório de conformidade</span>
                    </div>
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
            <CardTitle className="text-sm font-medium">Produtos Rastreados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,847</div>
            <p className="text-xs text-gray-600">Ativos no sistema</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Sensores Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">3,294</div>
            <p className="text-xs text-gray-600">Transmitindo dados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Recuperação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">87%</div>
            <p className="text-xs text-gray-600">Produtos coletados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cobertura GIS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">95%</div>
            <p className="text-xs text-gray-600">Território nacional</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mapa de Rastreamento</CardTitle>
          <CardDescription>Visualização geográfica dos produtos em tempo real</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Mapa interativo com localização dos produtos</p>
              <p className="text-sm text-gray-500">Integração com GIS e dados em tempo real</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RastreamentoProdutos;
