
import React, { useState } from 'react';
import { Store, Search, Filter, MapPin, Star, Truck, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MarketplaceB2B = () => {
  const [activeMarketTab, setActiveMarketTab] = useState('ofertas');
  const [searchTerm, setSearchTerm] = useState('');

  const ofertas = [
    {
      id: 1,
      titulo: 'Aparas de PET Cristal',
      empresa: 'Recicladora São Paulo Ltda',
      categoria: 'Plásticos',
      quantidade: '5 toneladas/mês',
      preco: 'R$ 2.400/ton',
      localizacao: 'São Paulo, SP',
      distancia: '12 km',
      rating: 4.8,
      avaliacoes: 47,
      certificacoes: ['PNRS', 'ISO 14001'],
      descricao: 'Aparas de PET cristal lavadas e separadas, ideais para reciclagem'
    },
    {
      id: 2,
      titulo: 'Sucata de Cobre Industrial',
      empresa: 'MetalRecycle Corp',
      categoria: 'Metais',
      quantidade: '2 toneladas',
      preco: 'R$ 28.500/ton',
      localizacao: 'Guarulhos, SP',
      distancia: '18 km',
      rating: 4.9,
      avaliacoes: 73,
      certificacoes: ['PNRS', 'ENEC'],
      descricao: 'Sucata de cobre de alta pureza, sem contaminação'
    },
    {
      id: 3,
      titulo: 'Papel Branco para Reciclagem',
      empresa: 'Gráfica Digital Plus',
      categoria: 'Papel/Papelão',
      quantidade: '8 toneladas',
      preco: 'R$ 800/ton',
      localizacao: 'Osasco, SP',
      distancia: '22 km',
      rating: 4.6,
      avaliacoes: 31,
      certificacoes: ['PNRS'],
      descricao: 'Papel offset branco de primeira qualidade, sem impressão'
    },
    {
      id: 4,
      titulo: 'Resíduos Orgânicos Compostáveis',
      empresa: 'Mercado Central ABC',
      categoria: 'Orgânicos',
      quantidade: '15 toneladas/semana',
      preco: 'R$ 120/ton',
      localizacao: 'Santo André, SP',
      distancia: '25 km',
      rating: 4.7,
      avaliacoes: 52,
      certificacoes: ['PNRS', 'Orgânico'],
      descricao: 'Resíduos orgânicos frescos para compostagem e bioenergia'
    }
  ];

  const demandas = [
    {
      id: 1,
      titulo: 'Procuro Madeira de Demolição',
      empresa: 'Construtora Sustentável',
      categoria: 'Madeira',
      quantidade: '10 m³',
      precoMax: 'R$ 350/m³',
      localizacao: 'São Paulo, SP',
      urgencia: 'Alta',
      detalhes: 'Madeira de demolição para projeto sustentável'
    },
    {
      id: 2,
      titulo: 'Alumínio para Reciclagem',
      empresa: 'EcoMetal Ind.',
      categoria: 'Metais',
      quantidade: '3 toneladas/mês',
      precoMax: 'R$ 8.500/ton',
      localizacao: 'Diadema, SP',
      urgencia: 'Média',
      detalhes: 'Latas e perfis de alumínio limpos'
    }
  ];

  const fornecedoresRecomendados = [
    {
      id: 1,
      nome: 'EcoRecycle Solutions',
      especialidade: 'Plásticos e Metais',
      rating: 4.9,
      avaliacoes: 156,
      localizacao: 'São Paulo, SP',
      certificacoes: ['PNRS', 'ISO 14001', 'ENEC'],
      descricao: 'Especializada em reciclagem de plásticos industriais'
    },
    {
      id: 2,
      nome: 'Cooperativa Verde Sustentável',
      especialidade: 'Papel e Orgânicos',
      rating: 4.7,
      avaliacoes: 89,
      localizacao: 'Guarulhos, SP',
      certificacoes: ['PNRS', 'Selo Verde'],
      descricao: 'Cooperativa com foco em inclusão social'
    },
    {
      id: 3,
      nome: 'ConstructRecycle',
      especialidade: 'Resíduos de Construção',
      rating: 4.8,
      avaliacoes: 134,
      localizacao: 'Osasco, SP',
      certificacoes: ['PNRS', 'CONAMA 307'],
      descricao: 'Gestão completa de RCD e materiais'
    }
  ];

  const filteredOfertas = ofertas.filter(oferta =>
    oferta.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    oferta.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Marketplace B2B</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Store className="h-4 w-4 mr-2" />
            Criar Oferta
          </Button>
        </div>
      </div>

      {/* Barra de Pesquisa */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Buscar materiais, categorias ou empresas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <Tabs value={activeMarketTab} onValueChange={setActiveMarketTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ofertas">Ofertas Disponíveis</TabsTrigger>
          <TabsTrigger value="demandas">Demandas</TabsTrigger>
          <TabsTrigger value="fornecedores">Fornecedores</TabsTrigger>
        </TabsList>

        <TabsContent value="ofertas" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredOfertas.map((oferta) => (
              <Card key={oferta.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{oferta.titulo}</CardTitle>
                      <CardDescription className="mt-1">
                        por {oferta.empresa}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{oferta.categoria}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">{oferta.descricao}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Quantidade:</span>
                        <p className="font-medium">{oferta.quantidade}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Preço:</span>
                        <p className="font-medium text-green-600">{oferta.preco}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{oferta.localizacao}</span>
                        <span className="text-gray-400">({oferta.distancia})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>{oferta.rating}</span>
                        <span className="text-gray-400">({oferta.avaliacoes})</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {oferta.certificacoes.map((cert, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Negociar
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Truck className="h-4 w-4 mr-1" />
                        Solicitar Coleta
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="demandas" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {demandas.map((demanda) => (
              <Card key={demanda.id} className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{demanda.titulo}</CardTitle>
                      <CardDescription className="mt-1">
                        por {demanda.empresa}
                      </CardDescription>
                    </div>
                    <Badge className={
                      demanda.urgencia === 'Alta' ? 'bg-red-100 text-red-800' :
                      demanda.urgencia === 'Média' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }>
                      {demanda.urgencia}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">{demanda.detalhes}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Quantidade:</span>
                        <p className="font-medium">{demanda.quantidade}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Preço Máximo:</span>
                        <p className="font-medium text-blue-600">{demanda.precoMax}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{demanda.localizacao}</span>
                    </div>

                    <Button size="sm" className="w-full">
                      Enviar Proposta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Publique sua Demanda
                </h3>
                <p className="text-blue-700 mb-4">
                  Deixe claro o que você precisa e receba propostas dos melhores fornecedores
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Criar Demanda
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fornecedores" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {fornecedoresRecomendados.map((fornecedor) => (
              <Card key={fornecedor.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{fornecedor.nome}</CardTitle>
                      <CardDescription className="mt-1">
                        {fornecedor.especialidade}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium">{fornecedor.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">{fornecedor.descricao}</p>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{fornecedor.localizacao}</span>
                      </div>
                      <span className="text-gray-400">
                        {fornecedor.avaliacoes} avaliações
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {fornecedor.certificacoes.map((cert, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        Ver Perfil
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Contatar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketplaceB2B;
