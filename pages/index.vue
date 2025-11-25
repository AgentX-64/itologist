<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg"></div>
            <span class="font-bold text-lg tracking-tight">Itologist</span>
          </div>
          <div class="hidden md:flex gap-8">
            <a href="#services" class="hover:text-blue-400 transition">Services</a>
            <a href="#benefits" class="hover:text-blue-400 transition">Why Us</a>
            <a href="#process" class="hover:text-blue-400 transition">How It Works</a>
            <a href="#cta" class="hover:text-blue-400 transition">Contact</a>
          </div>
          <button class="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-40"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Modernise Your Business Systems
            </h1>
            <p class="text-xl text-slate-300 mb-8 leading-relaxed">
              Meet-free IT management for small businesses. We modernise your systems, host them securely, and monitor everything quietly in the background.
            </p>
            <div class="flex gap-4">
              <button class="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition text-lg">
                Start Free Consultation
              </button>
              <button class="border border-slate-600 hover:border-slate-400 px-8 py-3 rounded-lg font-semibold transition">
                Learn More
              </button>
            </div>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-slate-700">
              <div class="space-y-4">
                <div class="h-48 bg-slate-800 rounded-lg flex items-center justify-center">
                  <svg class="w-24 h-24 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-24 bg-slate-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p class="text-xl text-slate-400">Comprehensive IT solutions tailored for your business</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Service Card 1 -->
          <div class="group bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 rounded-xl p-8 transition hover:shadow-lg hover:shadow-blue-500/10">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg mb-4"></div>
            <h3 class="text-2xl font-bold mb-3">System Modernisation</h3>
            <p class="text-slate-400 mb-4">
              Upgrade legacy systems to modern, scalable solutions that improve productivity and reduce operational costs.
            </p>
            <a href="#" class="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-2">
              Learn more →
            </a>
          </div>

          <!-- Service Card 2 -->
          <div class="group bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 rounded-xl p-8 transition hover:shadow-lg hover:shadow-blue-500/10">
            <div class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg mb-4"></div>
            <h3 class="text-2xl font-bold mb-3">Secure Hosting</h3>
            <p class="text-slate-400 mb-4">
              Enterprise-grade hosting infrastructure with automatic backups, redundancy, and 99.9% uptime guarantees.
            </p>
            <a href="#" class="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-2">
              Learn more →
            </a>
          </div>

          <!-- Service Card 3 -->
          <div class="group bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 rounded-xl p-8 transition hover:shadow-lg hover:shadow-blue-500/10">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-violet-400 rounded-lg mb-4"></div>
            <h3 class="text-2xl font-bold mb-3">Monitoring & Support</h3>
            <p class="text-slate-400 mb-4">
              24/7 automated monitoring with proactive alerts and expert support when you need it – no endless meetings.
            </p>
            <a href="#" class="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-2">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-8">Why Choose Itologist?</h2>
            
            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/20 text-blue-400">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Meet-Free Management</h3>
                  <p class="text-slate-400">We handle everything quietly in the background so you can focus on your business</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/20 text-blue-400">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Expert Team</h3>
                  <p class="text-slate-400">Experienced professionals dedicated to your IT infrastructure success</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/20 text-blue-400">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Proactive Monitoring</h3>
                  <p class="text-slate-400">Issues detected and resolved before they impact your business</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/20 text-blue-400">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">Cost-Effective</h3>
                  <p class="text-slate-400">Predictable pricing with no hidden fees or surprise charges</p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-slate-700 rounded-xl p-6">
              <div class="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <p class="text-slate-400">Uptime Guarantee</p>
            </div>
            <div class="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-slate-700 rounded-xl p-6">
              <div class="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <p class="text-slate-400">Monitoring</p>
            </div>
            <div class="bg-gradient-to-br from-violet-500/20 to-blue-500/10 border border-slate-700 rounded-xl p-6">
              <div class="text-4xl font-bold text-violet-400 mb-2">&lt;1h</div>
              <p class="text-slate-400">Response Time</p>
            </div>
            <div class="bg-gradient-to-br from-blue-500/20 to-violet-500/10 border border-slate-700 rounded-xl p-6">
              <div class="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <p class="text-slate-400">Clients Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section id="process" class="py-24 bg-slate-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p class="text-xl text-slate-400">Simple steps to transform your IT infrastructure</p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="relative">
            <div class="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-slate-700 rounded-xl p-8 text-center">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 class="font-semibold text-lg mb-2">Assessment</h3>
              <p class="text-slate-400">We evaluate your current systems and identify areas for improvement</p>
            </div>
            <div class="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>

          <div class="relative">
            <div class="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-slate-700 rounded-xl p-8 text-center">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 class="font-semibold text-lg mb-2">Planning</h3>
              <p class="text-slate-400">We create a roadmap tailored to your business needs and budget</p>
            </div>
            <div class="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>

          <div class="relative">
            <div class="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-slate-700 rounded-xl p-8 text-center">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 class="font-semibold text-lg mb-2">Implementation</h3>
              <p class="text-slate-400">We execute the plan with minimal disruption to your operations</p>
            </div>
            <div class="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>

          <div>
            <div class="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-slate-700 rounded-xl p-8 text-center">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 class="font-semibold text-lg mb-2">Support</h3>
              <p class="text-slate-400">Ongoing monitoring, optimization, and support for long-term success</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-5xl font-bold text-blue-400 mb-2">15+</div>
            <p class="text-slate-400">Years Experience</p>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-cyan-400 mb-2">500+</div>
            <p class="text-slate-400">Businesses Supported</p>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-violet-400 mb-2">2M+</div>
            <p class="text-slate-400">Hours of Support</p>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-blue-400 mb-2">99.9%</div>
            <p class="text-slate-400">Uptime Average</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="py-24 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-y border-slate-700">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your IT?</h2>
        <p class="text-xl text-slate-300 mb-8">
          Start your free consultation today and discover how Itologist can simplify your business technology
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition text-lg">
            Schedule Consultation
          </button>
          <button class="border border-slate-600 hover:border-slate-400 px-8 py-4 rounded-lg font-semibold transition text-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-950 border-t border-slate-800 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg"></div>
              <span class="font-bold">Itologist</span>
            </div>
            <p class="text-slate-400 text-sm">Modernising business systems for New Zealand's finest small businesses.</p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Services</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li><a href="#" class="hover:text-blue-400 transition">System Modernisation</a></li>
              <li><a href="#" class="hover:text-blue-400 transition">Secure Hosting</a></li>
              <li><a href="#" class="hover:text-blue-400 transition">24/7 Monitoring</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li><a href="#" class="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" class="hover:text-blue-400 transition">Contact</a></li>
              <li><a href="#" class="hover:text-blue-400 transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Legal</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li><a href="#" class="hover:text-blue-400 transition">Privacy</a></li>
              <li><a href="#" class="hover:text-blue-400 transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-800 pt-8">
          <p class="text-center text-slate-500 text-sm">
            &copy; {{ currentYear }} Itologist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
</style>