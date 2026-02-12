export default function Footer() {
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
              <li><a href="/features" className="hover:text-violet-600">Features</a></li>
              <li><a href="/solutions" className="hover:text-violet-600">Solutions</a></li>
              <li><a href="/pricing" className="hover:text-violet-600">Pricing</a></li>
              <li><a href="/docs" className="hover:text-violet-600">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="/docs" className="hover:text-violet-600">Documentation</a></li>
              <li><a href="/docs" className="hover:text-violet-600">API Reference</a></li>
              <li><a href="/docs" className="hover:text-violet-600">Community</a></li>
              <li><a href="/docs" className="hover:text-violet-600">Blog</a></li>
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
}
