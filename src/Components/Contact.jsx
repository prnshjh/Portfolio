import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";

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
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>



      {/* Contact Form */}
      <div className="max-w-lg mx-auto p-6 shadow-lg rounded-lg">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button
            type="submit"
            className="w-full p-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-900 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Success & Error Messages */}
        {success && (
          <p className="mt-3 text-green-600 text-center">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="mt-3 text-red-600 text-center">
            Failed to send message. Try again!
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
