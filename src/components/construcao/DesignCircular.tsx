
import React, { useState } from 'react';
import { Layers, Award, Lightbulb, Building, Recycle, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const DesignCircular = () => {
  const [projetos, setProjetos] = useState([
    {
      id: 'PRJ001',
      nome: 'Edifício Verde Corporate',
      tipo: 'Comercial',
      materiaisReciclados: '65%',
      certificacao: 'LEED Gold',
      modular: true,
      eficienciaEnergetica: 'A+',
      status: 'Em projeto'
    },
    {
      id: 'PRJ002',
      nome: 'Residencial Sustentável',
      tipo: 'Residencial',
      materiaisReciclados: '42%',
      certificacao: 'AQUA-HQE',
      modular: false,
      eficienciaEnergetica: 'A',
      status: 'Em construção'
    }
  ]);

  const materiais = [
    {
      nome: 'Concreto Reciclado',
      origem: 'Demolições urbanas',
      reducaoCO2: '30%',
      economia: '25%',
      fornecedor: 'EcoConcreto SP',
      disponibilidade: 'Alta'
    },
    {
      nome: 'Madeira Certificada FSC',
      origem: 'Reflorestamento',
      reducaoCO2: '45%',
      economia: '15%',
      fornecedor: 'SustentaMadeira',
      disponibilidade: 'Média'
    },
    {
      nome: 'Aço Reciclado',
      origem: 'Sucata industrial',
      reducaoCO2: '75%',
      economia: '35%',
      fornecedor: 'MetalVerde',
      disponibilidade: 'Alta'
    }
  ];

  const certificacoes = [
    {
      nome: 'LEED',
      descricao: 'Liderança em Energia e Design Ambiental',
      pontuacao: '80-89 pontos',
      nivel: 'Gold',
      beneficios: ['Redução energia', 'Valorização imóvel', 'Créditos fiscais']
    },
    {
      nome: 'AQUA-HQE',
      descricao: 'Alta Qualidade Ambiental',
      pontuacao: 'Bom/Muito Bom',
      nivel: 'Certificado',
      beneficios: ['Conforto térmico', 'Qualidade do ar', 'Gestão de água']
    },
    {
      nome: 'BREEAM',
      descricao: 'Método de Avaliação Ambiental',
      pontuacao: '55-69%',
      nivel: 'Very Good',
      beneficios: ['Sustentabilidade', 'Bem-estar', 'Eficiência']
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Layers className="h-6 w-6 text-blue-600" />
            <span>Design Circular e Construção Verde</span>
          </CardTitle>
          <CardDescription>
            Ferramentas para design modular, materiais reciclados e certificações sustentáveis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Planejamento de Projeto Circular */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Novo Projeto Circular</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="nome-projeto">Nome do Projeto</Label>
                  <Input id="nome-projeto" placeholder="Ex: Edifício Sustentável XYZ" />
                </div>
                <div>
                  <Label htmlFor="tipo-projeto">Tipo de Construção</Label>
                  <Input id="tipo-projeto" placeholder="Residencial, Comercial, Industrial" />
                </div>
                <div>
                  <Label htmlFor="meta-reciclados">Meta de Materiais Reciclados (%)</Label>
                  <Input id="meta-reciclados" type="number" placeholder="50" />
                </div>
                <div>
                  <Label htmlFor="certificacao-alvo">Certificação Almejada</Label>
                  <Input id="certificacao-alvo" placeholder="LEED, AQUA-HQE, BREEAM" />
                </div>
                <div>
                  <Label htmlFor="requisitos-especiais">Requisitos Especiais</Label>
                  <Textarea 
                    id="requisitos-especiais" 
                    placeholder="Design modular, eficiência energética..."
                    className="min-h-[80px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Criar Projeto Circular
                </Button>
              </div>
            </div>

            {/* Biblioteca de Materiais Sustentáveis */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Materiais Sustentáveis</h3>
              <div className="space-y-3">
                {materiais.map((material, index) => (
                  <Card key={index} className="border-green-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{material.nome}</h4>
                          <p className="text-sm text-gray-600">{material.origem}</p>
                        </div>
                        <Badge 
                          variant="outline"
                          className={
                            material.disponibilidade === 'Alta' ? 'text-green-600 border-green-600' :
                            material.disponibilidade === 'Média' ? 'text-yellow-600 border-yellow-600' :
                            'text-red-600 border-red-600'
                          }
                        >
                          {material.disponibilidade}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Redução CO₂:</span>
                          <p className="font-medium text-green-600">{material.reducaoCO2}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Economia:</span>
                          <p className="font-medium text-blue-600">{material.economia}</p>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex justify-between items-center">
                        <span className="text-xs text-gray-500">{material.fornecedor}</span>
                        <Button size="sm" variant="outline" className="border-green-300">
                          Solicitar Orçamento
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projetos Circulares em Andamento */}
      <Card>
        <CardHeader>
          <CardTitle>Projetos Circulares</CardTitle>
          <CardDescription>
            Acompanhamento de projetos com foco em sustentabilidade
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projetos.map((projeto) => (
              <Card key={projeto.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{projeto.nome}</h3>
                        <Badge variant="outline" className="text-xs">
                          {projeto.tipo}
                        </Badge>
                        <Badge variant={projeto.status === 'Em projeto' ? 'secondary' : 'default'}>
                          {projeto.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700">Materiais Reciclados</p>
                          <p className="text-lg font-bold text-green-600">{projeto.materiaisReciclados}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Certificação</p>
                          <p className="text-sm font-medium text-blue-600">{projeto.certificacao}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Design Modular</p>
                          <p className="text-sm font-medium">
                            {projeto.modular ? 'Sim' : 'Não'}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Eficiência</p>
                          <p className="text-sm font-medium text-purple-600">{projeto.eficienciaEnergetica}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <Button variant="outline" size="sm">
                        <Building className="h-4 w-4 mr-2" />
                        Detalhes
                      </Button>
                      <Button variant="outline" size="sm">
                        <Award className="h-4 w-4 mr-2" />
                        Certificar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Certificações Disponíveis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-6 w-6 text-yellow-600" />
            <span>Certificações Sustentáveis</span>
          </CardTitle>
          <CardDescription>
            Guia para certificações de construção verde disponíveis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificacoes.map((cert, index) => (
              <Card key={index} className="border-yellow-200">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <CardTitle className="text-lg">{cert.nome}</CardTitle>
                  </div>
                  <CardDescription>{cert.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Pontuação:</p>
                      <p className="text-sm">{cert.pontuacao}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Nível:</p>
                      <Badge className="bg-yellow-100 text-yellow-800">{cert.nivel}</Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Benefícios:</p>
                      <div className="space-y-1">
                        {cert.beneficios.map((beneficio, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">{beneficio}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full border-yellow-300">
                      Solicitar Certificação
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Impacto Ambiental */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Materiais Reciclados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">53.7%</div>
            <p className="text-xs text-gray-600">Média dos projetos</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Redução CO₂</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">2,847 t</div>
            <p className="text-xs text-gray-600">Emissões evitadas</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Economia de Recursos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">R$ 5.2M</div>
            <p className="text-xs text-gray-600">Em materiais</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Certificações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">24</div>
            <p className="text-xs text-gray-600">Projetos certificados</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DesignCircular;
