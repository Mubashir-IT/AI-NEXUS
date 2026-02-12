import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Search, Code, Terminal, Zap, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = [
  { icon: <Zap className="w-5 h-5" />, title: "Getting Started" },
  { icon: <Code className="w-5 h-5" />, title: "API Reference" },
  { icon: <Terminal className="w-5 h-5" />, title: "SDKs" },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Guides" }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-heading font-bold mb-6">Documentation</h1>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                <Input className="pl-12 h-14 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-2xl text-lg" placeholder="Search documentation..." />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-16">
              {categories.map((c, i) => (
                <div key={i} className="flex items-center gap-4 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-violet-500/50 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-violet-50 dark:bg-violet-900/30 rounded-xl flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    {c.icon}
                  </div>
                  <h3 className="text-xl font-bold">{c.title}</h3>
                </div>
              ))}
            </div>

            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-8">Introduction</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                Welcome to the AI Nexus documentation. Here you'll find everything you need to integrate intelligent AI capabilities into your applications, from simple API calls to complex custom model training.
              </p>
              <div className="bg-zinc-900 rounded-2xl p-8 mb-12">
                <code className="text-violet-400">npm install @ai-nexus/sdk</code>
              </div>
              <h2 className="text-3xl font-bold mb-8">Quick Start</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                To get started, first obtain an API key from your dashboard settings. Then, initialize the SDK with your key and start making calls to our global inference engine.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
