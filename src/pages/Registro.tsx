
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import UserTypeSelector from '@/components/UserTypeSelector';
import EmpresaForm from '@/components/EmpresaForm';
import CatadorForm from '@/components/CatadorForm';
import ConsumidorForm from '@/components/ConsumidorForm';
import OrgaoPublicoForm from '@/components/OrgaoPublicoForm';
import OngForm from '@/components/OngForm';

const Registro = () => {
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);

  const handleUserTypeSelect = (userType: string) => {
    setSelectedUserType(userType);
  };

  const renderForm = () => {
    switch (selectedUserType) {
      case 'empresa':
        return <EmpresaForm />;
      case 'catador':
        return <CatadorForm />;
      case 'consumidor':
        return <ConsumidorForm />;
      case 'orgao-publico':
        return <OrgaoPublicoForm />;
      case 'ong':
        return <OngForm />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-4 py-2 text-sm font-medium mb-4">
              Módulo de Registro de Usuários
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cadastre-se na Plataforma de{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Economia Circular
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sistema inclusivo e acessível para conectar empresas, catadores, consumidores, 
              órgãos públicos e ONGs em práticas de economia circular.
            </p>
          </div>

          {!selectedUserType ? (
            <UserTypeSelector onSelectUserType={handleUserTypeSelect} />
          ) : (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Formulário de Cadastro</CardTitle>
                      <CardDescription>
                        Complete suas informações para participar da economia circular
                      </CardDescription>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedUserType(null)}
                      size="sm"
                    >
                      Trocar Tipo de Usuário
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {renderForm()}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registro;
