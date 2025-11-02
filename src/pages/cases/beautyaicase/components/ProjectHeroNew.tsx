import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectHeroNewProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  tags: string[];
}

export function ProjectHeroNew({ title, subtitle, imageUrl, tags }: ProjectHeroNewProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm">Для салонов красоты</span>
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl mb-8 text-foreground/80 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {tags.map((tag, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2 glass rounded-full text-sm border border-primary/20 hover:border-primary/40 transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background" />
                  ))}
                </div>
                <span className="text-sm text-foreground/70">150+ салонов уже используют</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex items-center gap-2 px-4 py-2 glass rounded-full border border-green-500/30 w-fit"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <span className="text-sm">Запуск за 3 дня</span>
              <Sparkles className="w-4 h-4 text-green-500" />
            </motion.div>
          </div>

          {/* Right side - 3D Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative perspective-1000"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative glass rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
                <ImageWithFallback
                  src={imageUrl}
                  alt={title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 glass rounded-2xl px-4 py-3 border border-primary/30 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">AI работает</span>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 border border-primary/30 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">150+</span>
                <span className="text-sm">салонов</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {['AI консультант', 'Авто-запись', 'CRM интеграция', '24/7 поддержка'].map(
            (feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl px-6 py-4 text-center border border-primary/20 hover:border-primary/40 transition-colors cursor-default"
              >
                <p className="text-sm">{feature}</p>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
