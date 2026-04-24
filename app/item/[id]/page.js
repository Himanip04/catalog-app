
import data from "../../../data/data.json";
import BackButton from "../../../components/BackButton";
export default async function ItemDetail({ params }) {
  const { id } = await params;
  const index = Number(id);

  if (isNaN(index) || index < 0 || index >= data.length) {
    return <div className="notfound">Item not found</div>;
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