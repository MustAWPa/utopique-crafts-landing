'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-50">
      {/* Hero Banner Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.png"
          width={1920}
          height={1080}
          alt="Utopique Crafts Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              width={80}
              height={80}
              alt="Utopique Crafts Logo"
              className="h-16 w-16 md:h-20 md:w-20"
            />
          </div>  
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
        <div className="w-full max-w-lg">
          {/* Newsletter Card */}
          <div className="rounded-lg shadow-2xl p-8 md:p-10">
            <div className="text-center space-y-6">
              <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl font-bold text-white">Discover UtopiqueCrafts</h1>
                <p className="text-white leading-relaxed">
                  Join our community and be the first to explore our exclusive collection.
                </p>
              </div>

              {/* Newsletter Form */}
              <form
  className="space-y-4"
onSubmit={async (e) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const emailInput = form.elements.namedItem('email') as HTMLInputElement;
  const email = emailInput.value;

  try {
    const res = await fetch('/api/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
    });

    const result = await res.json();
    if (res.ok) {
      alert('✅ Subscribed successfully!');
    } else {
      alert(`❌ Subscription failed: ${result.message}`);
    }
  } catch (err: any) {
    alert(`❌ Network error: ${err.message}`);
  }
}}

>

                <div className="space-y-2">
                  <Input
  type="email"
  name="email"
  placeholder="Enter your email address"
  className="w-full h-12 border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-md text-center"
  required
/>

                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-orange-700 hover:bg-gray-800 text-white font-medium rounded-md transition-colors duration-200"
                >
                  Subscribe to Updates
                </Button>
              </form>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-white">
                  Get notified about new collections and exclusive offers. No spam, unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>

          {/* Coming Soon Badge */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-800">Coming Soon</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-4">
        <div className="container mx-auto text-center">
          <p className="text-white/80 text-sm">© 2025 Utopique Crafts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
