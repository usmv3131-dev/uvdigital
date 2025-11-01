import { Button } from "./ui/button";
import { Bot, Zap } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-white text-4xl">UVDigital</h1>
          </div>

          {/* Headline */}
          <h2 className="text-white text-5xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            Автоматизация бизнеса с AI
          </h2>

          <p className="text-white/90 text-xl lg:text-2xl mb-12 max-w-3xl mx-auto">
            Создаем умных ботов и автоматизируем процессы для вашего бизнеса. 
            Увеличиваем продажи, сокращаем расходы, освобождаем время команды.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg"
              onClick={scrollToContact}
            >
              Обсудить проект
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/80 text-white hover:bg-white/20 px-8 py-6 text-lg backdrop-blur-sm bg-white/5 hover:border-white transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наши работы
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-white text-4xl mb-2">50+</div>
              <div className="text-white/80">Успешных проектов</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-white text-4xl mb-2">24/7</div>
              <div className="text-white/80">Работа ботов</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-white text-4xl mb-2">95%</div>
              <div className="text-white/80">Удовлетворенных клиентов</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}
