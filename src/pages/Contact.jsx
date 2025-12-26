import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-center text-teal-100 max-w-3xl mx-auto">
            Have questions? We're here to help!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📧</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-700">support@jeeprepmaster.com</p>
                  <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">💬</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Live Chat</h3>
                  <p className="text-gray-700">Available Monday-Saturday</p>
                  <p className="text-gray-600 text-sm">9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">❓</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">FAQs</h3>
                  <p className="text-gray-700">Check our frequently asked questions</p>
                  <p className="text-gray-600 text-sm">Quick answers to common queries</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Common Queries</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• How to access practice questions?</li>
                <li>• How are mock tests evaluated?</li>
                <li>• How to track my progress?</li>
                <li>• Technical support and issues</li>
              </ul>
            </div>

            <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <p className="text-gray-700">
                <strong>Note:</strong> For urgent technical issues, please include your device type and browser information in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
