const features = [
  {
    icon: "fa-leaf",
    title: "Direct Sourcing",
    description: "We source directly from Ethiopian farmers, building long-term relationships that ensure consistent quality and fair prices.",
  },
  {
    icon: "fa-check-circle",
    title: "Quality Control",
    description: "Every lot undergoes rigorous quality checks, from cherry selection to final export preparation, ensuring premium cup scores.",
  },
  {
    icon: "fa-ship",
    title: "Global Shipping",
    description: "We handle complete logistics from Ethiopia to worldwide destinations, with reliable freight forwarding and documentation.",
  },
  {
    icon: "fa-box",
    title: "Reliable Supply",
    description: "Built for buyers who need dependable volumes, consistent quality, and professional communication throughout the supply chain.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="features_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="coffee_taital">Why Choose Us</h1>
          </div>
        </div>
        <div className="features_section_2">
          <div className="row">
            {features.map((feature) => (
              <div key={feature.title} className="col-md-6 col-lg-3">
                <div className="feature_box">
                  <div className="feature_icon">
                    <i className={`fa ${feature.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3 className="feature_title">{feature.title}</h3>
                  <p className="feature_text">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}