import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, BarChart3, Shield, Sparkles, Check, Play, Star, Quote } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white dark:bg-zinc-950">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="blob bg-violet-400 w-96 h-96 top-0 -left-20 animate-blob"></div>
        <div className="blob bg-fuchsia-300 w-96 h-96 bottom-0 right-0 animate-blob animation-delay-2000"></div>
        <div className="blob bg-cyan-300 w-80 h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="outline" className="mb-6 px-4 py-1.5 border-violet-200 bg-violet-50 text-violet-700 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              New Feature: Auto-Workflow 2.0
            </Badge>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-heading font-bold leading-tight tracking-tight mb-6 text-zinc-900 dark:text-white">
            Build Faster with <br/>
            <span className="text-gradient bg-linear-to-r from-violet-600 to-fuchsia-600">Intelligent AI</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-lg">
            Harness the power of advanced machine learning to automate your workflow, analyze data instantly, and scale your operations without the headache.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 h-14 px-8 rounded-xl text-lg shadow-xl shadow-violet-500/20 transition-transform hover:scale-105">
              Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-xl text-lg border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900 transition-all">
              <Play className="mr-2 w-5 h-5 fill-current" /> Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <motion.img 
            src="/hero-illustration.png" 
            alt="AI Visualization" 
            className="relative z-10 w-full drop-shadow-2xl animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Bot className="w-6 h-6" />, title: "Natural Language Processing", description: "Understand and process human language with unprecedented accuracy." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Predictive Analytics", description: "Forecast trends and make data-driven decisions." },
    { icon: <Shield className="w-6 h-6" />, title: "Enterprise Security", description: "Bank-grade encryption and compliance standards." }
  ];

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-heading font-bold mb-16">Core <span className="text-violet-600">Capabilities</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 bg-white dark:bg-zinc-800 rounded-3xl border border-zinc-100 dark:border-zinc-700 shadow-sm">
              <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center mx-auto mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
