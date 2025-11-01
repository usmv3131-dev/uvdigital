import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Compass, X } from "lucide-react";

const PAGES = [
  { path: "/", label: "Главная" },
  { path: "/beautyai", label: "Beauty AI" },
  { path: "/contentai", label: "Content AI" },
  { path: "/aimarketing", label: "AI Marketing" },
  { path: "/50bots", label: "50 Bots" },
  { path: "/cases/beautyaicase", label: "Кейс Beauty AI" },
  { path: "/cases/contentaicase", label: "Кейс Content AI" },
];

export function PageSwitcher() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 w-60 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl shadow-purple-500/20"
          >
            <div className="px-4 py-3 border-b border-white/5 text-xs uppercase tracking-[0.2em] text-white/40">
              Быстрый переход
            </div>
            <div className="flex flex-col py-2">
              {PAGES.map((page) => {
                const isActive =
                  location.pathname === page.path ||
                  (page.path !== "/" && location.pathname.startsWith(page.path));

                return (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="px-4 py-2"
                    onClick={() => setOpen(false)}
                  >
                    <motion.span
                      className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <span className="flex h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                      {page.label}
                    </motion.span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white shadow-xl shadow-purple-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        aria-label={open ? "Закрыть переключатель страниц" : "Открыть переключатель страниц"}
        aria-expanded={open}
      >
        {open ? <X className="w-5 h-5" /> : <Compass className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
