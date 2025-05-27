
import React, { useState } from 'react';
import { Heart, Building, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const OngForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nomeOng: '',
    cnpj: '',
    endereco: '',
    cidade: '',
    estado: '',
    responsavel: '',
    email: '',
    telefone: '',
    missao: '',
    areaAtuacao: [] as string[],
    termos: false
  });

  const areasAtuacao = [
    'Apoio a catadores',
    'Educação ambiental',
    'Restauração ambiental',
    'Desenvolvimento comunitário',
    'Capacitação profissional',
    'Assistência social'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAreaToggle = (area: string) => {
    setFormData(prev => ({
      ...prev,
      areaAtuacao: prev.areaAtuacao.includes(area)
        ? prev.areaAtuacao.filter(a => a !== area)
        : [...prev.areaAtuacao, area]
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

    console.log('Dados da ONG:', formData);
    
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "ONG registrada na plataforma de economia circular.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building className="h-5 w-5 text-pink-600" />
            <span>Dados da Organização</span>
          </CardTitle>
          <CardDescription>
            Informações institucionais da ONG ou cooperativa
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="nomeOng">Nome da Organização *</Label>
            <Input
              id="nomeOng"
              value={formData.nomeOng}
              onChange={(e) => handleInputChange('nomeOng', e.target.value)}
              placeholder="Nome completo da ONG/Cooperativa"
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
              <Label htmlFor="email">Email Institucional *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="contato@ong.org.br"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Localização</CardTitle>
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
            <Heart className="h-5 w-5 text-red-600" />
            <span>Missão e Atuação</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="missao">Missão da Organização</Label>
            <Textarea
              id="missao"
              value={formData.missao}
              onChange={(e) => handleInputChange('missao', e.target.value)}
              placeholder="Descreva a missão e objetivos da organização..."
              rows={3}
            />
          </div>

          <div>
            <Label className="text-base font-medium">Áreas de Atuação</Label>
            <p className="text-sm text-gray-600 mb-3">Selecione as áreas em que a organização atua</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {areasAtuacao.map(area => (
                <div key={area} className="flex items-center space-x-2">
                  <Checkbox
                    id={area}
                    checked={formData.areaAtuacao.includes(area)}
                    onCheckedChange={() => handleAreaToggle(area)}
                  />
                  <Label htmlFor={area} className="text-sm">{area}</Label>
                </div>
              ))}
            </div>
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
              Aceito os termos de uso da plataforma e autorizo o compartilhamento de dados 
              para fins de economia circular e projetos sociais
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

export default OngForm;
