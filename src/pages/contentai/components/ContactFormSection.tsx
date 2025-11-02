import { motion, useInView } from "motion/react";
import {
  Send,
  Sparkles,
  Phone,
  Mail,
  Building2,
  Users,
  Share2,
  Target,
  CheckCircle2,
} from "lucide-react";
import { useRef, useState, memo, useCallback } from "react";
import { useForm } from "react-hook-form@7.55.0";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { fadeInUpFastVariants } from "../lib/motion-variants";
import { SparkleButtonLazy } from "./ui/sparkle-button-lazy";

type FormData = {
  name: string;
  phone: string;
  email?: string;
  salonName: string;
  socialNetworks: string;
  currentContent: string;
  contentGoals: string;
  hasBeautyAI: string;
};

const bottomInfoItems = [
  { icon: Sparkles, text: "Ответим за 24 часа", color: "blue" },
  {
    icon: CheckCircle2,
    text: "Бесплатная консультация",
    color: "green",
  },
  {
    icon: Target,
    text: "Контент-план в подарок",
    color: "cyan",
  },
] as const;

function ContactFormSectionComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
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
      className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden transition-colors"
      aria-labelledby="contact-title"
    >
      {/* Background decorations */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-200/20 dark:bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUpFastVariants.container}
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUpFastVariants.item}
            className="text-center space-y-4 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-blue-500/10 backdrop-blur-sm border border-blue-200/50 dark:border-blue-500/50 rounded-full shadow-sm dark:shadow-blue-500/20">
              <Sparkles
                size={16}
                className="text-blue-500 dark:text-blue-400"
                aria-hidden="true"
              />
              <span className="text-sm text-blue-700 dark:text-blue-400">
                Начните прямо сейчас
              </span>
            </div>
            <h2
              id="contact-title"
              className="text-blue-900 dark:text-blue-400 font-bold tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Запустим контент для вашего салона
            </h2>
            <p
              className="text-slate-600 dark:text-cyan-300/70 text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: "var(--font-body)",
                letterSpacing: "0.01em",
              }}
            >
              Заполните анкету и получите контент-план в подарок
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            variants={fadeInUpFastVariants.item}
            className="relative group"
          >
            <div className="relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-blue-200/50 dark:border-blue-500/30 rounded-3xl p-8 md:p-12 overflow-hidden hover:shadow-2xl dark:hover:shadow-blue-500/30 transition-all duration-300">
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-cyan-100/20 dark:from-blue-500/10 dark:via-transparent dark:to-cyan-500/10 opacity-50"
                aria-hidden="true"
              />

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative space-y-8"
                noValidate
              >
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <motion.div
                    variants={fadeInUpFastVariants.item}
                    className="space-y-2"
                  >
                    <Label
                      htmlFor="name"
                      className="text-blue-900 dark:text-blue-400 flex items-center gap-2"
                    >
                      <Users
                        size={16}
                        className="text-blue-500 dark:text-blue-400"
                        aria-hidden="true"
                      />
                      Ваше имя *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Анна"
                      className="bg-white dark:bg-slate-900/50 border-blue-200/50 dark:border-blue-500/50 text-blue-900 dark:text-cyan-100 placeholder:text-slate-400/50 dark:placeholder:text-cyan-400/50 focus:border-blue-400 dark:focus:border-blue-400 transition-colors"
                      aria-required="true"
                      aria-invalid={
                        errors.name ? "true" : "false"
                      }
                      aria-describedby={
                        errors.name ? "name-error" : undefined
                      }
                      {...register("name", {
                        required: "Введите ваше имя",
                      })}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="text-red-500 dark:text-red-400 text-sm"
                        role="alert"
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    variants={fadeInUpFastVariants.item}
                    className="space-y-2"
                  >
                    <Label
                      htmlFor="phone"
                      className="text-blue-900 dark:text-blue-400 flex items-center gap-2"
                    >
                      <Phone
                        size={16}
                        className="text-cyan-500 dark:text-cyan-400"
                        aria-hidden="true"
                      />
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      className="bg-white dark:bg-slate-900/50 border-blue-200/50 dark:border-blue-500/50 text-blue-900 dark:text-cyan-100 placeholder:text-slate-400/50 dark:placeholder:text-cyan-400/50 focus:border-cyan-400 dark:focus:border-cyan-400 transition-colors"
                      aria-required="true"
                      aria-invalid={
                        errors.phone ? "true" : "false"
                      }
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                      {...register("phone", {
                        required: "Введите номер телефона",
                        pattern: {
                          value: /^[\d\s\+\-\(\)]+$/,
                          message:
                            "Некорректный номер телефона",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p
                        id="phone-error"
                        className="text-red-500 dark:text-red-400 text-sm"
                        role="alert"
                      >
                        {errors.phone.message}
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Business Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <motion.div
                    variants={fadeInUpFastVariants.item}
                    className="space-y-2"
                  >
                    <Label
                      htmlFor="email"
                      className="text-blue-900 dark:text-blue-400 flex items-center gap-2"
                    >
                      <Mail
                        size={16}
                        className="text-green-500 dark:text-green-400"
                        aria-hidden="true"
                      />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="anna@salon.ru"
                      className="bg-white dark:bg-slate-900/50 border-blue-200/50 dark:border-blue-500/50 text-blue-900 dark:text-cyan-100 placeholder:text-slate-400/50 dark:placeholder:text-cyan-400/50 focus:border-green-400 dark:focus:border-green-400 transition-colors"
                      aria-invalid={
                        errors.email ? "true" : "false"
                      }
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      {...register("email", {
                        pattern: {
                          value:
                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Некорректный email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-red-500 dark:text-red-400 text-sm"
                        role="alert"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Salon Name */}
                  <motion.div
                    variants={fadeInUpFastVariants.item}
                    className="space-y-2"
                  >
                    <Label
                      htmlFor="salonName"
                      className="text-blue-900 dark:text-blue-400 flex items-center gap-2"
                    >
                      <Building2
                        size={16}
                        className="text-orange-500 dark:text-orange-400"
                        aria-hidden="true"
                      />
                      Название салона *
                    </Label>
                    <Input
                      id="salonName"
                      placeholder="Салон красоты 'Ангел'"
                      className="bg-white dark:bg-slate-900/50 border-blue-200/50 dark:border-blue-500/50 text-blue-900 dark:text-cyan-100 placeholder:text-slate-400/50 dark:placeholder:text-cyan-400/50 focus:border-orange-400 dark:focus:border-orange-400 transition-colors"
                      aria-required="true"
                      aria-invalid={
                        errors.salonName ? "true" : "false"
                      }
                      aria-describedby={
                        errors.salonName
                          ? "salon-error"
                          : undefined
                      }
                      {...register("salonName", {
                        required: "Введите название салона",
                      })}
                    />
                    {errors.salonName && (
                      <p
                        id="salon-error"
                        className="text-red-500 dark:text-red-400 text-sm"
                        role="alert"
                      >
                        {errors.salonName.message}
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Selects */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Social Networks */}
                  <motion.div
                    variants={fadeInUpFastVariants.item}
                    className="space-y-2"
                  >
                    <Label
                      htmlFor="socialNetworks"
                      className="text-blue-900 dark:text-blue-400 flex items-center gap-2"
                    >
                      <Share2
                        size={16}
                        className="text-purple-500 dark:text-purple-400"
                        aria-hidden="true"
                      />
                      Соцсети *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setValue("socialNetworks", value, {
                          shouldValidate: true,
                        })
                      }
                      {...register("socialNetworks", {
                        required: "Выберите соцсеть",
                      })}
                    >
                      <SelectTrigger
                        id="socialNetworks"
                        className="bg-white dark:bg-slate-900/50 border-blue-200/50 dark:border-blue-500/50 text-blue-900 dark:text-cyan-100 focus:border-purple-400 dark:focus:border-purple-400"
                        aria-required="true"
                        aria-invalid={
                          errors.socialNetworks
                            ? "true"
                            : "false"
                        }
                      >
                        <SelectValue placeholder="Выберите..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-slate-900 border-blue-200/50 dark:border-blue-500/50 text-blue-900 dark:text-cyan-100">
                        <SelectItem value="instagram">
                          Instagram
                        </SelectItem>
                        <SelectItem value="vk">VK</SelectItem>
                        <SelectItem value="telegram">
                          Telegram
                        </SelectItem>
                        <SelectItem value="multiple">
                          Несколько площадок
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.socialNetworks && (
                      <p
                        className="text-red-500 dark:text-red-400 text-sm"
                        role="alert"
                      >
                        {errors.socialNetworks.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Current Content */}
                  <motion.div
                    variants={fadeInUpFastVariants.item}
                    className="space-y-2"
                  >
                    <Label
                      htmlFor="currentContent"
                      className="text-blue-900 dark:text-blue-400 flex items-center gap-2"
                    >
                      <Target
                        size={16}
                        className="text-indigo-500 dark:text-indigo-400"
                        aria-hidden="true"
                      />
                      Сейчас ведёте контент? *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setValue("currentContent", value, {
                          shouldValidate: true,
                        })
                      }
                      {...register("currentContent", {
                        required: "Выберите вариант",
                      })}
                    >
                      <SelectTrigger
                        id="currentContent"
                        className="bg-white dark:bg-slate-900/50 border-blue-200/50 dark:border-blue-500/50 text-blue-900 dark:text-cyan-100 focus:border-indigo-400 dark:focus:border-indigo-400"
                        aria-required="true"
                        aria-invalid={
                          errors.currentContent
                            ? "true"
                            : "false"
                        }
                      >
                        <SelectValue placeholder="Выберите..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-slate-900 border-blue-200/50 dark:border-blue-500/50 text-blue-900 dark:text-cyan-100">
                        <SelectItem value="yes-regular">
                          Да, регулярно
                        </SelectItem>
                        <SelectItem value="yes-sometimes">
                          Да, но нерегулярно
                        </SelectItem>
                        <SelectItem value="outsource">
                          Отдали на аутсорс
                        </SelectItem>
                        <SelectItem value="no">
                          Нет, не ведём
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.currentContent && (
                      <p
                        className="text-red-500 dark:text-red-400 text-sm"
                        role="alert"
                      >
                        {errors.currentContent.message}
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Has Beauty AI */}
                <motion.div
                  variants={fadeInUpFastVariants.item}
                  className="space-y-2"
                >
                  <Label
                    htmlFor="hasBeautyAI"
                    className="text-blue-900 dark:text-blue-400 flex items-center gap-2"
                  >
                    <Sparkles
                      size={16}
                      className="text-yellow-600 dark:text-yellow-400"
                      aria-hidden="true"
                    />
                    Используете Beauty AI? *
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      setValue("hasBeautyAI", value, {
                        shouldValidate: true,
                      })
                    }
                    {...register("hasBeautyAI", {
                      required: "Выберите вариант",
                    })}
                  >
                    <SelectTrigger
                      id="hasBeautyAI"
                      className="bg-white dark:bg-slate-900/50 border-blue-200/50 dark:border-blue-500/50 text-blue-900 dark:text-cyan-100 focus:border-yellow-400 dark:focus:border-yellow-400"
                      aria-required="true"
                      aria-invalid={
                        errors.hasBeautyAI ? "true" : "false"
                      }
                    >
                      <SelectValue placeholder="Выберите..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-slate-900 border-blue-200/50 dark:border-blue-500/50 text-blue-900 dark:text-cyan-100">
                      <SelectItem value="yes">
                        Да, уже используем
                      </SelectItem>
                      <SelectItem value="planning">
                        Планируем подключить
                      </SelectItem>
                      <SelectItem value="interested">
                        Интересно узнать больше
                      </SelectItem>
                      <SelectItem value="no">
                        Нет, только Content AI
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.hasBeautyAI && (
                    <p
                      className="text-red-500 dark:text-red-400 text-sm"
                      role="alert"
                    >
                      {errors.hasBeautyAI.message}
                    </p>
                  )}
                </motion.div>

                {/* Goals */}
                <motion.div
                  variants={fadeInUpFastVariants.item}
                  className="space-y-2"
                >
                  <Label
                    htmlFor="contentGoals"
                    className="text-blue-900 dark:text-blue-400 flex items-center gap-2"
                  >
                    <Sparkles
                      size={16}
                      className="text-blue-500 dark:text-blue-400"
                      aria-hidden="true"
                    />
                    Какой контент хотите? *
                  </Label>
                  <Textarea
                    id="contentGoals"
                    placeholder="Например: посты о новых услугах, фото работ мастеров, акции и скидки, образовательный контент..."
                    rows={4}
                    className="bg-white dark:bg-slate-900/50 border-blue-200/50 dark:border-blue-500/50 text-blue-900 dark:text-cyan-100 placeholder:text-slate-400/50 dark:placeholder:text-cyan-400/50 focus:border-blue-400 dark:focus:border-blue-400 transition-colors resize-none"
                    aria-required="true"
                    aria-invalid={
                      errors.contentGoals ? "true" : "false"
                    }
                    aria-describedby={
                      errors.contentGoals
                        ? "goals-error"
                        : undefined
                    }
                    {...register("contentGoals", {
                      required: "Опишите ваши пожелания",
                      minLength: {
                        value: 10,
                        message: "Минимум 10 символов",
                      },
                    })}
                  />
                  {errors.contentGoals && (
                    <p
                      id="goals-error"
                      className="text-red-500 dark:text-red-400 text-sm"
                      role="alert"
                    >
                      {errors.contentGoals.message}
                    </p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  variants={fadeInUpFastVariants.item}
                  className="pt-4"
                >
                  {!isSubmitted ? (
                    <SparkleButtonLazy
                      type="submit"
                      className="w-full shadow-lg shadow-blue-300/30 dark:shadow-blue-500/50"
                      showSparkles={true}
                    >
                      <span className="flex items-center gap-2">
                        <Send size={20} aria-hidden="true" />
                        Получить контент-план
                      </span>
                    </SparkleButtonLazy>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-full py-4 px-8 bg-green-100 dark:bg-green-900/30 border border-green-300/50 dark:border-green-500/50 text-green-700 dark:text-green-300 rounded-2xl flex items-center justify-center gap-3"
                      role="status"
                      aria-live="polite"
                    >
                      <CheckCircle2
                        size={20}
                        aria-hidden="true"
                      />
                      Заявка отправлена! Контент-план уже
                      готовится для вас
                    </motion.div>
                  )}
                </motion.div>

                {/* Privacy Note */}
                <motion.p
                  variants={fadeInUpFastVariants.item}
                  className="text-slate-500 dark:text-cyan-400/60 text-xs text-center"
                >
                  Нажимая кнопку, вы соглашаетесь с политикой
                  конфиденциальности
                </motion.p>
              </form>
            </div>
          </motion.div>

          {/* Bottom Info Cards */}
          <motion.div
            variants={fadeInUpFastVariants.item}
            className="grid md:grid-cols-3 gap-4 mt-12"
          >
            {bottomInfoItems.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 p-4 bg-white/60 dark:bg-slate-800/50 border border-blue-200/50 dark:border-blue-500/50 rounded-2xl backdrop-blur-sm"
              >
                <div
                  className={`p-2 rounded-lg bg-${item.color}-100 dark:bg-${item.color}-500/20`}
                  aria-hidden="true"
                >
                  <item.icon
                    size={20}
                    className={`text-${item.color}-600 dark:text-${item.color}-400`}
                  />
                </div>
                <span className="text-blue-800 dark:text-cyan-300 text-sm">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export const ContactFormSection = memo(
  ContactFormSectionComponent,
);
