
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Gavel, Clock, Users, TrendingUp } from 'lucide-react';

interface FazerLanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  leilao: {
    id: number;
    produto: string;
    lanceAtual: string;
    proximoLance: string;
    participantes: number;
    tempoRestante: string;
    vendedor: string;
  } | null;
}

const FazerLanceModal = ({ isOpen, onClose, leilao }: FazerLanceModalProps) => {
  const [lance, setLance] = useState('');
  const [confirmacao, setConfirmacao] = useState(false);

  if (!leilao) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmacao) return;
    
    console.log('Lance realizado:', { leilaoId: leilao.id, valor: lance });
    onClose();
  };

  const valorMinimo = parseFloat(leilao.proximoLance.replace('R$ ', '').replace('.', '').replace(',', '.'));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Gavel className="h-6 w-6 text-orange-600" />
            <span>Fazer Lance</span>
          </DialogTitle>
          <DialogDescription>
            Participe do leilão com seu lance
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Informações do leilão */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <h4 className="font-semibold">{leilao.produto}</h4>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-orange-600" />
                <div>
                  <p className="text-gray-600">Lance Atual</p>
                  <p className="font-bold text-orange-600">{leilao.lanceAtual}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-600" />
                <div>
                  <p className="text-gray-600">Tempo Restante</p>
                  <p className="font-medium">{leilao.tempoRestante}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-600" />
                <span className="text-sm">{leilao.participantes} participantes</span>
              </div>
              <Badge className="bg-orange-100 text-orange-800">
                Mín: {leilao.proximoLance}
              </Badge>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lance">Valor do Lance (R$)</Label>
              <Input
                id="lance"
                value={lance}
                onChange={(e) => setLance(e.target.value)}
                placeholder={leilao.proximoLance}
                type="number"
                step="0.01"
                min={valorMinimo}
                required
              />
              <p className="text-xs text-gray-600">
                Lance mínimo: {leilao.proximoLance}
              </p>
            </div>
            
            <div className="bg-yellow-50 p-3 rounded-lg">
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="confirmacao"
                  checked={confirmacao}
                  onChange={(e) => setConfirmacao(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="confirmacao" className="text-sm text-yellow-800">
                  Confirmo que tenho condições financeiras para honrar este lance
                  e aceito os termos do leilão.
                </label>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button 
                type="submit" 
                className="flex-1 bg-orange-600 hover:bg-orange-700"
                disabled={!confirmacao || !lance || parseFloat(lance) < valorMinimo}
              >
                Confirmar Lance
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </form>
          
          <div className="text-xs text-gray-500 space-y-1">
            <p>• Os lances são vinculantes e irreversíveis</p>
            <p>• Pagamento processado automaticamente em caso de vitória</p>
            <p>• Taxa de processamento de 3% aplicada</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FazerLanceModal;
