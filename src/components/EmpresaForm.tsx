
import React, { useState } from 'react';
import { Building, MapPin, Package, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const EmpresaForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    razaoSocial: '',
    cnpj: '',
    setor: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
    telefone: '',
    email: '',
    responsavel: '',
    tiposResiduos: [] as string[],
    praticasCirculares: '',
    certificacoes: '',
    capacidadeReciclagem: '',
    conformidadePNRS: false,
    termos: false
  });

  const setores = [
    'Manufatura e Indústria',
    'Agricultura e Alimentos',
    'Construção e Imóveis',
    'Varejo e Bens de Consumo',
    'Energia e Utilidades'
  ];

  const tiposResiduos = [
    'Plásticos',
    'Metais',
    'Papel e Papelão',
    'Vidro',
    'Orgânicos',
    'Eletrônicos',
    'Entulho',
    'Químicos'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleResiduoToggle = (residuo: string) => {
    setFormData(prev => ({
      ...prev,
      tiposResiduos: prev.tiposResiduos.includes(residuo)
        ? prev.tiposResiduos.filter(r => r !== residuo)
        : [...prev.tiposResiduos, residuo]
    }));
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

    console.log('Dados da empresa:', formData);
    
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Empresa registrada na plataforma de economia circular.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Dados Básicos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building className="h-5 w-5 text-blue-600" />
            <span>Dados da Empresa</span>
          </CardTitle>
          <CardDescription>
            Informações básicas da empresa conforme CNPJ
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="razaoSocial">Razão Social *</Label>
              <Input
                id="razaoSocial"
                value={formData.razaoSocial}
                onChange={(e) => handleInputChange('razaoSocial', e.target.value)}
                placeholder="Nome completo da empresa"
                required
              />
            </div>
            <div>
              <Label htmlFor="cnpj">CNPJ *</Label>
              <Input
                id="cnpj"
                value={formData.cnpj}
                onChange={(e) => handleInputChange('cnpj', e.target.value)}
                placeholder="00.000.000/0000-00"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="setor">Setor de Atuação *</Label>
            <select
              id="setor"
              className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
              value={formData.setor}
              onChange={(e) => handleInputChange('setor', e.target.value)}
              required
            >
              <option value="">Selecione um setor</option>
              {setores.map(setor => (
                <option key={setor} value={setor}>{setor}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="responsavel">Responsável Legal *</Label>
              <Input
                id="responsavel"
                value={formData.responsavel}
                onChange={(e) => handleInputChange('responsavel', e.target.value)}
                placeholder="Nome do responsável"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Corporativo *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="contato@empresa.com"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Localização */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-green-600" />
            <span>Localização</span>
          </CardTitle>
          <CardDescription>
            Dados geográficos para integração com GIS
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="endereco">Endereço Completo *</Label>
            <Input
              id="endereco"
              value={formData.endereco}
              onChange={(e) => handleInputChange('endereco', e.target.value)}
              placeholder="Rua, número, bairro"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <div>
              <Label htmlFor="cep">CEP *</Label>
              <Input
                id="cep"
                value={formData.cep}
                onChange={(e) => handleInputChange('cep', e.target.value)}
                placeholder="00000-000"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resíduos e Práticas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5 text-orange-600" />
            <span>Resíduos e Práticas Circulares</span>
          </CardTitle>
          <CardDescription>
            Informações sobre geração de resíduos e práticas sustentáveis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-base font-medium">Tipos de Resíduos Gerados</Label>
            <p className="text-sm text-gray-600 mb-3">Selecione todos os tipos aplicáveis</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {tiposResiduos.map(residuo => (
                <div key={residuo} className="flex items-center space-x-2">
                  <Checkbox
                    id={residuo}
                    checked={formData.tiposResiduos.includes(residuo)}
                    onCheckedChange={() => handleResiduoToggle(residuo)}
                  />
                  <Label htmlFor={residuo} className="text-sm">{residuo}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="praticasCirculares">Práticas Circulares Atuais</Label>
            <Textarea
              id="praticasCirculares"
              value={formData.praticasCirculares}
              onChange={(e) => handleInputChange('praticasCirculares', e.target.value)}
              placeholder="Descreva as práticas de economia circular já implementadas..."
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="capacidadeReciclagem">Capacidade de Reciclagem (ton/mês)</Label>
            <Input
              id="capacidadeReciclagem"
              type="number"
              value={formData.capacidadeReciclagem}
              onChange={(e) => handleInputChange('capacidadeReciclagem', e.target.value)}
              placeholder="0"
            />
          </div>
        </CardContent>
      </Card>

      {/* Conformidade */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-purple-600" />
            <span>Conformidade Regulatória</span>
          </CardTitle>
          <CardDescription>
            Atendimento às normas PNRS, PNEC e ENEC
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="conformidadePNRS"
              checked={formData.conformidadePNRS}
              onCheckedChange={(checked) => handleInputChange('conformidadePNRS', checked)}
            />
            <Label htmlFor="conformidadePNRS">
              Declaro que a empresa possui Plano de Gestão de Resíduos conforme PNRS
            </Label>
          </div>

          <div>
            <Label htmlFor="certificacoes">Certificações Ambientais</Label>
            <Input
              id="certificacoes"
              value={formData.certificacoes}
              onChange={(e) => handleInputChange('certificacoes', e.target.value)}
              placeholder="ISO 14001, ABNT NBR 59000, etc."
            />
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
              para fins de economia circular, em conformidade com a LGPD
            </Label>
          </div>
        </CardContent>
      </Card>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 py-3"
        size="lg"
      >
        Finalizar Cadastro da Empresa
      </Button>
    </form>
  );
};

export default EmpresaForm;
