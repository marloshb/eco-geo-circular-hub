
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Calendar, Package, Shield, Truck, MessageCircle } from 'lucide-react';

interface DetalhesResiduoModalProps {
  isOpen: boolean;
  onClose: () => void;
  residuo: {
    id: number;
    titulo: string;
    categoria: string;
    preco: string;
    localizacao: string;
    vendedor: string;
    qualidade: number;
    descricao: string;
    quantidade: string;
    certificacao: string;
    distancia: string;
  } | null;
}

const DetalhesResiduoModal = ({ isOpen, onClose, residuo }: DetalhesResiduoModalProps) => {
  if (!residuo) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-green-600" />
            <span>{residuo.titulo}</span>
          </DialogTitle>
          <DialogDescription>
            Detalhes completos do resíduo disponível
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Imagem do produto */}
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
            <Package className="h-16 w-16 text-gray-400" />
          </div>
          
          {/* Informações principais */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Informações do Produto</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Categoria:</span>
                  <Badge variant="outline">{residuo.categoria}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantidade:</span>
                  <span className="font-medium">{residuo.quantidade}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Preço:</span>
                  <span className="font-bold text-green-600">{residuo.preco}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificação:</span>
                  <span className="font-medium">{residuo.certificacao}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Vendedor e Localização</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Vendedor:</span>
                  <span className="font-medium">{residuo.vendedor}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500" />
                    <span>{residuo.qualidade}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{residuo.localizacao}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 text-gray-500" />
                  <span>Distância: {residuo.distancia}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Descrição */}
          <div>
            <h4 className="font-semibold mb-2">Descrição Detalhada</h4>
            <p className="text-gray-700">{residuo.descricao}</p>
          </div>
          
          {/* Certificações e Qualidade */}
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="h-5 w-5 text-green-600" />
              <h4 className="font-semibold text-green-800">Certificações e Conformidade</h4>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-green-700">Norma ABNT NBR 10004:2004</span>
                <p className="text-green-600">✓ Conforme</p>
              </div>
              <div>
                <span className="text-green-700">Laudo de Caracterização</span>
                <p className="text-green-600">✓ Disponível</p>
              </div>
            </div>
          </div>
          
          {/* Ações */}
          <div className="flex space-x-3">
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              <Package className="h-4 w-4 mr-2" />
              Solicitar Compra
            </Button>
            <Button variant="outline" className="flex-1">
              <MessageCircle className="h-4 w-4 mr-2" />
              Negociar Preço
            </Button>
            <Button variant="outline">
              <Truck className="h-4 w-4 mr-2" />
              Agendar Coleta
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetalhesResiduoModal;
