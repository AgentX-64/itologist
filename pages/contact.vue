<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <NuxtLink to="/" class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg"></div>
            <span class="font-bold text-lg tracking-tight">Itologist</span>
          </NuxtLink>
          <div class="hidden md:flex gap-8">
            <NuxtLink to="/" class="hover:text-blue-400 transition">Home</NuxtLink>
            <a href="/#services" class="hover:text-blue-400 transition">Services</a>
            <a href="/#benefits" class="hover:text-blue-400 transition">Why Us</a>
          </div>
          <NuxtLink to="/contact" class="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition">
            Contact
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Page Header -->
    <section class="py-16 md:py-20 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
        <p class="text-xl text-slate-300">
          Have questions about our services? We'd love to hear from you.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Contact Information -->
          <div class="md:col-span-1">
            <h2 class="text-2xl font-bold mb-8">Contact Information</h2>
            
            <div class="space-y-8">
              <!-- Phone -->
              <div>
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                      📞
                    </div>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-1">Phone</h3>
                    <p class="text-slate-400">+64 (0) 9 XXX XXXX</p>
                    <p class="text-sm text-slate-500">Mon-Fri, 8am-5pm NZST</p>
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div>
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                      ✉️
                    </div>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-1">Email</h3>
                    <p class="text-slate-400"><a href="mailto:hello@itologist.co.nz" class="hover:text-blue-400 transition">hello@itologist.co.nz</a></p>
                    <p class="text-sm text-slate-500">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <!-- Location -->
              <div>
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                      📍
                    </div>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-1">Location</h3>
                    <p class="text-slate-400">Auckland, New Zealand</p>
                    <p class="text-sm text-slate-500">We work with clients nationwide</p>
                  </div>
                </div>
              </div>

              <!-- Hours -->
              <div>
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                      🕐
                    </div>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg mb-1">Business Hours</h3>
                    <p class="text-slate-400">Monday - Friday</p>
                    <p class="text-sm text-slate-500">8:00 AM - 5:00 PM NZST</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-12 pt-8 border-t border-slate-800">
              <h3 class="font-semibold mb-4">Follow Us</h3>
              <div class="flex gap-4">
                <a href="#" class="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition">
                  <span>in</span>
                </a>
                <a href="#" class="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition">
                  <span>𝕏</span>
                </a>
                <a href="#" class="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition">
                  <span>f</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="md:col-span-2">
            <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 class="text-3xl font-bold mb-8">Send Us a Message</h2>

              <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Name -->
                <div>
                  <label for="name" class="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition text-slate-50 placeholder-slate-500"
                    placeholder="John Doe"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition text-slate-50 placeholder-slate-500"
                    placeholder="john@company.com"
                  />
                </div>

                <!-- Phone -->
                <div>
                  <label for="phone" class="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition text-slate-50 placeholder-slate-500"
                    placeholder="+64 9 XXX XXXX"
                  />
                </div>

                <!-- Company -->
                <div>
                  <label for="company" class="block text-sm font-semibold mb-2">Company Name</label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition text-slate-50 placeholder-slate-500"
                    placeholder="Your Company"
                  />
                </div>

                <!-- Service Interest -->
                <div>
                  <label for="service" class="block text-sm font-semibold mb-2">Service of Interest *</label>
                  <select
                    id="service"
                    v-model="form.service"
                    required
                    class="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition text-slate-50"
                  >
                    <option value="">Select a service</option>
                    <option value="modernisation">System Modernisation</option>
                    <option value="hosting">Secure Hosting</option>
                    <option value="monitoring">Monitoring & Support</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="6"
                    class="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition text-slate-50 placeholder-slate-500 resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>

                <!-- Budget -->
                <div>
                  <label for="budget" class="block text-sm font-semibold mb-2">Budget Range</label>
                  <select
                    id="budget"
                    v-model="form.budget"
                    class="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition text-slate-50"
                  >
                    <option value="">Select a range</option>
                    <option value="5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k+">$25,000+</option>
                  </select>
                </div>

                <!-- Checkbox -->
                <div class="flex items-start gap-3">
                  <input
                    id="privacy"
                    v-model="form.privacy"
                    type="checkbox"
                    required
                    class="w-5 h-5 mt-0.5 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                  />
                  <label for="privacy" class="text-sm text-slate-400 cursor-pointer">
                    I agree to the <a href="#" class="text-blue-400 hover:text-blue-300">privacy policy</a> and would like to receive updates *
                  </label>
                </div>

                <!-- Submit Button -->
                <div class="pt-4">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                  >
                    <span v-if="!isSubmitting">Send Message</span>
                    <span v-else>Sending...</span>
                  </button>
                </div>

                <!-- Success Message -->
                <div v-if="successMessage" class="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-400">
                  {{ successMessage }}
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-400">
                  {{ errorMessage }}
                </div>
              </form>

              <p class="text-xs text-slate-500 mt-6">
                * Required fields. We'll get back to you within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-slate-900/50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        
        <div class="space-y-4">
          <details class="group border border-slate-700 rounded-lg overflow-hidden bg-slate-800/30 hover:bg-slate-800/50 transition">
            <summary class="flex items-center justify-between w-full p-6 cursor-pointer font-semibold">
              <span>How long does a typical consultation take?</span>
              <span class="text-2xl group-open:rotate-45 transition">+</span>
            </summary>
            <div class="px-6 pb-6 text-slate-400 border-t border-slate-700">
              Our initial consultation typically takes 30-45 minutes. We'll discuss your current systems, identify pain points, and outline potential solutions tailored to your business.
            </div>
          </details>

          <details class="group border border-slate-700 rounded-lg overflow-hidden bg-slate-800/30 hover:bg-slate-800/50 transition">
            <summary class="flex items-center justify-between w-full p-6 cursor-pointer font-semibold">
              <span>What is your response time for support issues?</span>
              <span class="text-2xl group-open:rotate-45 transition">+</span>
            </summary>
            <div class="px-6 pb-6 text-slate-400 border-t border-slate-700">
              We guarantee a response within one hour for critical issues, and within 24 hours for general inquiries. Our monitoring systems detect most issues before they impact your operations.
            </div>
          </details>

          <details class="group border border-slate-700 rounded-lg overflow-hidden bg-slate-800/30 hover:bg-slate-800/50 transition">
            <summary class="flex items-center justify-between w-full p-6 cursor-pointer font-semibold">
              <span>Do you work with businesses of all sizes?</span>
              <span class="text-2xl group-open:rotate-45 transition">+</span>
            </summary>
            <div class="px-6 pb-6 text-slate-400 border-t border-slate-700">
              Yes! We specialize in small to medium-sized businesses. Our scalable solutions grow with your business, from startups to established enterprises across New Zealand.
            </div>
          </details>

          <details class="group border border-slate-700 rounded-lg overflow-hidden bg-slate-800/30 hover:bg-slate-800/50 transition">
            <summary class="flex items-center justify-between w-full p-6 cursor-pointer font-semibold">
              <span>Can you help with legacy system migration?</span>
              <span class="text-2xl group-open:rotate-45 transition">+</span>
            </summary>
            <div class="px-6 pb-6 text-slate-400 border-t border-slate-700">
              Absolutely. Legacy system modernization is one of our core services. We ensure minimal downtime and seamless data migration to modern, secure platforms.
            </div>
          </details>

          <details class="group border border-slate-700 rounded-lg overflow-hidden bg-slate-800/30 hover:bg-slate-800/50 transition">
            <summary class="flex items-center justify-between w-full p-6 cursor-pointer font-semibold">
              <span>What are your pricing models?</span>
              <span class="text-2xl group-open:rotate-45 transition">+</span>
            </summary>
            <div class="px-6 pb-6 text-slate-400 border-t border-slate-700">
              We offer flexible pricing models including hourly consultation, project-based work, and ongoing managed service packages. We'll discuss the best fit during your consultation.
            </div>
          </details>
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
              <li><NuxtLink to="/" class="hover:text-blue-400 transition">Home</NuxtLink></li>
              <li><a href="/#services" class="hover:text-blue-400 transition">System Modernisation</a></li>
              <li><a href="/#services" class="hover:text-blue-400 transition">Secure Hosting</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li><a href="#" class="hover:text-blue-400 transition">About Us</a></li>
              <li><NuxtLink to="/contact" class="hover:text-blue-400 transition">Contact</NuxtLink></li>
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

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
  budget: '',
  privacy: false
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  // Reset messages
  successMessage.value = ''
  errorMessage.value = ''
  
  // Validation
  if (!form.value.name || !form.value.email || !form.value.service || !form.value.message) {
    errorMessage.value = 'Please fill in all required fields.'
    return
  }

  if (!form.value.privacy) {
    errorMessage.value = 'Please agree to the privacy policy.'
    return
  }

  isSubmitting.value = true

  try {
    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In production, you would send data to your backend:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form.value)
    // })

    successMessage.value = 'Thank you! Your message has been sent. We\'ll be in touch within 24 hours.'
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
      budget: '',
      privacy: false
    }

    // Clear success message after 5 seconds
    setTimeout(() => {
      successMessage.value = ''
    }, 5000)
  } catch (error) {
    errorMessage.value = 'An error occurred. Please try again or contact us directly.'
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
</style>