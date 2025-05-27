
import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">EcoCircular Brasil</h1>
              <p className="text-xs text-green-600 font-medium">Plataforma Nacional de Economia Circular</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#funcionalidades" className="text-gray-700 hover:text-green-600 transition-colors">
              Funcionalidades
            </a>
            <a href="#usuarios" className="text-gray-700 hover:text-green-600 transition-colors">
              Usuários
            </a>
            <a href="#setores" className="text-gray-700 hover:text-green-600 transition-colors">
              Setores
            </a>
            <a href="#mapa" className="text-gray-700 hover:text-green-600 transition-colors">
              Mapa
            </a>
            <Link to="/gestao-vida-util" className="text-gray-700 hover:text-green-600 transition-colors">
              Ciclo de Vida
            </Link>
            <Link to="/portal-catadores" className="text-gray-700 hover:text-green-600 transition-colors">
              Portal Catadores
            </Link>
            <Link to="/monitoramento-conformidade" className="text-gray-700 hover:text-green-600 transition-colors">
              Conformidade
            </Link>
            <Link to="/registro">
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Cadastrar-se
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-green-100">
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="#funcionalidades" className="text-gray-700 hover:text-green-600 transition-colors">
                Funcionalidades
              </a>
              <a href="#usuarios" className="text-gray-700 hover:text-green-600 transition-colors">
                Usuários
              </a>
              <a href="#setores" className="text-gray-700 hover:text-green-600 transition-colors">
                Setores
              </a>
              <a href="#mapa" className="text-gray-700 hover:text-green-600 transition-colors">
                Mapa
              </a>
              <Link to="/gestao-vida-util" className="text-gray-700 hover:text-green-600 transition-colors">
                Ciclo de Vida
              </Link>
              <Link to="/portal-catadores" className="text-gray-700 hover:text-green-600 transition-colors">
                Portal Catadores
              </Link>
              <Link to="/monitoramento-conformidade" className="text-gray-700 hover:text-green-600 transition-colors">
                Conformidade
              </Link>
              <Link to="/registro">
                <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 w-full">
                  Cadastrar-se
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
