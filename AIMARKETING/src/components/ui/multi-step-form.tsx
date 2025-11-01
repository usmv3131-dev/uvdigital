import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Mail, Phone, Building, MessageSquare, Target } from 'lucide-react';
import ProgressIndicator from './progress-indicator';
import { cn } from './utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  goal: string;
  message: string;
}

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isExpanded, setIsExpanded] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    business: '',
    goal: '',
    message: '',
  });

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
      setIsExpanded(false);
    } else {
      // Handle form submission
      console.log('Form submitted:', formData);
      // You can add your submission logic here
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setIsExpanded(true);
    }
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Оптимизированные варианты анимации для плавного перехода
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(4px)',
    }),
  };

  // Оптимальные параметры spring для плавности
  const springTransition = {
    type: "spring",
    stiffness: 180,
    damping: 24,
    mass: 0.8,
  };

  // Transition для opacity и других свойств
  const opacityTransition = {
    duration: 0.4,
    ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
  };

  const [direction, setDirection] = useState(0);

  const handleStepChange = (newStep: number) => {
    setDirection(newStep > step ? 1 : -1);
    setStep(newStep);
  };

  // Stagger анимация для полей формы
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-12">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: springTransition,
              opacity: opacityTransition,
              scale: opacityTransition,
              filter: { duration: 0.3 },
            }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {step === 1 && (
                <>
                  <motion.div variants={itemVariants} className="text-center mb-8">
                    <h3 className="text-3xl mb-3">Давайте познакомимся</h3>
                    <p className="text-purple-100 text-lg">Расскажите немного о себе</p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 transition-colors group-focus-within:text-purple-600" />
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="w-full pl-12 pr-6 py-4 rounded-xl text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 transition-colors group-focus-within:text-purple-600" />
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full pl-12 pr-6 py-4 rounded-xl text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 transition-colors group-focus-within:text-purple-600" />
                    <input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="w-full pl-12 pr-6 py-4 rounded-xl text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md"
                    />
                  </motion.div>
                </>
              )}

              {step === 2 && (
                <>
                  <motion.div variants={itemVariants} className="text-center mb-8">
                    <h3 className="text-3xl mb-3">О вашем бизнесе</h3>
                    <p className="text-purple-100 text-lg">Чтобы мы могли предложить лучшее решение</p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative group">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 transition-colors group-focus-within:text-purple-600" />
                    <input
                      type="text"
                      placeholder="Сфера бизнеса (например: онлайн-школа, салон красоты)"
                      value={formData.business}
                      onChange={(e) => updateFormData('business', e.target.value)}
                      className="w-full pl-12 pr-6 py-4 rounded-xl text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative group">
                    <Target className="absolute left-4 top-4 w-5 h-5 text-purple-400 transition-colors group-focus-within:text-purple-600" />
                    <select
                      value={formData.goal}
                      onChange={(e) => updateFormData('goal', e.target.value)}
                      className="w-full pl-12 pr-6 py-4 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:scale-[1.02] transition-all duration-300 appearance-none cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <option value="">Выберите цель</option>
                      <option value="more-clients">Получать больше клиентов</option>
                      <option value="automate">Автоматизировать маркетинг</option>
                      <option value="strategy">Создать стратегию продвижения</option>
                      <option value="analytics">Настроить аналитику</option>
                      <option value="other">Другое</option>
                    </select>
                  </motion.div>
                </>
              )}

              {step === 3 && (
                <>
                  <motion.div variants={itemVariants} className="text-center mb-8">
                    <h3 className="text-3xl mb-3">Расскажите подробнее</h3>
                    <p className="text-purple-100 text-lg">О вашей ситуации и ожиданиях</p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-purple-400 transition-colors group-focus-within:text-purple-600" />
                    <textarea
                      placeholder="Опишите вашу текущую ситуацию, какие задачи хотите решить..."
                      value={formData.message}
                      onChange={(e) => updateFormData('message', e.target.value)}
                      rows={6}
                      className="w-full pl-12 pr-6 py-4 rounded-xl text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:scale-[1.01] transition-all duration-300 resize-none shadow-sm hover:shadow-md"
                    />
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="bg-white/10 rounded-xl p-5 backdrop-blur-sm border border-white/20 shadow-lg"
                  >
                    <p className="text-sm text-purple-100 leading-relaxed">
                      ✨ После отправки заявки наш специалист свяжется с вами в течение 24 часов для обсуждения деталей
                    </p>
                  </motion.div>
                </>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <ProgressIndicator
        step={step}
        isExpanded={isExpanded}
        onBack={handleBack}
        onContinue={handleContinue}
        totalSteps={3}
      />
    </div>
  );
};

export default MultiStepForm;
