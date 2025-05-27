
import React from 'react';
import { Leaf, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerLinks = {
    plataforma: [
      'Funcionalidades',
      'Setores Atendidos',
      'Geotecnologias',
      'Marketplace',
      'API Developers'
    ],
    usuarios: [
      'Catadores',
      'Empresas',
      'Consumidores',
      'Órgãos Públicos',
      'Cooperativas'
    ],
    recursos: [
      'Central de Ajuda',
      'Treinamentos',
      'Webinars',
      'Blog',
      'Downloads'
    ],
    legal: [
      'Política de Privacidade',
      'Termos de Uso',
      'LGPD',
      'Compliance',
      'Acessibilidade'
    ]
  };

  const policies = [
    { name: 'PNEC', description: 'Política Nacional de Economia Circular' },
    { name: 'ENEC', description: 'Estratégia Nacional de Economia Circular' },
    { name: 'PNRS', description: 'Política Nacional de Resíduos Sólidos' },
    { name: 'ISO 59000', description: 'Normas de Economia Circular' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">EcoCircular Brasil</h3>
                <p className="text-sm text-gray-400">Plataforma Nacional de Economia Circular</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Conectando o Brasil através de geotecnologias para promover sustentabilidade, 
              inclusão social e conformidade com as políticas nacionais de economia circular.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contato@ecocircularbrasil.gov.br</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Brasília, DF - Brasil</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Plataforma</h4>
            <ul className="space-y-2">
              {footerLinks.plataforma.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Usuários</h4>
            <ul className="space-y-2">
              {footerLinks.usuarios.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Policies Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="font-semibold text-lg mb-6 text-center">Conformidade Regulatória</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {policies.map((policy, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors">
                <h5 className="font-semibold text-green-400 mb-1">{policy.name}</h5>
                <p className="text-xs text-gray-300">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold text-lg mb-4">Fique Atualizado</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Receba novidades sobre economia circular e atualizações da plataforma.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 EcoCircular Brasil. Todos os direitos reservados. Plataforma oficial do Governo Federal.
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center space-x-1">
                <span className="text-sm">Portal do Governo</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center space-x-1">
                <span className="text-sm">Dados Abertos</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
