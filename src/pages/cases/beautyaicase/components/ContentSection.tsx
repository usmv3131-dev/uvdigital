import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ContentSectionProps {
  title: string;
  content: string[];
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
}

export function ContentSection({
  title,
  content,
  imageUrl,
  imagePosition = 'right',
  backgroundColor = 'bg-transparent',
}: ContentSectionProps) {
  return (
    <section className={`relative py-24 overflow-hidden ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-6">
        {imageUrl ? (
          <div className={`grid md:grid-cols-2 gap-16 items-center ${
            imagePosition === 'left' ? 'md:flex-row-reverse' : ''
          }`}>
            <motion.div
              initial={{ opacity: 0, x: imagePosition === 'left' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={imagePosition === 'left' ? 'md:order-2' : ''}
            >
              <h2 className="mb-6">{title}</h2>
              <div className="space-y-5">
                {content.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-foreground/80 leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: imagePosition === 'left' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={imagePosition === 'left' ? 'md:order-1' : ''}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative glass rounded-3xl overflow-hidden border border-primary/20 shadow-2xl"
              >
                <ImageWithFallback
                  src={imageUrl}
                  alt={title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="mb-6 text-center">{title}</h2>
            <div className="space-y-5">
              {content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-foreground/80 leading-relaxed text-center"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
