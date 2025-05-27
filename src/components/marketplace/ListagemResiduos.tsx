import React, { useState } from 'react';
import { Package, Search, Filter, Upload, Star, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DetalhesResiduoModal from './DetalhesResiduoModal';
import ListarResiduoModal from './ListarResiduoModal';

const ListagemResiduos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [detalhesModal, setDetalhesModal] = useState(false);
  const [listarModal, setListarModal] = useState(false);
  const [residuoSelecionado, setResiduoSelecionado] = useState(null);

  const categorias = [
    { id: 'todos', nome: 'Todos', cor: 'bg-gray-100 text-gray-800' },
    { id: 'plasticos', nome: 'Plásticos', cor: 'bg-blue-100 text-blue-800' },
    { id: 'metais', nome: 'Metais', cor: 'bg-yellow-100 text-yellow-800' },
    { id: 'organicos', nome: 'Orgânicos', cor: 'bg-green-100 text-green-800' },
    { id: 'eletronicos', nome: 'Eletrônicos', cor: 'bg-purple-100 text-purple-800' },
    { id: 'papel', nome: 'Papel/Papelão', cor: 'bg-orange-100 text-orange-800' },
    { id: 'entulho', nome: 'Entulho', cor: 'bg-gray-100 text-gray-800' },
  ];

  const residuos = [
    {
      id: 1,
      titulo: 'Aparas de PET - 500kg',
      categoria: 'plasticos',
      preco: 'R$ 1.200/ton',
      localizacao: 'São Paulo - SP',
      vendedor: 'Indústria EcoPlast',
      qualidade: 4.5,
      descricao: 'Aparas de PET cristal, limpas e separadas por cor',
      quantidade: '500kg disponíveis',
      certificacao: 'ABNT NBR 10004',
      imagem: '/placeholder.svg',
      distancia: '2.5 km'
    },
    {
      id: 2,
      titulo: 'Sucata de Alumínio - 2 ton',
      categoria: 'metais',
      preco: 'R$ 4.500/ton',
      localizacao: 'Rio de Janeiro - RJ',
      vendedor: 'Cooperativa MetalRecicla',
      qualidade: 4.8,
      descricao: 'Sucata de alumínio limpa, prensada e separada',
      quantidade: '2 toneladas',
      certificacao: 'Certificado de Origem',
      imagem: '/placeholder.svg',
      distancia: '5.1 km'
    },
    {
      id: 3,
      titulo: 'Resíduos Orgânicos - 1 ton',
      categoria: 'organicos',
      preco: 'R$ 150/ton',
      localizacao: 'Belo Horizonte - MG',
      vendedor: 'Mercado Central BH',
      qualidade: 4.2,
      descricao: 'Restos de frutas e vegetais frescos para compostagem',
      quantidade: '1 tonelada diária',
      certificacao: 'Livre de agrotóxicos',
      imagem: '/placeholder.svg',
      distancia: '1.2 km'
    },
    {
      id: 4,
      titulo: 'Eletrônicos Usados - Lote',
      categoria: 'eletronicos',
      preco: 'R$ 25.000/lote',
      localizacao: 'Brasília - DF',
      vendedor: 'TechRecycle Corp',
      qualidade: 3.9,
      descricao: 'Lote de eletrônicos para refurbishing ou reciclagem',
      quantidade: '150 equipamentos',
      certificacao: 'Laudo de Funcionamento',
      imagem: '/placeholder.svg',
      distancia: '8.7 km'
    }
  ];

  const residuosFiltrados = residuos.filter(residuo => {
    const matchCategory = selectedCategory === 'todos' || residuo.categoria === selectedCategory;
    const matchSearch = residuo.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       residuo.vendedor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const verDetalhes = (residuo: any) => {
    setResiduoSelecionado(residuo);
    setDetalhesModal(true);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-green-600" />
            <span>Listagem e Categorização de Resíduos</span>
          </CardTitle>
          <CardDescription>
            Sistema de classificação baseado em normas ABNT NBR 10004:2004
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Barra de Busca e Filtros */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar resíduos por tipo, vendedor ou localização..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filtros Avançados</span>
              </Button>
              <Button 
                className="bg-green-600 hover:bg-green-700 flex items-center space-x-2"
                onClick={() => setListarModal(true)}
              >
                <Upload className="h-4 w-4" />
                <span>Listar Resíduo</span>
              </Button>
            </div>

            {/* Categorias */}
            <div className="flex flex-wrap gap-2">
              {categorias.map((categoria) => (
                <Badge
                  key={categoria.id}
                  className={`cursor-pointer transition-all ${
                    selectedCategory === categoria.id
                      ? 'bg-green-600 text-white'
                      : categoria.cor
                  }`}
                  onClick={() => setSelectedCategory(categoria.id)}
                >
                  {categoria.nome}
                </Badge>
              ))}
            </div>

            {/* Lista de Resíduos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {residuosFiltrados.map((residuo) => (
                <Card key={residuo.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                    <Package className="h-12 w-12 text-gray-400" />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-lg">{residuo.titulo}</h3>
                        <Badge className={categorias.find(c => c.id === residuo.categoria)?.cor}>
                          {categorias.find(c => c.id === residuo.categoria)?.nome}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-gray-600">{residuo.descricao}</p>
                      
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{residuo.qualidade}</span>
                        <span className="text-sm text-gray-500">({residuo.vendedor})</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{residuo.localizacao}</span>
                        </div>
                        <span>{residuo.distancia}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-bold text-green-600">{residuo.preco}</p>
                          <p className="text-sm text-gray-500">{residuo.quantidade}</p>
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => verDetalhes(residuo)}
                        >
                          Ver Detalhes
                        </Button>
                      </div>
                      
                      <div className="pt-2 border-t">
                        <Badge variant="outline" className="text-xs">
                          {residuo.certificacao}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Guia de Classificação */}
      <Card>
        <CardHeader>
          <CardTitle>Guia de Classificação ABNT NBR 10004:2004</CardTitle>
          <CardDescription>
            Normas técnicas para classificação adequada de resíduos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Classe I - Perigosos</h4>
              <p className="text-sm text-blue-700">Resíduos que apresentam riscos à saúde ou meio ambiente</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Classe II A - Não Inertes</h4>
              <p className="text-sm text-orange-700">Resíduos que podem ter propriedades como biodegradabilidade</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Classe II B - Inertes</h4>
              <p className="text-sm text-green-700">Resíduos que não se degradam quando dispostos no solo</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListagemResiduos;

<DetalhesResiduoModal
  isOpen={detalhesModal}
  onClose={() => setDetalhesModal(false)}
  residuo={residuoSelecionado}
/>

<ListarResiduoModal
  isOpen={listarModal}
  onClose={() => setListarModal(false)}
/>
