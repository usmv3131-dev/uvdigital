"use client";

import { buttonVariants } from "./button";
import { Label } from "./label";
import { Switch } from "./switch";
import { useMediaQuery } from "../../hooks/use-media-query";
import { cn } from "./utils";
import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  onClick?: () => void;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Простая прозрачная цена",
  description = "Выберите тариф, который подходит вам\nВсе тарифы включают доступ к платформе и поддержку.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="w-full py-12">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-blue-900 dark:text-blue-400 font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
          {title}
        </h2>
        <p className="text-slate-600 dark:text-cyan-300/70 text-lg whitespace-pre-line max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.01em' }}>
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center gap-3 mb-10">
        <span className={cn("font-semibold", isMonthly ? "text-blue-900 dark:text-blue-400" : "text-slate-500 dark:text-cyan-400/60")}>
          Помесячно
        </span>
        <Label>
          <Switch
            ref={switchRef as any}
            checked={!isMonthly}
            onCheckedChange={handleToggle}
            className="relative"
          />
        </Label>
        <span className={cn("font-semibold", !isMonthly ? "text-blue-900 dark:text-blue-400" : "text-slate-500 dark:text-cyan-400/60")}>
          Годовой <span className="text-blue-500 dark:text-blue-400">(Скидка 20%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -10 : 0,
                    opacity: 1,
                    scale: plan.isPopular ? 1.02 : 1.0,
                  }
                : { y: 0, opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: index * 0.1,
            }}
            className={cn(
              "rounded-3xl border p-8 bg-background text-center flex flex-col relative transition-all duration-300",
              plan.isPopular 
                ? "border-blue-500 dark:border-blue-500 border-2 shadow-xl dark:shadow-blue-500/30" 
                : "border-blue-200/50 dark:border-blue-500/30 hover:border-blue-300 dark:hover:border-blue-500/50",
              plan.isPopular && "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800/50 dark:to-slate-800/30"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 py-1 px-4 rounded-bl-xl rounded-tr-2xl flex items-center gap-1">
                <Star className="text-white dark:text-white h-4 w-4 fill-current" />
                <span className="text-white dark:text-white font-semibold text-sm">
                  Популярный
                </span>
              </div>
            )}
            
            <div className="flex-1 flex flex-col">
              <p className="text-base font-semibold text-slate-600 dark:text-cyan-300/70 uppercase tracking-wider">
                {plan.name}
              </p>
              
              <div className="mt-6 flex items-center justify-center gap-x-2">
                <NumberFlow
                  value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                  format={{
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }}
                  transformTiming={{
                    duration: 500,
                    easing: "ease-out",
                  }}
                  willChange
                  className="text-5xl font-bold tracking-tight text-blue-900 dark:text-blue-400"
                  style={{ fontFamily: 'var(--font-heading)' }}
                />
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-bold text-blue-900 dark:text-blue-400">₽</span>
                  <span className="text-sm font-semibold leading-tight text-slate-600 dark:text-cyan-300/70">
                    / {plan.period}
                  </span>
                </div>
              </div>

              <p className="text-xs leading-5 text-slate-500 dark:text-cyan-400/60 mt-2">
                {isMonthly ? "помесячная оплата" : "годовая оплата"}
              </p>

              <ul className="mt-8 gap-3 flex flex-col text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-200/50 dark:bg-blue-500/30 flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-slate-800 dark:text-cyan-200 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="w-full h-px bg-blue-200/30 dark:bg-blue-500/30 my-6" />

              <button
                onClick={plan.onClick}
                className={cn(
                  buttonVariants({
                    variant: plan.isPopular ? "default" : "outline",
                  }),
                  "w-full gap-2 text-base font-semibold tracking-wide py-6 rounded-2xl",
                  "transform-gpu transition-all duration-300 ease-out",
                  plan.isPopular
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 text-white dark:text-white hover:from-blue-600 hover:to-cyan-600 dark:hover:from-blue-300 dark:hover:to-cyan-300 shadow-lg shadow-blue-300/30 dark:shadow-blue-500/50"
                    : "border-blue-200/50 dark:border-blue-500/50 text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10"
                )}
              >
                {plan.buttonText}
              </button>
              
              <p className="mt-6 text-xs leading-5 text-slate-500 dark:text-cyan-400/60">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
