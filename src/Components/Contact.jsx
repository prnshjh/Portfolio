import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion"

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }} viewport={{ once: true }}  className="my-10 text-center text-4xl">Get in Touch</motion.h2>




      <div className="max-w-lg mx-auto p-6 shadow-lg rounded-lg">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <motion.input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <motion.input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <motion.input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <motion.textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <motion.button
            type="submit"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} 
            className="w-full p-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-900 transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </motion.button>

        </form>


        {success && (
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: success ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="mt-3 text-green-600 text-center"
        >
          Message sent successfully!
        </motion.p>
        )}
        {error && (
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: error ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="mt-3 text-red-600 text-center"
        >
          Failed to send message. Try again!
        </motion.p>
        )}
      </div>
    </div>
  );
};

export default Contact;
