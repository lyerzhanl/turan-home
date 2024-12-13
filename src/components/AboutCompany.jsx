const AboutCompany = () => {
  return (
    <section className="py-12 bg-[#FCFAF8] h-auto md:h-[80vh] lg:h-[120vh] flex items-center justify-center">
      <div
        className="relative flex items-center w-full px-4 md:px-0"
        style={{ maxWidth: "1320px", margin: "0 auto", height: "90%" }}
      >
        {/* Левое верхнее изображение */}
        <div
          className="hidden md:block absolute top-0 left-0 w-[45%] overflow-hidden"
          style={{ zIndex: 1 }}
        >
          <img
            src="/img/18.jpg"
            alt="Gallery Image 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Правое нижнее изображение */}
        <div
          className="hidden md:block absolute bottom-0 right-0 w-[45%] overflow-hidden"
          style={{ zIndex: 1 }}
        >
          <img
            src="/img/17.jpg"
            alt="Gallery Image 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Изображения на всю ширину для устройств меньше 1024px */}
        <div className="block md:hidden absolute top-0 left-0 w-full h-1/2 overflow-hidden">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Gallery Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="block md:hidden absolute bottom-0 left-0 w-full h-1/2 overflow-hidden">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Gallery Image 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Контейнер с карточкой */}
        <div
          className="relative bg-white p-8 shadow-lg mx-auto flex flex-col justify-center"
          style={{
            zIndex: 2,
            maxWidth: "700px",
          }}
        >
          <h2
            className="text-[34px] font-bold mb-6"
            style={{ lineHeight: "1.2" }}
          >
            О нашей компании
          </h2>
          <p
            className="text-[17px] text-gray-600 mb-4"
            style={{ lineHeight: "1.5" }}
          >
            Наша компания вот уже более 5 лет работает на рынке услуг по
            производству мебели. Мы работаем по индивидуальным эскизам и
            предоставляем своим клиентам качественную, прочную и удобную мебель по
            выгодным ценам.
          </p>
          <p
            className="text-[17px] text-gray-600 mb-4"
            style={{ lineHeight: "1.5" }}
          >
            Почему вот уже 5 лет количество благодарных клиентов непрестанно
            растет, как и наша репутация, а положительные отзывы о нас множатся?
          </p>
          <p
            className="text-[17px] text-gray-600"
            style={{ lineHeight: "1.5" }}
          >
            Мы гарантируем, что заказанная у нас мебель, украсит любой дом или
            офис.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
