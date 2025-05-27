
import React, { useState } from 'react';
import { Package, MapPin, Truck, QrCode, Upload, Search, Filter, Eye, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const LogisticaReversa = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categorias = [
    { id: 'todos', nome: 'Todos', cor: 'bg-gray-100 text-gray-800' },
    { id: 'eletronicos', nome: 'Eletrônicos', cor: 'bg-blue-100 text-blue-800' },
    { id: 'roupas', nome: 'Roupas', cor: 'bg-green-100 text-green-800' },
    { id: 'embalagens', nome: 'Embalagens', cor: 'bg-yellow-100 text-yellow-800' },
    { id: 'cosmeticos', nome: 'Cosméticos', cor: 'bg-pink-100 text-pink-800' },
  ];

  const pontosColeta = [
    {
      id: 1,
      nome: 'Supermercado EcoMart',
      endereco: 'Av. Paulista, 1500 - São Paulo/SP',
      categoria: 'embalagens',
      tipo: 'Embalagens Plásticas',
      status: 'Ativo',
      capacidade: '85%',
      ultimaColeta: '2024-12-20',
      responsavel: 'João Silva',
      telefone: '(11) 99999-0001'
    },
    {
      id: 2,
      nome: 'Loja TechRecycle',
      endereco: 'Rua Augusta, 2000 - São Paulo/SP',
      categoria: 'eletronicos',
      tipo: 'Eletrônicos Usados',
      status: 'Ativo',
      capacidade: '45%',
      ultimaColeta: '2024-12-18',
      responsavel: 'Maria Santos',
      telefone: '(11) 99999-0002'
    },
    {
      id: 3,
      nome: 'Fashion Segunda Mão',
      endereco: 'Rua Oscar Freire, 800 - São Paulo/SP',
      categoria: 'roupas',
      tipo: 'Roupas e Acessórios',
      status: 'Pendente',
      capacidade: '92%',
      ultimaColeta: '2024-12-15',
      responsavel: 'Ana Costa',
      telefone: '(11) 99999-0003'
    }
  ];

  const produtosDevolvidos = [
    {
      id: 'PRD001',
      nome: 'Smartphone Galaxy',
      categoria: 'eletronicos',
      estado: 'Usado - Bom',
      valorEstimado: 'R$ 800,00',
      dataRebimento: '2024-12-20',
      destino: 'Refurbishing',
      passaporte: 'QR_GALAXY_001'
    },
    {
      id: 'PRD002',
      nome: 'Camiseta Algodão',
      categoria: 'roupas',
      estado: 'Usado - Ótimo',
      valorEstimado: 'R$ 45,00',
      dataRebimento: '2024-12-19',
      destino: 'Segunda Mão',
      passaporte: 'QR_SHIRT_002'
    }
  ];

  const pontosFiltratos = pontosColeta.filter(ponto => 
    selectedCategory === 'todos' || ponto.categoria === selectedCategory
  );

  return (
    <div className="space-y-6">
      {/* Painel de Controle da Logística Reversa */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Truck className="h-6 w-6 text-purple-600" />
            <span>Programas de Devolução e Logística Reversa</span>
          </CardTitle>
          <CardDescription>
            Sistema integrado para gerenciar a devolução de produtos e embalagens
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Pontos de Coleta</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">127</div>
                <p className="text-sm text-gray-600">Ativos na região</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Produtos Coletados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">2,843</div>
                <p className="text-sm text-gray-600">Este mês</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Taxa de Recuperação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">84%</div>
                <p className="text-sm text-gray-600">Materiais reutilizados</p>
              </CardContent>
            </Card>
          </div>

          {/* Filtros por Categoria */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categorias.map((categoria) => (
              <Badge
                key={categoria.id}
                className={`cursor-pointer transition-all ${
                  selectedCategory === categoria.id
                    ? 'bg-purple-600 text-white'
                    : categoria.cor
                }`}
                onClick={() => setSelectedCategory(categoria.id)}
              >
                {categoria.nome}
              </Badge>
            ))}
          </div>

          {/* Lista de Pontos de Coleta */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Pontos de Coleta Ativos</h3>
            {pontosFiltratos.map((ponto) => (
              <Card key={ponto.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{ponto.nome}</h4>
                        <Badge variant={ponto.status === 'Ativo' ? 'default' : 'secondary'}>
                          {ponto.status}
                        </Badge>
                        <Badge className={categorias.find(c => c.id === ponto.categoria)?.cor}>
                          {ponto.tipo}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-1 mb-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{ponto.endereco}</span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Capacidade:</span> {ponto.capacidade}
                        </div>
                        <div>
                          <span className="font-medium">Última Coleta:</span> {ponto.ultimaColeta}
                        </div>
                        <div>
                          <span className="font-medium">Responsável:</span> {ponto.responsavel}
                        </div>
                        <div>
                          <span className="font-medium">Contato:</span> {ponto.telefone}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button variant="outline" size="sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        Ver no Mapa
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Detalhes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Produtos Devolvidos Recentemente */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-green-600" />
            <span>Produtos Devolvidos Recentemente</span>
          </CardTitle>
          <CardDescription>
            Gestão de produtos recebidos através da logística reversa
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {produtosDevolvidos.map((produto) => (
              <Card key={produto.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{produto.nome}</h4>
                        <Badge className={categorias.find(c => c.id === produto.categoria)?.cor}>
                          {categorias.find(c => c.id === produto.categoria)?.nome}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Estado:</span> {produto.estado}
                        </div>
                        <div>
                          <span className="font-medium">Valor:</span> {produto.valorEstimado}
                        </div>
                        <div>
                          <span className="font-medium">Recebido:</span> {produto.dataRebimento}
                        </div>
                        <div>
                          <span className="font-medium">Destino:</span> {produto.destino}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button variant="outline" size="sm">
                        <QrCode className="h-4 w-4 mr-2" />
                        Passaporte
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Relatório
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Criar Novo Ponto de Coleta */}
      <Card>
        <CardHeader>
          <CardTitle>Cadastrar Novo Ponto de Coleta</CardTitle>
          <CardDescription>
            Adicione um novo ponto de coleta para logística reversa
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="nome-ponto">Nome do Estabelecimento</Label>
                <Input id="nome-ponto" placeholder="Ex: Loja EcoFriendly" />
              </div>
              <div>
                <Label htmlFor="endereco">Endereço Completo</Label>
                <Input id="endereco" placeholder="Rua, número, bairro, cidade" />
              </div>
              <div>
                <Label htmlFor="tipo-residuo">Tipo de Resíduo Aceito</Label>
                <Input id="tipo-residuo" placeholder="Ex: Eletrônicos, Embalagens, Roupas" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="responsavel">Responsável</Label>
                <Input id="responsavel" placeholder="Nome do responsável" />
              </div>
              <div>
                <Label htmlFor="contato">Telefone de Contato</Label>
                <Input id="contato" placeholder="(11) 99999-0000" />
              </div>
              <div>
                <Label htmlFor="observacoes">Observações</Label>
                <Textarea 
                  id="observacoes" 
                  placeholder="Horário de funcionamento, instruções especiais..."
                  className="min-h-[80px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
              <Upload className="h-4 w-4 mr-2" />
              Cadastrar Ponto de Coleta
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogisticaReversa;
