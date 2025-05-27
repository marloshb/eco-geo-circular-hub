
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">EC</span>
            </div>
            <span className="text-xl font-bold text-gray-900">EcoGeoCircular</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/registro" className="text-gray-700 hover:text-green-600 transition-colors">
              Registro
            </Link>
            <Link to="/gestao-vida-util" className="text-gray-700 hover:text-green-600 transition-colors">
              Ciclo de Vida
            </Link>
            <Link to="/portal-catadores" className="text-gray-700 hover:text-green-600 transition-colors">
              Portal Catadores
            </Link>
            <Link to="/monitoramento-conformidade" className="text-gray-700 hover:text-green-600 transition-colors">
              Conformidade
            </Link>
            <Link to="/marketplace-residuos" className="text-gray-700 hover:text-green-600 transition-colors">
              Marketplace
            </Link>
            <Link to="/logistica-otimizada" className="text-gray-700 hover:text-green-600 transition-colors">
              Logística
            </Link>
            <Link to="/sistema-incentivos" className="text-gray-700 hover:text-green-600 transition-colors">
              Incentivos
            </Link>
            <Link to="/geotecnologias-avancadas" className="text-gray-700 hover:text-green-600 transition-colors">
              Geotecnologias
            </Link>
            <Link to="/educacao-capacitacao" className="text-gray-700 hover:text-green-600 transition-colors">
              Educação
            </Link>
          </nav>
          
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Começar Agora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
