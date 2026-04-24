import ItemCard from "./ItemCard";

export default function CategorySection({ title, items }) {
  return (
    <section className="category">
      <div className="category-header">
        <h2>{title}</h2>
      </div>

      <div className="grid">
        {items.map((item) => (
          <ItemCard key={item.globalIndex} item={item} />
        ))}
      </div>
    </section>
  );
}