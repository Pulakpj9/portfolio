import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID || "", // Replace with your EmailJS Service ID
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID || "", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC || "",
        }
      )
      .then((result: any) => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        console.log("EmailJS Success: ", result);
      })
      .catch((error: any) => {
        setStatus("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      });

    setTimeout(() => setStatus(""), 3000); // Clear status after 3 seconds
  };

  const socialLinks = [
    { icon: Github, url: "https://github.com/pulakpj9", label: "GitHub" },
    {
      icon: Twitter,
      url: "https://twitter.com/pulakpj9",
      label: "X (Twitter)",
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/pulak-jain-aa1053203",
      label: "LinkedIn",
    },
    { icon: Mail, label: "Email: pulakpj9@gmail.com" },
  ];

  return (
    <section
      className="text-white py-20 w-[95vw] sm:w-[90vw] lg:w-[85vw] mx-auto relative overflow-hidden"
      id="contact"
    >
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4b5563_0%,transparent_50%)] opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center justify-between mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 lg:mb-0 text-white">
            ./Contact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 h-32 resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
            {status && (
              <p className="mt-4 text-center text-green-400">{status}</p>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700/50 flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white text-left">
              Connect With Me
            </h3>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-200 hover:text-purple-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <link.icon size={24} />
                  <span className="text-lg font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
