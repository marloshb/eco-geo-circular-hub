
import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LocalizacaoPontosColeta = () => {
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [busca, setBusca] = useState('');

  const tiposResiduos = [
    { id: 'todos', nome: 'Todos', cor: 'bg-gray-500' },
    { id: 'plastico', nome: 'Plástico', cor: 'bg-yellow-500' },
    { id: 'papel', nome: 'Papel', cor: 'bg-blue-500' },
    { id: 'vidro', nome: 'Vidro', cor: 'bg-green-500' },
    { id: 'metal', nome: 'Metal', cor: 'bg-red-500' },
    { id: 'eletronicos', nome: 'Eletrônicos', cor: 'bg-purple-500' },
    { id: 'organicos', nome: 'Orgânicos', cor: 'bg-orange-500' }
  ];

  const pontosColeta = [
    {
      id: 1,
      nome: 'EcoPonto Shopping Vila Olímpia',
      endereco: 'Rua Olimpíadas, 360 - Vila Olímpia, São Paulo - SP',
      distancia: '0.8 km',
      tipos: ['plastico', 'papel', 'vidro', 'metal'],
      horario: 'Seg-Dom: 10h-22h',
      telefone: '(11) 3045-6789',
      capacidade: 'Normal',
      instrucoes: 'Lave embalagens antes do descarte. Remova tampas plásticas.',
      avaliacao: 4.8,
      status: 'Aberto'
    },
    {
      id: 2,
      nome: 'Cooperativa Verde Sustentável',
      endereco: 'Av. Paulista, 1500 - Bela Vista, São Paulo - SP',
      distancia: '1.2 km',
      tipos: ['plastico', 'papel', 'eletronicos'],
      horario: 'Seg-Sex: 8h-17h',
      telefone: '(11) 3051-2345',
      capacidade: 'Lotado',
      instrucoes: 'Aceita eletrônicos pequenos. Separar cabos e baterias.',
      avaliacao: 4.6,
      status: 'Aberto'
    },
    {
      id: 3,
      nome: 'Ponto Verde Ibirapuera',
      endereco: 'Parque Ibirapuera, Portão 3 - Vila Mariana, São Paulo - SP',
      distancia: '2.1 km',
      tipos: ['organicos', 'papel', 'vidro'],
      horario: 'Ter-Dom: 6h-18h',
      telefone: '(11) 3047-8901',
      capacidade: 'Disponível',
      instrucoes: 'Resíduos orgânicos para compostagem. Não aceita restos de carne.',
      avaliacao: 4.9,
      status: 'Fechado'
    }
  ];

  const pontosFiltrados = pontosColeta.filter(ponto => {
    const matchTipo = filtroTipo === 'todos' || ponto.tipos.includes(filtroTipo);
    const matchBusca = ponto.nome.toLowerCase().includes(busca.toLowerCase()) ||
                       ponto.endereco.toLowerCase().includes(busca.toLowerCase());
    return matchTipo && matchBusca;
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-green-600" />
            <span>Localização de Pontos de Coleta</span>
          </CardTitle>
          <CardDescription>
            Encontre pontos de coleta próximos para descarte correto de recicláveis
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
                    placeholder="Buscar por nome ou endereço..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filtros Avançados</span>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {tiposResiduos.map((tipo) => (
                <button
                  key={tipo.id}
                  onClick={() => setFiltroTipo(tipo.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    filtroTipo === tipo.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${tipo.cor}`}></div>
                    <span>{tipo.nome}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mapa */}
            <div className="order-2 lg:order-1">
              <Card>
                <CardContent className="p-0">
                  <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center relative">
                    <MapPin className="h-20 w-20 text-gray-400" />
                    <div className="absolute top-4 left-4 space-y-2">
                      {tiposResiduos.slice(1).map((tipo) => (
                        <div key={tipo.id} className="flex items-center space-x-2 text-xs bg-white/80 rounded px-2 py-1">
                          <div className={`w-3 h-3 rounded-full ${tipo.cor}`}></div>
                          <span>{tipo.nome}</span>
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-600 bg-white/80 rounded px-2 py-1">
                      {pontosFiltrados.length} pontos encontrados
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Navigation className="h-4 w-4 mr-2" />
                  Rota Otimizada
                </Button>
                <Button variant="outline">
                  <MapPin className="h-4 w-4 mr-2" />
                  Minha Localização
                </Button>
              </div>
            </div>

            {/* Lista de Pontos */}
            <div className="order-1 lg:order-2 space-y-4 max-h-96 overflow-y-auto">
              {pontosFiltrados.map((ponto) => (
                <Card key={ponto.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{ponto.nome}</h4>
                          <p className="text-sm text-gray-600">{ponto.endereco}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {ponto.distancia}
                            </Badge>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                ponto.status === 'Aberto' 
                                  ? 'text-green-600 border-green-600' 
                                  : 'text-red-600 border-red-600'
                              }`}
                            >
                              {ponto.status}
                            </Badge>
                            <Badge 
                              variant="outline"
                              className={`text-xs ${
                                ponto.capacidade === 'Disponível' ? 'text-green-600 border-green-600' :
                                ponto.capacidade === 'Normal' ? 'text-yellow-600 border-yellow-600' :
                                'text-red-600 border-red-600'
                              }`}
                            >
                              {ponto.capacidade}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            <span className="text-sm font-medium">{ponto.avaliacao}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className={`w-3 h-3 ${i < Math.floor(ponto.avaliacao) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                  ★
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {ponto.tipos.map((tipo) => {
                          const tipoInfo = tiposResiduos.find(t => t.id === tipo);
                          return (
                            <div key={tipo} className="flex items-center space-x-1 text-xs bg-gray-100 rounded px-2 py-1">
                              <div className={`w-2 h-2 rounded-full ${tipoInfo?.cor}`}></div>
                              <span>{tipoInfo?.nome}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock className="h-3 w-3" />
                          <span>{ponto.horario}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Phone className="h-3 w-3" />
                          <span>{ponto.telefone}</span>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-sm text-green-800 font-medium">Instruções:</p>
                        <p className="text-sm text-green-700">{ponto.instrucoes}</p>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                          <Navigation className="h-3 w-3 mr-1" />
                          Como Chegar
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Phone className="h-3 w-3 mr-1" />
                          Contato
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocalizacaoPontosColeta;
