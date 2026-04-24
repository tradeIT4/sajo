export default function SiteFooter() {
  return (
    <>
      <div className="footer_section layout_padding margin_top90">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer_social_icon">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="location_text">
                <ul>
                  <li>
                    <a href="tel:+251XXXXXXXXX">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span className="padding_left_10">+251-XXX-XXX-XXX</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@sajoet.com">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span className="padding_left_10">info@sajoet.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="form-group">
                <textarea
                  className="update_mail"
                  placeholder="Ethiopia"
                  rows="5"
                  name="Location"
                ></textarea>
                <div className="subscribe_bt">
                  <a href="#" aria-label="Location">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p className="copyright_text">
                Sajo Trading PLC. Premium Ethiopian coffee exporter based in Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
