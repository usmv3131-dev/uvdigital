import { motion } from "motion/react";
import { Sparkles, Sun, Moon } from "lucide-react";
import { memo, useCallback } from "react";
import { useTheme } from "../lib/theme-context";
import { ButtonGradient } from "./ui/button-gradient";
import { scrollToElement } from "../lib/utils";

function NavigationComponent() {
  const { theme, toggleTheme } = useTheme();
  const scrollToContact = useCallback(() => scrollToElement("contact"), []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-rose-200/30 dark:border-purple-500/30 transition-colors"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      role="navigation"
      aria-label="Основная навигация"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            aria-label="Beauty AI - Главная"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-rose-300 to-pink-300 dark:from-purple-500 dark:to-fuchsia-500 rounded-lg flex items-center justify-center shadow-lg dark:shadow-purple-500/50">
              <Sparkles size={18} className="text-white" aria-hidden="true" />
            </div>
            <span className="text-rose-900 dark:text-purple-100">Beauty AI</span>
          </motion.a>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-rose-100/50 dark:bg-purple-900/50 hover:bg-rose-200/50 dark:hover:bg-purple-800/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={theme === "light" ? "Переключить на темную тему" : "Переключить на светлую тему"}
            >
              {theme === "light" ? (
                <Moon size={20} className="text-rose-700" aria-hidden="true" />
              ) : (
                <Sun size={20} className="text-purple-300" aria-hidden="true" />
              )}
            </motion.button>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ButtonGradient
                onClick={scrollToContact}
                className="h-10 px-6 py-2 rounded-full text-sm"
                aria-label="Связаться с нами"
              >
                Связаться
              </ButtonGradient>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export const Navigation = memo(NavigationComponent);
