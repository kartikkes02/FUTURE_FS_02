'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.8), rgba(147, 51, 234, 0.8)), url('https://readdy.ai/api/search-image?query=modern%20team%20collaboration%20workspace%20office%20environment%20diverse%20professionals%20working%20together%20technology%20startup%20atmosphere%20bright%20professional%20setting&width=1200&height=600&seq=about-hero-1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="container mx-auto text-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About ShopEase</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We're passionate about making online shopping easy, enjoyable, and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, ShopEase started with a simple mission: to create an online shopping experience that puts customers first. We believe that everyone deserves access to quality products at affordable prices, delivered with exceptional service.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What began as a small startup has grown into a trusted platform serving thousands of customers worldwide. We've carefully curated our product selection to ensure every item meets our high standards for quality and value.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to innovate and expand our offerings while maintaining our commitment to customer satisfaction and sustainable business practices.
              </p>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20e-commerce%20warehouse%20fulfillment%20center%20with%20organized%20inventory%20shelves%20packages%20boxes%20efficient%20logistics%20operation%20bright%20clean%20environment&width=600&height=400&seq=story-image-1&orientation=landscape"
                alt="Our warehouse and fulfillment center"
                className="w-full rounded-lg shadow-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line w-8 h-8 flex items-center justify-center text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make is guided by what's best for our customers. Your satisfaction is our top priority.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line w-8 h-8 flex items-center justify-center text-2xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to sustainable practices in our operations and partner with eco-friendly suppliers.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line w-8 h-8 flex items-center justify-center text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                We carefully select every product to ensure it meets our high standards for quality and durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20business%20portrait%20CEO%20founder%20headshot%20confident%20leader%20modern%20office%20background%20suit%20professional%20lighting&width=300&height=300&seq=team-ceo-1&orientation=squarish"
                alt="Sarah Johnson - CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 mb-3">CEO & Founder</p>
              <p className="text-gray-600">
                Sarah founded ShopEase with a vision to revolutionize online shopping. She brings 10+ years of e-commerce experience.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20business%20portrait%20CTO%20technology%20leader%20headshot%20confident%20engineer%20modern%20office%20background%20casual%20professional%20attire&width=300&height=300&seq=team-cto-1&orientation=squarish"
                alt="Michael Chen - CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-blue-600 mb-3">CTO</p>
              <p className="text-gray-600">
                Michael leads our technology team, ensuring our platform is fast, secure, and user-friendly for all customers.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20business%20portrait%20marketing%20director%20headshot%20confident%20woman%20modern%20office%20background%20professional%20attire%20friendly%20smile&width=300&height=300&seq=team-marketing-1&orientation=squarish"
                alt="Emily Rodriguez - Marketing Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
              <p className="text-blue-600 mb-3">Marketing Director</p>
              <p className="text-gray-600">
                Emily oversees our marketing efforts, connecting with customers and building the ShopEase brand worldwide.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">ShopEase by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-xl">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-xl">Products</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-xl">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the ShopEase difference today. Start shopping with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
              Start Shopping
            </Link>
            <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors whitespace-nowrap">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}