"use client";
import React, { useState } from 'react';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    companyName: "",
    subject: "",
    consent: false
  });
  
  // Form status
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message || !formData.companyName || !formData.subject) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: "Please fill in all fields"
      });
      return;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: "Please enter a valid email address"
      });
      return;
    }

    if (!formData.consent) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: "You must agree to the Privacy Policy to submit the form"
      });
      return;
    }
    
    try {
      setFormStatus({
        isSubmitting: true,
        isSubmitted: false,
        error: ""
      });
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Success
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: ""
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        companyName: "",
        subject: "",
        consent: false
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: error instanceof Error ? error.message : 'An error occurred'
      });
    }
  };
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with our IT and cybersecurity experts to discuss your technology needs or schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Headquarters</h3>
                  <address className="not-italic text-gray-400">
                    W-304, Siddhraj Z Square<br />
                    Kudasan, Gandhinagar<br />
                    Gujarat 382421<br />
                    India
                  </address>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Contact Information</h3>
                  <div className="space-y-2 text-gray-400">
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +91 79 2345 6789
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      info@k-infotech.com
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Business Hours</h3>
                  <div className="space-y-1 text-gray-400">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM PT</p>
                    <p className="font-semibold">Emergency Response: 24/7/365</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>
                {formStatus.isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p>Your message has been sent successfully. We will get back to you soon.</p>
                <button
                  onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {formStatus.error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                    {formStatus.error}
                  </div>
                )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                    <input 
                      type="text" 
                      id="companyName" 
                      name='companyName'
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                      placeholder="Company Inc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange} 
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      rows="5" 
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                      placeholder="Describe your IT or security needs or questions..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="flex items-center">
                      <input id='consent' name='consent' value={formData.consent} onChange={handleChange} type="checkbox" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 bg-gray-800 border-gray-700 rounded" />
                      <span className="ml-2 text-sm text-gray-400">
                        I agree to the <a href="/privacy" className="text-emerald-500 hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                      </span>
                    </label>
                  </div>
                  
                  <div>
                    <button 
                      type="submit"
                      disabled={formStatus.isSubmitting}
                      className={`w-full ${formStatus.isSubmitting ? 'bg-gray-600' : 'bg-emerald-600 hover:bg-emerald-700'} text-white px-6 py-3 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2`}
                      // className="w-full btn-primary py-3"
                    >
                      {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
            )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12">Our Global Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black p-6 rounded-lg shadow-md border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-white">North America</h3>
              <ul className="space-y-2 text-gray-400">
                <li>New York</li>
                <li>Chicago</li>
                <li>Toronto</li>
              </ul>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-md border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-white">Europe</h3>
              <ul className="space-y-2 text-gray-400">
                <li>London</li>
                <li>Berlin</li>
                <li>Paris</li>
                <li>Amsterdam</li>
              </ul>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-md border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-white">Asia Pacific</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Gandhinagar (HQ)</li>
                <li>Singapore</li>
                <li>Tokyo</li>
                <li>Sydney</li>
                <li>Mumbai</li>
              </ul>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-md border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-white">Middle East & Africa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Dubai</li>
                <li>Tel Aviv</li>
                <li>Johannesburg</li>
                <li>Cape Town</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Emergency Contact */}
      <section className="py-12 bg-emerald-900 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">IT Emergency?</h2>
              <p className="text-emerald-100">Our technical support team is available 24/7/365.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center text-xl font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Emergency Hotline: +91 79 911-CYBER
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 