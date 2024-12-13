import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full font-sans">
      <div className="flex items-center justify-between p-4 bg-[#FCFAF8]">
        {/* Navigation for large screens */}
        <nav className="hidden lg:flex justify-center space-x-8 w-full">
          <a href="#products" className="text-[18px] text-black font-bold hover:text-[#134D37] transition">
            Продукты
          </a>
          <a href="#process" className="text-[18px] text-black font-bold hover:text-[#134D37] transition">
            Процесс работы
          </a>
          <a href="#photo" className="text-[18px] text-black font-bold hover:text-[#134D37] transition">
            Портфолио
          </a>
          <a href="#about" className="text-[18px] text-black font-bold hover:text-[#134D37] transition">
            О нас
          </a>
          <a href="#contacts" className="text-[18px] text-black font-bold hover:text-[#134D37] transition">
            Контакты
          </a>
        </nav>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto" style={{ maxWidth: '1320px' }}>
        {/* Logo */}
        <div className="text-xl font-bold">
          <img src="/img/logo.png" alt="Turan Home" className="w-[60px] h-[60px]" />
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2c2.21 0 4 1.79 4 4 0 1.657-1.343 3-3 3h-2c-1.657 0-3-1.343-3-3 0-2.21 1.79-4 4-4zM4 13h16v6H4v-6z"
              />
            </svg>
            г. Астана
          </div>
          <div className="flex items-center text-gray-700 text-[22px] font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6.99 10.99l3.25 3.26 6.33-6.3"
              />
            </svg>
            +7 (707) 650-18-88
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white p-4">
          <nav className="space-y-4">
            <a href="#products" className="block text-gray-700">
              Продукты
            </a>
            <a href="#process" className="block text-gray-700">
              Схема работы
            </a>
            <a href="#photo" className="block text-gray-700">
              Фото
            </a>
            <a href="#about" className="block text-gray-700">
              О нас
            </a>
            <a href="#faq" className="block text-gray-700">
              ЧаВо
            </a>
            <a href="#reviews" className="block text-gray-700">
              Отзывы
            </a>
            <a href="#contacts" className="block text-gray-700">
              Контакты, карты
            </a>
          </nav>
          <div className="mt-4">
            <div className="flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6.99 10.99l3.25 3.26 6.33-6.3"
                />
              </svg>
              г. Астана
            </div>
            <div className="flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6.99 10.99l3.25 3.26 6.33-6.3"
                />
              </svg>
              +7 (707) 650-18-88
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;