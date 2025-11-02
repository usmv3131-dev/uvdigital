import { motion } from "motion/react";
import { Sparkles, Sun, Moon } from "lucide-react";
import { memo, useState, useEffect, useCallback } from "react";
import { useTheme } from "../lib/theme-context";
import { navigationAnimationPreset } from "../lib/motion-variants";

function NavigationComponent() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  // Memoize scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Memoize scroll to contact handler
  const scrollToContact = useCallback(() => {
    const contactSection =
      window.__SCOPED_ROOTS__?.contentai?.querySelector("#contact") ||
      document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-950/95 border-blue-200/50 dark:border-blue-500/50 shadow-lg dark:shadow-blue-500/20"
          : "bg-white/80 dark:bg-slate-950/80 border-blue-200/30 dark:border-blue-500/30"
      }`}
      variants={navigationAnimationPreset}
      initial="hidden"
      animate="visible"
      role="navigation"
      aria-label="Основная навигация"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            aria-label="Content AI - Главная"
          >
            <motion.div
              className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-400 dark:to-cyan-400 rounded-lg flex items-center justify-center shadow-lg dark:shadow-blue-500/50"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Sparkles size={18} className="text-white dark:text-white" aria-hidden="true" />
            </motion.div>
            <span className="text-blue-900 dark:text-blue-400 font-bold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
              Content AI
            </span>
          </motion.a>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-blue-100/50 dark:bg-blue-500/10 hover:bg-blue-200/50 dark:hover:bg-blue-500/20 transition-colors border dark:border-blue-500/30 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: 15 }}
              aria-label={theme === "light" ? "Переключить на темную тему" : "Переключить на светлую тему"}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "light" ? (
                  <Moon size={20} className="text-blue-700" aria-hidden="true" />
                ) : (
                  <Sun size={20} className="text-blue-400" aria-hidden="true" />
              )}
              </motion.div>
            </motion.button>

            {/* CTA */}
            <motion.button
              onClick={scrollToContact}
              className="px-5 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 text-white dark:text-white rounded-full hover:from-blue-600 hover:to-cyan-600 dark:hover:from-blue-300 dark:hover:to-cyan-300 transition-all shadow-sm dark:shadow-blue-500/30 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Связаться с нами"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Связаться</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export const Navigation = memo(NavigationComponent);
