
import React, { useState } from 'react';
import { Users, MapPin, Camera, Fingerprint, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const CatadorForm = () => {
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(false);
  const [biometricVerified, setBiometricVerified] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    apelido: '',
    cpf: '',
    telefone: '',
    endereco: '',
    cidade: '',
    estado: '',
    cooperativa: '',
    areaAtuacao: '',
    materiaisColetados: [] as string[],
    equipamentos: '',
    experiencia: '',
    documentos: false,
    biometria: false,
    termos: false
  });

  const materiaisDisponiveis = [
    'Papel e Papelão',
    'Plástico PET',
    'Plástico Rígido',
    'Alumínio',
    'Ferro',
    'Cobre',
    'Vidro',
    'Eletrônicos'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMaterialToggle = (material: string) => {
    setFormData(prev => ({
      ...prev,
      materiaisColetados: prev.materiaisColetados.includes(material)
        ? prev.materiaisColetados.filter(m => m !== material)
        : [...prev.materiaisColetados, material]
    }));
  };

  const handleBiometricVerification = async () => {
    setIsVerifying(true);
    
    // Simula verificação biométrica
    setTimeout(() => {
      setBiometricVerified(true);
      handleInputChange('biometria', true);
      setIsVerifying(false);
      
      toast({
        title: "Verificação biométrica concluída!",
        description: "Identidade confirmada com sucesso.",
      });
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termos) {
      toast({
        title: "Erro no cadastro",
        description: "É necessário aceitar os termos de uso.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.biometria && !formData.documentos) {
      toast({
        title: "Verificação necessária",
        description: "É necessário pelo menos uma forma de verificação (documentos ou biometria).",
        variant: "destructive"
      });
      return;
    }

    console.log('Dados do catador:', formData);
    
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Catador registrado na plataforma de economia circular.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Dados Pessoais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-green-600" />
            <span>Dados Pessoais</span>
          </CardTitle>
          <CardDescription>
            Informações básicas para identificação (dados protegidos por LGPD)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nome">Nome Completo *</Label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={(e) => handleInputChange('nome', e.target.value)}
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div>
              <Label htmlFor="apelido">Como gosta de ser chamado</Label>
              <Input
                id="apelido"
                value={formData.apelido}
                onChange={(e) => handleInputChange('apelido', e.target.value)}
                placeholder="Apelido ou nome social"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="cpf">CPF (se possuir)</Label>
              <Input
                id="cpf"
                value={formData.cpf}
                onChange={(e) => handleInputChange('cpf', e.target.value)}
                placeholder="000.000.000-00"
              />
            </div>
            <div>
              <Label htmlFor="telefone">Telefone *</Label>
              <Input
                id="telefone"
                value={formData.telefone}
                onChange={(e) => handleInputChange('telefone', e.target.value)}
                placeholder="(11) 99999-9999"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Verificação de Identidade */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <span>Verificação de Identidade</span>
          </CardTitle>
          <CardDescription>
            Escolha uma forma de verificação para garantir a segurança da plataforma
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Verificação Biométrica */}
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium flex items-center space-x-2">
                  <Fingerprint className="h-4 w-4 text-green-600" />
                  <span>Verificação Biométrica</span>
                </h4>
                <p className="text-sm text-gray-600">
                  Ideal para quem não possui documentos formais
                </p>
              </div>
              {biometricVerified && (
                <Badge className="bg-green-100 text-green-800">
                  Verificado
                </Badge>
              )}
            </div>
            
            <Button
              type="button"
              variant={biometricVerified ? "outline" : "default"}
              onClick={handleBiometricVerification}
              disabled={isVerifying || biometricVerified}
              className="w-full"
            >
              {isVerifying ? (
                "Verificando..."
              ) : biometricVerified ? (
                "Biometria Confirmada"
              ) : (
                <>
                  <Camera className="h-4 w-4 mr-2" />
                  Iniciar Verificação Biométrica
                </>
              )}
            </Button>
          </div>

          {/* Verificação por Documentos */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Checkbox
                id="documentos"
                checked={formData.documentos}
                onCheckedChange={(checked) => handleInputChange('documentos', checked)}
              />
              <Label htmlFor="documentos" className="font-medium">
                Possuo documentos de identificação (RG, CPF, CNH)
              </Label>
            </div>
            <p className="text-sm text-gray-600 ml-6">
              Marque esta opção se você possui documentos oficiais
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Localização */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-orange-600" />
            <span>Localização e Área de Atuação</span>
          </CardTitle>
          <CardDescription>
            Dados geográficos para conectar você a oportunidades próximas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="endereco">Endereço ou Região de Residência *</Label>
            <Input
              id="endereco"
              value={formData.endereco}
              onChange={(e) => handleInputChange('endereco', e.target.value)}
              placeholder="Bairro, rua ou região onde mora"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="cidade">Cidade *</Label>
              <Input
                id="cidade"
                value={formData.cidade}
                onChange={(e) => handleInputChange('cidade', e.target.value)}
                placeholder="Nome da cidade"
                required
              />
            </div>
            <div>
              <Label htmlFor="estado">Estado *</Label>
              <Input
                id="estado"
                value={formData.estado}
                onChange={(e) => handleInputChange('estado', e.target.value)}
                placeholder="UF"
                maxLength={2}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="areaAtuacao">Área de Atuação</Label>
            <Textarea
              id="areaAtuacao"
              value={formData.areaAtuacao}
              onChange={(e) => handleInputChange('areaAtuacao', e.target.value)}
              placeholder="Descreva os bairros ou regiões onde você trabalha..."
              rows={2}
            />
          </div>

          <div>
            <Label htmlFor="cooperativa">Cooperativa ou Associação</Label>
            <Input
              id="cooperativa"
              value={formData.cooperativa}
              onChange={(e) => handleInputChange('cooperativa', e.target.value)}
              placeholder="Nome da cooperativa (se faz parte de alguma)"
            />
          </div>
        </CardContent>
      </Card>

      {/* Atividade Profissional */}
      <Card>
        <CardHeader>
          <CardTitle>Atividade Profissional</CardTitle>
          <CardDescription>
            Informações sobre sua experiência e materiais coletados
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-base font-medium">Materiais que Você Coleta</Label>
            <p className="text-sm text-gray-600 mb-3">Selecione todos os tipos que você trabalha</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {materiaisDisponiveis.map(material => (
                <div key={material} className="flex items-center space-x-2">
                  <Checkbox
                    id={material}
                    checked={formData.materiaisColetados.includes(material)}
                    onCheckedChange={() => handleMaterialToggle(material)}
                  />
                  <Label htmlFor={material} className="text-sm">{material}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="equipamentos">Equipamentos Disponíveis</Label>
            <Textarea
              id="equipamentos"
              value={formData.equipamentos}
              onChange={(e) => handleInputChange('equipamentos', e.target.value)}
              placeholder="Carrinho, prensa, balança, veículo próprio, etc."
              rows={2}
            />
          </div>

          <div>
            <Label htmlFor="experiencia">Tempo de Experiência</Label>
            <select
              id="experiencia"
              className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
              value={formData.experiencia}
              onChange={(e) => handleInputChange('experiencia', e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="menos-1-ano">Menos de 1 ano</option>
              <option value="1-3-anos">1 a 3 anos</option>
              <option value="3-5-anos">3 a 5 anos</option>
              <option value="5-10-anos">5 a 10 anos</option>
              <option value="mais-10-anos">Mais de 10 anos</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Termos */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="termos"
              checked={formData.termos}
              onCheckedChange={(checked) => handleInputChange('termos', checked)}
              required
            />
            <Label htmlFor="termos" className="text-sm leading-relaxed">
              Aceito os termos de uso da plataforma e autorizo o compartilhamento de dados 
              para fins de economia circular e inclusão social, em conformidade com a LGPD
            </Label>
          </div>
        </CardContent>
      </Card>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 py-3"
        size="lg"
      >
        Finalizar Cadastro do Catador
      </Button>
    </form>
  );
};

export default CatadorForm;
