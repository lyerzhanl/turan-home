const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: "✅",
      title: "Экологичность",
      description:
        "Мы заботимся о природе и стремимся создавать мебель, которая не наносит вреда окружающей среде.",
    },
    {
      id: 2,
      icon: "✅",
      title: "Разнообразие",
      description:
        "Наша компания предлагает широкий ассортимент мебели, от классических до современных стилей.",
    },
    {
      id: 3,
      icon: "✅",
      title: "Инновации",
      description:
        "Мы постоянно ищем новые и инновационные способы производства мебели, чтобы улучшить ее качество и функциональность.",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto text-center flex flex-col items-center" style={{ maxWidth: "1320px" }}>
        {/* Заголовок */}
        <h2 className="text-[38px] font-bold mb-[80px]">Почему выбирают нас</h2>

        {/* Сетка преимуществ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-3/4 md:w-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center"
            >
              {/* Иконка */}
              <div className="text-4xl mb-4">{feature.icon}</div>

              {/* Заголовок */}
              <h3 className="text-[22px] font-semibold mb-2">{feature.title}</h3>

              {/* Описание */}
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
