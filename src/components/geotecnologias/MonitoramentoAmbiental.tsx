
import React, { useState } from 'react';
import { Satellite, Leaf, AlertTriangle, Shield, Eye, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MonitoramentoAmbiental = () => {
  const [tipoMonitoramento, setTipoMonitoramento] = useState('descartes');

  const areasMonitoradas = [
    {
      id: 1,
      nome: 'Zona Industrial Norte - SP',
      tipo: 'Descarte Inadequado',
      status: 'Crítico',
      area: '2.5 km²',
      alteracao: '+15% última semana',
      coordenadas: '-23.5505, -46.6333',
      acao: 'Intervenção necessária'
    },
    {
      id: 2,
      nome: 'Área Rural - Ribeirão Preto',
      tipo: 'Compostagem',
      status: 'Saudável',
      area: '12.8 km²',
      alteracao: 'Crescimento 8%',
      coordenadas: '-21.1775, -47.8099',
      acao: 'Monitoramento contínuo'
    },
    {
      id: 3,
      nome: 'Região Metropolitana - RJ',
      tipo: 'Aterro Controlado',
      status: 'Atenção',
      area: '5.2 km²',
      alteracao: 'Estável',
      coordenadas: '-22.9068, -43.1729',
      acao: 'Análise detalhada'
    }
  ];

  const sensoresAmbientais = [
    { tipo: 'Qualidade do Ar', valor: '42 μg/m³', status: 'Bom', localizacao: 'Centro SP' },
    { tipo: 'Qualidade da Água', valor: '7.2 pH', status: 'Normal', localizacao: 'Rio Tietê' },
    { tipo: 'Ruído Urbano', valor: '68 dB', status: 'Aceitável', localizacao: 'Av. Paulista' },
    { tipo: 'Radiação Solar', valor: '850 W/m²', status: 'Alto', localizacao: 'Estação Central' }
  ];

  const projetosRegeneracao = [
    {
      nome: 'Reflorestamento Urbano',
      localizacao: 'Parque Ibirapuera - SP',
      area: '15 hectares',
      progresso: 78,
      co2Capturado: '2.3 ton',
      especies: 12,
      status: 'Em Progresso'
    },
    {
      nome: 'Restauração de Mangue',
      localizacao: 'Baixada Santista - SP',
      area: '45 hectares',
      progresso: 45,
      co2Capturado: '8.7 ton',
      especies: 28,
      status: 'Iniciado'
    },
    {
      nome: 'Compostagem Comunitária',
      localizacao: 'Vila Madalena - SP',
      area: '2 hectares',
      progresso: 92,
      co2Capturado: '1.1 ton',
      especies: 6,
      status: 'Quase Concluído'
    }
  ];

  const alertasAmbientais = [
    {
      tipo: 'Descarte Ilegal',
      severidade: 'Alta',
      localizacao: 'Zona Sul - SP',
      tempo: '2 horas atrás',
      descricao: 'Detecção de descarte de eletrônicos'
    },
    {
      tipo: 'Poluição Hídrica',
      severidade: 'Média',
      localizacao: 'Córrego Sacomã',
      tempo: '6 horas atrás',
      descricao: 'Alteração na qualidade da água'
    },
    {
      tipo: 'Queimada Irregular',
      severidade: 'Crítica',
      localizacao: 'Região Oeste - SP',
      tempo: '1 dia atrás',
      descricao: 'Foco de incêndio em área protegida'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Satellite className="h-6 w-6 text-blue-600" />
            <span>Monitoramento Ambiental por Satélite</span>
          </CardTitle>
          <CardDescription>
            Sensoriamento remoto para detecção de mudanças ambientais
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Áreas Monitoradas</h3>
            <div className="flex space-x-2">
              <select 
                value={tipoMonitoramento}
                onChange={(e) => setTipoMonitoramento(e.target.value)}
                className="text-sm border rounded-md px-2 py-1"
              >
                <option value="descartes">Descartes Inadequados</option>
                <option value="regeneracao">Projetos de Regeneração</option>
                <option value="uso-solo">Mudanças no Solo</option>
                <option value="qualidade">Qualidade Ambiental</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {areasMonitoradas.map((area) => (
              <Card key={area.id} className={`${
                area.status === 'Crítico' ? 'border-red-200' :
                area.status === 'Atenção' ? 'border-orange-200' :
                'border-green-200'
              }`}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm">{area.nome}</h4>
                      <Badge 
                        variant="outline"
                        className={
                          area.status === 'Crítico' ? 'text-red-600 border-red-600' :
                          area.status === 'Atenção' ? 'text-orange-600 border-orange-600' :
                          'text-green-600 border-green-600'
                        }
                      >
                        {area.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Tipo:</span>
                        <p className="font-medium">{area.tipo}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-gray-600">Área:</span>
                          <p className="font-medium">{area.area}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Alteração:</span>
                          <p className={`font-medium ${
                            area.alteracao.includes('+') ? 'text-red-600' : 
                            area.alteracao.includes('Crescimento') ? 'text-green-600' :
                            'text-blue-600'
                          }`}>
                            {area.alteracao}
                          </p>
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-600">Coordenadas:</span>
                        <p className="font-mono text-xs">{area.coordenadas}</p>
                      </div>
                    </div>
                    
                    <div className={`rounded-lg p-3 ${
                      area.status === 'Crítico' ? 'bg-red-50' :
                      area.status === 'Atenção' ? 'bg-orange-50' :
                      'bg-green-50'
                    }`}>
                      <p className={`text-xs font-medium ${
                        area.status === 'Crítico' ? 'text-red-900' :
                        area.status === 'Atenção' ? 'text-orange-900' :
                        'text-green-900'
                      }`}>
                        {area.acao}
                      </p>
                    </div>
                    
                    <Button 
                      className={`w-full ${
                        area.status === 'Crítico' ? 'bg-red-600 hover:bg-red-700' :
                        area.status === 'Atenção' ? 'bg-orange-600 hover:bg-orange-700' :
                        'bg-green-600 hover:bg-green-700'
                      }`}
                      size="sm"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sensores Ambientais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-green-600" />
            <span>Sensores Ambientais em Tempo Real</span>
          </CardTitle>
          <CardDescription>
            Monitoramento contínuo da qualidade ambiental
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sensoresAmbientais.map((sensor, index) => (
              <Card key={index} className="border-green-200">
                <CardContent className="p-4 text-center">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm">{sensor.tipo}</h4>
                      <p className="text-xs text-gray-600">{sensor.localizacao}</p>
                    </div>
                    
                    <div>
                      <p className="text-2xl font-bold text-green-600">{sensor.valor}</p>
                      <Badge 
                        variant="outline"
                        className={
                          sensor.status === 'Bom' || sensor.status === 'Normal' ? 'text-green-600 border-green-600' :
                          sensor.status === 'Aceitável' ? 'text-orange-600 border-orange-600' :
                          'text-blue-600 border-blue-600'
                        }
                      >
                        {sensor.status}
                      </Badge>
                    </div>
                    
                    <div className={`p-2 rounded-lg ${
                      sensor.status === 'Bom' || sensor.status === 'Normal' ? 'bg-green-50' :
                      sensor.status === 'Aceitável' ? 'bg-orange-50' :
                      'bg-blue-50'
                    }`}>
                      <p className="text-xs">Última atualização: Agora</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Projetos de Regeneração */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span>Projetos de Regeneração Ambiental</span>
          </CardTitle>
          <CardDescription>
            Monitoramento de iniciativas de restauração e sustentabilidade
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projetosRegeneracao.map((projeto, index) => (
              <Card key={index} className="border-green-200">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{projeto.nome}</h4>
                      <Badge 
                        variant="outline"
                        className={
                          projeto.status === 'Quase Concluído' ? 'text-green-600 border-green-600' :
                          projeto.status === 'Em Progresso' ? 'text-blue-600 border-blue-600' :
                          'text-orange-600 border-orange-600'
                        }
                      >
                        {projeto.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Localização:</span>
                        <p className="font-medium">{projeto.localizacao}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Área:</span>
                        <p className="font-medium">{projeto.area}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progresso</span>
                        <span>{projeto.progresso}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${projeto.progresso}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-center p-2 bg-green-50 rounded">
                        <p className="font-bold text-green-600">{projeto.co2Capturado}</p>
                        <p className="text-green-700">CO₂ Capturado</p>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <p className="font-bold text-blue-600">{projeto.especies}</p>
                        <p className="text-blue-700">Espécies</p>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
                      <Leaf className="h-3 w-3 mr-1" />
                      Monitorar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alertas Ambientais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <span>Alertas Ambientais</span>
          </CardTitle>
          <CardDescription>
            Notificações em tempo real sobre eventos ambientais
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alertasAmbientais.map((alerta, index) => (
              <Card key={index} className={`${
                alerta.severidade === 'Crítica' ? 'border-red-200 bg-red-50' :
                alerta.severidade === 'Alta' ? 'border-orange-200 bg-orange-50' :
                'border-yellow-200 bg-yellow-50'
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className={`h-6 w-6 ${
                        alerta.severidade === 'Crítica' ? 'text-red-600' :
                        alerta.severidade === 'Alta' ? 'text-orange-600' :
                        'text-yellow-600'
                      }`} />
                      <div>
                        <h4 className="font-semibold">{alerta.tipo}</h4>
                        <p className="text-sm text-gray-600">{alerta.descricao}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Badge 
                        variant="outline"
                        className={
                          alerta.severidade === 'Crítica' ? 'text-red-600 border-red-600' :
                          alerta.severidade === 'Alta' ? 'text-orange-600 border-orange-600' :
                          'text-yellow-600 border-yellow-600'
                        }
                      >
                        {alerta.severidade}
                      </Badge>
                      <p className="text-xs text-gray-500 mt-1">{alerta.tempo}</p>
                      <p className="text-xs font-medium">{alerta.localizacao}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Métricas de Monitoramento */}
      <Card>
        <CardHeader>
          <CardTitle>Métricas de Monitoramento Ambiental</CardTitle>
          <CardDescription>
            Estatísticas gerais do sistema de monitoramento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Satellite className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">847</p>
              <p className="text-sm text-blue-700">Áreas Monitoradas</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">156</p>
              <p className="text-sm text-green-700">Sensores Ativos</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Leaf className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">23</p>
              <p className="text-sm text-purple-700">Projetos Regeneração</p>
            </div>
            
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-red-600">12</p>
              <p className="text-sm text-red-700">Alertas Ativos</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonitoramentoAmbiental;
