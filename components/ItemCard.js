"use client";
import { useRouter } from "next/navigation";

export default function ItemCard({ item }) {
  const router = useRouter();

  return (
    <div
      className="card"
      onClick={() => router.push(`/item/${item.globalIndex}`)}
    >
      <div className="image-wrapper">
        <img src={item.image} alt={item.itemname} />
      </div>
      <div className="card-body">
        <h3>{item.itemname}</h3>
        <p>{item.category}</p>
      </div>
    </div>
  );
}