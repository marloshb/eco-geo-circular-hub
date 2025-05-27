
import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Clock, MapPin, Truck, Zap, Camera } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const MonitoramentoPublico = () => {
  const alertasTempoReal = [
    {
      id: 'ALT001',
      tipo: 'critico',
      titulo: 'Descarte Inadequado Detectado',
      localizacao: 'Zona Norte - São Paulo/SP',
      sensor: 'Satélite + IoT',
      timestamp: '2024-01-15 14:23',
      status: 'ativo',
      acao: 'Equipe de coleta direcionada'
    },
    {
      id: 'ALT002',
      tipo: 'aviso',
      titulo: 'Capacidade de Ponto de Coleta Excedida',
      localizacao: 'Centro - Rio de Janeiro/RJ',
      sensor: 'IoT Container',
      timestamp: '2024-01-15 13:45',
      status: 'resolvido',
      acao: 'Coleta programada realizada'
    },
    {
      id: 'ALT003',
      tipo: 'info',
      titulo: 'Nova Cooperativa Registrada',
      localizacao: 'Periferia - Brasília/DF',
      sensor: 'Sistema Central',
      timestamp: '2024-01-15 12:10',
      status: 'processando',
      acao: 'Validação em andamento'
    }
  ];

  const monitoramentoGPS = [
    {
      veiculo: 'Caminhão C-001',
      cooperativa: 'Coopervida São Paulo',
      rota: 'Zona Leste → Centro de Triagem',
      status: 'em-transito',
      capacidade: 78,
      eta: '15:30',
      emissoes: 2.4
    },
    {
      veiculo: 'Caminhão C-045',
      cooperativa: 'EcoRecicla Rio',
      rota: 'Copacabana → Usina de Reciclagem',
      status: 'carregando',
      capacidade: 45,
      eta: '16:15',
      emissoes: 1.8
    },
    {
      veiculo: 'Van V-023',
      cooperativa: 'Verde Vida Brasília',
      rota: 'Asa Norte → Ponto de Entrega',
      status: 'concluido',
      capacidade: 100,
      eta: 'Finalizado',
      emissoes: 0.9
    }
  ];

  const sensores = [
    { tipo: 'IoT Containers', ativos: 15643, offline: 234, eficiencia: 98.5 },
    { tipo: 'GPS Veículos', ativos: 2847, offline: 12, eficiencia: 99.6 },
    { tipo: 'Satélites', ativos: 12, offline: 0, eficiencia: 100 },
    { tipo: 'Câmeras IA', ativos: 8934, offline: 156, eficiencia: 98.3 }
  ];

  const analisesPreditivas = [
    {
      categoria: 'Geração de Resíduos',
      previsao: 'Aumento de 12% no próximo trimestre',
      confianca: 87,
      acao: 'Expandir pontos de coleta na Zona Sul'
    },
    {
      categoria: 'Demanda por Reciclados',
      previsao: 'Crescimento de 18% em plásticos PET',
      confianca: 92,
      acao: 'Incentivar separação específica de PET'
    },
    {
      categoria: 'Capacidade de Processamento',
      previsao: 'Déficit de 25% em 6 meses',
      confianca: 78,
      acao: 'Investir em novas usinas de triagem'
    }
  ];

  const getAlertaColor = (tipo: string) => {
    switch (tipo) {
      case 'critico': return 'border-red-500 bg-red-50';
      case 'aviso': return 'border-yellow-500 bg-yellow-50';
      case 'info': return 'border-blue-500 bg-blue-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo': return 'text-red-600';
      case 'resolvido': return 'text-green-600';
      case 'processando': return 'text-yellow-600';
      case 'em-transito': return 'text-blue-600';
      case 'carregando': return 'text-yellow-600';
      case 'concluido': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Alertas em Tempo Real */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
            <span>Alertas em Tempo Real</span>
          </CardTitle>
          <CardDescription>
            Monitoramento automático via IoT, GPS e sensoriamento remoto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alertasTempoReal.map((alerta, index) => (
              <div key={index} className={`p-4 border-l-4 ${getAlertaColor(alerta.tipo)} rounded-r-lg`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {alerta.id}
                      </Badge>
                      <Badge 
                        variant={alerta.tipo === 'critico' ? 'destructive' : 
                                alerta.tipo === 'aviso' ? 'secondary' : 'default'}
                      >
                        {alerta.tipo.toUpperCase()}
                      </Badge>
                      <span className={`text-sm font-medium ${getStatusColor(alerta.status)}`}>
                        {alerta.status.toUpperCase()}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{alerta.titulo}</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{alerta.localizacao}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4" />
                        <span>Sensor: {alerta.sensor}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{alerta.timestamp}</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-700 mt-2">
                      Ação: {alerta.acao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rastreamento GPS */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Truck className="h-6 w-6 text-blue-600" />
              <span>Rastreamento de Veículos</span>
            </CardTitle>
            <CardDescription>
              Monitoramento GPS de coletas em tempo real
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monitoramentoGPS.map((veiculo, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{veiculo.veiculo}</h4>
                      <p className="text-sm text-gray-600">{veiculo.cooperativa}</p>
                    </div>
                    <Badge variant="outline" className={getStatusColor(veiculo.status)}>
                      {veiculo.status.replace('-', ' ').toUpperCase()}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Rota:</span> {veiculo.rota}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Capacidade:</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={veiculo.capacidade} className="w-20 h-2" />
                        <span className="text-sm font-medium">{veiculo.capacidade}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>ETA: <strong>{veiculo.eta}</strong></span>
                      <span>CO₂: <strong>{veiculo.emissoes} kg</strong></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Status dos Sensores */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Camera className="h-6 w-6 text-green-600" />
              <span>Status dos Sensores</span>
            </CardTitle>
            <CardDescription>
              Eficiência da rede de monitoramento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sensores.map((sensor, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-900">{sensor.tipo}</h4>
                    <span className={`text-sm font-bold ${
                      sensor.eficiencia >= 99 ? 'text-green-600' :
                      sensor.eficiencia >= 95 ? 'text-blue-600' : 'text-yellow-600'
                    }`}>
                      {sensor.eficiencia}%
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Ativos: {sensor.ativos.toLocaleString()}</span>
                    <span>Offline: {sensor.offline}</span>
                  </div>
                  <Progress value={sensor.eficiencia} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Análises Preditivas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-purple-600" />
            <span>Análises Preditivas</span>
          </CardTitle>
          <CardDescription>
            Previsões baseadas em aprendizado de máquina e dados históricos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {analisesPreditivas.map((analise, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">{analise.categoria}</h4>
                <p className="text-sm text-gray-700 mb-3">{analise.previsao}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Confiança:</span>
                    <span className="font-medium">{analise.confianca}%</span>
                  </div>
                  <Progress value={analise.confianca} className="h-2" />
                  <div className="mt-3 p-2 bg-blue-50 rounded text-sm">
                    <span className="font-medium text-blue-800">Ação Recomendada:</span>
                    <p className="text-blue-700 mt-1">{analise.acao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mapa de Monitoramento */}
      <Card>
        <CardHeader>
          <CardTitle>Mapa de Monitoramento Territorial</CardTitle>
          <CardDescription>
            Visualização integrada de sensores, alertas e fluxos de resíduos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Sistema de Monitoramento Geoespacial
              </h3>
              <p className="text-gray-500 mb-4">
                Integração em tempo real de IoT, GPS, IA e sensoriamento remoto
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span>Alertas Ativos</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Veículos em Rota</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Sensores Ativos</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Análises Preditivas</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonitoramentoPublico;
