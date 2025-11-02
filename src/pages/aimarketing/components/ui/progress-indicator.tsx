import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CircleCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from './utils';

interface ProgressIndicatorProps {
  step: number;
  isExpanded: boolean;
  onBack: () => void;
  onContinue: () => void;
  totalSteps?: number;
}

const ProgressIndicator = ({ 
  step, 
  isExpanded, 
  onBack, 
  onContinue,
  totalSteps = 3 
}: ProgressIndicatorProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      {/* Progress dots */}
      <div className="flex items-center gap-6 relative">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((dot) => (
          <motion.div
            key={dot}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: dot === step ? 1.2 : 1,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
              mass: 0.5,
            }}
            className="relative"
          >
            <div
              className={cn(
                "w-2.5 h-2.5 rounded-full relative z-10 transition-all duration-300",
                dot <= step ? "bg-white shadow-lg shadow-white/50" : "bg-white/30"
              )}
            />
            {dot === step && (
              <motion.div
                layoutId="active-step"
                className="absolute inset-0 bg-white/40 rounded-full blur-md"
                initial={{ scale: 0 }}
                animate={{ scale: 2 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              />
            )}
          </motion.div>
        ))}

        {/* Progress bar overlay */}
        <motion.div
          initial={{ width: '10px' }}
          animate={{
            width: step === 1 ? '10px' : step === 2 ? '56px' : '102px',
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-white/50 rounded-full"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            mass: 0.8,
          }}
        />
      </div>

      {/* Buttons container */}
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3">
          <AnimatePresence mode="wait">
            {!isExpanded && (
              <motion.button
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  mass: 0.8,
                }}
                onClick={onBack}
                className="group px-6 py-4 text-purple-600 flex items-center justify-center gap-2 bg-white rounded-2xl hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Назад</span>
              </motion.button>
            )}
          </AnimatePresence>

          <motion.button
            onClick={onContinue}
            layout
            transition={{
              layout: {
                type: "spring",
                stiffness: 300,
                damping: 25,
              }
            }}
            className="group flex-1 px-8 py-4 rounded-2xl text-purple-600 bg-white hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <div className="flex items-center justify-center gap-3">
              <AnimatePresence mode="wait">
                {step === totalSteps ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      mass: 0.5,
                    }}
                  >
                    <CircleCheck className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="arrow"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      mass: 0.5,
                    }}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="text-lg">
                {step === totalSteps ? 'Отправить заявку' : 'Продолжить'}
              </span>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Step counter */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-white/60 text-sm"
      >
        Шаг <motion.span 
          key={step}
          initial={{ scale: 1.5, color: '#ffffff' }}
          animate={{ scale: 1, color: '#ffffff99' }}
          transition={{ duration: 0.3 }}
          className="inline-block mx-1"
        >
          {step}
        </motion.span> из {totalSteps}
      </motion.div>
    </div>
  );
};

export default ProgressIndicator;
