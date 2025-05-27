
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Gavel, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface CriarLeilaoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CriarLeilaoModal = ({ isOpen, onClose }: CriarLeilaoModalProps) => {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    lanceInicial: '',
    lanceMinimo: '',
    quantidade: '',
    localizacao: ''
  });
  
  const [dataFim, setDataFim] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Leilão criado:', { ...formData, dataFim });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Gavel className="h-6 w-6 text-orange-600" />
            <span>Criar Novo Leilão</span>
          </DialogTitle>
          <DialogDescription>
            Configure os parâmetros do seu leilão de materiais
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="titulo">Título do Leilão</Label>
            <Input
              id="titulo"
              value={formData.titulo}
              onChange={(e) => setFormData({...formData, titulo: e.target.value})}
              placeholder="Ex: Lote de Sucata de Cobre - 500kg"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição do Lote</Label>
            <Textarea
              id="descricao"
              value={formData.descricao}
              onChange={(e) => setFormData({...formData, descricao: e.target.value})}
              placeholder="Descreva detalhadamente o material em leilão..."
              rows={3}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lanceInicial">Lance Inicial (R$)</Label>
              <Input
                id="lanceInicial"
                value={formData.lanceInicial}
                onChange={(e) => setFormData({...formData, lanceInicial: e.target.value})}
                placeholder="1000.00"
                type="number"
                step="0.01"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lanceMinimo">Lance Mínimo (R$)</Label>
              <Input
                id="lanceMinimo"
                value={formData.lanceMinimo}
                onChange={(e) => setFormData({...formData, lanceMinimo: e.target.value})}
                placeholder="50.00"
                type="number"
                step="0.01"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantidade">Quantidade</Label>
              <Input
                id="quantidade"
                value={formData.quantidade}
                onChange={(e) => setFormData({...formData, quantidade: e.target.value})}
                placeholder="500kg"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label>Data de Encerramento</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dataFim ? format(dataFim, "PPP", { locale: ptBR }) : "Selecionar data"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dataFim}
                    onSelect={setDataFim}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
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
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-900 mb-2">Informações do Leilão</h4>
            <ul className="text-sm text-orange-800 space-y-1">
              <li>• O leilão será publicado imediatamente após a criação</li>
              <li>• Lances podem ser feitos até a data de encerramento</li>
              <li>• Taxa de 5% sobre o valor final de venda</li>
              <li>• Pagamento processado automaticamente</li>
            </ul>
          </div>
          
          <div className="flex space-x-3 pt-4">
            <Button type="submit" className="flex-1 bg-orange-600 hover:bg-orange-700">
              Criar Leilão
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

export default CriarLeilaoModal;
