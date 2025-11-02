import { Bot, Mail, Phone, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl">UVDigital</span>
            </div>
            <p className="text-gray-400">
              Агентство по созданию AI-ботов и автоматизации бизнес-процессов
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#services" className="hover:text-white transition-colors">AI-боты</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Автоматизация</a></li>
              <li><a href="/#advantages" className="hover:text-white transition-colors">Интеграции</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Консультации</a></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg mb-4">Проекты</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/beautyai" className="hover:text-white transition-colors">Beauty AI</a></li>
              <li><a href="/contentai" className="hover:text-white transition-colors">Content AI</a></li>
              <li><a href="/aimarketing" className="hover:text-white transition-colors">AI Маркетинг</a></li>
              <li><a href="/50bots" className="hover:text-white transition-colors">Скачать 50 ботов</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+79999999999" className="hover:text-white transition-colors">
                  +7 (999) 999-99-99
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@uvdigital.ru" className="hover:text-white transition-colors">
                  info@uvdigital.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <a href="https://t.me/uvdigital" className="hover:text-white transition-colors">
                  @uvdigital
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2025 UVDigital. Все права защищены.
          </p>
          <div className="flex gap-6 text-gray-400">
            <a href="/#contact" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="/#contact" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
