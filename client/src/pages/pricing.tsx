import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge className="mb-4 bg-violet-100 text-violet-700">Pricing Plans</Badge>
            <h1 className="text-5xl font-heading font-bold mb-6">Scale with <span className="text-gradient">confidence</span></h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">Choose the plan that's right for your stage of growth.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Basic Plan */}
            <Card className="border-zinc-200 dark:border-zinc-700 shadow-none hover:shadow-lg transition-shadow bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] p-4">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Starter</CardTitle>
                <CardDescription>For individuals getting started</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
                <ul className="space-y-3">
                  {["1 User", "5 Projects", "Basic Analytics", "Community Support", "API Rate Limit: 10/min"].map((item) => (
                    <li key={item} className="flex items-center text-zinc-600 dark:text-zinc-300">
                      <Check className="w-5 h-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-100 shadow-sm h-12 rounded-xl" variant="outline">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <motion.div
              whileHover={{ y: -10 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-fuchsia-600 rounded-[2.5rem] blur-2xl opacity-20"></div>
              <Card className="relative border-violet-500 border-2 shadow-2xl z-10 scale-105 bg-white dark:bg-zinc-900 rounded-[2rem] p-4">
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
                    {["5 Users", "Unlimited Projects", "Advanced Analytics", "Priority Support", "API Rate Limit: 100/min", "Custom Model Tuning"].map((item) => (
                      <li key={item} className="flex items-center text-zinc-900 dark:text-zinc-100 font-medium">
                        <Check className="w-5 h-5 text-violet-600 mr-2" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/25 h-12 text-lg rounded-xl">Start Free Trial</Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Enterprise Plan */}
            <Card className="border-zinc-200 dark:border-zinc-700 shadow-none hover:shadow-lg transition-shadow bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] p-4">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                <CardDescription>For large scale organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6">$199<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
                <ul className="space-y-3">
                  {["Unlimited Users", "Custom Integrations", "Dedicated Manager", "SLA Guarantee", "API Rate Limit: Custom", "On-premise Deployment"].map((item) => (
                    <li key={item} className="flex items-center text-zinc-600 dark:text-zinc-300">
                      <Check className="w-5 h-5 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-100 shadow-sm h-12 rounded-xl" variant="outline">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
