
import React, { useState } from 'react';
import { X, Play, ArrowRight, ArrowLeft, Brain, TrendingUp, Zap, BarChart3, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface DemoOtimizacaoIAProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoOtimizacaoIA = ({ isOpen, onClose }: DemoOtimizacaoIAProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "IA para Otimização da Economia Circular",
      description: "Veja como nossa inteligência artificial revoluciona a gestão de resíduos e maximiza a eficiência do seu negócio.",
      icon: <Brain className="h-20 w-20 text-purple-600 mx-auto mb-6" />,
      content: {
        type: "overview",
        data: {
          stats: [
            { label: "Eficiência Aumentada", value: "45%", color: "text-green-600" },
            { label: "Redução de Custos", value: "32%", color: "text-blue-600" },
            { label: "Tempo Economizado", value: "60%", color: "text-purple-600" }
          ]
        }
      }
    },
    {
      title: "Análise Preditiva em Tempo Real",
      description: "Nossa IA analisa padrões históricos e condições atuais para prever volumes de resíduos com 94% de precisão.",
      icon: <TrendingUp className="h-20 w-20 text-blue-600 mx-auto mb-6" />,
      content: {
        type: "chart",
        data: {
          title: "Previsão vs Realidade",
          values: [
            { month: "Jan", predicted: 120, actual: 118 },
            { month: "Fev", predicted: 135, actual: 132 },
            { month: "Mar", predicted: 142, actual: 145 },
            { month: "Abr", predicted: 158, actual: 155 },
            { month: "Mai", predicted: 164, actual: 162 }
          ]
        }
      }
    },
    {
      title: "Otimização Automática de Rotas",
      description: "Algoritmos de machine learning calculam as rotas mais eficientes, reduzindo combustível e tempo de coleta.",
      icon: <Zap className="h-20 w-20 text-yellow-600 mx-auto mb-6" />,
      content: {
        type: "optimization",
        data: {
          beforeAfter: [
            { metric: "Distância Percorrida", before: "280 km", after: "185 km", improvement: "34%" },
            { metric: "Tempo de Coleta", before: "8.5h", after: "5.2h", improvement: "39%" },
            { metric: "Consumo Combustível", before: "45L", after: "28L", improvement: "38%" }
          ]
        }
      }
    },
    {
      title: "Insights Inteligentes",
      description: "A IA identifica padrões ocultos e gera recomendações acionáveis para otimizar toda a cadeia circular.",
      icon: <Lightbulb className="h-20 w-20 text-green-600 mx-auto mb-6" />,
      content: {
        type: "insights",
        data: {
          insights: [
            {
              type: "Padrão Detectado",
              description: "Aumento de 25% em resíduos eletrônicos às terças-feiras",
              recommendation: "Implementar coleta especializada",
              confidence: 92
            },
            {
              type: "Oportunidade",
              description: "Alta demanda por plástico reciclado na região Norte",
              recommendation: "Expandir operações para essa região",
              confidence: 87
            },
            {
              type: "Anomalia",
              description: "Redução atípica de 40% em resíduos orgânicos",
              recommendation: "Verificar pontos de coleta afetados",
              confidence: 95
            }
          ]
        }
      }
    },
    {
      title: "Dashboard Executivo IA",
      description: "Monitore KPIs em tempo real com análises automatizadas e alertas inteligentes para tomada de decisão.",
      icon: <BarChart3 className="h-20 w-20 text-indigo-600 mx-auto mb-6" />,
      content: {
        type: "dashboard",
        data: {
          metrics: [
            { name: "Taxa de Reciclagem", value: 78, target: 80, trend: "+5.2%" },
            { name: "Eficiência Operacional", value: 85, target: 90, trend: "+12.3%" },
            { name: "Satisfação Clientes", value: 92, target: 95, trend: "+3.1%" },
            { name: "ROI Sustentabilidade", value: 156, target: 150, trend: "+8.7%" }
          ]
        }
      }
    },
    {
      title: "Resultados Comprovados",
      description: "Empresas que utilizam nossa IA obtêm resultados excepcionais na otimização da economia circular.",
      icon: <Target className="h-20 w-20 text-emerald-600 mx-auto mb-6" />,
      content: {
        type: "results",
        data: {
          cases: [
            { company: "Empresa A", sector: "Manufatura", improvement: "45% redução custos", time: "3 meses" },
            { company: "Empresa B", sector: "Varejo", improvement: "60% mais eficiência", time: "2 meses" },
            { company: "Empresa C", sector: "Construção", improvement: "38% menos desperdício", time: "4 meses" }
          ]
        }
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderSlideContent = (slide: typeof slides[0]) => {
    switch (slide.content.type) {
      case "overview":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {slide.content.data.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <p className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        );

      case "chart":
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-center">{slide.content.data.title}</h4>
            <div className="space-y-3">
              {slide.content.data.values.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{item.month}</span>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-blue-600">Previsto: {item.predicted}</span>
                    <span className="text-green-600">Real: {item.actual}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "optimization":
        return (
          <div className="space-y-4">
            {slide.content.data.beforeAfter.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-3">{item.metric}</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <p className="text-red-600 font-medium">Antes</p>
                    <p className="text-lg">{item.before}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-green-600 font-medium">Depois</p>
                    <p className="text-lg">{item.after}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-blue-600 font-medium">Melhoria</p>
                    <p className="text-lg font-bold">{item.improvement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "insights":
        return (
          <div className="space-y-4">
            {slide.content.data.insights.map((insight, index) => (
              <div key={index} className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r-lg">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{insight.type}</Badge>
                  <Badge className="bg-purple-100 text-purple-800">{insight.confidence}% confiança</Badge>
                </div>
                <p className="font-medium text-gray-900 mb-2">{insight.description}</p>
                <p className="text-sm text-gray-600">{insight.recommendation}</p>
              </div>
            ))}
          </div>
        );

      case "dashboard":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {slide.content.data.metrics.map((metric, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{metric.name}</h4>
                  <span className="text-sm text-green-600">{metric.trend}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <Progress value={metric.value} className="h-3" />
                  </div>
                  <span className="text-sm font-bold">{metric.value}%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Meta: {metric.target}%</p>
              </div>
            ))}
          </div>
        );

      case "results":
        return (
          <div className="space-y-4">
            {slide.content.data.cases.map((case_, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{case_.company}</h4>
                    <p className="text-sm text-gray-600">{case_.sector}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">{case_.time}</Badge>
                </div>
                <p className="text-lg font-medium text-green-700 mt-2">{case_.improvement}</p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                <Play className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Demonstração: IA para Economia Circular</h2>
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
                    index === currentSlide ? 'bg-purple-600' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <Badge className="ml-4 bg-purple-100 text-purple-800">
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
              {renderSlideContent(slides[currentSlide])}
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
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Implementar IA
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  onClick={nextSlide} 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Próximo
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </div>

          {/* Call to action */}
          {currentSlide === slides.length - 1 && (
            <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Pronto para revolucionar sua economia circular?
              </h3>
              <p className="text-gray-600 mb-4">
                Implemente nossa IA e obtenha resultados excepcionais em eficiência e sustentabilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Target className="h-4 w-4 mr-2" />
                  Implementar Agora
                </Button>
                <Button variant="outline">
                  <Brain className="h-4 w-4 mr-2" />
                  Falar com Especialista IA
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoOtimizacaoIA;
