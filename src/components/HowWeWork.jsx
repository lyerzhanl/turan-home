const steps = [
  {
    id: 1,
    title: "Консультация и замер обьекта",
    description: "Обсуждаем пожелания, подбираем материалы и замеряем объект.",
  },
  {
    id: 2,
    title: "Дизайн",
    description:
      "Разрабатываем эскизы или 3D-модели для утверждения.",
  },
  {
    id: 3,
    title: "Производство",
    description:
      "Точное воплощение проекта нашими мастерами.",
  },
  {
    id: 4,
    title: "Сборка и установка",
    description:
      "Оперативно доставляем и устанавливаем мебель у клиента.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-12 md:h-[120%]" id="process">
      <div className="mx-auto flex flex-col lg:flex-row md:px-4 lg:px-0">
        {/* Изображение */}
        <div className="lg:w-1/2 bg-gray-200 lg:h-auto">
          <img
            src="/img/11.jpg"
            alt="Как мы работаем"
            className="w-full h-min md:h-full"
          />
        </div>

        {/* Текстовая часть */}
        <div className="lg:w-1/2 p-6 md:p-12">
          <h2 className="text-[38px] text-white font-bold mb-16 lg:ml-[15%]">
            Как мы работаем
          </h2>
          <div className="space-y-6 lg:ml-[15%]">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex items-start mb-10 w-[90%]"
              >
                <div
                  className="min-w-[60px] min-h-[60px] flex items-center justify-center border-white opacity-60 text-white text-[21px] border-2 font-bold mr-[30px]"
                  style={{ lineHeight: "119%" }}
                >
                  {step.id}
                </div>
                <div>
                  <h3 className="text-[26px] text-white font-semibold">{step.title}</h3>
                  <p className="text-white">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Кнопка */}
          <div className="mt-16 lg:ml-[15%]">
            <button className="px-[50px] py-[20px] bg-[#134D37] text-white font-bold text-[19px]">
              <a href="#contacts">Оставить заявку</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
