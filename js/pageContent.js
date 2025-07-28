/**
 * Page Content Configuration
 * Contains all page templates and content data
 */
const PageContent = {
    home: `
        <div id="home-content" class="pb-8">
            <!-- Açaí Bowls & Superfoods -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-gray-200 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.2s both;">
                <div class="max-w-6xl mx-auto">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0" style="animation: fadeInLeft 0.8s ease-out;">
                            <h2 class="text-4xl font-bold text-gray-900 mb-6">Camilla's Café<br><span class="text-purple-600">A Taste of Brazil</span></h2>
                            <p class="text-xl text-gray-700 mb-6">Experience the authentic flavors of Brazil with our artisanal breads, fresh pastries, and specialty coffee. Each item is crafted with traditional recipes and the finest ingredients for a truly delicious experience.</p>
                            <button class="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors mt-4" 
                                    onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                View Our Menu
                            </button>
                        </div>
                        <div class="md:w-1/2 relative flex items-center justify-center" style="animation: fadeInRight 0.8s ease-out;">
                            <div class="bg-white rounded-xl p-1 border border-gray-200 shadow-2xl w-full">
                                <div class="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-lg">
                                    <img src="./assets/images/tasteofbrazil.jpg" 
                                         alt="Taste of Brazil - Authentic Brazilian Cuisine" 
                                         class="max-w-full max-h-full object-cover">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Featured Menu Items -->
            <div class="bg-green-50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-green-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.4s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">Brazilian Specialties</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Experience the authentic flavors of Brazil with our most beloved dishes</p>
                </div>
                <div class="swiper game-day-swiper max-w-6xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="./assets/images/paode.jpg" alt="Pão de Queijo" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Pão de Queijo</h3>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">Brazilian cheese bread made with tapioca flour and Minas cheese. These gluten-free delights are crispy on the outside, chewy on the inside, and absolutely irresistible when served warm.</p>
                              <button class="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  Order Now
                              </button>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="./assets/images/feijoada.jpg" alt="Feijoada" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Feijoada</h3>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">Brazil's national dish - a rich and hearty black bean stew with pork, served with rice, collard greens, farofa, and orange slices. Available on weekends only.</p>
                              <button class="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  Order Now
                              </button>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="./assets/images/brigadeiro.jpg" alt="Brigadeiros" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Brigadeiros</h3>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">Brazil's favorite chocolate truffles made with condensed milk, cocoa powder, butter, and chocolate sprinkles. These rich, fudgy treats are a must-try at our café.</p>
                              <button class="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  Order Now
                              </button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination game-day-swiper-pagination"></div>
                </div>

                <!-- View Full Menu CTA -->
                <div class="text-center mt-12">
                    <a href="#" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')" class="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                        View Full Menu
                    </a>
                </div>
            </div>

            <!-- Customer Testimonials -->
            <div class="bg-green-50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-green-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.6s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">Customer Reviews</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Hear what our customers love about Camilla's authentic Brazilian flavors</p>
                </div>
                <div class="swiper fans-say-swiper max-w-4xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600 mr-4">CR</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Carlos R.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Pão de Queijo here takes me back to my grandmother's kitchen in Belo Horizonte! Perfectly crispy on the outside and wonderfully chewy inside. I come here every weekend just for these cheesy delights!"</p>
                              <div class="text-xs text-gray-500">Brazilian Native</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.8s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600 mr-4">LM</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Luiza M.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Feijoada on Saturdays is absolutely incredible! Just like my mother used to make in Rio. The black beans are perfectly seasoned, and the meat is so tender. The farofa and orange slices complete the experience!"</p>
                              <div class="text-xs text-gray-500">Regular Customer</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 1.0s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600 mr-4">TP</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Thomas P.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Brigadeiros are to die for! I've tried many Brazilian bakeries, but Camilla's version is hands down the best. The perfect balance of chocolatey goodness and sweetness. I always grab a box to take home!"</p>
                              <div class="text-xs text-gray-500">Dessert Connoisseur</div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination fans-say-swiper-pagination"></div>
                </div>
            </div>
        </div>
    `,

    // Menu page content is handled dynamically by PageManager

    order: `
        <div id="order-content" class="pt-6 md:pt-12 px-4 md:px-0">
            <div class="text-center mb-6 max-w-4xl mx-auto">
                <h1 class="text-2xl md:text-3xl font-bold text-[var(--text-dark)] mb-2">My Order</h1>
                <p class="text-[var(--text-medium)]">Review your items</p>
            </div>
            
            <div class="max-w-4xl mx-auto">
                <div class="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6 mx-0">
                    <h2 class="text-lg md:text-xl font-bold text-[var(--text-dark)] mb-3 md:mb-4">Cart Items</h2>
                    <div id="cart-items-list"></div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-4 md:p-6 mx-0">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-lg md:text-xl font-bold text-[var(--text-dark)]">Total:</span>
                        <span id="cart-total" class="text-lg md:text-xl font-bold text-[var(--primary-color)]">$0.00</span>
                    </div>
                    <button class="w-full bg-[var(--primary-color)] text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    `,

    about: `
                <div class="pt-12 mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-purple-600 mr-4"></div>
                            <h1 class="text-3xl md:text-4xl font-bold text-gray-900">Our Açaí Journey</h1>
                        </div>
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">
                            Welcome to our world of Açaí, where every bowl tells a story of passion, health, and sustainability. 
                            Our journey began with a simple love for the Amazon's superfruit and a mission to share its incredible 
                            benefits with the world. What started as a small stand has blossomed into a celebration of vibrant, 
                            nutrient-packed Açaí bowls that nourish both body and soul.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">
                            We source only the finest organic Açaí berries, sustainably harvested from the heart of the Amazon rainforest. 
                            Each berry is carefully selected for its rich antioxidant properties and deep, complex flavor. Our commitment 
                            to quality means you'll never find artificial additives or preservatives—just pure, wholesome ingredients 
                            that make you feel as good as they taste.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            More than just a food trend, Açaí represents a lifestyle of balance, energy, and connection to nature. 
                            We're proud to be part of your wellness journey, whether you're fueling up for an active day, 
                            recovering from a workout, or simply treating yourself to something delicious and nutritious. 
                            Thank you for making us part of your healthy routine.
                        </p>
                    </div>
                </div>

                <!-- Why Myrtle Beach Section -->
                <div class="mb-12">
                    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-purple-500 mr-4"></div>
                            <h2 class="text-2xl font-bold text-[var(--text-dark)]">Why Our Açaí?</h2>
                        </div>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg mb-4">
                            At our Açaí bar, we're passionate about bringing you the purest, most nutrient-dense Açaí experience possible. 
                            What sets us apart is our commitment to quality at every step—from sustainable sourcing in the Amazon to 
                            the final presentation in your bowl. Our Açaí is never diluted or filled with unnecessary additives; just 
                            the authentic, antioxidant-rich superfood that your body craves.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-blue-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Premium Açaí</h3>
                                <p class="text-[var(--text-medium)] text-sm">100% organic, unsweetened Açaí puree, flash-frozen to preserve maximum nutrients and antioxidants</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-green-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Ethical Sourcing</h3>
                                <p class="text-[var(--text-medium)] text-sm">Responsibly harvested Açaí that supports Amazonian communities and preserves the rainforest</p>
                            </div>
                        </div>
                </div>

                <!-- Our Mission & Values -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-green-600 mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-gray-900 mb-4 text-center">Our Mission</h2>
                        <p class="text-gray-700 leading-relaxed">
                            To bring the power of Açaí to your daily life through delicious, nutrient-packed bowls that fuel 
                            your active lifestyle. We're committed to sustainable sourcing, authentic flavors, and creating 
                            a community around health and wellness. Every bowl we serve is our promise of quality, taste, 
                            and positive impact—on your health and our planet.
                        </p>
                    </div>
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-green-600 mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-gray-900 mb-4 text-center">Our Values</h2>
                        <ul class="space-y-2 text-gray-700">
                            <li class="flex items-start">
                                <span class="text-green-600 mr-2">✓</span>
                                <span>100% organic, premium Açaí from sustainable sources</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">✓</span>
                                <span>Antioxidant-rich superfoods in every bowl</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">✓</span>
                                <span>No artificial additives or preservatives</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-purple-600 mr-2">✓</span>
                                <span>Supporting Amazonian communities</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Our Commitment -->
                <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 mb-12">
                    <div class="text-center mb-6">
                        <div class="w-16 h-1 bg-purple-500 mb-6 mx-auto"></div>
                        <h2 class="text-2xl font-bold text-gray-900 mb-2">Our Açaí Promise</h2>
                        <p class="text-purple-600 font-semibold">"From the Amazon to Your Bowl"</p>
                        <p class="text-purple-600 font-semibold">"Pure. Powerful. Perfectly Balanced."</p>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-sm">
                        <p class="text-gray-700 leading-relaxed text-lg text-center">
                            Every scoop of our Açaí represents a commitment to quality, sustainability, and your wellbeing. We're dedicated to bringing you the most authentic Açaí experience outside of Brazil, packed with antioxidants, essential nutrients, and incredible flavor. Whether you're starting your day, refueling after a workout, or treating yourself to something delicious, our Açaí bowls are crafted to nourish your body and delight your taste buds. Join us in celebrating the power of this incredible superfood!
                        </p>
                    </div>
                </div>


            </div>
        </div>
    `,

    contact: `
        <div id="contact-content" class="max-w-2xl mx-auto px-4 py-8 w-full">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-4">Contact Us</h1>
                <p class="text-lg text-[var(--text-medium)]">We'd love to hear from you!</p>
            </div>
            
            <div class="space-y-6 w-full">
                <div class="bg-white rounded-lg shadow-md p-6 w-full">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Get in Touch</h2>
                    <div class="space-y-4">
                        <div class="flex flex-col sm:flex-row sm:items-baseline gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Phone:</span>
                            <a href="tel:843-213-1486" class="text-[var(--text-medium)] hover:text-yellow-400 transition-colors">(843) 213-1486</a>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:items-center gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Email:</span>
                            <button onclick="navigator.clipboard.writeText('info@camillascafe.com').then(() => { const btn = event.target; const originalText = btn.innerHTML; btn.innerHTML = '✓ Copied to clipboard!'; btn.classList.add('text-green-500'); setTimeout(() => { btn.innerHTML = originalText; btn.classList.remove('text-green-500'); }, 2000); })" 
                                    class="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-color)] text-white rounded-md hover:bg-yellow-600 transition-colors w-fit"
                                    title="Click to copy email">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Copy Email
                            </button>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:items-baseline gap-x-3">
                            <span class="text-[var(--primary-color)] font-semibold whitespace-nowrap">Address:</span>
                            <span class="text-[var(--text-medium)]">314 N Kings Hwy, Myrtle Beach, SC 29577</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-6 w-full">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Hours</h2>
                    <div class="space-y-2">
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Sunday:</span>
                            <span class="text-[var(--text-dark)] font-medium">8:00 AM - 3:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Monday:</span>
                            <span class="text-[var(--text-dark)] font-medium">7:00 AM - 8:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Tuesday:</span>
                            <span class="text-[var(--text-dark)] font-medium">7:00 AM - 8:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Wednesday:</span>
                            <span class="text-[var(--text-dark)] font-medium">7:00 AM - 8:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Thursday:</span>
                            <span class="text-[var(--text-dark)] font-medium">7:00 AM - 8:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Friday:</span>
                            <span class="text-[var(--text-dark)] font-medium">7:00 AM - 10:00 PM</span>
                        </div>
                        <div class="flex flex-col xs:flex-row justify-between">
                            <span class="text-[var(--text-medium)]">Saturday:</span>
                            <span class="text-[var(--text-dark)] font-medium">7:00 AM - 10:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

};
