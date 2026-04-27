import data from "../../../data/data.json";
import BackButton from "../../../components/BackButton";

export async function generateStaticParams() {
  return data.map((_, index) => ({
    id: index.toString(),
  }));
}

export default async function ItemDetail({ params }) {
  const resolvedParams = await params; 
  const index = Number(resolvedParams.id);

  if (isNaN(index) || index < 0 || index >= data.length) {
    return <div>Item not found</div>;
  }

  const item = data[index];

  return (
    <div className="detail">
     
      <div className="detail-image">
        <img src={item.image} alt={item.itemname} />
      </div>

      <div className="detail-content">
        <h1>{item.itemname}</h1>
        <span className="badge">{item.category}</span>

        <div className="specs">
          {item.itemprops.map((prop, i) => (
            <div key={i} className="spec">
              <span>{prop.label}</span>
              <strong>{prop.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}