const CompletedWorks = () => {
  const images = [
    { id: 1, src: "/img/1.jpg", alt: "Work 1" },
    { id: 2, src: "/img/2.jpg", alt: "Work 2" },
    { id: 3, src: "/img/3.jpg", alt: "Work 3" },
    { id: 4, src: "/img/4.jpg", alt: "Work 4" },
    { id: 5, src: "/img/5.jpg", alt: "Work 5" },
    { id: 6, src: "/img/6.jpg", alt: "Work 6" },
  ];

  return (
    <section className="py-[48px] mb-12 bg-white">
      <div
        className="container mx-auto text-center px-4"
        style={{ maxWidth: "1320px" }}
      >
        {/* Заголовок */}
        <h2 className="text-[38px] font-bold text-center mb-12">
          Выполненные работы
        </h2>

        {/* Галерея */}
        <div className="space-y-8">
          {/* Поле 1: 75% - 25% */}
          <div className="grid grid-cols-4 gap-4 items-center">
            <div className="col-span-3 relative overflow-hidden group h-96">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="col-span-1 relative overflow-hidden group h-96">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Поле 2: 25% - 75% */}
          <div className="grid grid-cols-4 gap-4 items-center">
            <div className="col-span-1 relative overflow-hidden group h-96">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="col-span-3 relative overflow-hidden group h-96">
              <img
                src={images[3].src}
                alt={images[3].alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Поле 3: 75% - 25% */}
          <div className="grid grid-cols-4 gap-4 items-center">
            <div className="col-span-3 relative overflow-hidden group h-96">
              <img
                src={images[4].src}
                alt={images[4].alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="col-span-1 relative overflow-hidden group h-96">
              <img
                src={images[5].src}
                alt={images[5].alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Кнопка */}
        <div className="mt-12 text-center">
          <button
            className="px-[50px] py-[20px] bg-[#c59676] text-white font-bold text-[19px] hover:bg-orange-500 transition"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompletedWorks;
