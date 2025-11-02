import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { HomePage } from "./pages/HomePage";
import { PageSwitcher } from "./components/PageSwitcher";

const BeautyAIPage = lazy(() => import("./pages/BeautyAIPage"));
const ContentAIPage = lazy(() => import("./pages/ContentAIPage"));
const AIMarketingPage = lazy(() => import("./pages/AIMarketingPage"));
const LeadMagnetPage = lazy(() => import("./pages/LeadMagnetPage"));
const BeautyAICasePage = lazy(() => import("./pages/cases/BeautyAICasePage"));
const ContentAICasePage = lazy(() => import("./pages/cases/ContentAICasePage"));

function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          aria-hidden="true"
        />
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
          Загрузка страницы
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageFallback />}>
      <>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-screen"
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/beautyai" element={<BeautyAIPage />} />
              <Route path="/contentai" element={<ContentAIPage />} />
              <Route path="/aimarketing" element={<AIMarketingPage />} />
              <Route path="/50bots" element={<LeadMagnetPage />} />
              <Route
                path="/cases/beautyaicase"
                element={<BeautyAICasePage />}
              />
              <Route
                path="/cases/contentaicase"
                element={<ContentAICasePage />}
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <PageSwitcher />
      </>
    </Suspense>
  );
}
