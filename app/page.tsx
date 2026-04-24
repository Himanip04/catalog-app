"use client";
import { useState } from "react";
import data from "../data/data.json";
import CategorySection from "../components/CategorySection";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categoriesList = ["All", ...new Set(data.map((i) => i.category))];

  const filtered = data.filter((item) => {
    const matchSearch = item.itemname
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" || item.category === activeCategory;

    return matchSearch && matchCategory;
  });

 const categories: Record<string, any[]> = {};

  filtered.forEach((item, index) => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push({ ...item, globalIndex: index });
  });

  return (
    <div className="page">
      <div className="topbar">
        <input
          className="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filters">
        {categoriesList.map((cat) => (
          <button
            key={cat}
            className={`pill ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

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