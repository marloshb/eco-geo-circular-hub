
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Upload, Package } from 'lucide-react';

interface ListarResiduoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ListarResiduoModal = ({ isOpen, onClose }: ListarResiduoModalProps) => {
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    quantidade: '',
    unidade: '',
    preco: '',
    descricao: '',
    localizacao: '',
    certificacao: ''
  });

  const categorias = [
    'Plásticos',
    'Metais',
    'Papel/Papelão',
    'Orgânicos',
    'Eletrônicos',
    'Vidro',
    'Entulho'
  ];

  const unidades = ['kg', 'ton', 'unidade', 'm³', 'L'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Novo resíduo listado:', formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Upload className="h-6 w-6 text-green-600" />
            <span>Listar Novo Resíduo</span>
          </DialogTitle>
          <DialogDescription>
            Adicione seu material disponível ao marketplace
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="titulo">Título do Resíduo</Label>
              <Input
                id="titulo"
                value={formData.titulo}
                onChange={(e) => setFormData({...formData, titulo: e.target.value})}
                placeholder="Ex: Aparas de PET cristal"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="categoria">Categoria</Label>
              <Select value={formData.categoria} onValueChange={(value) => setFormData({...formData, categoria: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categorias.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantidade">Quantidade</Label>
              <Input
                id="quantidade"
                value={formData.quantidade}
                onChange={(e) => setFormData({...formData, quantidade: e.target.value})}
                placeholder="500"
                type="number"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="unidade">Unidade</Label>
              <Select value={formData.unidade} onValueChange={(value) => setFormData({...formData, unidade: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Unidade" />
                </SelectTrigger>
                <SelectContent>
                  {unidades.map((unidade) => (
                    <SelectItem key={unidade} value={unidade}>{unidade}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="preco">Preço (R$/unidade)</Label>
              <Input
                id="preco"
                value={formData.preco}
                onChange={(e) => setFormData({...formData, preco: e.target.value})}
                placeholder="2.50"
                type="number"
                step="0.01"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição Detalhada</Label>
            <Textarea
              id="descricao"
              value={formData.descricao}
              onChange={(e) => setFormData({...formData, descricao: e.target.value})}
              placeholder="Descreva as características, qualidade e condições do material..."
              rows={3}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="localizacao">Localização</Label>
              <Input
                id="localizacao"
                value={formData.localizacao}
                onChange={(e) => setFormData({...formData, localizacao: e.target.value})}
                placeholder="São Paulo - SP"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="certificacao">Certificação</Label>
              <Input
                id="certificacao"
                value={formData.certificacao}
                onChange={(e) => setFormData({...formData, certificacao: e.target.value})}
                placeholder="ABNT NBR 10004"
              />
            </div>
          </div>
          
          {/* Upload de imagens */}
          <div className="space-y-2">
            <Label>Imagens do Material</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Arraste imagens ou clique para selecionar</p>
              <Button type="button" variant="outline" size="sm">
                Escolher Arquivos
              </Button>
            </div>
          </div>
          
          <div className="flex space-x-3 pt-4">
            <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
              Listar Resíduo
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ListarResiduoModal;
