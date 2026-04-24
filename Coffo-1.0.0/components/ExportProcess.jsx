const steps = [
  {
    number: "01",
    title: "Inquiry",
    description: "Contact us with your coffee requirements, preferred origin, and quantity needed.",
  },
  {
    number: "02",
    title: "Sample",
    description: "We send samples for your evaluation to ensure quality meets your specifications.",
  },
  {
    number: "03",
    title: "Order",
    description: "Once satisfied, confirm your order. We prepare documentation and arrange logistics.",
  },
  {
    number: "04",
    title: "Ship",
    description: "Your coffee is shipped from Ethiopia to your destination with full traceability.",
  },
];

export default function ExportProcess() {
  return (
    <div className="process_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="coffee_taital">Export Process</h1>
          </div>
        </div>
        <div className="process_section_2">
          <div className="row process_steps">
            {steps.map((step, index) => (
              <div key={step.title} className="col-md-3 col-sm-6">
                <div className="process_step">
                  <div className="step_number">{step.number}</div>
                  <h3 className="step_title">{step.title}</h3>
                  <p className="step_description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}