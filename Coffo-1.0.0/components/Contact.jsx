export default function Contact() {
  return (
    <div className="contact_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="contact_taital">Get in Touch</h1>
            <p className="contact_subtitle">
              Ready to source premium Ethiopian coffee? Contact us today.
            </p>
          </div>
        </div>
        <div className="contact_section_2">
          <div className="row">
            <div className="col-md-12">
              <div className="contact_info">
                <div className="contact_item">
                  <a href="mailto:info@sajoet.com">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>info@sajoet.com</span>
                  </a>
                </div>
                <div className="contact_item">
                  <a href="tel:+251XXXXXXXXX">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>+251-XXX-XXX-XXX</span>
                  </a>
                </div>
                <div className="callnow_bt">
                  <a href="tel:+251XXXXXXXXX">Call Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}