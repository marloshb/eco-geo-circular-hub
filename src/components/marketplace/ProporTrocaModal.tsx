
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Handshake, ArrowLeftRight, Package } from 'lucide-react';

interface ProporTrocaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProporTrocaModal = ({ isOpen, onClose }: ProporTrocaModalProps) => {
  const [formData, setFormData] = useState({
    oferecendo: {
      tipo: '',
      quantidade: '',
      unidade: '',
      descricao: '',
      valorEstimado: ''
    },
    procurando: {
      tipo: '',
      quantidade: '',
      unidade: '',
      descricao: '',
      valorMaximo: ''
    },
    observacoes: ''
  });

  const tiposMateriais = [
    'Plásticos PET',
    'Plásticos PEAD',
    'Papel Branco',
    'Papelão',
    'Alumínio',
    'Cobre',
    'Ferro',
    'Vidro',
    'Resíduos Orgânicos'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Proposta de troca:', formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Handshake className="h-6 w-6 text-blue-600" />
            <span>Propor Troca de Materiais</span>
          </DialogTitle>
          <DialogDescription>
            Crie uma proposta de troca direta sem transação monetária
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* O que está oferecendo */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-2 border-b">
                <Package className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-green-800">O que você oferece</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <Label>Tipo de Material</Label>
                  <Select 
                    value={formData.oferecendo.tipo} 
                    onValueChange={(value) => setFormData({
                      ...formData, 
                      oferecendo: {...formData.oferecendo, tipo: value}
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o material" />
                    </SelectTrigger>
                    <SelectContent>
                      {tiposMateriais.map((tipo) => (
                        <SelectItem key={tipo} value={tipo}>{tipo}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label>Quantidade</Label>
                    <Input
                      value={formData.oferecendo.quantidade}
                      onChange={(e) => setFormData({
                        ...formData, 
                        oferecendo: {...formData.oferecendo, quantidade: e.target.value}
                      })}
                      placeholder="500"
                      type="number"
                    />
                  </div>
                  <div>
                    <Label>Unidade</Label>
                    <Select 
                      value={formData.oferecendo.unidade}
                      onValueChange={(value) => setFormData({
                        ...formData, 
                        oferecendo: {...formData.oferecendo, unidade: value}
                      })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Un." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg">kg</SelectItem>
                        <SelectItem value="ton">ton</SelectItem>
                        <SelectItem value="m³">m³</SelectItem>
                        <SelectItem value="unidade">unidade</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label>Descrição</Label>
                  <Textarea
                    value={formData.oferecendo.descricao}
                    onChange={(e) => setFormData({
                      ...formData, 
                      oferecendo: {...formData.oferecendo, descricao: e.target.value}
                    })}
                    placeholder="Descreva as características do material..."
                    rows={2}
                  />
                </div>
                
                <div>
                  <Label>Valor Estimado (R$)</Label>
                  <Input
                    value={formData.oferecendo.valorEstimado}
                    onChange={(e) => setFormData({
                      ...formData, 
                      oferecendo: {...formData.oferecendo, valorEstimado: e.target.value}
                    })}
                    placeholder="1200.00"
                    type="number"
                    step="0.01"
                  />
                </div>
              </div>
            </div>
            
            {/* O que está procurando */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-2 border-b">
                <ArrowLeftRight className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-blue-800">O que você procura</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <Label>Tipo de Material</Label>
                  <Select 
                    value={formData.procurando.tipo} 
                    onValueChange={(value) => setFormData({
                      ...formData, 
                      procurando: {...formData.procurando, tipo: value}
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o material" />
                    </SelectTrigger>
                    <SelectContent>
                      {tiposMateriais.map((tipo) => (
                        <SelectItem key={tipo} value={tipo}>{tipo}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label>Quantidade</Label>
                    <Input
                      value={formData.procurando.quantidade}
                      onChange={(e) => setFormData({
                        ...formData, 
                        procurando: {...formData.procurando, quantidade: e.target.value}
                      })}
                      placeholder="300"
                      type="number"
                    />
                  </div>
                  <div>
                    <Label>Unidade</Label>
                    <Select 
                      value={formData.procurando.unidade}
                      onValueChange={(value) => setFormData({
                        ...formData, 
                        procurando: {...formData.procurando, unidade: value}
                      })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Un." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg">kg</SelectItem>
                        <SelectItem value="ton">ton</SelectItem>
                        <SelectItem value="m³">m³</SelectItem>
                        <SelectItem value="unidade">unidade</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label>Descrição</Label>
                  <Textarea
                    value={formData.procurando.descricao}
                    onChange={(e) => setFormData({
                      ...formData, 
                      procurando: {...formData.procurando, descricao: e.target.value}
                    })}
                    placeholder="Especifique o que você precisa..."
                    rows={2}
                  />
                </div>
                
                <div>
                  <Label>Valor Máximo Aceito (R$)</Label>
                  <Input
                    value={formData.procurando.valorMaximo}
                    onChange={(e) => setFormData({
                      ...formData, 
                      procurando: {...formData.procurando, valorMaximo: e.target.value}
                    })}
                    placeholder="1200.00"
                    type="number"
                    step="0.01"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Calculadora de equivalência */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-3">Calculadora de Equivalência</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="text-blue-700">Seu Material</p>
                <p className="font-bold text-blue-900">
                  {formData.oferecendo.quantidade} {formData.oferecendo.unidade}
                </p>
                <p className="text-blue-600">R$ {formData.oferecendo.valorEstimado}</p>
              </div>
              <div className="text-center flex items-center justify-center">
                <ArrowLeftRight className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-center">
                <p className="text-blue-700">Material Desejado</p>
                <p className="font-bold text-blue-900">
                  {formData.procurando.quantidade} {formData.procurando.unidade}
                </p>
                <p className="text-blue-600">R$ {formData.procurando.valorMaximo}</p>
              </div>
            </div>
            
            {formData.oferecendo.valorEstimado && formData.procurando.valorMaximo && (
              <div className="mt-3 pt-3 border-t border-blue-200">
                <Badge className="bg-blue-100 text-blue-800">
                  Equivalência: {
                    ((parseFloat(formData.oferecendo.valorEstimado) / parseFloat(formData.procurando.valorMaximo)) * 100).toFixed(1)
                  }%
                </Badge>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <Label>Observações Adicionais</Label>
            <Textarea
              value={formData.observacoes}
              onChange={(e) => setFormData({...formData, observacoes: e.target.value})}
              placeholder="Condições especiais, prazo de validade da proposta, etc..."
              rows={2}
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              Publicar Proposta de Troca
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

export default ProporTrocaModal;
