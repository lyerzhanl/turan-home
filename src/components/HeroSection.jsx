const HeroSection = () => {
  return (
    <section className="bg-white">
      {/* Desktop Layout */}
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start p-4 md:p-8 relative" style={{ maxWidth: '1320px' }}>
        {/* Text Section */}
        <div className="text-center md:text-left lg:h-[100vh] flex flex-col items-center justify-center md:w-1/2 space-y-4">
          <h1 className="text-2xl md:text-[38px] mb-2 font-bold" style={{lineHeight: "110%"}}>
            Быстрое изготовление и доставка мебели
          </h1>
          <p className="text-gray-600 md:text-[20px] w-full">
            Наша гарантия на все изделия подтверждает нашу<br />уверенность в
            качестве каждого продукта.
          </p>
          <div className="flex flex-col w-full lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 justify-center lg:justify-start">
            <button className="px-10 text-[19px] font-bold py-5 bg-[#c59676] text-white hover:bg-[#c59676] transition">
              Оставить заявку
            </button>
            <button className="px-10 py-5 text-[19px] font-bold border-2 border-[#c59676] text-[#c59676] hover:bg-[#c59676] hover:text-white transition">
              Получить каталог
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-8 md:mt-0 w-full md:w-3/4 lg:h-[100vh] md:absolute md:z-10 md:top-0 md:right-[-30%] lg:right-[-25%]">
          <img src="/img/13.jpg" alt="Hero" className="w-full h-64 md:h-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;