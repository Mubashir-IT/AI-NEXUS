import { motion } from "framer-motion";
import { Building2, Rocket, Landmark, ShoppingBag, ArrowRight } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: <Rocket className="w-10 h-10" />,
    title: "Startups",
    desc: "Move faster and stay lean. Automate your support and product insights so you can focus on building.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Enterprise",
    desc: "Scale with confidence. Our platform handles millions of requests with enterprise-grade security and uptime.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: <Landmark className="w-10 h-10" />,
    title: "Financial Services",
    desc: "Analyze market data in real-time. Make data-driven decisions with high-fidelity predictive modeling.",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "E-commerce",
    desc: "Personalize the customer journey. Use AI to predict churn and boost conversion rates automatically.",
    color: "from-fuchsia-500 to-pink-600"
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge className="mb-4 bg-fuchsia-100 text-fuchsia-700">Industry Specific</Badge>
            <h1 className="text-5xl font-heading font-bold mb-6">Built for every <span className="text-fuchsia-600">vertical</span></h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">Tailored AI solutions that fit your specific industry needs and challenges.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden group p-12 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${s.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity blur-3xl`}></div>
                <div className="relative z-10">
                  <div className="mb-8 text-zinc-900 dark:text-white">{s.icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-md">{s.desc}</p>
                  <Button variant="ghost" className="p-0 hover:bg-transparent text-zinc-900 dark:text-white font-bold group">
                    Learn more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
