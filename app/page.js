import data from "../data/data.json";
import CategorySection from "../components/CategorySection";

export default function Home() {
  const categories = {};

  data.forEach((item, index) => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push({ ...item, globalIndex: index });
  });

  return (
    <div className="page">
      {Object.keys(categories).map((category) => (
        <CategorySection
          key={category}
          title={category}
          items={categories[category]}
        />
      ))}
    </div>
  );
}