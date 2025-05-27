
import React, { useState } from 'react';
import { Building2, Truck, MapPin, Recycle, Hammer, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const GestaoRCD = () => {
  const [canteiros, setCanteiros] = useState([
    {
      id: 'CNT001',
      nome: 'Residencial Torres do Sol',
      endereco: 'Av. Paulista, 1000 - São Paulo/SP',
      tipoObra: 'Construção',
      rcdGerado: '45.2 ton',
      taxaReciclagem: '72%',
      materiais: ['Concreto', 'Tijolo', 'Madeira', 'Metal'],
      status: 'Ativo'
    },
    {
      id: 'CNT002',
      nome: 'Demolição Edifício Comercial',
      endereco: 'Rua Augusta, 500 - São Paulo/SP',
      tipoObra: 'Demolição',
      rcdGerado: '128.7 ton',
      taxaReciclagem: '89%',
      materiais: ['Concreto', 'Metal', 'Vidro', 'Cerâmica'],
      status: 'Concluído'
    }
  ]);

  const usinas = [
    {
      nome: 'Usina ReciclaConcreto SP',
      distancia: '5.2 km',
      capacidade: '200 ton/dia',
      materiais: ['Concreto', 'Tijolo', 'Cerâmica'],
      preco: 'R$ 25/ton'
    },
    {
      nome: 'EcoMetal Reciclagem',
      distancia: '8.7 km',
      capacidade: '150 ton/dia',
      materiais: ['Metal', 'Aço', 'Ferro'],
      preco: 'R$ 450/ton'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-orange-600" />
            <span>Gestão de Resíduos de Construção e Demolição</span>
          </CardTitle>
          <CardDescription>
            Monitoramento e gestão de RCD com foco em demolição seletiva e materiais reciclados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Cadastro de Canteiro */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Cadastrar Novo Canteiro</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="nome-canteiro">Nome do Projeto</Label>
                  <Input id="nome-canteiro" placeholder="Ex: Edifício Sustentável" />
                </div>
                <div>
                  <Label htmlFor="tipo-obra">Tipo de Obra</Label>
                  <Input id="tipo-obra" placeholder="Construção, Reforma, Demolição" />
                </div>
                <div>
                  <Label htmlFor="endereco-canteiro">Endereço</Label>
                  <Input id="endereco-canteiro" placeholder="Endereço completo do canteiro" />
                </div>
                <div>
                  <Label htmlFor="materiais-rcd">Tipos de RCD Gerados</Label>
                  <Textarea 
                    id="materiais-rcd" 
                    placeholder="Concreto, madeira, metal, plástico..."
                    className="min-h-[80px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600">
                  <Building2 className="h-4 w-4 mr-2" />
                  Cadastrar Canteiro
                </Button>
              </div>
            </div>

            {/* Mapa de Usinas Próximas */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Usinas de Reciclagem Próximas</h3>
              <div className="h-48 bg-orange-50 rounded-lg flex items-center justify-center border">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <p className="text-gray-600">Mapa com usinas de reciclagem</p>
                  <p className="text-sm text-gray-500">Integração com GIS para otimização</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {usinas.map((usina, index) => (
                  <Card key={index} className="border-orange-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900">{usina.nome}</h4>
                          <p className="text-sm text-gray-600">{usina.distancia} • {usina.capacidade}</p>
                          <p className="text-sm font-medium text-orange-600">{usina.preco}</p>
                        </div>
                        <Button size="sm" variant="outline" className="border-orange-300">
                          Conectar
                        </Button>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {usina.materiais.map((material, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Canteiros Ativos */}
      <Card>
        <CardHeader>
          <CardTitle>Canteiros de Obras Monitorados</CardTitle>
          <CardDescription>
            Acompanhamento em tempo real da geração e destinação de RCD
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {canteiros.map((canteiro) => (
              <Card key={canteiro.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{canteiro.nome}</h3>
                        <Badge variant={canteiro.status === 'Ativo' ? 'default' : 'secondary'}>
                          {canteiro.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{canteiro.endereco}</p>
                      <p className="text-sm text-gray-700 mb-3">
                        <span className="font-medium">Tipo:</span> {canteiro.tipoObra} | 
                        <span className="font-medium"> ID:</span> {canteiro.id}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm font-medium text-gray-700">RCD Gerado</p>
                          <p className="text-xl font-bold text-orange-600">{canteiro.rcdGerado}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Taxa de Reciclagem</p>
                          <p className="text-xl font-bold text-green-600">{canteiro.taxaReciclagem}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-1">Materiais:</p>
                        <div className="flex flex-wrap gap-2">
                          {canteiro.materiais.map((material, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {material}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <Button variant="outline" size="sm">
                        <Truck className="h-4 w-4 mr-2" />
                        Logística
                      </Button>
                      <Button variant="outline" size="sm">
                        <Recycle className="h-4 w-4 mr-2" />
                        Destinar RCD
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Integração com Catadores */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-6 w-6 text-green-600" />
            <span>Integração com Catadores e Cooperativas</span>
          </CardTitle>
          <CardDescription>
            Conecte canteiros com catadores especializados em RCD
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="border-green-200">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Cooperativa EcoMetal</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Especializada em coleta de metais e aço
                </p>
                <Badge className="bg-green-100 text-green-800">Disponível</Badge>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Grupo ReciclaVida</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Coleta de madeira e materiais orgânicos
                </p>
                <Badge className="bg-green-100 text-green-800">Disponível</Badge>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">União dos Catadores</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Coleta geral de RCD reciclável
                </p>
                <Badge className="bg-yellow-100 text-yellow-800">Ocupado</Badge>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Métricas e Benefícios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">RCD Reciclado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">1,847 ton</div>
            <p className="text-xs text-gray-600">+23% este mês</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Materiais Recuperados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">89%</div>
            <p className="text-xs text-gray-600">Taxa de recuperação</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Economia Circular</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">R$ 2.3M</div>
            <p className="text-xs text-gray-600">Valor movimentado</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Emissões Evitadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">1,205 tCO₂</div>
            <p className="text-xs text-gray-600">Redução anual</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GestaoRCD;
