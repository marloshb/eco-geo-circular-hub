
import React, { useState } from 'react';
import { Award, Shield, Star, Download, Share, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CertificacoesSustentabilidade = () => {
  const [certificacaoSelecionada, setCertificacaoSelecionada] = useState('empresas');

  const certificacoesEmpresa = [
    {
      id: 1,
      nome: 'Selo Verde Brasil',
      nivel: 'Ouro',
      descricao: 'Certificação ENEC para economia circular',
      criterios: ['90% reciclagem', 'Logística reversa', 'Redução 50% CO₂'],
      validade: '2025-12-31',
      beneficios: ['Redução taxas', 'Marketing verde', 'Preferência licitações'],
      status: 'Conquistada'
    },
    {
      id: 2,
      nome: 'ISO 59000 Circular',
      nivel: 'Certificado',
      descricao: 'Norma internacional economia circular',
      criterios: ['Auditoria anual', 'Métricas KPI', 'Relatórios públicos'],
      validade: '2025-08-15',
      beneficios: ['Reconhecimento global', 'Acesso mercados', 'Credibilidade'],
      status: 'Em progresso'
    },
    {
      id: 3,
      nome: 'Carbono Neutro PNEC',
      nivel: 'Platina',
      descricao: 'Neutralidade de carbono certificada',
      criterios: ['Zero emissões líquidas', 'Compensação verificada', 'Monitoramento contínuo'],
      validade: '2026-01-20',
      beneficios: ['Créditos carbono', 'ESG compliance', 'Investidores sustentáveis'],
      status: 'Disponível'
    }
  ];

  const certificacoesCatador = [
    {
      id: 1,
      nome: 'Catador Certificado',
      nivel: 'Profissional',
      descricao: 'Reconhecimento oficial da contribuição',
      criterios: ['100 coletas', 'Curso capacitação', 'Avaliação prática'],
      validade: '2025-06-30',
      beneficios: ['Renda garantida', 'Prioridade coletas', 'Seguro trabalhista'],
      status: 'Conquistada'
    },
    {
      id: 2,
      nome: 'Especialista Reciclagem',
      nivel: 'Avançado',
      descricao: 'Expertise em triagem e classificação',
      criterios: ['Identificação 50 materiais', 'Qualidade 95%', 'Mentor novatos'],
      validade: '2025-09-15',
      beneficios: ['Bônus qualidade', 'Liderança equipe', 'Formação contínua'],
      status: 'Em progresso'
    },
    {
      id: 3,
      nome: 'Guardião Ambiental',
      nivel: 'Elite',
      descricao: 'Impacto ambiental excepcional',
      criterios: ['1 ton reciclada', '500kg CO₂ evitado', 'Educação comunidade'],
      validade: '2026-03-10',
      beneficios: ['Reconhecimento público', 'Prêmios especiais', 'Influência política'],
      status: 'Disponível'
    }
  ];

  const certificacoes = certificacaoSelecionada === 'empresas' ? certificacoesEmpresa : certificacoesCatador;

  const progressoCertificacao = {
    'Selo Verde Brasil': { atual: 85, meta: 90, metrica: '% reciclagem' },
    'ISO 59000 Circular': { atual: 7, meta: 12, metrica: 'meses auditoria' },
    'Catador Certificado': { atual: 89, meta: 100, metrica: 'coletas realizadas' },
    'Especialista Reciclagem': { atual: 42, meta: 50, metrica: 'materiais identificados' }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-6 w-6 text-orange-600" />
            <span>Certificações de Sustentabilidade</span>
          </CardTitle>
          <CardDescription>
            Reconhecimento oficial por contribuições à economia circular
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Selector de Tipo */}
            <div className="flex space-x-4">
              <Button
                variant={certificacaoSelecionada === 'empresas' ? 'default' : 'outline'}
                onClick={() => setCertificacaoSelecionada('empresas')}
                className="flex items-center space-x-2"
              >
                <Shield className="h-4 w-4" />
                <span>Empresas</span>
              </Button>
              <Button
                variant={certificacaoSelecionada === 'catadores' ? 'default' : 'outline'}
                onClick={() => setCertificacaoSelecionada('catadores')}
                className="flex items-center space-x-2"
              >
                <Star className="h-4 w-4" />
                <span>Catadores</span>
              </Button>
            </div>

            {/* Lista de Certificações */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {certificacoes.map((cert) => (
                <Card key={cert.id} className={`border-l-4 ${
                  cert.status === 'Conquistada' ? 'border-l-green-500' :
                  cert.status === 'Em progresso' ? 'border-l-blue-500' :
                  'border-l-gray-400'
                }`}>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">{cert.nome}</h4>
                          <p className="text-sm text-gray-600">{cert.descricao}</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant="outline"
                            className={
                              cert.status === 'Conquistada' ? 'text-green-600 border-green-600' :
                              cert.status === 'Em progresso' ? 'text-blue-600 border-blue-600' :
                              'text-gray-600 border-gray-600'
                            }
                          >
                            {cert.status}
                          </Badge>
                          <div className="text-xs text-gray-500 mt-1">
                            Nível {cert.nivel}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700">Critérios:</h5>
                          <ul className="text-xs text-gray-600 space-y-1 mt-1">
                            {cert.criterios.map((criterio, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                <span>{criterio}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-gray-700">Benefícios:</h5>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {cert.beneficios.map((beneficio, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {beneficio}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {cert.status === 'Conquistada' && (
                          <div className="flex space-x-2 pt-2">
                            <Button size="sm" variant="outline">
                              <Download className="h-3 w-3 mr-1" />
                              Baixar
                            </Button>
                            <Button size="sm" variant="outline">
                              <Share className="h-3 w-3 mr-1" />
                              Compartilhar
                            </Button>
                          </div>
                        )}

                        {cert.status === 'Em progresso' && progressoCertificacao[cert.nome] && (
                          <div className="pt-2">
                            <div className="flex justify-between text-xs text-gray-600 mb-1">
                              <span>Progresso</span>
                              <span>{progressoCertificacao[cert.nome].atual}/{progressoCertificacao[cert.nome].meta} {progressoCertificacao[cert.nome].metrica}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${(progressoCertificacao[cert.nome].atual / progressoCertificacao[cert.nome].meta) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}

                        {cert.status === 'Disponível' && (
                          <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700">
                            Iniciar Certificação
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Impacto das Certificações */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Impacto das Certificações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Certificações Ativas</span>
                <span className="font-bold text-green-600">4</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Benefícios Recebidos</span>
                <span className="font-bold text-blue-600">R$ 2.450</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Reconhecimento Público</span>
                <span className="font-bold text-purple-600">95%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Parcerias Geradas</span>
                <span className="font-bold text-orange-600">12</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Próximas Oportunidades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-orange-50 rounded-lg">
                <h4 className="font-medium text-orange-900">Carbono Neutro PNEC</h4>
                <p className="text-sm text-orange-700">Qualifique-se para neutralidade de carbono</p>
                <Badge className="bg-orange-600 text-xs mt-1">Disponível</Badge>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900">Guardião Ambiental</h4>
                <p className="text-sm text-blue-700">Reconhecimento por impacto excepcional</p>
                <Badge className="bg-blue-600 text-xs mt-1">Pré-requisitos: 70%</Badge>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900">Cooperativa Modelo</h4>
                <p className="text-sm text-green-700">Certificação para cooperativas exemplares</p>
                <Badge className="bg-green-600 text-xs mt-1">Em breve</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CertificacoesSustentabilidade;
