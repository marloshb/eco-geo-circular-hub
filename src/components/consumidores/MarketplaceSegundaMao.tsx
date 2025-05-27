
import React, { useState } from 'react';
import { ShoppingBag, Search, Filter, Star, MapPin, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MarketplaceSegundaMao = () => {
  const [categoria, setCategoria] = useState('todos');
  const [busca, setBusca] = useState('');

  const categorias = [
    { id: 'todos', nome: 'Todos', count: 1247 },
    { id: 'roupas', nome: 'Roupas & Acessórios', count: 456 },
    { id: 'moveis', nome: 'Móveis', count: 234 },
    { id: 'eletronicos', nome: 'Eletrônicos', count: 189 },
    { id: 'livros', nome: 'Livros', count: 167 },
    { id: 'brinquedos', nome: 'Brinquedos', count: 98 },
    { id: 'decoracao', nome: 'Decoração', count: 103 }
  ];

  const produtos = [
    {
      id: 1,
      nome: 'iPhone 12 Pro - Estado Excelente',
      preco: 2800,
      precoOriginal: 4500,
      vendedor: 'Maria Silva',
      localizacao: 'São Paulo - SP',
      distancia: '2.1 km',
      condicao: 'Excelente',
      categoria: 'eletronicos',
      imagem: '/placeholder.svg',
      avaliacaoVendedor: 4.8,
      descricao: 'iPhone em perfeito estado, apenas alguns meses de uso. Acompanha caixa e carregador.',
      sustentabilidade: 'Evita 15kg de CO₂',
      curtidas: 23,
      tipo: 'Venda'
    },
    {
      id: 2,
      nome: 'Sofá 3 Lugares - Tecido Azul',
      preco: 0,
      precoOriginal: 1200,
      vendedor: 'João Santos',
      localizacao: 'Rio de Janeiro - RJ',
      distancia: '5.8 km',
      condicao: 'Bom',
      categoria: 'moveis',
      imagem: '/placeholder.svg',
      avaliacaoVendedor: 4.6,
      descricao: 'Sofá confortável, ideal para sala. Pequenos sinais de uso, mas em ótima condição.',
      sustentabilidade: 'Evita 45kg de CO₂',
      curtidas: 12,
      tipo: 'Doação'
    },
    {
      id: 3,
      nome: 'Vestido Floral - Tamanho M',
      preco: 45,
      precoOriginal: 120,
      vendedor: 'Ana Costa',
      localizacao: 'Belo Horizonte - MG',
      distancia: '1.3 km',
      condicao: 'Muito Bom',
      categoria: 'roupas',
      imagem: '/placeholder.svg',
      avaliacaoVendedor: 4.9,
      descricao: 'Vestido usado apenas 2 vezes, perfeito para o verão. Tecido de alta qualidade.',
      sustentabilidade: 'Evita 8kg de CO₂',
      curtidas: 34,
      tipo: 'Venda'
    },
    {
      id: 4,
      nome: 'Coleção Harry Potter - 7 Livros',
      preco: 80,
      precoOriginal: 200,
      vendedor: 'Pedro Oliveira',
      localizacao: 'Porto Alegre - RS',
      distancia: '3.2 km',
      condicao: 'Bom',
      categoria: 'livros',
      imagem: '/placeholder.svg',
      avaliacaoVendedor: 4.7,
      descricao: 'Coleção completa em bom estado. Algumas páginas com marcações de leitura.',
      sustentabilidade: 'Evita 12kg de CO₂',
      curtidas: 18,
      tipo: 'Venda'
    }
  ];

  const produtosFiltrados = produtos.filter(produto => {
    const matchCategoria = categoria === 'todos' || produto.categoria === categoria;
    const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase());
    return matchCategoria && matchBusca;
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-blue-600" />
            <span>Marketplace de Segunda Mão</span>
          </CardTitle>
          <CardDescription>
            Compre, venda ou doe produtos usados e contribua para a economia circular
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filtros e Busca */}
          <div className="space-y-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <span>Filtros</span>
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Vender Produto
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoria(cat.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    categoria === cat.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.nome} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtosFiltrados.map((produto) => (
              <Card key={produto.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
                      <ShoppingBag className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          produto.tipo === 'Doação' 
                            ? 'bg-green-100 text-green-800 border-green-300' 
                            : 'bg-blue-100 text-blue-800 border-blue-300'
                        }`}
                      >
                        {produto.tipo}
                      </Badge>
                    </div>
                    <button className="absolute top-2 right-2 p-1 bg-white/80 rounded-full hover:bg-white transition-colors">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                    <div className="absolute bottom-2 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {produto.sustentabilidade}
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 line-clamp-2">{produto.nome}</h4>
                      <p className="text-sm text-gray-600 mt-1">{produto.descricao}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      {produto.preco > 0 ? (
                        <div className="space-y-1">
                          <p className="text-lg font-bold text-blue-600">R$ {produto.preco}</p>
                          <p className="text-xs text-gray-500 line-through">R$ {produto.precoOriginal}</p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-lg font-bold text-green-600">Grátis</p>
                          <p className="text-xs text-gray-500">Valor original: R$ {produto.precoOriginal}</p>
                        </div>
                      )}
                      
                      <Badge variant="outline" className="text-xs">
                        {produto.condicao}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <span className="font-medium">{produto.vendedor}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs">{produto.avaliacaoVendedor}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Heart className="h-3 w-3" />
                          <span className="text-xs">{produto.curtidas}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-xs text-gray-600">
                        <MapPin className="h-3 w-3" />
                        <span>{produto.localizacao} • {produto.distancia}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                        {produto.tipo === 'Doação' ? 'Solicitar' : 'Comprar'}
                      </Button>
                      <Button size="sm" variant="outline" className="px-3">
                        <MessageCircle className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Estatísticas */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Impacto do Marketplace</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">124 ton</p>
                <p className="text-sm text-gray-600">CO₂ Evitado</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">45,623</p>
                <p className="text-sm text-gray-600">Produtos Reutilizados</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">R$ 2.1M</p>
                <p className="text-sm text-gray-600">Economia Gerada</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketplaceSegundaMao;
