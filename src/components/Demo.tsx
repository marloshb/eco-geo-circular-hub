
import React, { useState } from 'react';
import { X, Play, ArrowRight, ArrowLeft, Map, Users, Package, Brain, BarChart3, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface DemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const Demo = ({ isOpen, onClose }: DemoProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Bem-vindo à Plataforma de Economia Circular",
      description: "Conectamos empresas, catadores, consumidores e órgãos públicos para criar um ecossistema sustentável completo.",
      icon: <Package className="h-16 w-16 text-green-600 mx-auto mb-4" />,
      features: [
        "Marketplace integrado de resíduos",
        "Rastreamento em tempo real",
        "Conformidade com PNEC e ENEC"
      ]
    },
    {
      title: "Geotecnologias Avançadas",
      description: "Utilize GIS, IoT e sensoriamento remoto para otimizar a gestão de resíduos em todo o território nacional.",
      icon: <Map className="h-16 w-16 text-blue-600 mx-auto mb-4" />,
      features: [
        "Mapas interativos em tempo real",
        "Sensores IoT para monitoramento",
        "Análise preditiva espacial"
      ]
    },
    {
      title: "Inclusão Social de Catadores",
      description: "Fortalecemos cooperativas e catadores com ferramentas digitais, capacitação e acesso ao mercado formal.",
      icon: <Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />,
      features: [
        "Portal especializado para catadores",
        "Sistema de pagamentos digitais",
        "Programas de capacitação"
      ]
    },
    {
      title: "Inteligência Artificial Transversal",
      description: "IA avançada analisa dados, otimiza processos e gera insights acionáveis para toda a cadeia circular.",
      icon: <Brain className="h-16 w-16 text-indigo-600 mx-auto mb-4" />,
      features: [
        "Análise preditiva de resíduos",
        "Recomendações personalizadas",
        "Automação de fluxos"
      ]
    },
    {
      title: "Conformidade e Monitoramento",
      description: "Monitore indicadores PNEC, gere relatórios automatizados e garanta conformidade regulatória.",
      icon: <BarChart3 className="h-16 w-16 text-green-600 mx-auto mb-4" />,
      features: [
        "Dashboards em tempo real",
        "Relatórios de conformidade",
        "Indicadores de sustentabilidade"
      ]
    },
    {
      title: "Resultados Comprovados",
      description: "Junte-se a milhares de usuários que já transformam resíduos em oportunidades sustentáveis.",
      icon: <Zap className="h-16 w-16 text-yellow-600 mx-auto mb-4" />,
      features: [
        "98% de satisfação dos usuários",
        "50% de redução no desperdício",
        "2M+ toneladas processadas"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Play className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Demonstração da Plataforma</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-green-600' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <Badge className="ml-4 bg-green-100 text-green-800">
              {currentSlide + 1} de {slides.length}
            </Badge>
          </div>

          {/* Current slide */}
          <Card className="mb-8">
            <CardHeader className="text-center">
              {slides[currentSlide].icon}
              <CardTitle className="text-2xl mb-2">{slides[currentSlide].title}</CardTitle>
              <CardDescription className="text-lg">
                {slides[currentSlide].description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {slides[currentSlide].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Anterior
            </Button>

            <div className="flex space-x-2">
              <Button variant="outline" onClick={onClose}>
                Fechar Demonstração
              </Button>
              {currentSlide === slides.length - 1 ? (
                <Button className="bg-green-600 hover:bg-green-700">
                  Começar Agora
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={nextSlide} className="bg-green-600 hover:bg-green-700">
                  Próximo
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </div>

          {/* Call to action */}
          {currentSlide === slides.length - 1 && (
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pronto para transformar sua gestão de resíduos?
              </h3>
              <p className="text-gray-600 mb-4">
                Junte-se à revolução da economia circular e faça parte de um futuro mais sustentável.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Criar Conta Gratuita
                </Button>
                <Button size="sm" variant="outline">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;
