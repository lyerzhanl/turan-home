const CostEstimateForm = () => {
  return (
    <section
      className="py-12 flex items-center md:h-[90vh]"
      style={{
        backgroundImage: "url('/img/29.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="container mx-auto bg-white p-8 shadow-lg w-full flex flex-col items-center"
        style={{ maxWidth: "85%" }}
      >
        {/* Заголовок */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Узнайте стоимость изготовления мебели
        </h2>

        {/* Форма */}
        <form
          className="md:max-w-[70%]"
          style={{ width: "100%" }}
          action="mailto:turanhomeast@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Поле "Имя" */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                <span className="text-[#FF0000]">*</span> Имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#134D37]"
                required
              />
            </div>
            {/* Поле "Телефон" */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                <span className="text-[#FF0000]">*</span> Телефон
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#134D37]"
                required
              />
            </div>
          </div>

          {/* Кнопка */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-1/2 px-6 py-3 bg-[#134D37] text-white font-bold hover:bg-[#D2B48C] transition"
            >
              Заказать
            </button>
          </div>

          {/* Чекбокс согласия */}
          <div className="mt-4 flex items-center justify-center">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              className="mt-1"
              required
            />
            <label htmlFor="agreement" className="ml-2 text-gray-700">
              <span className="text-[#FF0000]">*</span> Я согласен на обработку
              моих{" "}
              <a href="#" className="text-[#134D37] hover:underline">
                персональных данных
              </a>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CostEstimateForm;
