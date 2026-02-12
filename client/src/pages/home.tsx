import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bot, Zap, BarChart3, Shield, Sparkles, Check, Play, Star, Menu, X, Quote } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

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
      {/* Background Gradients */}
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
          
          <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-4 text-sm text-zinc-500 font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-xs overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-zinc-900 font-bold ml-1">4.9/5</span>
              <span className="ml-1 font-normal">from 10k+ users</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-radial from-violet-500/20 to-transparent blur-3xl transform scale-150"></div>
          <motion.img 
            src="/hero-illustration.png" 
            alt="AI Visualization" 
            className="relative z-10 w-full drop-shadow-2xl animate-float"
            style={{ filter: "drop-shadow(0px 20px 40px rgba(139, 92, 246, 0.2))" }}
          />
          
          {/* Floating UI Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-20 -left-10 glass p-4 rounded-2xl flex items-center gap-4 z-20 max-w-[200px]"
          >
            <div className="bg-green-100 p-2 rounded-lg text-green-600">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-semibold uppercase">Efficiency</p>
              <p className="font-bold text-zinc-900">+450% Boost</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-20 -right-10 glass p-4 rounded-2xl flex items-center gap-4 z-20 max-w-[200px]"
          >
             <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-semibold uppercase">AI Analysis</p>
              <p className="font-bold text-zinc-900">Complete</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Natural Language Processing",
      description: "Understand and process human language with unprecedented accuracy and speed."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions before your competitors do."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance standards built directly into the core."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Process millions of data points in milliseconds with our optimized engine."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Automated Insights",
      description: "Let AI discover patterns and opportunities you might have missed."
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Seamless Integration",
      description: "Connects with your existing stack in minutes, not months."
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-200 border-none px-4 py-1.5 text-sm rounded-full">
            Powerful Features
          </Badge>
          <h2 className="text-4xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
            Everything you need to <span className="text-violet-600">scale smarter</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Our platform provides the essential tools to automate your workflow and boost productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-zinc-800 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-700 shadow-sm hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-violet-50 dark:bg-violet-900/30 rounded-xl flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">{feature.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Upload Data",
      desc: "Drag and drop your datasets securely. We support CSV, JSON, and direct database connections."
    },
    {
      num: "02",
      title: "AI Analysis",
      desc: "Our algorithms process your data instantly, identifying patterns, anomalies, and opportunities."
    },
    {
      num: "03",
      title: "Get Results",
      desc: "Receive comprehensive reports and actionable insights visualized in an intuitive dashboard."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4">
         <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
            Simple, streamlined <span className="text-fuchsia-600">workflow</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Go from raw data to actionable insights in three simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-100 -translate-y-1/2 hidden md:block z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-center relative group"
              >
                <div className="w-16 h-16 mx-auto bg-white dark:bg-zinc-900 border-4 border-fuchsia-100 dark:border-fuchsia-900/30 text-fuchsia-600 rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">{step.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform has completely transformed how we process data. What used to take days now takes minutes.",
      author: "Sarah Jenkins",
      role: "CTO, TechFlow",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      quote: "The AI insights are incredibly accurate. We've seen a 40% increase in conversion rates since implementing it.",
      author: "Michael Chen",
      role: "Product Lead, Innovate",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
      quote: "Security was our main concern, but their enterprise-grade compliance features put our minds at ease.",
      author: "Elena Rodriguez",
      role: "VP of Engineering, SecureNet",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
            Loved by <span className="text-violet-600">innovators</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-800 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-700 shadow-sm relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-violet-100 dark:text-violet-900/30" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-8 italic relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border border-zinc-200" />
                <div>
                  <p className="font-bold text-zinc-900 dark:text-white">{t.author}</p>
                  <p className="text-sm text-zinc-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
            Simple, transparent <span className="text-violet-600">pricing</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Basic Plan */}
          <Card className="border-zinc-200 dark:border-zinc-700 shadow-none hover:shadow-lg transition-shadow bg-zinc-50 dark:bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Starter</CardTitle>
              <CardDescription>For individuals getting started</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
              <ul className="space-y-3">
                {["1 User", "5 Projects", "Basic Analytics", "Community Support"].map((item) => (
                  <li key={item} className="flex items-center text-zinc-600 dark:text-zinc-300">
                    <Check className="w-5 h-5 text-green-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-100 shadow-sm" variant="outline">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-fuchsia-600 rounded-3xl blur-xl opacity-20"></div>
            <Card className="relative border-violet-500 border-2 shadow-2xl z-10 scale-105 bg-white dark:bg-zinc-900">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-violet-600">Pro</CardTitle>
                <CardDescription>For growing teams and businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold mb-6">$49<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
                <ul className="space-y-3">
                  {["5 Users", "Unlimited Projects", "Advanced Analytics", "Priority Support", "API Access"].map((item) => (
                    <li key={item} className="flex items-center text-zinc-900 dark:text-zinc-100 font-medium">
                      <Check className="w-5 h-5 text-violet-600 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/25 h-12 text-lg">Start Free Trial</Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Enterprise Plan */}
          <Card className="border-zinc-200 dark:border-zinc-700 shadow-none hover:shadow-lg transition-shadow bg-zinc-50 dark:bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
              <CardDescription>For large scale organizations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-6">$199<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
              <ul className="space-y-3">
                {["Unlimited Users", "Custom Integrations", "Dedicated Account Manager", "SLA Guarantee", "On-premise Deployment"].map((item) => (
                  <li key={item} className="flex items-center text-zinc-600 dark:text-zinc-300">
                    <Check className="w-5 h-5 text-green-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-100 shadow-sm" variant="outline">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-zinc-900 dark:bg-zinc-950 rounded-3xl p-12 lg:p-24 text-center overflow-hidden relative shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-600/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-8 relative z-10">
            Start building <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">smarter</span> today.
          </h2>
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto relative z-10">
            Join thousands of developers and companies using our platform to power their next big idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100 h-14 px-8 rounded-xl text-lg font-bold">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 h-14 px-8 rounded-xl text-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-violet-500/30">
            AI
          </div>
          <span className="font-heading font-bold text-xl text-zinc-900 dark:text-white">Nexus</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Solutions</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Docs</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100">Sign In</Button>
          <Button className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-lg shadow-lg shadow-violet-500/10">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                AI
              </div>
              <span className="font-heading font-bold text-lg text-zinc-900 dark:text-white">Nexus</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Empowering the next generation of digital products with intelligent AI solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-violet-600">Features</a></li>
              <li><a href="#" className="hover:text-violet-600">Integrations</a></li>
              <li><a href="#" className="hover:text-violet-600">Pricing</a></li>
              <li><a href="#" className="hover:text-violet-600">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-violet-600">Documentation</a></li>
              <li><a href="#" className="hover:text-violet-600">API Reference</a></li>
              <li><a href="#" className="hover:text-violet-600">Community</a></li>
              <li><a href="#" className="hover:text-violet-600">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-violet-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-violet-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-violet-600">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">© 2024 AI Nexus Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-zinc-600"><span className="sr-only">Twitter</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a>
            <a href="#" className="text-zinc-400 hover:text-zinc-600"><span className="sr-only">GitHub</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 7.56 9.97.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-2 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 012.5-.34c.85.04 1.7.15 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.68 1.03 1.57 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.74c0 .26.18.57.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z" clipRule="evenodd"></path></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-violet-200 selection:text-violet-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
