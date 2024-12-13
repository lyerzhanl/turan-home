const AboutCompany = () => {
  return (
    <section className="py-12 bg-[#A47763] h-auto md:h-[80vh] lg:h-[120vh] flex items-center justify-center" id="about">
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
          className="relative bg-[#e6dacf] p-8 shadow-lg mx-auto flex flex-col justify-center"
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
            Мы - TURAN HOME, команда профессионалов с 7-летним
            опытом работы в сфере производства мебели. За эти годы
            мы заслужили доверие наших клиентов, предлагая
            стильные, функциональные и индивидуальные решения
            для вашего дома или офиса.
          </p>
          <p
            className="text-[17px] text-gray-600 mb-4"
            style={{ lineHeight: "1.5" }}
          >
            Наша цель — воплощать ваши идеи в реальность,
            создавая мебель, которая сочетает комфорт, эстетику и
            долговечность.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
