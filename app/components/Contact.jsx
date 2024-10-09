import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Get in Touch</h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="w-full p-3 border border-gray-300 rounded-md "
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="w-full p-3 border border-gray-300 rounded-md "
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    className="w-full p-3 border border-gray-300 rounded-md "
                    placeholder="Enter Your Subject"
                  />
                </div>
                <div>
                  <textarea
                    rows="6"
                    name="message"
                    className="w-full p-3 border border-gray-300 rounded-md "
                    placeholder="Enter Your Message"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full md:w-1/2 px-4">
            <div className="map h-[450px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.481719333196!2d77.08605677505368!3d28.495151090306933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19b7b90aaef7%3A0xabe8ba0fd3380c83!2scyberhub!5e0!3m2!1sen!2sin!4v1713441639344!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
