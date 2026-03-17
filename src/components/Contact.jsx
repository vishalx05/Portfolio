import React, { useState } from 'react';
import { FiMail, FiSend, FiLoader, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all fields');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Save to Firestore
      const docRef = await addDoc(collection(db, "contacts"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
        read: false
      });

      console.log("Document written with ID: ", docRef.id);

      // Success
      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);

    } catch (error) {
      console.error("Error adding document: ", error);

      let errorMessage = 'Failed to send message. Please try again.';

      if (error.message.includes('fill in all fields')) {
        errorMessage = 'Please fill in all fields';
      } else if (error.message.includes('valid email')) {
        errorMessage = 'Please enter a valid email address';
      } else if (error.message.includes('permission-denied')) {
        errorMessage = 'Firebase permission denied. Check your Firestore rules.';
      }

      setStatus({
        loading: false,
        success: false,
        error: true,
        message: errorMessage
      });

      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate__animated animate__fadeIn">
            <div className="inline-flex items-center space-x-2 mb-4">
              <FiMail className="text-primary-600 dark:text-primary-400" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Have a question or want to work together?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate__animated animate__fadeInLeft">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg h-full">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <FiMail className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a
                        href="mailto:vishal501676@gmail.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        vishal501676@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Why contact me?</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 mt-2 bg-primary-500 rounded-full"></div>
                        <span>Project collaboration</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 mt-2 bg-primary-500 rounded-full"></div>
                        <span>Internship opportunities</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 mt-2 bg-primary-500 rounded-full"></div>
                        <span>Technical discussions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 mt-2 bg-primary-500 rounded-full"></div>
                        <span>Feedback on projects</span>
                      </li>
                    </ul>
                  </div>

                 
                </div>
              </div>
            </div>

            <div className="animate__animated animate__fadeInRight">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength="2"
                      maxLength="50"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength="10"
                      maxLength="1000"
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>

                  {status.message && (
                    <div className={`p-4 rounded-lg flex items-start space-x-3 animate__animated animate__fadeIn ${status.success ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'}`}>
                      {status.success ? <FiCheckCircle size={20} /> : <FiXCircle size={20} />}
                      <span>{status.message}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full py-3 px-6 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {status.loading ? (
                      <>
                        <FiLoader className="animate-spin" />

                      </>
                    ) : (
                      <>
                        <FiSend />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;