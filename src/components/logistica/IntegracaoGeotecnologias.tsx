
import React, { useState } from 'react';
import { MapPin, Satellite, Wifi, Layers, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const IntegracaoGeotecnologias = () => {
  const [camadaAtiva, setCamadaAtiva] = useState('gis');

  const tecnologias = [
    {
      id: 'gis',
      nome: 'GIS - Sistemas de Informação Geográfica',
      descricao: 'Mapeamento e análise espacial avançada',
      aplicacoes: ['Análise de densidade', 'Planejamento de rotas', 'Zonas prioritárias'],
      metricas: { cobertura: '98%', precisao: '95%', atualizacao: 'Tempo real' }
    },
    {
      id: 'gps',
      nome: 'GPS - Sistema de Posicionamento Global',
      descricao: 'Rastreamento e navegação precisa',
      aplicacoes: ['Localização veicular', 'Navegação otimizada', 'Geofencing'],
      metricas: { cobertura: '100%', precisao: '3m', atualizacao: '1 segundo' }
    },
    {
      id: 'iot',
      nome: 'IoT - Internet das Coisas',
      descricao: 'Sensores inteligentes distribuídos',
      aplicacoes: ['Lixeiras inteligentes', 'Qualidade dos resíduos', 'Manutenção preditiva'],
      metricas: { cobertura: '85%', precisao: '92%', atualizacao: '5 minutos' }
    },
    {
      id: 'satelite',
      nome: 'Sensoriamento Remoto',
      descricao: 'Monitoramento via satélite',
      aplicacoes: ['Áreas de descarte', 'Monitoramento ambiental', 'Mudanças territoriais'],
      metricas: { cobertura: '100%', precisao: '10m', atualizacao: 'Diário' }
    }
  ];

  const camadas = [
    {
      id: 'densidade',
      nome: 'Densidade de Resíduos',
      cor: 'bg-red-500',
      pontos: '12.5K',
      descricao: 'Concentração de geração de resíduos'
    },
    {
      id: 'coleta',
      nome: 'Pontos de Coleta',
      cor: 'bg-green-500',
      pontos: '3.2K',
      descricao: 'Locais de coleta e reciclagem'
    },
    {
      id: 'rotas',
      nome: 'Rotas Otimizadas',
      cor: 'bg-blue-500',
      pontos: '847',
      descricao: 'Trajetos calculados por IA'
    },
    {
      id: 'sensores',
      nome: 'Sensores IoT',
      cor: 'bg-purple-500',
      pontos: '4.1K',
      descricao: 'Dispositivos de monitoramento'
    }
  ];

  const analises = [
    {
      tipo: 'Análise de Proximidade',
      descricao: 'Identificação de recursos próximos para otimização',
      resultado: 'Redução de 25% na distância média',
      impacto: 'Alto'
    },
    {
      tipo: 'Análise de Buffer',
      descricao: 'Zonas de influência para planejamento',
      resultado: 'Cobertura otimizada em 95% da área',
      impacto: 'Alto'
    },
    {
      tipo: 'Análise de Densidade Kernel',
      descricao: 'Concentração de atividades por região',
      resultado: 'Identificação de 12 hotspots críticos',
      impacto: 'Médio'
    },
    {
      tipo: 'Análise de Conectividade',
      descricao: 'Conexões entre pontos da rede',
      resultado: 'Melhoria de 30% na conectividade',
      impacto: 'Alto'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-indigo-600" />
            <span>Integração com Geotecnologias</span>
          </CardTitle>
          <CardDescription>
            Tecnologias espaciais avançadas para logística inteligente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Tecnologias Disponíveis */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Tecnologias Integradas</h3>
              {tecnologias.map((tech) => (
                <Card 
                  key={tech.id}
                  className={`cursor-pointer transition-all ${
                    camadaAtiva === tech.id ? 'ring-2 ring-indigo-500' : ''
                  }`}
                  onClick={() => setCamadaAtiva(tech.id)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 bg-indigo-100 rounded-lg">
                          {tech.id === 'gis' && <Layers className="h-4 w-4 text-indigo-600" />}
                          {tech.id === 'gps' && <MapPin className="h-4 w-4 text-indigo-600" />}
                          {tech.id === 'iot' && <Wifi className="h-4 w-4 text-indigo-600" />}
                          {tech.id === 'satelite' && <Satellite className="h-4 w-4 text-indigo-600" />}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{tech.nome}</h4>
                          <p className="text-xs text-gray-600">{tech.descricao}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-1">
                          {tech.aplicacoes.map((app, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <span className="text-gray-600">Cobertura:</span>
                            <p className="font-medium">{tech.metricas.cobertura}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Precisão:</span>
                            <p className="font-medium">{tech.metricas.precisao}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Atualização:</span>
                            <p className="font-medium">{tech.metricas.atualizacao}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Visualização de Camadas */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Camadas Geográficas</h3>
              <Card>
                <CardContent className="p-4">
                  <div className="h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center relative">
                    <Layers className="h-16 w-16 text-gray-400" />
                    <div className="absolute top-4 left-4 text-sm">
                      <Badge className="bg-indigo-600">
                        {tecnologias.find(t => t.id === camadaAtiva)?.nome.split(' - ')[0]}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-600">
                      Visualização geoespacial interativa
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    <h4 className="font-medium">Camadas Ativas:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {camadas.map((camada) => (
                        <div key={camada.id} className="flex items-center space-x-2 text-xs">
                          <div className={`w-3 h-3 rounded-full ${camada.cor}`}></div>
                          <span className="flex-1">{camada.nome}</span>
                          <Badge variant="outline" className="text-xs">
                            {camada.pontos}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Análises Espaciais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-yellow-600" />
            <span>Análises Espaciais Avançadas</span>
          </CardTitle>
          <CardDescription>
            Algoritmos geoespaciais para otimização inteligente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analises.map((analise, index) => (
              <Card key={index} className="border-yellow-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{analise.tipo}</h4>
                      <Badge 
                        variant="outline"
                        className={
                          analise.impacto === 'Alto' ? 'text-green-600 border-green-600' :
                          'text-orange-600 border-orange-600'
                        }
                      >
                        {analise.impacto}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600">{analise.descricao}</p>
                    
                    <div className="bg-yellow-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-yellow-900">
                        Resultado: {analise.resultado}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Benefícios e Métricas */}
      <Card>
        <CardHeader>
          <CardTitle>Benefícios Quantificáveis</CardTitle>
          <CardDescription>
            Impacto das geotecnologias na eficiência operacional
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">25%</p>
              <p className="text-sm text-green-700">Redução Distância</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">30%</p>
              <p className="text-sm text-blue-700">Economia Combustível</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Layers className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">95%</p>
              <p className="text-sm text-purple-700">Precisão Localização</p>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Wifi className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-orange-600">4.1K</p>
              <p className="text-sm text-orange-700">Sensores Ativos</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntegracaoGeotecnologias;
