
import React, { useState } from 'react';
import { Search, Filter, MapPin, Navigation, Clock, Package } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

const LocalizacaoMateriais = () => {
  const [filtroTipo, setFiltroTipo] = useState<string[]>([]);
  const [busca, setBusca] = useState('');

  const tiposMateriais = [
    'Papel e Papelão',
    'Plástico PET',
    'Plástico Rígido',
    'Alumínio',
    'Ferro',
    'Cobre',
    'Vidro',
    'Eletrônicos',
    'Orgânicos'
  ];

  const materiaisDisponiveis = [
    {
      id: 1,
      tipo: 'Papel e Papelão',
      quantidade: '120kg',
      valor: 'R$ 60,00',
      distancia: '0.5km',
      endereco: 'Escritório Central - Rua Comercial, 100',
      tempo: '2h',
      empresa: 'TechCorp Ltda',
      urgencia: 'alta',
      descricao: 'Papelão limpo de embalagens'
    },
    {
      id: 2,
      tipo: 'Plástico PET',
      quantidade: '85kg',
      valor: 'R$ 127,50',
      distancia: '1.8km',
      endereco: 'Supermercado Verde - Av. das Nações, 250',
      tempo: '30min',
      empresa: 'SuperVerde',
      urgencia: 'media',
      descricao: 'Garrafas PET limpas e prensadas'
    },
    {
      id: 3,
      tipo: 'Alumínio',
      quantidade: '25kg',
      valor: 'R$ 100,00',
      distancia: '3.2km',
      endereco: 'Fábrica Industrial - Zona Industrial Norte',
      tempo: '1h',
      empresa: 'MetalTech',
      urgencia: 'baixa',
      descricao: 'Latas de alumínio e sucata limpa'
    },
    {
      id: 4,
      tipo: 'Eletrônicos',
      quantidade: '15 unidades',
      valor: 'R$ 200,00',
      distancia: '2.5km',
      endereco: 'Loja de Informática - Centro',
      tempo: '45min',
      empresa: 'InfoMax',
      urgencia: 'alta',
      descricao: 'Computadores e componentes para reciclagem'
    }
  ];

  const handleFiltroChange = (tipo: string) => {
    setFiltroTipo(prev => 
      prev.includes(tipo) 
        ? prev.filter(t => t !== tipo)
        : [...prev, tipo]
    );
  };

  const materiaisFiltrados = materiaisDisponiveis.filter(material => {
    const correspondeTexto = material.tipo.toLowerCase().includes(busca.toLowerCase()) ||
                           material.empresa.toLowerCase().includes(busca.toLowerCase());
    const correspondeTipo = filtroTipo.length === 0 || filtroTipo.includes(material.tipo);
    return correspondeTexto && correspondeTipo;
  });

  return (
    <div className="space-y-6">
      {/* Filtros e Busca */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-6 w-6 text-green-600" />
            <span>Localizar Materiais</span>
          </CardTitle>
          <CardDescription>
            Encontre materiais recicláveis disponíveis na sua região
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Buscar por tipo de material ou empresa..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtrar por Distância
            </Button>
          </div>

          <div>
            <h4 className="font-medium mb-3">Filtrar por Tipo de Material:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {tiposMateriais.map(tipo => (
                <div key={tipo} className="flex items-center space-x-2">
                  <Checkbox
                    id={tipo}
                    checked={filtroTipo.includes(tipo)}
                    onCheckedChange={() => handleFiltroChange(tipo)}
                  />
                  <label htmlFor={tipo} className="text-sm">{tipo}</label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Materiais */}
      <div className="space-y-4">
        {materiaisFiltrados.map((material) => (
          <Card key={material.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{material.tipo}</h3>
                    <Badge 
                      variant={material.urgencia === 'alta' ? 'destructive' : 
                             material.urgencia === 'media' ? 'default' : 'secondary'}
                    >
                      {material.urgencia === 'alta' ? 'Urgente' :
                       material.urgencia === 'media' ? 'Normal' : 'Flexível'}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Package className="h-4 w-4" />
                        <span>Quantidade: <strong>{material.quantidade}</strong></span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>Distância: <strong>{material.distancia}</strong></span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Tempo estimado: <strong>{material.tempo}</strong></span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-600"><strong>Empresa:</strong> {material.empresa}</p>
                      <p className="text-gray-600"><strong>Endereço:</strong> {material.endereco}</p>
                      <p className="text-green-600 font-semibold text-lg">Valor: {material.valor}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{material.descricao}</p>

                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm">
                      <Navigation className="h-4 w-4 mr-2" />
                      Ver Rota
                    </Button>
                    <Button variant="outline" size="sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      Detalhes Local
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Reservar Coleta
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {materiaisFiltrados.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Nenhum material encontrado
            </h3>
            <p className="text-gray-500">
              Tente ajustar os filtros ou verifique novamente mais tarde
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LocalizacaoMateriais;
