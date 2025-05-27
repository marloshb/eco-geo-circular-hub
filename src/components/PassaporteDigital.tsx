
import React, { useState } from 'react';
import { QrCode, Upload, Search, Download, Eye, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const PassaporteDigital = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const produtos = [
    {
      id: 'PD001',
      nome: 'Smartphone EcoTech X1',
      categoria: 'Eletrônicos',
      materiais: ['Alumínio reciclado', 'Plástico PET', 'Cobre', 'Lítio'],
      status: 'Em uso',
      qrCode: 'QR_ECO_X1_001',
      instrucoes: 'Desmontagem requer chave T5. Bateria removível.'
    },
    {
      id: 'PD002',
      nome: 'Mesa de Escritório Sustentável',
      categoria: 'Móveis',
      materiais: ['Madeira certificada FSC', 'Parafusos aço inox'],
      status: 'Registrado',
      qrCode: 'QR_MESA_002',
      instrucoes: 'Parafusos Phillips. Madeira reutilizável.'
    },
    {
      id: 'PD003',
      nome: 'Embalagem Compostável',
      categoria: 'Embalagens',
      materiais: ['Bioplástico PLA', 'Fibra natural'],
      status: 'Descartado',
      qrCode: 'QR_EMB_003',
      instrucoes: 'Compostagem doméstica em 90 dias.'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <QrCode className="h-6 w-6 text-green-600" />
            <span>Criar Novo Passaporte Digital</span>
          </CardTitle>
          <CardDescription>
            Registre um novo produto com suas informações completas de ciclo de vida
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="nome-produto">Nome do Produto</Label>
                <Input id="nome-produto" placeholder="Ex: Smartphone Sustentável" />
              </div>
              <div>
                <Label htmlFor="categoria">Categoria</Label>
                <Input id="categoria" placeholder="Ex: Eletrônicos, Móveis, Têxtil" />
              </div>
              <div>
                <Label htmlFor="materiais">Materiais Utilizados</Label>
                <Textarea 
                  id="materiais" 
                  placeholder="Lista os materiais separados por vírgula..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="instrucoes">Instruções de Desmontagem</Label>
                <Textarea 
                  id="instrucoes" 
                  placeholder="Como desmontar, reparar ou reciclar o produto..."
                  className="min-h-[100px]"
                />
              </div>
              <div>
                <Label htmlFor="imagem">Imagem do Produto</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Clique para fazer upload ou arraste a imagem</p>
                  <Input type="file" className="hidden" accept="image/*" />
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600">
                <Plus className="h-4 w-4 mr-2" />
                Criar Passaporte Digital
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Buscar Passaportes Existentes</CardTitle>
          <CardDescription>
            Consulte passaportes digitais de produtos registrados na plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <Input placeholder="Buscar por nome, categoria ou ID do produto..." />
            </div>
            <Button variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>

          <div className="space-y-4">
            {produtos.map((produto) => (
              <Card key={produto.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{produto.nome}</h3>
                        <Badge variant={produto.status === 'Em uso' ? 'default' : produto.status === 'Registrado' ? 'secondary' : 'destructive'}>
                          {produto.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">ID: {produto.id} | Categoria: {produto.categoria}</p>
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-1">Materiais:</p>
                        <div className="flex flex-wrap gap-2">
                          {produto.materiais.map((material, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {material}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{produto.instrucoes}</p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver QR Code
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Exportar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Passaportes Criados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">1,247</div>
            <p className="text-gray-600">+18% este mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Produtos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">892</div>
            <p className="text-gray-600">Em ciclo de uso</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Taxa de Reciclagem</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">73%</div>
            <p className="text-gray-600">Produtos descartados</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PassaporteDigital;
