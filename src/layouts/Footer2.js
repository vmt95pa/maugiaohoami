import Link from "next/link";
const Footer2 = () => {
  return (
    <footer id="footer" className="st-2">
      <section className="tf-subcribe-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="fl-subcribe wow fadeIn   animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="subcribe-wp">
                  <h2 className="title clr-pri-5" style={{fontSize:'35px'}}>Đăng ký nhận bản tin hàng ngày</h2>
                </div>
                <div className="subcribe-form fx">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    id="subscribe-form"
                  >
                    <input
                      type="email"
                      id="subscribe-email"
                      placeholder="Email"
                    />
                    <button className="fl-btn st-7" id="subscribe-button">
                      <span className="inner">Đăng ký</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-inner st-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="widget-footer">
                <div className="widget widget-logo">
                  <div className="logo-bottom" id="logo-footer">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/logo/logo.png"
                          alt="kinco"
                        />
                      </a>
                    </Link>
                  </div>
                  <h4 style={{fontFamily:'Lobster'}} className="wrap f-mulish">
                    " Mỗi ngày đến trường là một niềm vui "
                  </h4>
                  <div className="list-contact">
                    <ul>
                      <li className="fx">
                        <span>
                          <i className="far fa-map-marker-alt" /> Ea Kênh,
                          Krông Păc- Đăk Lăk
                        </span>
                      </li>
                      <li className="fx">
                        <a href="mailto:maugiaohoami_dl@gmail.com">
                          <i className="far fa-envelope" /> maugiaohoami_dl@gmail.com
                        </a>
                      </li>
                      <li className="fx">
                        <a href="tel:012345678">
                          <i className="fal fa-phone" /> +84 123.844.5661
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-business">
                  <div className="inner">
                    <div className="op-time">
                      <h4 className="title-widget">Lịch học</h4>
                      <ul>
                        <li>
                          <span className="f-mulish">Thứ 2 - Thứ bảy</span>
                        </li>
                        <li>
                          <span className="f-mulish">08:00 - 17:00</span>
                        </li>
                      </ul>
                    </div>
                    <div className="cls-time">
                      <p className="f-mulish">Chủ nhật và các ngày lễ</p>
                      <h4 className="title-widget">Nghỉ</h4>
                    </div>
                  </div>
                </div>
                <div className="widget widget-link">
                  <h4 className="title-widget">Lớp học</h4>
                  <ul className="list-link">
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">03 đến 12 tháng tuổi</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">13 đến 24 tháng tuổi </a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">25 đến 36 tháng tuổi</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Mẫu giáo 3-4 tuổi</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Mẫu giáo 4-5 tuổi</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">Mẫu giáo 5-6 tuổi</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
            <div className="col-12">
              <div className="footer-bottom jus-ct">
                <p className="copy-right">
                  Copyright © {new Date().getFullYear()}, Mẫu giáo Họa Mi. Designed by{" "}
                  <a href="https://www.facebook.com/takatechsoft">
                    Takatech
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
