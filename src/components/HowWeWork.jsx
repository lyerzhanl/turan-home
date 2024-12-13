const steps = [
  {
    id: 1,
    title: "Заявка",
    description:
      "Вы оставляете заявку на нашем сайте или связываетесь любым удобным для Вас способом.",
  },
  {
    id: 2,
    title: "Выезд специалиста",
    description:
      "Мастер выезжает на объект для замеров и консультирует по всем вопросам.",
  },
  {
    id: 3,
    title: "Оценка работ",
    description:
      "Разработка эскиза, согласование стоимости и сроков выполнения.",
  },
  {
    id: 4,
    title: "Выполнение работ",
    description:
      "Изготавливаем изделия, выполняем все работы на объекте.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-12 h-[120%]">
      <div className="mx-auto flex flex-col lg:flex-row md:px-4 lg:px-0">
        {/* Изображение */}
        <div className="lg:w-1/2 bg-gray-200 h-64 lg:h-auto">
          <img
            src="/img/11.jpg"
            alt="Как мы работаем"
            className="w-full md:h-full"
          />
        </div>

        {/* Текстовая часть */}
        <div className="lg:w-1/2 p-6 md:p-12 bg-[#FCFAF8]">
          <h2 className="text-[38px] font-bold mb-16 lg:ml-[15%]">
            Как мы работаем
          </h2>
          <div className="space-y-6 lg:ml-[15%]">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex items-start mb-10 w-[90%]"
              >
                <div
                  className="min-w-[60px] min-h-[60px] flex items-center justify-center border-[#c59676] opacity-60 text-[#c59676] text-[21px] border-2 font-bold mr-[30px]"
                  style={{ lineHeight: "119%" }}
                >
                  {step.id}
                </div>
                <div>
                  <h3 className="text-[26px] font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Кнопка */}
          <div className="mt-16 lg:ml-[15%]">
            <button className="px-[50px] py-[20px] bg-[#c59676] text-white font-bold text-[19px] hover:bg-orange-500 transition">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
