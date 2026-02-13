import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, Zap, BarChart3, Shield, Sparkles, Check, Play, Star, Quote, Globe, Cpu, Layers, Zap as FastIcon, Users, Building, Send, MessageSquare, Terminal } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState, useRef, useEffect } from "react";

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

const MockAIChat = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hello! I am Nexus AI. How can I help you automate your workflow today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "I've analyzed your workflow. I can reduce your processing time by 45% using autonomous agents.",
        "Based on your data, the most efficient route is to integrate our Predictive Analytics module.",
        "Security check complete. Your current infrastructure meets all SOC2 requirements with Nexus Shield.",
        "I've generated a draft API implementation for your custom model. Would you like to see it?"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'ai', content: randomResponse }]);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-lg mx-auto border-zinc-200 dark:border-zinc-800 shadow-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden flex flex-col h-[500px]">
      <CardHeader className="border-b border-zinc-100 dark:border-zinc-800 p-6 bg-zinc-50/50 dark:bg-zinc-800/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center text-white">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <CardTitle className="text-lg">Nexus Assistant</CardTitle>
            <CardDescription className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Online & Ready
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth" ref={scrollRef}>
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                msg.role === 'user' 
                ? 'bg-violet-600 text-white rounded-tr-none' 
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-tl-none'
              }`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-2xl rounded-tl-none flex gap-1">
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
      <CardFooter className="p-4 border-t border-zinc-100 dark:border-zinc-800">
        <form onSubmit={handleSend} className="flex w-full gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl px-4 text-sm focus:ring-2 focus:ring-violet-500 outline-none"
          />
          <Button type="submit" size="icon" className="bg-violet-600 hover:bg-violet-700 rounded-xl">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-white dark:bg-zinc-950">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="blob bg-violet-400 w-[500px] h-[500px] top-[-100px] left-[-100px] animate-blob"></div>
        <div className="blob bg-fuchsia-300 w-[500px] h-[500px] bottom-[-100px] right-[-100px] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/50 to-white dark:via-zinc-950/50 dark:to-zinc-950"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="outline" className="mb-6 px-4 py-1.5 border-violet-200 bg-violet-50/50 text-violet-700 rounded-full text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Revolutionizing Workflow Automation
            </Badge>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-6xl lg:text-8xl font-heading font-bold leading-[1.1] tracking-tight mb-8 text-zinc-900 dark:text-white">
            The OS for <br/>
            <span className="text-gradient bg-linear-to-r from-violet-600 via-fuchsia-500 to-indigo-600">AI Intelligence</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-2xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-xl">
            Nexus is the unified platform to deploy, manage, and scale autonomous AI agents that transform your business data into revenue.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
            <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 h-16 px-10 rounded-2xl text-xl shadow-2xl shadow-violet-500/20 transition-all hover:scale-105 active:scale-95">
              Start Building <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl text-xl border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900 transition-all backdrop-blur-sm">
              <Play className="mr-2 w-6 h-6 fill-current" /> View Demo
            </Button>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-16 pt-10 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center gap-10 opacity-60">
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Trusted by</span>
            <div className="flex gap-8 items-center">
              <Building className="w-8 h-8" />
              <Globe className="w-8 h-8" />
              <Layers className="w-8 h-8" />
              <Cpu className="w-8 h-8" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative"
        >
          <div className="relative z-10">
            <div className="absolute inset-0 bg-violet-500/10 blur-[120px] rounded-full animate-pulse-slow"></div>
            <MockAIChat />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Active Agents", value: "2.4M+" },
    { label: "Data Points", value: "850B" },
    { label: "Cost Savings", value: "62%" },
    { label: "Uptime", value: "99.99%" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-2">{s.value}</div>
              <div className="text-zinc-500 font-medium uppercase tracking-wider text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureGrid = () => {
  const items = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Neural Engine",
      desc: "Process complex logic with our custom-trained LLM optimized for speed.",
      tag: "Infrastructure"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Contextual Memory",
      desc: "Our agents remember every interaction to provide perfect continuity.",
      tag: "Memory"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Distribution",
      desc: "Deploy agents to the edge for sub-millisecond response times worldwide.",
      tag: "Network"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ironclad Privacy",
      desc: "Your data never leaves your infrastructure with our hybrid-cloud model.",
      tag: "Security"
    }
  ];

  return (
    <section className="py-32 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-violet-600 text-white">Next Gen Tools</Badge>
            <h2 className="text-5xl font-heading font-bold mb-6">Designed for the <span className="text-violet-600">AI-First</span> Era</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">Stop stitching APIs together. Start building with a unified stack designed for autonomous intelligence.</p>
          </div>
          <Button variant="outline" size="lg" className="h-14 px-8 rounded-xl font-bold">Explore Features</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-violet-50 dark:bg-violet-900/20 rounded-3xl flex items-center justify-center text-violet-600 mb-8 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <Badge className="mb-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border-none">{item.tag}</Badge>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const list = [
    {
      name: "Alex Rivera",
      role: "CEO at Vanta",
      quote: "Nexus reduced our engineering overhead by 40% in just three months. It's the standard for AI deployment.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    {
      name: "Jamie Smith",
      role: "Head of AI, Stripe",
      quote: "The low latency and privacy controls are light years ahead of anything else on the market today.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie"
    },
    {
      name: "Sarah Kim",
      role: "Founder of Scale",
      quote: "Finally a platform that treats AI agents like first-class citizens. The DX is incredible.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    }
  ];

  return (
    <section className="py-32 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-heading font-bold mb-8 italic text-zinc-900 dark:text-white">"The future of software is autonomous, and Nexus is the engine."</h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {list.map((t, i) => (
            <Card key={i} className="border-none bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] p-10 hover:shadow-xl transition-all">
              <CardHeader className="p-0 mb-8">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-violet-600 text-violet-600" />)}
                </div>
                <p className="text-xl text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed italic">"{t.quote}"</p>
              </CardHeader>
              <CardFooter className="p-0 flex items-center gap-5">
                <img src={t.avatar} className="w-14 h-14 rounded-2xl border-2 border-white" alt="" />
                <div>
                  <div className="font-bold text-lg">{t.name}</div>
                  <div className="text-zinc-500 text-sm">{t.role}</div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden bg-zinc-900 dark:bg-zinc-900 rounded-[4rem] p-16 lg:p-32 text-center shadow-3xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-600/20 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-10"
          >
            <h2 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-10 leading-tight">
              Ready to automate <br/> <span className="text-violet-400">your future?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100 h-16 px-12 rounded-2xl text-xl font-bold shadow-xl transition-transform hover:scale-105">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 h-16 px-12 rounded-2xl text-xl font-bold transition-all">
                Talk to Sales
              </Button>
            </div>
            <p className="mt-10 text-zinc-500 text-lg">No credit card required. Cancel anytime.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-violet-200 selection:text-violet-900">
      <Navbar />
      <Hero />
      <Stats />
      <FeatureGrid />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
