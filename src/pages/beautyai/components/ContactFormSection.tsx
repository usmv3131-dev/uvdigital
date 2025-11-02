import { motion, useInView } from "motion/react";
import { Send, Sparkles, Phone, Mail, Building2, Users, Database, Calendar, CheckCircle2 } from "lucide-react";
import { useRef, useState, memo, useCallback } from "react";
import { useForm } from "react-hook-form@7.55.0";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { fadeInUpFastVariants } from "../lib/motion-variants";
import { ButtonGradient } from "./ui/button-gradient";

type FormData = {
  name: string;
  phone: string;
  email?: string;
  salonName: string;
  mastersCount: string;
  hasCRM: string;
  automationGoals: string;
  launchTime: string;
};

const bottomInfoItems = [
  { icon: Sparkles, text: "Ответим за 24 часа", color: "rose" },
  { icon: CheckCircle2, text: "Бесплатная консультация", color: "green" },
  { icon: Calendar, text: "Запуск за 3 дня", color: "blue" },
] as const;

function ContactFormSectionComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = useCallback((data: FormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  }, []);

  return (
    <section 
      id="contact"
      className="relative py-20 md:py-32 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 overflow-hidden transition-colors" 
      aria-labelledby="contact-title"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-rose-200/20 dark:bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pink-200/20 dark:bg-fuchsia-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUpFastVariants.container}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUpFastVariants.item} className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-purple-900/30 backdrop-blur-sm border border-rose-200/50 dark:border-purple-500/50 rounded-full shadow-sm dark:shadow-purple-500/20">
              <Sparkles size={16} className="text-rose-500 dark:text-purple-400" aria-hidden="true" />
              <span className="text-sm text-rose-700 dark:text-purple-300">Начните прямо сейчас</span>
            </div>
            <h2 id="contact-title" className="text-rose-900 dark:text-purple-100">
              Запустим AI агента для вашего салона
            </h2>
            <p className="text-rose-700/70 dark:text-purple-300/70 text-lg max-w-2xl mx-auto">
              Заполните анкету и мы свяжемся с вами в течение 24 часов
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div variants={fadeInUpFastVariants.item} className="relative group">
            <div className="relative bg-white/80 dark:bg-purple-900/20 backdrop-blur-sm border border-rose-200/50 dark:border-purple-500/30 rounded-3xl p-8 md:p-12 overflow-hidden hover:shadow-2xl dark:hover:shadow-purple-500/30 transition-all duration-300">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 via-transparent to-pink-100/20 dark:from-purple-500/10 dark:via-transparent dark:to-fuchsia-500/10 opacity-50" aria-hidden="true" />

              <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-8" noValidate>
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <motion.div variants={fadeInUpFastVariants.item} className="space-y-2">
                    <Label htmlFor="name" className="text-rose-900 dark:text-purple-100 flex items-center gap-2">
                      <Users size={16} className="text-rose-500 dark:text-purple-400" aria-hidden="true" />
                      Ваше имя *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Анна"
                      className="bg-white dark:bg-purple-900/30 border-rose-200/50 dark:border-purple-500/50 text-rose-900 dark:text-purple-100 placeholder:text-rose-400/50 dark:placeholder:text-purple-400/50 focus:border-rose-400 dark:focus:border-purple-400 transition-colors"
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      {...register("name", { required: "Введите ваше имя" })}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 dark:text-red-400 text-sm" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={fadeInUpFastVariants.item} className="space-y-2">
                    <Label htmlFor="phone" className="text-rose-900 dark:text-purple-100 flex items-center gap-2">
                      <Phone size={16} className="text-blue-500 dark:text-blue-400" aria-hidden="true" />
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      className="bg-white dark:bg-purple-900/30 border-rose-200/50 dark:border-purple-500/50 text-rose-900 dark:text-purple-100 placeholder:text-rose-400/50 dark:placeholder:text-purple-400/50 focus:border-blue-400 dark:focus:border-blue-400 transition-colors"
                      aria-required="true"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      {...register("phone", {
                        required: "Введите номер телефона",
                        pattern: {
                          value: /^[\d\s\+\-\(\)]+$/,
                          message: "Некорректный номер телефона",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-red-500 dark:text-red-400 text-sm" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Business Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <motion.div variants={fadeInUpFastVariants.item} className="space-y-2">
                    <Label htmlFor="email" className="text-rose-900 dark:text-purple-100 flex items-center gap-2">
                      <Mail size={16} className="text-green-500 dark:text-green-400" aria-hidden="true" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="anna@salon.ru"
                      className="bg-white dark:bg-purple-900/30 border-rose-200/50 dark:border-purple-500/50 text-rose-900 dark:text-purple-100 placeholder:text-rose-400/50 dark:placeholder:text-purple-400/50 focus:border-green-400 dark:focus:border-green-400 transition-colors"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      {...register("email", {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Некорректный email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 dark:text-red-400 text-sm" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Salon Name */}
                  <motion.div variants={fadeInUpFastVariants.item} className="space-y-2">
                    <Label htmlFor="salonName" className="text-rose-900 dark:text-purple-100 flex items-center gap-2">
                      <Building2 size={16} className="text-orange-500 dark:text-orange-400" aria-hidden="true" />
                      Название салона *
                    </Label>
                    <Input
                      id="salonName"
                      placeholder="Салон красоты 'Ангел'"
                      className="bg-white dark:bg-purple-900/30 border-rose-200/50 dark:border-purple-500/50 text-rose-900 dark:text-purple-100 placeholder:text-rose-400/50 dark:placeholder:text-purple-400/50 focus:border-orange-400 dark:focus:border-orange-400 transition-colors"
                      aria-required="true"
                      aria-invalid={errors.salonName ? "true" : "false"}
                      aria-describedby={errors.salonName ? "salon-error" : undefined}
                      {...register("salonName", { required: "Введите название салона" })}
                    />
                    {errors.salonName && (
                      <p id="salon-error" className="text-red-500 dark:text-red-400 text-sm" role="alert">
                        {errors.salonName.message}
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Selects */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Masters Count */}
                  <motion.div variants={fadeInUpFastVariants.item} className="space-y-2">
                    <Label htmlFor="mastersCount" className="text-rose-900 dark:text-purple-100 flex items-center gap-2">
                      <Users size={16} className="text-pink-500 dark:text-pink-400" aria-hidden="true" />
                      Количество мастеров *
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("mastersCount", value, { shouldValidate: true })}
                      {...register("mastersCount", { required: "Выберите количество" })}
                    >
                      <SelectTrigger 
                        id="mastersCount"
                        className="bg-white dark:bg-purple-900/30 border-rose-200/50 dark:border-purple-500/50 text-rose-900 dark:text-purple-100 focus:border-pink-400 dark:focus:border-pink-400"
                        aria-required="true"
                        aria-invalid={errors.mastersCount ? "true" : "false"}
                      >
                        <SelectValue placeholder="Выберите..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-slate-900 border-rose-200/50 dark:border-purple-500/50 text-rose-900 dark:text-purple-100">
                        <SelectItem value="1-3">1-3 мастера</SelectItem>
                        <SelectItem value="4-7">4-7 мастеров</SelectItem>
                        <SelectItem value="8-15">8-15 мастеров</SelectItem>
                        <SelectItem value="15+">Более 15 мастеров</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.mastersCount && (
                      <p className="text-red-500 dark:text-red-400 text-sm" role="alert">
                        {errors.mastersCount.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Has CRM */}
                  <motion.div variants={fadeInUpFastVariants.item} className="space-y-2">
                    <Label htmlFor="hasCRM" className="text-rose-900 dark:text-purple-100 flex items-center gap-2">
                      <Database size={16} className="text-cyan-500 dark:text-cyan-400" aria-hidden="true" />
                      Используете CRM? *
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("hasCRM", value, { shouldValidate: true })}
                      {...register("hasCRM", { required: "Выберите вариант" })}
                    >
                      <SelectTrigger 
                        id="hasCRM"
                        className="bg-white dark:bg-purple-900/30 border-rose-200/50 dark:border-purple-500/50 text-rose-900 dark:text-purple-100 focus:border-cyan-400 dark:focus:border-cyan-400"
                        aria-required="true"
                        aria-invalid={errors.hasCRM ? "true" : "false"}
                      >
                        <SelectValue placeholder="Выберите..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-slate-900 border-rose-200/50 dark:border-purple-500/50 text-rose-900 dark:text-purple-100">
                        <SelectItem value="yes-yclients">Да, YClients</SelectItem>
                        <SelectItem value="yes-amo">Да, AmoCRM</SelectItem>
                        <SelectItem value="yes-other">Да, другая</SelectItem>
                        <SelectItem value="no">Нет, не используем</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.hasCRM && (
                      <p className="text-red-500 dark:text-red-400 text-sm" role="alert">
                        {errors.hasCRM.message}
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Launch Time */}
                <motion.div variants={fadeInUpFastVariants.item} className="space-y-2">
                  <Label htmlFor="launchTime" className="text-rose-900 dark:text-purple-100 flex items-center gap-2">
                    <Calendar size={16} className="text-yellow-600 dark:text-yellow-400" aria-hidden="true" />
                    Когда планируете запуск? *
                  </Label>
                  <Select
                    onValueChange={(value) => setValue("launchTime", value, { shouldValidate: true })}
                    {...register("launchTime", { required: "Выберите срок" })}
                  >
                    <SelectTrigger 
                      id="launchTime"
                      className="bg-white dark:bg-purple-900/30 border-rose-200/50 dark:border-purple-500/50 text-rose-900 dark:text-purple-100 focus:border-yellow-400 dark:focus:border-yellow-400"
                      aria-required="true"
                      aria-invalid={errors.launchTime ? "true" : "false"}
                    >
                      <SelectValue placeholder="Выберите..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-slate-900 border-rose-200/50 dark:border-purple-500/50 text-rose-900 dark:text-purple-100">
                      <SelectItem value="asap">Как можно скорее</SelectItem>
                      <SelectItem value="week">В течение недели</SelectItem>
                      <SelectItem value="month">В течение месяца</SelectItem>
                      <SelectItem value="later">Позже, пока изучаю</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.launchTime && (
                    <p className="text-red-500 dark:text-red-400 text-sm" role="alert">
                      {errors.launchTime.message}
                    </p>
                  )}
                </motion.div>

                {/* Goals */}
                <motion.div variants={fadeInUpFastVariants.item} className="space-y-2">
                  <Label htmlFor="automationGoals" className="text-rose-900 dark:text-purple-100 flex items-center gap-2">
                    <Sparkles size={16} className="text-rose-500 dark:text-purple-400" aria-hidden="true" />
                    Что хотите автоматизировать? *
                  </Label>
                  <Textarea
                    id="automationGoals"
                    placeholder="Например: запись клиентов, напоминания о визитах, ответы на частые вопросы..."
                    rows={4}
                    className="bg-white dark:bg-purple-900/30 border-rose-200/50 dark:border-purple-500/50 text-rose-900 dark:text-purple-100 placeholder:text-rose-400/50 dark:placeholder:text-purple-400/50 focus:border-rose-400 dark:focus:border-purple-400 transition-colors resize-none"
                    aria-required="true"
                    aria-invalid={errors.automationGoals ? "true" : "false"}
                    aria-describedby={errors.automationGoals ? "goals-error" : undefined}
                    {...register("automationGoals", {
                      required: "Опишите ваши задачи",
                      minLength: {
                        value: 10,
                        message: "Минимум 10 символов",
                      },
                    })}
                  />
                  {errors.automationGoals && (
                    <p id="goals-error" className="text-red-500 dark:text-red-400 text-sm" role="alert">
                      {errors.automationGoals.message}
                    </p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={fadeInUpFastVariants.item} className="pt-4">
                  {!isSubmitted ? (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ButtonGradient
                        type="submit"
                        className="w-full rounded-2xl"
                        aria-label="Отправить заявку"
                      >
                        <Send size={20} aria-hidden="true" />
                        Отправить заявку
                      </ButtonGradient>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-full py-4 px-8 bg-green-100 dark:bg-green-900/30 border border-green-300/50 dark:border-green-500/50 text-green-700 dark:text-green-300 rounded-2xl flex items-center justify-center gap-3"
                      role="status"
                      aria-live="polite"
                    >
                      <CheckCircle2 size={20} aria-hidden="true" />
                      Заявка отправлена! Мы свяжемся с вами в ближайшее время
                    </motion.div>
                  )}
                </motion.div>

                {/* Privacy Note */}
                <motion.p variants={fadeInUpFastVariants.item} className="text-rose-600/60 dark:text-purple-400/60 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </motion.p>
              </form>
            </div>
          </motion.div>

          {/* Bottom Info Cards */}
          <motion.div variants={fadeInUpFastVariants.item} className="grid md:grid-cols-3 gap-4 mt-12">
            {bottomInfoItems.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 p-4 bg-white/60 dark:bg-purple-900/30 border border-rose-200/50 dark:border-purple-500/50 rounded-2xl backdrop-blur-sm"
              >
                <div className={`p-2 rounded-lg bg-${item.color}-100 dark:bg-${item.color}-900/50`} aria-hidden="true">
                  <item.icon size={20} className={`text-${item.color}-600 dark:text-${item.color}-400`} />
                </div>
                <span className="text-rose-800 dark:text-purple-200 text-sm">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export const ContactFormSection = memo(ContactFormSectionComponent);
