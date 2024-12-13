const ProductCategories = () => {
  const categories = [
    { id: 1, title: "Детские", icon: "🛏️" },
    { id: 2, title: "Кухни", icon: "🍴" },
    { id: 3, title: "Гардеробные", icon: "👔" },
    { id: 4, title: "Офисные", icon: "💼" },
    { id: 5, title: "Гостинные", icon: "🛋️" },
    { id: 6, title: "Спальные", icon: "🛌" },
  ];

  return (
    <section className="py-12" id="products">
      <div className="container mx-auto text-center" style={{ maxWidth: '1320px' }}>
        <h2 className="text-[38px] font-bold mb-8">
          Мебель любого дизайна и конфигурации
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-[rgba(47, 47, 47, 0.3)] border-2 hover:border-[#D2B48C] py-10 px-6 flex flex-col items-center"
            >
              {/* Иконка */}
              <div className="text-6xl mb-6">{category.icon}</div>
              {/* Название категории */}
              <h3 className="text-[22px] font-bold mb-6">{category.title}</h3>
              {/* Кнопка */}
              <button className="py-[25px] px-[20px] w-full border-[#D2B48C] text-[#000] font-bold border-2 transition"
                      onClick={() => window.open('/portfolio.pdf', '_blank')}>
                Получить каталог
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
