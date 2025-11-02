import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (999) 999-99-99",
    href: "tel:+79999999999",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@uvdigital.ru",
    href: "mailto:info@uvdigital.ru",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageSquare,
    label: "Telegram",
    value: "@uvdigital",
    href: "https://t.me/uvdigital",
    color: "from-indigo-500 to-purple-500"
  }
];

const benefits = [
  "Бесплатную консультацию",
  "Анализ вашего бизнеса",
  "Коммерческое предложение"
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl mb-6"
              initial={{ opacity: 0, y: 20, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ perspective: "1000px" }}
            >
              Обсудим ваш проект?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Оставьте заявку, и мы свяжемся с вами в течение 1 часа. Проведем бесплатную консультацию и предложим оптимальное решение.
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}
                    whileHover={{
                      scale: 1.1,
                      rotateZ: 360,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 17,
                    }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <div className="mb-1">{info.label}</div>
                    <a href={info.href} className="text-gray-600 hover:text-purple-600 transition-colors">
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits with 3D effect */}
            <motion.div 
              className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              {/* Floating orb */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <h3 className="text-lg mb-4 relative z-10">Что вы получите:</h3>
              <ul className="space-y-2 relative z-10">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div 
                      className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right side - Form with 3D effect */}
          <motion.div 
            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 relative"
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 blur-xl rounded-3xl"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  Ваше имя *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  required
                  className="w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="phone" className="block mb-2 text-gray-700">
                  Телефон *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (999) 999-99-99"
                  required
                  className="w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Расскажите о вашем проекте
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Опишите вашу задачу или идею..."
                  rows={4}
                  className="w-full resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  Отправить заявку
                </Button>
              </motion.div>

              <motion.p 
                className="text-sm text-gray-500 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
