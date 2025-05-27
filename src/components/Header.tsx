
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Brain, Building2, Users, Recycle, MapPin, Award, GraduationCap, Truck, Shield, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">EC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                EcoGeoCircular
              </span>
              <span className="text-xs text-gray-500">Economia Circular Digital</span>
            </div>
          </Link>
          
          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {/* Portais */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors">
                    <Building2 className="h-4 w-4 mr-2" />
                    Portais
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px]">
                      <div className="grid grid-cols-2 gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/portal-empresas"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700"
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <Building2 className="h-4 w-4 text-green-600" />
                              <div className="text-sm font-medium">Portal Empresas</div>
                            </div>
                            <p className="line-clamp-2 text-sm text-muted-foreground">
                              Gestão corporativa de sustentabilidade
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/portal-catadores"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <Users className="h-4 w-4 text-blue-600" />
                              <div className="text-sm font-medium">Portal Catadores</div>
                            </div>
                            <p className="line-clamp-2 text-sm text-muted-foreground">
                              Inclusão social e cooperativas
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/portal-consumidores"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700"
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <Recycle className="h-4 w-4 text-green-600" />
                              <div className="text-sm font-medium">Portal Consumidores</div>
                            </div>
                            <p className="line-clamp-2 text-sm text-muted-foreground">
                              Educação e engajamento sustentável
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/portal-orgaos-publicos"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <Shield className="h-4 w-4 text-blue-600" />
                              <div className="text-sm font-medium">Portal Órgãos Públicos</div>
                            </div>
                            <p className="line-clamp-2 text-sm text-muted-foreground">
                              Monitoramento e políticas públicas
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Soluções */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    <Zap className="h-4 w-4 mr-2" />
                    Soluções
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px]">
                      <div className="grid grid-cols-2 gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/marketplace-residuos"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700"
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <Recycle className="h-4 w-4 text-green-600" />
                              <div className="text-sm font-medium">Marketplace</div>
                            </div>
                            <p className="line-clamp-2 text-sm text-muted-foreground">
                              Comercialização de resíduos
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/geotecnologias-avancadas"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <MapPin className="h-4 w-4 text-blue-600" />
                              <div className="text-sm font-medium">Geotecnologias</div>
                            </div>
                            <p className="line-clamp-2 text-sm text-muted-foreground">
                              Mapeamento e análise espacial
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/logistica-otimizada"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700"
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <Truck className="h-4 w-4 text-green-600" />
                              <div className="text-sm font-medium">Logística</div>
                            </div>
                            <p className="line-clamp-2 text-sm text-muted-foreground">
                              Otimização de rotas e coleta
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/sistema-incentivos"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <Award className="h-4 w-4 text-blue-600" />
                              <div className="text-sm font-medium">Incentivos</div>
                            </div>
                            <p className="line-clamp-2 text-sm text-muted-foreground">
                              Gamificação e recompensas
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Agente IA */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/agente-ia-transversal"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 text-sm font-medium transition-colors hover:from-purple-100 hover:to-pink-100 focus:from-purple-100 focus:to-pink-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      <Brain className="h-4 w-4 mr-2 text-purple-600" />
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                        Agente IA
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Educação */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/educacao-capacitacao"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Educação
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center space-x-3">
            <Button 
              size="sm"
              variant="outline"
              className="hidden sm:flex border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300"
            >
              Login
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
