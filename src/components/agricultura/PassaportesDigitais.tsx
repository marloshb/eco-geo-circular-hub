
import React, { useState } from 'react';
import { Package, QrCode, Smartphone, Recycle, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const PassaportesDigitais = () => {
  const [searchQR, setSearchQR] = useState('');

  const embalagens = [
    {
      id: 'QR001',
      produto: 'Fertilizante NPK 20-05-20',
      fabricante: 'AgroTech Brasil',
      material: 'Polietileno de Alta Densidade',
      peso: '50kg',
      reciclabilidade: 'Alta',
      instrucoes: 'Tríplice lavagem obrigatória',
      pontoColeta: 'Cooperativa AgriLimpa - 2.3km',
      status: 'Ativo',
      certificacao: 'inpEV'
    },
    {
      id: 'QR002',
      produto: 'Agrotóxico Sistêmico',
      fabricante: 'Defensivos Modernos',
      material: 'HDPE com Tampa PP',
      peso: '1L',
      reciclabilidade: 'Especial',
      instrucoes: 'Lavagem tripla + Furação',
      pontoColeta: 'Central inpEV - 5.7km',
      status: 'Ativo',
      certificacao: 'ABNT NBR 13968'
    },
    {
      id: 'QR003',
      produto: 'Sementes Híbridas Milho',
      fabricante: 'SemenTech',
      material: 'Papel Kraft Laminado',
      peso: '20kg',
      reciclabilidade: 'Média',
      instrucoes: 'Separação de plástico interno',
      pontoColeta: 'Recicladora Verde - 4.1km',
      status: 'Coletado',
      certificacao: 'FSC Certificado'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': return 'bg-green-100 text-green-800';
      case 'Coletado': return 'bg-blue-100 text-blue-800';
      case 'Processado': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getReciclaColor = (reciclabilidade: string) => {
    switch (reciclabilidade) {
      case 'Alta': return 'text-green-600';
      case 'Média': return 'text-yellow-600';
      case 'Especial': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <QrCode className="h-6 w-6 text-blue-600" />
            <span>Passaportes Digitais para Embalagens Agrícolas</span>
          </CardTitle>
          <CardDescription>
            Sistema de rastreabilidade e logística reversa baseado em QR Code e RFID
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Busca por QR Code */}
          <div className="mb-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Digite o código QR ou escaneie a embalagem..."
                  value={searchQR}
                  onChange={(e) => setSearchQR(e.target.value)}
                />
              </div>
              <Button className="flex items-center space-x-2">
                <Smartphone className="h-4 w-4" />
                <span>Escanear QR</span>
              </Button>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-lg font-bold text-green-600">2,847</p>
                  <p className="text-sm text-green-700">Passaportes Ativos</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <Recycle className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-lg font-bold text-blue-600">1,234</p>
                  <p className="text-sm text-blue-700">Embalagens Coletadas</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-lg font-bold text-purple-600">987</p>
                  <p className="text-sm text-purple-700">Recicladas</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="text-lg font-bold text-orange-600">45</p>
                  <p className="text-sm text-orange-700">Pontos de Coleta</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de Passaportes */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Passaportes Digitais Registrados</h3>
            {embalagens.map((embalagem) => (
              <Card key={embalagem.id} className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Informações Básicas */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg">{embalagem.produto}</h4>
                        <Badge className={getStatusColor(embalagem.status)}>
                          {embalagem.status}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-600">Código QR:</span>
                          <span className="font-mono ml-2 bg-gray-100 px-2 py-1 rounded">
                            {embalagem.id}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Fabricante:</span>
                          <span className="ml-2 font-medium">{embalagem.fabricante}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Material:</span>
                          <span className="ml-2">{embalagem.material}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Peso/Volume:</span>
                          <span className="ml-2">{embalagem.peso}</span>
                        </div>
                      </div>
                    </div>

                    {/* Reciclabilidade */}
                    <div className="space-y-3">
                      <h5 className="font-medium">Informações de Reciclagem</h5>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-600">Reciclabilidade:</span>
                          <span className={`ml-2 font-medium ${getReciclaColor(embalagem.reciclabilidade)}`}>
                            {embalagem.reciclabilidade}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Instruções:</span>
                          <p className="text-sm mt-1 p-2 bg-yellow-50 rounded">
                            {embalagem.instrucoes}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-600">Certificação:</span>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {embalagem.certificacao}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Ponto de Coleta */}
                    <div className="space-y-3">
                      <h5 className="font-medium">Logística Reversa</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 text-green-600 mt-0.5" />
                          <div>
                            <p className="font-medium">{embalagem.pontoColeta}</p>
                            <p className="text-gray-600 text-xs">Ponto de coleta mais próximo</p>
                          </div>
                        </div>
                        <div className="pt-2">
                          <Button size="sm" variant="outline" className="w-full">
                            Ver no Mapa
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Guia de Uso */}
      <Card>
        <CardHeader>
          <CardTitle>Como Usar os Passaportes Digitais</CardTitle>
          <CardDescription>
            Instruções para produtores, distribuidores e catadores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <QrCode className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold">1. Escaneie o QR Code</h4>
              <p className="text-sm text-gray-600">
                Use o aplicativo para escanear o código na embalagem
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Package className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold">2. Consulte Informações</h4>
              <p className="text-sm text-gray-600">
                Veja instruções de preparo e pontos de coleta
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Recycle className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold">3. Destine Corretamente</h4>
              <p className="text-sm text-gray-600">
                Entregue no ponto de coleta mais próximo
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PassaportesDigitais;
