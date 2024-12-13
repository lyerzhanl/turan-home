const ContactSection = () => {
  return (
    <section className="py-12 flex items-center md:h-[120vh]" id="contacts">
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr_10px_1fr] gap-8"
        style={{ maxWidth: "1320px" }}
      >
        {/* Левая часть - Контакты и карта */}
        <div className="md:w-[90%] px-4 md:px-0 md:mt-0">
          <h2 className="text-[30px] font-bold mb-4">Контакты</h2>
          <p className="text-[17px] text-gray-600 mb-4">
            Вы можете связаться с нами любым удобным способом
          </p>
          <address className="not-italic mb-4">
            <p className="text-[17px] text-gray-700">
              г. Астана, Улица Кажымукан, 12а, Бизнес-центр Lasalle corporation
            </p>
            <p className="text-[17px] text-gray-700">+7 (707) 650-18-88</p>
            <p className="text-[17px] text-gray-700">turanhomeast@gmail.com</p>
          </address>
          {/* Карта */}
          <div className="w-full h-64 bg-gray-200">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=71.434438%2C51.169392&z=16&text=%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0%2C%20%D0%A3%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9A%D0%B0%D0%B6%D1%8B%D0%BC%D1%83%D0%BA%D0%B0%D0%BD%2C%2012%D0%B0%2C%20%D0%91%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D1%86%D0%B5%D0%BD%D1%82%D1%80%20Lasalle%20corporation"
              title="Map"
              className="w-full h-full"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>

        {/* Вертикальная линия */}
        <div
          className="hidden md:block bg-[#134D37] opacity-10"
          style={{ width: "2px", height: "100%" }}
        ></div>

        {/* Правая часть - Форма обратного звонка */}
        <div className="md:w-[70%] px-4 py-4 md:px-0 md:py-0">
          <h2 className="text-2xl font-bold mb-4">Заказать звонок</h2>
          <p className="text-gray-600 mb-6">
            Введите данные для заказа обратного звонка
          </p>
          <form
            action="mailto:turanhomeast@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <div className="grid grid-cols-1 gap-4 mb-6">
              {/* Поле "Имя" */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700 mb-2"
                >
                  <span className="text-[#FF0000]">*</span> Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#134D37]"
                  required
                />
              </div>
              {/* Поле "Телефон" */}
              <div>
                <label
                  htmlFor="phone"
                  className="block font-medium text-gray-700 mb-2"
                >
                  <span className="text-[#FF0000]">*</span> Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#134D37]"
                  required
                />
              </div>
              {/* Поле "E-Mail" */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700 mb-2"
                >
                  <span className="text-[#FF0000]">*</span> E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#134D37]"
                  required
                />
              </div>
            </div>
            {/* Чекбокс согласия */}
            <div className="mb-6 flex items-start">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                className="mt-1"
                required
              />
              <label
                htmlFor="agreement"
                className="ml-2 text-gray-700"
              >
                <span className="text-[#FF0000]">*</span> Я согласен на обработку моих{" "}
                <a href="#" className="text-[#134D37] hover:underline">
                  персональных данных
                </a>
              </label>
            </div>
            {/* Кнопка */}
            <div className="text-center">
              <button
                type="submit"
                className="px-[40px] py-[15px] bg-[#134D37] text-white font-bold text-[19px] transition"
              >
                Оставить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
