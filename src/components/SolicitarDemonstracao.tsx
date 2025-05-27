
import React, { useState } from 'react';
import { X, Send, User, Mail, Phone, Building, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface SolicitarDemonstracaoProps {
  isOpen: boolean;
  onClose: () => void;
}

const SolicitarDemonstracao = ({ isOpen, onClose }: SolicitarDemonstracaoProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    cargo: '',
    setor: '',
    interesse: '',
    mensagem: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setores = [
    'Manufatura',
    'Agricultura',
    'Construção',
    'Varejo',
    'Energia',
    'Órgão Público',
    'Cooperativa de Catadores',
    'Consultoria',
    'Outro'
  ];

  const interesses = [
    'Marketplace de Resíduos',
    'Geotecnologias Avançadas',
    'Portal para Catadores',
    'Monitoramento de Conformidade',
    'Sistema de Incentivos',
    'Logística Otimizada',
    'Agente IA Transversal',
    'Educação e Capacitação',
    'Todas as funcionalidades'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio da solicitação
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Solicitação de demonstração enviada:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      cargo: '',
      setor: '',
      interesse: '',
      mensagem: ''
    });
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-600">Solicitação Enviada!</CardTitle>
            <CardDescription>
              Recebemos sua solicitação de demonstração. Nossa equipe entrará em contato em até 24 horas.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-700">
                <strong>Próximos passos:</strong><br />
                1. Análise do seu perfil e necessidades<br />
                2. Agendamento da demonstração personalizada<br />
                3. Apresentação das funcionalidades relevantes
              </p>
            </div>
            <Button onClick={resetForm} className="w-full bg-green-600 hover:bg-green-700">
              Fechar
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Solicitar Demonstração</h2>
                <p className="text-gray-600">Agende uma apresentação personalizada da plataforma</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <User className="h-4 w-4 text-green-600" />
              </div>
              <p className="text-sm font-medium text-green-800">Demonstração Personalizada</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Building className="h-4 w-4 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-blue-800">Foco no Seu Setor</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <MessageSquare className="h-4 w-4 text-purple-600" />
              </div>
              <p className="text-sm font-medium text-purple-800">Consultoria Especializada</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nome">Nome Completo *</Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="telefone">Telefone *</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <Label htmlFor="empresa">Empresa/Organização *</Label>
                <Input
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  required
                  placeholder="Nome da empresa"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cargo">Cargo/Função</Label>
                <Input
                  id="cargo"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleInputChange}
                  placeholder="Seu cargo na empresa"
                />
              </div>
              <div>
                <Label htmlFor="setor">Setor de Atuação *</Label>
                <select
                  id="setor"
                  name="setor"
                  value={formData.setor}
                  onChange={handleInputChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Selecione o setor</option>
                  {setores.map(setor => (
                    <option key={setor} value={setor}>{setor}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="interesse">Principal Interesse *</Label>
              <select
                id="interesse"
                name="interesse"
                value={formData.interesse}
                onChange={handleInputChange}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Selecione sua área de interesse</option>
                {interesses.map(interesse => (
                  <option key={interesse} value={interesse}>{interesse}</option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="mensagem">Mensagem Adicional</Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                placeholder="Conte-nos mais sobre suas necessidades e objetivos com a economia circular..."
                rows={4}
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">O que você receberá:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Demonstração personalizada de 30-45 minutos</li>
                <li>• Análise das suas necessidades específicas</li>
                <li>• Proposta de implementação customizada</li>
                <li>• Material técnico e estudos de caso</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Solicitar Demonstração
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SolicitarDemonstracao;
