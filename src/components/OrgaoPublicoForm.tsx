
import React, { useState } from 'react';
import { MapPin, Building, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const OrgaoPublicoForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nomeOrgao: '',
    cnpj: '',
    esfera: '',
    endereco: '',
    cidade: '',
    estado: '',
    responsavel: '',
    email: '',
    telefone: '',
    competencias: '',
    termos: false
  });

  const esferas = [
    'Municipal',
    'Estadual',
    'Federal',
    'Autarquia',
    'Fundação Pública'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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

    console.log('Dados do órgão público:', formData);
    
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Órgão público registrado na plataforma de economia circular.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building className="h-5 w-5 text-orange-600" />
            <span>Dados do Órgão</span>
          </CardTitle>
          <CardDescription>
            Informações institucionais do órgão público
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="nomeOrgao">Nome do Órgão *</Label>
            <Input
              id="nomeOrgao"
              value={formData.nomeOrgao}
              onChange={(e) => handleInputChange('nomeOrgao', e.target.value)}
              placeholder="Nome completo do órgão público"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <div>
              <Label htmlFor="esfera">Esfera Administrativa *</Label>
              <select
                id="esfera"
                className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
                value={formData.esfera}
                onChange={(e) => handleInputChange('esfera', e.target.value)}
                required
              >
                <option value="">Selecione</option>
                {esferas.map(esfera => (
                  <option key={esfera} value={esfera}>{esfera}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="responsavel">Responsável *</Label>
              <Input
                id="responsavel"
                value={formData.responsavel}
                onChange={(e) => handleInputChange('responsavel', e.target.value)}
                placeholder="Nome do responsável"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Institucional *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="contato@orgao.gov.br"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-green-600" />
            <span>Localização</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="endereco">Endereço *</Label>
            <Input
              id="endereco"
              value={formData.endereco}
              onChange={(e) => handleInputChange('endereco', e.target.value)}
              placeholder="Endereço completo"
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-purple-600" />
            <span>Competências</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="competencias">Competências Relacionadas à Economia Circular</Label>
            <Textarea
              id="competencias"
              value={formData.competencias}
              onChange={(e) => handleInputChange('competencias', e.target.value)}
              placeholder="Descreva as competências do órgão relacionadas a resíduos, meio ambiente, etc."
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

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
              Aceito os termos de uso da plataforma e autorizo o acesso a dados 
              para fins de monitoramento de políticas de economia circular
            </Label>
          </div>
        </CardContent>
      </Card>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 py-3"
        size="lg"
      >
        Finalizar Cadastro
      </Button>
    </form>
  );
};

export default OrgaoPublicoForm;
