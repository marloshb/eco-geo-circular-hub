
import React, { useState } from 'react';
import { BarChart3, TrendingUp, Recycle, MapPin, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const DashboardExecutivo = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('mes');

  const kpis = [
    {
      title: 'Taxa de Reciclagem',
      value: '87.3%',
      change: '+5.2%',
      trend: 'up',
      target: '90%',
      progress: 87.3
    },
    {
      title: 'Redução de Emissões',
      value: '342 tCO2e',
      change: '+12.8%',
      trend: 'up',
      target: '400 tCO2e',
      progress: 85.5
    },
    {
      title: 'Economia de Custos',
      value: 'R$ 284.7K',
      change: '+8.4%',
      trend: 'up',
      target: 'R$ 350K',
      progress: 81.3
    },
    {
      title: 'Materiais Reutilizados',
      value: '45.2 ton',
      change: '+15.3%',
      trend: 'up',
      target: '50 ton',
      progress: 90.4
    }
  ];

  const fluxoResiduos = [
    { mes: 'Jan', gerados: 120, reciclados: 98, reutilizados: 15 },
    { mes: 'Fev', gerados: 135, reciclados: 110, reutilizados: 18 },
    { mes: 'Mar', gerados: 142, reciclados: 125, reutilizados: 22 },
    { mes: 'Abr', gerados: 128, reciclados: 115, reutilizados: 20 },
    { mes: 'Mai', gerados: 156, reciclados: 138, reutilizados: 25 },
    { mes: 'Jun', gerados: 148, reciclados: 132, reutilizados: 28 }
  ];

  const distribuicaoResiduos = [
    { nome: 'Plásticos', valor: 35, cor: '#3B82F6' },
    { nome: 'Papel/Papelão', valor: 28, cor: '#10B981' },
    { nome: 'Metais', valor: 18, cor: '#F59E0B' },
    { nome: 'Orgânicos', valor: 12, cor: '#8B5CF6' },
    { nome: 'Outros', valor: 7, cor: '#EF4444' }
  ];

  const alertas = [
    {
      id: 1,
      tipo: 'warning',
      titulo: 'Meta de Reciclagem',
      descricao: 'Faltam 2.7% para atingir a meta mensal de 90%',
      acao: 'Revisar processos'
    },
    {
      id: 2,
      tipo: 'success',
      titulo: 'Conformidade PNRS',
      descricao: 'Todos os relatórios estão em dia',
      acao: 'Manter padrão'
    },
    {
      id: 3,
      tipo: 'info',
      titulo: 'Nova Oportunidade',
      descricao: '3 novos compradores de resíduos plásticos na região',
      acao: 'Explorar marketplace'
    }
  ];

  const parceiros = [
    { nome: 'EcoRecycle SP', tipo: 'Recicladora', materiais: 'Plásticos, Metais', distancia: '12km' },
    { nome: 'Cooperativa Verde', tipo: 'Cooperativa', materiais: 'Papel, Orgânicos', distancia: '8km' },
    { nome: 'MetalRecycle Corp', tipo: 'Recicladora', materiais: 'Metais, Eletrônicos', distancia: '15km' }
  ];

  return (
    <div className="space-y-6">
      {/* Filtros de Período */}
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Executivo</h2>
        <div className="flex space-x-2">
          {['semana', 'mes', 'trimestre'].map((periodo) => (
            <Button
              key={periodo}
              variant={selectedPeriod === periodo ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod(periodo)}
              className="capitalize"
            >
              {periodo}
            </Button>
          ))}
        </div>
      </div>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{kpi.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-end space-x-2">
                  <span className="text-2xl font-bold text-gray-900">{kpi.value}</span>
                  <span className={`text-sm ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {kpi.change}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Meta: {kpi.target}</span>
                    <span>{kpi.progress.toFixed(1)}%</span>
                  </div>
                  <Progress value={kpi.progress} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fluxo de Resíduos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              <span>Fluxo de Resíduos (toneladas)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fluxoResiduos}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="gerados" fill="#94A3B8" name="Gerados" />
                <Bar dataKey="reciclados" fill="#10B981" name="Reciclados" />
                <Bar dataKey="reutilizados" fill="#3B82F6" name="Reutilizados" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Distribuição por Tipo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Recycle className="h-5 w-5 text-green-600" />
              <span>Distribuição por Tipo</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={distribuicaoResiduos}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="valor"
                >
                  {distribuicaoResiduos.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentual']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {distribuicaoResiduos.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.cor }}
                  ></div>
                  <span className="text-xs text-gray-600">{item.nome}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alertas e Notificações */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <span>Alertas e Oportunidades</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alertas.map((alerta) => (
                <div key={alerta.id} className="border rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    {alerta.tipo === 'warning' && <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />}
                    {alerta.tipo === 'success' && <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />}
                    {alerta.tipo === 'info' && <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />}
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{alerta.titulo}</h4>
                      <p className="text-sm text-gray-600 mt-1">{alerta.descricao}</p>
                      <Button size="sm" variant="outline" className="mt-2">
                        {alerta.acao}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Parceiros Próximos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-purple-600" />
              <span>Parceiros na Região</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {parceiros.map((parceiro, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{parceiro.nome}</h4>
                      <Badge variant="outline" className="mt-1">
                        {parceiro.tipo}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{parceiro.distancia}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{parceiro.materiais}</p>
                  <Button size="sm" variant="outline" className="mt-2 w-full">
                    Conectar
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardExecutivo;
