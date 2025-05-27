
import React, { useState } from 'react';
import { Recycle, Lightbulb, Target, Award, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const DesignCircular = () => {
  const [selectedCategory, setSelectedCategory] = useState('principios');

  const principios = [
    {
      titulo: 'Durabilidade',
      descricao: 'Produtos projetados para durar mais tempo',
      impacto: 85,
      exemplos: ['Smartphones modulares', 'Móveis de madeira certificada', 'Eletrodomésticos reparáveis']
    },
    {
      titulo: 'Reparabilidade',
      descricao: 'Facilidade de manutenção e reparo',
      impacto: 92,
      exemplos: ['Parafusos padronizados', 'Peças substituíveis', 'Manuais de reparo']
    },
    {
      titulo: 'Reciclabilidade',
      descricao: 'Materiais que podem ser reprocessados',
      impacto: 78,
      exemplos: ['Metais puros', 'Plásticos identificados', 'Componentes separáveis']
    },
    {
      titulo: 'Biomateriais',
      descricao: 'Uso de materiais renováveis e biodegradáveis',
      impacto: 65,
      exemplos: ['Bioplásticos', 'Fibras naturais', 'Madeira certificada']
    }
  ];

  const ferramentas = [
    {
      nome: 'Calculadora de Eco-design',
      descricao: 'Avalie o impacto ambiental do seu produto',
      categoria: 'Análise',
      uso: 'Muito usado',
      icon: Target
    },
    {
      nome: 'Biblioteca de Materiais',
      descricao: 'Catálogo de materiais sustentáveis',
      categoria: 'Recursos',
      uso: 'Popular',
      icon: BookOpen
    },
    {
      nome: 'Simulador de Ciclo de Vida',
      descricao: 'Modele o ciclo completo do produto',
      categoria: 'Modelagem',
      uso: 'Novo',
      icon: Recycle
    },
    {
      nome: 'Rede de Colaboração',
      descricao: 'Conecte-se com especialistas',
      categoria: 'Comunidade',
      uso: 'Ativo',
      icon: Users
    }
  ];

  const casos = [
    {
      empresa: 'TechVerde Ltda',
      produto: 'Smartphone Modular EcoPhone',
      setor: 'Eletrônicos',
      reducao: '45%',
      descricao: 'Design modular permitiu redução de 45% no desperdício eletrônico',
      status: 'Implementado'
    },
    {
      empresa: 'MóveisCirculares',
      produto: 'Mesa Desmontável Sustentável',
      setor: 'Móveis',
      reducao: '60%',
      descricao: 'Sistema de encaixes eliminou parafusos e facilitou reciclagem',
      status: 'Piloto'
    },
    {
      empresa: 'PackEco Solutions',
      produto: 'Embalagem Compostável',
      setor: 'Embalagens',
      reducao: '80%',
      descricao: 'Substituição por bioplásticos reduziu impacto ambiental',
      status: 'Implementado'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="h-6 w-6 text-yellow-600" />
            <span>Design Circular e Eco-design</span>
          </CardTitle>
          <CardDescription>
            Ferramentas para criar produtos duráveis, reparáveis e recicláveis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-6">
            <Button 
              variant={selectedCategory === 'principios' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('principios')}
            >
              Princípios
            </Button>
            <Button 
              variant={selectedCategory === 'ferramentas' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('ferramentas')}
            >
              Ferramentas
            </Button>
            <Button 
              variant={selectedCategory === 'casos' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('casos')}
            >
              Casos de Sucesso
            </Button>
          </div>

          {selectedCategory === 'principios' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principios.map((principio, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{principio.titulo}</CardTitle>
                    <CardDescription>{principio.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Impacto na Circularidade</span>
                          <span>{principio.impacto}%</span>
                        </div>
                        <Progress value={principio.impacto} className="h-2" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Exemplos:</p>
                        <div className="space-y-1">
                          {principio.exemplos.map((exemplo, idx) => (
                            <Badge key={idx} variant="outline" className="mr-2 mb-1">
                              {exemplo}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {selectedCategory === 'ferramentas' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ferramentas.map((ferramenta, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <ferramenta.icon className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{ferramenta.nome}</CardTitle>
                          <CardDescription>{ferramenta.descricao}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">
                        {ferramenta.uso}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">{ferramenta.categoria}</Badge>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Usar Ferramenta
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {selectedCategory === 'casos' && (
            <div className="space-y-4">
              {casos.map((caso, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold">{caso.empresa}</h3>
                          <Badge variant={caso.status === 'Implementado' ? 'default' : 'secondary'}>
                            {caso.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{caso.produto} | Setor: {caso.setor}</p>
                        <p className="text-gray-700 mb-3">{caso.descricao}</p>
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-yellow-600" />
                          <span className="text-sm font-medium">Redução de impacto: {caso.reducao}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Projetos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">234</div>
            <p className="text-gray-600">Em desenvolvimento</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Redução Média CO2</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">52%</div>
            <p className="text-gray-600">Por produto redesenhado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Empresas Participantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">89</div>
            <p className="text-gray-600">Cadastradas na plataforma</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recursos Educacionais</CardTitle>
          <CardDescription>Aprenda sobre design circular e eco-design</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <BookOpen className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-semibold mb-2">Guias Práticos</h4>
              <p className="text-sm text-gray-600">Manuais de implementação por setor</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <Users className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold mb-2">Webinars</h4>
              <p className="text-sm text-gray-600">Sessões com especialistas</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <Target className="h-8 w-8 text-yellow-600 mb-3" />
              <h4 className="font-semibold mb-2">Workshops</h4>
              <p className="text-sm text-gray-600">Treinamentos práticos</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <Award className="h-8 w-8 text-purple-600 mb-3" />
              <h4 className="font-semibold mb-2">Certificações</h4>
              <p className="text-sm text-gray-600">Reconhecimento em eco-design</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DesignCircular;
