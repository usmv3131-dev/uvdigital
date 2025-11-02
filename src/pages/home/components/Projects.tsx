import { ExternalLink, Sparkles, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState, MouseEvent, ReactNode } from "react";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";
import beautyAiImg from "figma:asset/7cd9208670dfba012ef78d4a65d617022e80cfce.png";
import contentAiImg from "figma:asset/1f7208c65318b1af970ee7126b427f3ab8839513.png";
import beautyAiCaseImg from "figma:asset/965928fe63141698447f5b6e638a608c35001c2f.png";
import contentAiCaseImg from "figma:asset/52988874fd1be18b3f1272ac5c76061fe3d9b968.png";

type Project = {
  title: string;
  description: string;
  features: string[];
  color: string;
  tag: string;
  href?: string;
  image?: string;
  illustration?: (props?: { isMobile?: boolean }) => ReactNode;
};

const AiMarketingVisual = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div className="relative h-full w-full bg-gradient-to-br from-purple-500 via-indigo-500 to-sky-500">
    <motion.div
      className="absolute inset-0"
      animate={{
        background: [
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 55%)",
          "radial-gradient(circle at 80% 30%, rgba(255,255,255,0.24), transparent 55%)",
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 55%)",
        ],
      }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
      <div className="flex items-center gap-3">
        <motion.div
          className="rounded-2xl border border-white/20 bg-white/15 p-3 shadow-lg backdrop-blur-md"
          animate={{ rotate: [-4, 4, -4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className={`text-white ${isMobile ? "h-5 w-5" : "h-7 w-7"}`} />
        </motion.div>
        <motion.div
          className="rounded-2xl border border-white/20 bg-white/10 p-3 shadow-lg backdrop-blur-md"
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ExternalLink className={`text-white ${isMobile ? "h-5 w-5" : "h-7 w-7"}`} />
        </motion.div>
        <motion.div
          className="rounded-full border border-white/30 bg-white/20 p-3 shadow-lg backdrop-blur"
          animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Download className={`text-white ${isMobile ? "h-5 w-5" : "h-6 w-6"}`} />
        </motion.div>
      </div>
    </div>
  </div>
);

const projects: Project[] = [
  {
    title: "Beauty AI",
    description: "AI-администратор для салонов красоты",
    features: [
      "Автоматическая запись клиентов 24/7",
      "Консультации и уведомления",
      "Интеграция с CRM-системой",
      "Управление расписанием мастеров",
    ],
    color: "from-pink-500 to-rose-500",
    image: beautyAiImg,
    tag: "Салоны красоты",
    href: "/beautyai",
  },
  {
    title: "Content AI",
    description: "AI-копирайтер для создания контента",
    features: [
      "Генерация статей и постов",
      "Создание контент-планов",
      "Интеграция с Beauty AI",
      "SEO-оптимизированный контент",
    ],
    color: "from-blue-500 to-cyan-500",
    image: contentAiImg,
    tag: "Контент-маркетинг",
    href: "/contentai",
  },
  {
    title: "AI Marketing",
    description: "AI-платформа для лидогенерации и маркетинговых сценариев",
    features: [
      "Автоворонки и nurture-кампании",
      "Сегментация и персонализированные офферы",
      "Сквозная аналитика и прогнозирование",
      "Интеграции с CRM и рекламой",
    ],
    color: "from-purple-500 to-indigo-500",
    tag: "Маркетинг",
    href: "/aimarketing",
    illustration: (props) => <AiMarketingVisual {...props} />,
  },
  {
    title: "Beauty AI — кейс",
    description: "Подробный разбор внедрения AI-решения и роста метрик",
    features: [
      "Структурированный процесс внедрения",
      "Аналитика по ключевым метрикам",
      "UI/UX решения и визуальные концепты",
      "Прозрачная экономика проекта",
    ],
    color: "from-violet-500 to-purple-500",
    image: beautyAiCaseImg,
    tag: "Кейс",
    href: "/cases/beautyaicase",
  },
  {
    title: "Content AI — кейс",
    description: "Премиальный лендинг с 3D-анимациями и AI контентом",
    features: [
      "Тёмная тема и glassmorphism эффекты",
      "3D-анимации и параллакс",
      "Упаковка тарифов и преимуществ",
      "Интеграция с AI-сервисами",
    ],
    color: "from-indigo-500 to-blue-500",
    image: contentAiCaseImg,
    tag: "Кейс",
    href: "/cases/contentaicase",
  },
];

// 3D Project Card Component
function ProjectCard3D({
  project,
  index,
  reducedMotion,
}: {
  project: Project;
  index: number;
  reducedMotion: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseXPos = (e.clientX - centerX) / (rect.width / 2);
    const mouseYPos = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: reducedMotion ? 0 : 60, rotateX: reducedMotion ? 0 : -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: reducedMotion ? 0 : 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 80,
      }}
      style={{
        perspective: "1500px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={(event) => {
        if (!reducedMotion) handleMouseMove(event);
      }}
      onMouseEnter={() => {
        if (!reducedMotion) setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (!reducedMotion) handleMouseLeave();
      }}
      className="group"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          z: reducedMotion ? 0 : isHovered ? 40 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        {/* Enhanced glow */}
        <motion.div
          className={`absolute -inset-2 bg-gradient-to-br ${project.color} opacity-0 blur-2xl rounded-3xl`}
          animate={{
            opacity: reducedMotion ? 0 : isHovered ? 0.5 : 0,
          }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
          {/* Image with parallax */}
          <motion.div 
            className="relative h-64 overflow-hidden"
            style={{ transform: "translateZ(30px)" }}
          >
            {project.image ? (
              <motion.div
                animate={{
                  scale: reducedMotion ? 1 : isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
              >
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            ) : (
              <div className="absolute inset-0">
                {project.illustration ? (
                  project.illustration({ isMobile: false })
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${project.color}`} />
                )}
              </div>
            )}
            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-10`}></div>
            
            {/* Tag with depth */}
            <motion.div 
              className="absolute top-4 left-4"
              style={{ transform: "translateZ(50px)" }}
              animate={{
                y: reducedMotion ? 0 : isHovered ? -5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm shadow-lg">
                {project.tag}
              </span>
            </motion.div>

            {/* Floating gradient orb */}
            <motion.div
              className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-20 blur-2xl`}
              animate={
                reducedMotion
                  ? { scale: 1, opacity: 0.2 }
                  : { scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Content with layered depth */}
          <div className="p-4 md:p-6" style={{ transform: "translateZ(20px)" }}>
            <motion.h3 
              className="text-xl md:text-2xl mb-2 md:mb-3"
              style={{ transform: "translateZ(40px)" }}
            >
              {project.title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2"
              style={{ transform: "translateZ(35px)" }}
            >
              {project.description}
            </motion.p>
            
            <motion.ul 
              className="space-y-1.5 md:space-y-2 mb-4 md:mb-5"
              style={{ transform: "translateZ(30px)" }}
            >
              {project.features.map((feature, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <motion.div 
                    className={`w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-2 h-2 md:w-2.5 md:h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="text-gray-700 text-xs md:text-sm leading-tight">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              style={{ transform: "translateZ(45px)" }}
              whileHover={
                reducedMotion ? undefined : { scale: project.href ? 1.02 : 1 }
              }
              whileTap={
                reducedMotion ? undefined : { scale: project.href ? 0.98 : 1 }
              }
            >
              {project.href ? (
                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${project.color} text-white hover:opacity-90 text-sm md:text-base h-9 md:h-10`}
                >
                  <Link to={project.href}>
                    Подробнее
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-1.5 md:ml-2" />
                  </Link>
                </Button>
              ) : (
                <Button
                  className={`w-full bg-gradient-to-r ${project.color} text-white/70 text-sm md:text-base h-9 md:h-10`}
                  disabled
                >
                  Подробнее
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-1.5 md:ml-2" />
                </Button>
              )}
            </motion.div>
          </div>

          {/* Light reflection overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 rounded-3xl pointer-events-none"
            animate={{
              opacity: isHovered ? 0.4 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ transform: "translateZ(60px)" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Compact Mobile Project Card
function ProjectCard3DMobile({
  project,
  index,
  reducedMotion,
}: {
  project: Project;
  index: number;
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reducedMotion ? 0 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group h-full"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg h-full flex flex-col">
        {/* Compact Image */}
        <div className="relative h-32 overflow-hidden">
          {project.image ? (
            <ImageWithFallback 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0">
              {project.illustration ? (
                project.illustration({ isMobile: true })
              ) : (
                <div className={`h-full w-full bg-gradient-to-br ${project.color}`} />
              )}
            </div>
          )}
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-10`}></div>
          
          {/* Tag */}
          <div className="absolute top-2 left-2">
            <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs shadow-md">
              {project.tag}
            </span>
          </div>
        </div>

        {/* Compact Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg mb-1">{project.title}</h3>
          
          <p className="text-gray-600 text-xs mb-3">{project.description}</p>
          
          <ul className="space-y-1.5 mb-3 flex-grow">
            {project.features.slice(0, 3).map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-xs">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          {project.href ? (
            <Button
              asChild
              className={`w-full bg-gradient-to-r ${project.color} text-white hover:opacity-90 text-xs py-2`}
              size="sm"
            >
              <Link to={project.href}>
                Подробнее
                <ExternalLink className="w-3 h-3 ml-1" />
              </Link>
            </Button>
          ) : (
            <Button
              className={`w-full bg-gradient-to-r ${project.color} text-white/70 text-xs py-2`}
              size="sm"
              disabled
            >
              Подробнее
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Horizontal Lead Magnet Card for full width
function LeadMagnetCardHorizontal({ reducedMotion }: { reducedMotion: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 80,
      }}
      onMouseEnter={() => !reducedMotion && setIsHovered(true)}
      onMouseLeave={() => !reducedMotion && setIsHovered(false)}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-orange-50 to-red-50 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-200">
        {/* Pulsing border effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-orange-400 pointer-events-none"
          animate={
            reducedMotion
              ? { opacity: 0.3 }
              : { opacity: [0.3, 0.6, 0.3] }
          }
          transition={
            reducedMotion
              ? undefined
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        />

        {/* Enhanced glow */}
        <motion.div
          className="absolute -inset-2 bg-gradient-to-br from-orange-500 to-red-500 opacity-0 blur-2xl rounded-3xl"
          animate={{
            opacity: reducedMotion ? 0 : isHovered ? 0.4 : 0,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Horizontal layout */}
        <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-6">
          {/* Icon/Badge */}
          <motion.div 
            className="flex-shrink-0"
            animate={
              reducedMotion
                ? { scale: 1, rotate: 0 }
                : {
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? [0, -5, 5, 0] : 0,
                  }
            }
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
              <Download className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-grow text-center md:text-left">
            <motion.div 
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs mb-2"
              whileHover={{ scale: 1.05 }}
            >
              🎁 Бесплатно
            </motion.div>
            
            <h3 className="text-lg md:text-2xl mb-1 md:mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              50 вариантов ботов для бизнеса
            </h3>
            
            <p className="text-gray-700 text-sm md:text-base mb-2 md:mb-3">
              Подробное руководство с готовыми идеями автоматизации
            </p>
            
            <ul className="hidden md:flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
              <li className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-orange-500 to-red-500"></div>
                50+ готовых решений
              </li>
              <li className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-orange-500 to-red-500"></div>
                Примеры внедрения
              </li>
              <li className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-orange-500 to-red-500"></div>
                Оценка стоимости
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <motion.div
            className="flex-shrink-0 w-full md:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg px-6 md:px-8 h-11 md:h-12"
            >
              <Link to="/50bots">
                <Download className="w-4 h-4 mr-2" />
                Скачать PDF
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Floating gradient orb */}
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-orange-500 to-red-500 opacity-20 blur-3xl pointer-events-none"
          animate={
            reducedMotion
              ? { scale: 1, opacity: 0.2 }
              : { scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }
          }
          transition={
            reducedMotion
              ? undefined
              : { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>
    </motion.div>
  );
}

export function Projects() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="projects" className="py-8 md:py-20 bg-white relative overflow-hidden">
      {/* Animated background particles */}
      <motion.div
        animate={
          reducedMotion
            ? { opacity: 0.1 }
            : { y: [0, -30, 0], opacity: [0.05, 0.15, 0.05] }
        }
        transition={
          reducedMotion
            ? undefined
            : { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={
          reducedMotion
            ? { opacity: 0.1 }
            : { y: [0, 30, 0], opacity: [0.05, 0.15, 0.05] }
        }
        transition={
          reducedMotion
            ? undefined
            : { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-6 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-2 md:mb-4 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span>Портфолио</span>
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ perspective: "1000px" }}
          >
            Наши проекты
          </motion.h2>
          
          <motion.p 
            className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            AI-решения, которые уже помогают бизнесам автоматизировать процессы и увеличивать прибыль
          </motion.p>
        </motion.div>

        {/* Mobile: Horizontal scroll (only 3 projects) */}
        <div className="md:hidden overflow-x-auto mb-6 -mx-4 px-4">
          <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
            {projects.map((project, index) => (
              <div key={index} style={{ width: "280px", flexShrink: 0 }}>
                <ProjectCard3DMobile
                  project={project}
                  index={index}
                  reducedMotion={reducedMotion}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid (only 3 projects) */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {projects.map((project, index) => (
            <ProjectCard3D
              key={index}
              project={project}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {/* Lead Magnet Card - Full Width Horizontal */}
        <div className="mb-8 md:mb-12">
          <LeadMagnetCardHorizontal reducedMotion={reducedMotion} />
        </div>

        {/* CTA with 3D effect */}
        <motion.div 
          className="text-center bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 40, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
            animate={
              reducedMotion
                ? { opacity: 0.2 }
                : { opacity: [0.1, 0.3, 0.1] }
            }
            transition={
              reducedMotion
                ? undefined
                : { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }
          />

          <motion.h3 
            className="text-white text-xl md:text-3xl mb-2 md:mb-4 relative z-10"
            style={{ transform: "translateZ(30px)" }}
          >
            Хотите такое же решение для вашего бизнеса?
          </motion.h3>
          
          <motion.p 
            className="text-white/90 text-sm md:text-lg mb-4 md:mb-8 max-w-2xl mx-auto relative z-10 px-2"
            style={{ transform: "translateZ(25px)" }}
          >
            Разработаем индивидуальное AI-решение под ваши задачи и интегрируем с существующими системами
          </motion.p>
          
          <motion.div
            style={{ transform: "translateZ(40px)" }}
            whileHover={reducedMotion ? undefined : { scale: 1.05, rotateY: 5 }}
            whileTap={reducedMotion ? undefined : { scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 md:px-8 relative z-10 text-sm md:text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Обсудить ваш проект
            </Button>
          </motion.div>

          {/* Floating particles */}
          <motion.div
            className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            animate={
              reducedMotion
                ? { scale: 1, opacity: 0.2 }
                : { scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }
            }
            transition={
              reducedMotion ? undefined : { duration: 4, repeat: Infinity }
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
