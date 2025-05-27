
import React, { useState } from 'react';
import { Map, Users, Package, TrendingUp, Recycle, MapPin, Truck, GraduationCap, Shield, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import UserTypesSection from '@/components/UserTypesSection';
import MapSection from '@/components/MapSection';
import SectorsSection from '@/components/SectorsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <UserTypesSection />
      <MapSection />
      <SectorsSection />
      <Footer />
    </div>
  );
};

export default Index;
