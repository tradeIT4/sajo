import Link from "next/link";

const products = [
  {
    image: "/images/real-harvest.jpg",
    type: "Arabica",
    description: "Premium Ethiopian Arabica coffee with rich, complex flavor profiles from high-altitude regions.",
    origin: "Yirgacheffe, Sidamo, Harrar",
  },
  {
    image: "/images/real-washing.jpg",
    type: "Robusta",
    description: "High-quality Robusta beans known for strong body and excellent cup characteristics.",
    origin: "Ethiopian Lowlands",
  },
  {
    image: "/images/real-drying.jpg",
    type: "Specialty Grade",
    description: "Premium specialty coffee with exceptional cupping scores and unique flavor notes.",
    origin: "Selected Micro-Lots",
  },
  {
    image: "/images/real-green-beans.jpg",
    type: "Green Coffee",
    description: "Export-ready green beans processed and sorted to international export standards.",
    origin: "Direct from Farmers",
  },
];

export default function CoffeeProducts() {
  return (
    <div className="coffee_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="coffee_taital">Our Coffee</h1>
          </div>
        </div>
      </div>
      <div className="coffee_section_2">
        <div className="container-fluid">
          <div className="row">
            {products.map((product) => (
              <div key={product.type} className="col-lg-3 col-md-6">
                <div className="coffee_img">
                  <img src={product.image} alt={product.type} />
                </div>
                <div className="coffee_box">
                  <h3 className="types_text">{product.type}</h3>
                  <p className="looking_text">{product.description}</p>
                  <p className="origin_text">{product.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
