import { motion } from "framer-motion";
import { Bot, BarChart3, Shield, Zap, Sparkles, Check, Cpu, Globe } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Advanced NLP",
    description: "Our proprietary language models understand context, nuance, and intent with 99.9% accuracy.",
    details: ["Contextual understanding", "Multi-language support", "Sentiment analysis", "Entity recognition"]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Predictive Analytics",
    description: "Forecast market trends and user behavior before they happen using our deep learning engine.",
    details: ["Trend forecasting", "Anomaly detection", "User churn prediction", "Revenue modeling"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Guard",
    description: "Bank-grade security that scales with your organization. SOC2, GDPR, and HIPAA compliant.",
    details: ["End-to-end encryption", "Role-based access", "Audit logging", "Compliance reporting"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Execution",
    description: "Zero-latency processing for real-time applications. Built for speed and high availability.",
    details: ["Edge computing", "Global CDN", "Sub-millisecond latency", "Auto-scaling infrastructure"]
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Custom Model Training",
    description: "Train the AI on your specific business data for tailored results that matter.",
    details: ["Transfer learning", "Fine-tuning", "Private data sets", "Model versioning"]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Integration",
    description: "Connect with over 2,000+ apps through our native integrations and robust API.",
    details: ["Webhook support", "SDKs for all languages", "No-code connectors", "Custom API endpoints"]
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge className="mb-4 bg-violet-100 text-violet-700">The Technology</Badge>
            <h1 className="text-5xl font-heading font-bold mb-6">Powerful features for <span className="text-gradient">modern teams</span></h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">Everything you need to build, scale, and secure your AI-driven future.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-2xl hover:shadow-violet-500/10 transition-all group"
              >
                <div className="w-14 h-14 bg-violet-50 dark:bg-violet-900/30 rounded-2xl flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">{f.description}</p>
                <ul className="space-y-3">
                  {f.details.map((d, j) => (
                    <li key={j} className="flex items-center text-sm text-zinc-500">
                      <Check className="w-4 h-4 text-violet-500 mr-2" /> {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
