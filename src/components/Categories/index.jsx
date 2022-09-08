import { useState } from 'react';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            className={activeCategory === index ? 'active' : ''}
            onClick={() => setActiveCategory(index)}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
