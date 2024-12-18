"use client"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Inter } from 'next/font/google'
import { Check, BarChart3, Users, Bot, LayoutGrid, FileText, CheckCircle2, Instagram, MessageSquare, Mail, Database, Share2, ChevronLeft, ChevronRight, Search, Star, Calendar, ArrowRight, Zap, Target, Cog, BarChart, PieChart, ArrowUpRight, DollarSign, Clock, TrendingUp, XCircle, Building2, CheckCircle } from 'lucide-react'
import MobileMenu from '@/components/mobile-menu'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [currentCase, setCurrentCase] = useState(0);
  const cases = [
    {
      title: "Clínica Dental Sonrisas",
      name: "Dr. María González",
      role: "Directora de Clínica Dental Sonrisas",
      description: "Aumentamos las consultas en un 150% en 3 meses mediante campañas de Facebook Ads y Google Ads optimizadas.",
      result: "150% más consultas",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80"
    },
    {
      title: "Centro de Fisioterapia Movimiento",
      name: "Carlos Rodríguez",
      role: "Director de Centro de Fisioterapia Movimiento",
      description: "Implementamos un sistema de seguimiento automatizado que redujo las cancelaciones de citas en un 40%.",
      result: "40% menos cancelaciones",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80"
    },
    {
      title: "Consultorio Psicológico Mente Sana",
      name: "Dra. Ana Martínez",
      role: "Fundadora de Mente Sana",
      description: "Creamos una estrategia de contenido en redes sociales que aumentó el engagement en un 200% y las consultas en un 75%.",
      result: "75% más consultas",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80"
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCase();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>IVEDI - Agencia de Marketing para Profesionales de la Salud</title>
        <meta name="description" content="Transforma tu práctica médica con soluciones de marketing digital inteligentes y automatizadas. Atrae y retén más pacientes con IVEDI." />
      </Head>
      <div className={`min-h-screen bg-gradient-to-b from-pink-50 to-white `}>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold">IVEDI</span>
              </div>
              <div className="hidden md:flex ml-10">
                <div className="flex space-x-4">
                  {["Blog", "Casos de Estudio", "Cómo Funciona", "Sobre Nosotros"].map((item) => (
                    <Link key={item} href="#" className="text-white hover:text-pink-200 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Button className="bg-white text-pink-600 hover:bg-pink-100 text-sm font-medium px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Contacto
              </Button>
            </div>
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <main className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0 relative z-10">
              <div className="text-sm font-medium text-pink-600 mb-4 bg-pink-100 inline-block px-3 py-1 rounded-full">
                MARKETING MÉDICO IMPULSADO POR IA
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6 leading-tight">
                Revoluciona tu <span className="text-pink-600">Práctica Médica</span> con Marketing Inteligente
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Transforma la manera en que atraes y retienes pacientes. Nuestras soluciones de marketing automatizadas e impulsadas por IA están diseñadas específicamente para profesionales de la salud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-pink-600 text-white hover:bg-pink-700 text-base font-semibold px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                  Solicitar Demo Gratuita
                </Button>
                <Button variant="outline" className="bg-white text-pink-600 hover:bg-pink-50 border-pink-600 text-base font-semibold px-6 py-3 rounded-full transition duration-300 ease-in-out">
                  Ver Casos de Éxito
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3479.jpg-SivGZbj9xCTyNsIJ7G19NMhxxyYnjb.jpeg"
                  alt="Profesional de la salud sonriente en su consultorio"
                  className="rounded-2xl object-cover w-full h-full shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-2xl font-bold text-pink-600">+150%</p>
                  <p className="text-sm text-gray-600">Aumento en consultas</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-2xl font-bold text-pink-600">-40%</p>
                  <p className="text-sm text-gray-600">Reducción en cancelaciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </main>

      {/* How it Works Section - Improved */}
      <section className="py-24 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-pink-600 mb-4 uppercase tracking-wider">
              Proceso
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Así es como funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro enfoque sistemático garantiza resultados excepcionales para tu práctica médica
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-pink-200"></div>

            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Análisis y Estrategia",
                description: "Evaluamos tu presencia digital actual y desarrollamos una estrategia personalizada para alcanzar tus objetivos específicos.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: <Cog className="w-8 h-8" />,
                title: "Implementación",
                description: "Ponemos en marcha campañas optimizadas, automatizamos procesos y creamos contenido atractivo para tu audiencia.",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: <BarChart className="w-8 h-8" />,
                title: "Monitoreo y Optimización",
                description: "Seguimos de cerca el rendimiento de las campañas y realizamos ajustes continuos para maximizar los resultados.",
                color: "bg-yellow-100 text-yellow-600"
              },
              {
                icon: <PieChart className="w-8 h-8" />,
                title: "Análisis de Resultados",
                description: "Proporcionamos informes detallados y transparentes sobre el desempeño y las conversiones generadas.",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: <ArrowUpRight className="w-8 h-8" />,
                title: "Escalamiento",
                description: "Basándonos en los datos y el éxito obtenido, escalamos las estrategias más efectivas para un crecimiento continuo.",
                color: "bg-pink-100 text-pink-600"
              }
            ].map((step, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`absolute left-1/2 transform -translate-x-1/2 ${step.color} rounded-full p-2 z-10`}>
                  {step.icon}
                </div>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-pink-600 mb-4 uppercase tracking-wider">
              Servicios
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Soluciones Integrales para tu Práctica Médica
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Potencia tu presencia digital y atrae más pacientes con nuestros servicios especializados para profesionales de la salud.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: <BarChart3 className="h-12 w-12" />,
                title: "Campañas de FB y Google Ads",
                description: "Estrategias de publicidad digital optimizadas para atraer pacientes potenciales y aumentar la visibilidad de tu práctica médica.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: <Bot className="h-12 w-12" />,
                title: "Asistente Virtual con IA",
                description: "Implementación de chatbots inteligentes para atención al cliente 24/7, programación de citas y respuesta a preguntas frecuentes.",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: <MessageSquare className="h-12 w-12" />,
                title: "Seguimiento Automatizado",
                description: "Sistemas automatizados para mantener el contacto con pacientes, recordatorios de citas y seguimiento post-consulta por Email y WhatsApp.",
                color: "bg-yellow-100 text-yellow-600"
              },
              {
                icon: <Search className="h-12 w-12" />,
                title: "Optimización SEO",
                description: "Mejoramos el posicionamiento de tu sitio web en los motores de búsqueda para aumentar la visibilidad y atraer más pacientes potenciales.",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: <Database className="h-12 w-12" />,
                title: "CRM Personalizado",
                description: "Seguimiento detallado de leads y pacientes en un CRM personalizado para profesionales de la salud, integrado con ClickUp.",
                color: "bg-red-100 text-red-600"
              },
              {
                icon: <Share2 className="h-12 w-12" />,
                title: "Gestión de Redes Sociales",
                description: "Desarrollo y gestión de contenido atractivo y educativo para aumentar el engagement y la confianza de los pacientes en tus redes sociales.",
                color: "bg-indigo-100 text-indigo-600"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="p-8">
                  <div className={`${service.color} inline-block p-3 rounded-full mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <a href="#" className="text-pink-600 font-semibold flex items-center hover:text-pink-700 transition-colors duration-300">
                    Saber más <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-24 bg-gradient-to-b from-pink-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-pink-600 mb-4 uppercase tracking-wider">
              Testimonios
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
              #1 en Marketing Médico
            </h2>
          </div>

          <div className="relative">
            <div className="flex transition-transform ease-in-out duration-500" 
                 style={{ transform: `translateX(-${currentCase * 100}%)` }}>
              {cases.map((caseStudy, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-3xl mx-auto transform transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-col items-center text-center mb-6">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.name}
                        className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-pink-100"
                      />
                      <h3 className="text-xl font-bold text-gray-900">{caseStudy.name}</h3>
                      <p className="text-gray-600">{caseStudy.role}</p>
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-6">
                      "{caseStudy.description}"
                    </blockquote>

                    <div className="flex justify-center items-center space-x-1 mb-6">
                      {[...Array(caseStudy.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-pink-500 text-pink-500" />
                      ))}
                    </div>

                    <div className="text-center">
                      <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-semibold">
                        {caseStudy.result}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevCase}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 hover:bg-white text-pink-600 p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
              aria-label="Caso anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextCase}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 hover:bg-white text-pink-600 p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
              aria-label="Siguiente caso"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCase(index)}
                className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
                  currentCase === index 
                    ? 'bg-pink-600 w-8' 
                    : 'bg-pink-200 hover:bg-pink-300'
                }`}
                aria-label={`Ir al caso ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-pink-600 mb-4">
              COMPARACIÓN
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              ¿Por qué elegir IVEDI?
            </h2>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-pink-300 transform skew-y-3"></div>
            <div className="relative z-10 grid gap-8 md:grid-cols-3">
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
                  <Users className="w-8 h-8 mr-3 text-gray-500" />
                  INTERNO
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="bg-gray-200 rounded-full p-1 mr-3">
                      <DollarSign className="w-4 h-4 text-gray-600" />
                    </span>
                    <span>Salario fijo alto</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gray-200 rounded-full p-1 mr-3">
                      <Clock className="w-4 h-4 text-gray-600" />
                    </span>
                    <span>Contratación: Semanas/meses</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gray-200 rounded-full p-1 mr-3">
                      <TrendingUp className="w-4 h-4 text-gray-600" />
                    </span>
                    <span>Nivel de habilidad variable</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gray-200 rounded-full p-1 mr-3">
                      <Calendar className="w-4 h-4 text-gray-600" />
                    </span>
                    <span>Primera entrega: Varias semanas</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gray-200 rounded-full p-1 mr-3">
                      <XCircle className="w-4 h-4 text-gray-600" />
                    </span>
                    <span>Terminación: Indemnización</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center">
                  <Building2 className="w-8 h-8 mr-3 text-gray-500" />
                  OTRAS AGENCIAS
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="bg-gray-200 rounded-full p-1 mr-3">
                      <DollarSign className="w-4 h-4 text-gray-600" />
                    </span>
                    <span>Tarifa mensual fija</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gray-200 rounded-full p-1 mr-3">
                      <Clock className="w-4 h-4 text-gray-600" />
                    </span>
                    <span>Contratación: Semanas</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gray-200 rounded-full p-1 mr-3">
                      <TrendingUp className="w-4 h-4 text-gray-600" />
                    </span>
                    <span>Calidad inconsistente</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gray-200 rounded-full p-1 mr-3">
                      <Calendar className="w-4 h-4 text-gray-600" />
                    </span>
                    <span>Primera entrega: Varias semanas</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gray-200 rounded-full p-1 mr-3">
                      <XCircle className="w-4 h-4 text-gray-600" />
                    </span>
                    <span>Terminación: Significativa</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg shadow-lg p-8 text-white transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Zap className="w-8 h-8 mr-3" />
                  IVEDI
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="bg-pink-400 rounded-full p-1 mr-3">
                      <DollarSign className="w-4 h-4" />
                    </span>
                    <span>Pago por resultados</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-pink-400 rounded-full p-1 mr-3">
                      <Clock className="w-4 h-4" />
                    </span>
                    <span>Inicio: ¡En horas!</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-pink-400 rounded-full p-1 mr-3">
                      <TrendingUp className="w-4 h-4" />
                    </span>
                    <span>Expertos en marketing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-pink-400 rounded-full p-1 mr-3">
                      <Calendar className="w-4 h-4" />
                    </span>
                    <span>Primera entrega: 2-3 días</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-pink-400 rounded-full p-1 mr-3">
                      <CheckCircle className="w-4 h-4" />
                    </span>
                    <span>Terminación: Sin compromiso</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-pink-600 mb-4 uppercase tracking-wider">
              Preguntas Frecuentes
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Resolvemos tus dudas</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-pink-200 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-pink-600 px-4 py-2">
                ¿Cómo funciona el modelo de pago por resultados?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-4 py-2">
                Nuestro modelo se basa en comisiones por conversiones reales. Solo pagas cuando generamos resultados medibles para tu negocio, como nuevas consultas o pacientes. No hay costos iniciales ni tarifas mensuales fijas, lo que significa que nuestro éxito está directamente ligado al tuyo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-pink-200 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-pink-600 px-4 py-2">
                ¿Cuánto tiempo toma ver resultados?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-4 py-2">
                Aunque cada caso es único, generalmente nuestros clientes comienzan a ver resultados en las primeras 2-4 semanas. Implementamos estrategias rápidas y efectivas, con una primera entrega en 2-3 días, lo que nos permite comenzar a generar resultados de manera ágil.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-pink-200 rounded-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-pink-600 px-4 py-2">
                ¿Qué pasa si no estoy satisfecho con el servicio?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-4 py-2">
                Tu satisfacción es nuestra prioridad. Si no estás completamente satisfecho, trabajaremos contigo para ajustar y mejorar nuestras estrategias sin costo adicional. Además, puedes cancelar el servicio en cualquier momento sin penalizaciones, ya que no hay contratos a largo plazo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Impulsa tu Práctica Médica Hoy
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Descubre cómo podemos ayudarte a crecer con nuestro modelo basado en resultados. Agenda una consulta gratuita y personalizada.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-4 text-lg rounded-full transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
                Reservar Llamada Gratuita
              </Button>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Calendar className="h-5 w-5" />
                <span>Disponibilidad inmediata</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Sin compromiso. Cancelación gratuita en cualquier momento.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Sobre Nosotros</h3>
              <p className="text-sm">IVEDI es una agencia de marketing digital especializada en profesionales de la salud. Nuestro enfoque basado en resultados garantiza el crecimiento de tu práctica.</p>
            </div>
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Campañas de Ads</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Asistente Virtual IA</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Automatización de Marketing</Link></li>
                <li><Link href="#" className="hover:textpink-400 transition duration-300">Gestión de Redes Sociales</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Blog</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Casos de Estudio</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Guías Gratuitas</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Webinars</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li>Email: info@IVEDI.com</li>
                <li>Teléfono: +34 900 123 456</li>
                <li>Dirección: Calle Principal 123, Madrid, España</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-2xl font-bold text-pink-400">IVEDI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-pink-400 hover:text-pink-300 transition duration-300">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()}. Todos los derechos reservados por IVEDI
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}

