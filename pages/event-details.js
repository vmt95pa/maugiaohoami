import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
const EventsDetails = () => {
  return (
    <Layout bodyClass={"event-details"}>
      <PageBanner pageName={"THÔNG BÁO"} />
      <section className="tf-section tf-event-detail">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
              <article className="article tf-details">
                <div
                  className="image m-b26 wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <img src="assets/images/common/fea_event_3.jpg" alt="" />
                </div>
                <div className="wrap m-b45">
                  <h2 className="title">Nâng cao chất lượng dạy và học cho trẻ</h2>
                  <p className="f-mulish">
                    <b>1. Mục đích</b>
                    <br />
                    - Nâng cao năng lực, hiệu lực, hiệu quả công tác quản lý của CBQL giáo dục trong việc xây dựng, tổ chức triển khai kế hoạch hoạt động chăm sóc, giáo dục nhà trường theo hướng khoa học, thiết thực và hiệu quả.
                    <br />
                    - Nâng cao năng lực, hiệu lực, hiệu quả công tác chăm sóc giáo dục trẻ của giáo viên trong nhà trường.
                    <br />
                    - Củng cố và nâng cao chất lượng hoạt động chăm sóc, giáo dục trẻ theo hướng  phát triển Chương trình, đổi mới phương pháp giáo dục theo định hướng "Lấy trẻ làm trung tâm".
                    <br />
                    - Tăng cường thực hiện đổi mới phương pháp, hình thức tổ chức các hoạt động giáo dục, phương pháp đánh giá sự tiến bộ của trẻ làm cơ sởđể điều chỉnh kế hoạch giáo dục cho các hoạt động tiếp theo phù hợp với khả năng, nhu cầu, sở thích, kinh nghiệm của trẻ; đổi mới phương pháp giáo dục trẻ.
                  </p>

                </div>
                <div className="inner-image fx">
                  <div
                    className="image wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <img src="assets/images/common/fea_event_1.jpg" alt="" />
                  </div>
                  <div
                    className="image wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <img src="assets/images/common/fea_event_2.jpg" alt="" />
                  </div>
                </div>
                <div className="wrap">
                  <p className="f-mulish">
                    <b>2. Yêu cầu</b>
                    <br />
                    - Phát huy vai trò tích cực, sáng tạo của đội ngũ giáo viên trong nhà trường  trong công tácchuyên môn, các phong trào, công tác nuôi dưỡng trẻ …tại đơn vị.
                    <br />
                    - Lựa chọn, xây dựng đội ngũ giáo viên cốt cán cấp trường; giáo viên có kinh nghiệm và năng lực chuyên môn trong tổ chức triển khai các hoạt động chuyên môn cấp trường và hoạt động giáo dục của nhà trường.
                    <br />
                    - Đảm bảo việc tổ chức triển khai các hoạt động chuyên môn theo các văn bản hướng dẫn và quy định hiện hành của Bộ Giáo dục và Đào tạo, phù hợp với tình hình của địa phương và nhà trường.
                    <br />
                    - Việc tổ chức các hoạt động phải đảm bảo tính khoa học, thiết thực, hiệu quả; đảm bảo tiến độ thời gian năm học.
                  </p>

                </div>

              </article>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div
                id="sidebar"
                className="sidebar-style2 classe-details wow fadeInRight animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
              
                <div className="widget new-couses">
                  <h4 className="title-widget bg-style4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={38}
                      height={40}
                      viewBox="0 0 38 40"
                    >
                      <image
                        width={38}
                        height={40}
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAoCAYAAACSN4jeAAAFE0lEQVRYhb1Ya4iVVRRdo5aaWpNTyUw4qeWdybKyycymKIZSIyOLoiB6wETQayjKKOtHkEHWj4iSIoWyt5BkajpWzqRpj0EqR83sASNGlBplD5p0asW2dejMufvcueOPDizud/Za+3z7nu98++zzgeT/gVqSC0l28b/2I8l2kud79x+A/rUKAGP66fMAgI0ApgFoBXA5gEsAPAlgJIB2AOsAHNLLy4s2QQXJq0muJ/kXyZ9JDnV0Hl7X/HQ7XMBZJPcKg4PdEwY0k2wluU+DW2Cv6LrK0ad4TdrLSO4i+YGjiWF/+PNSgc0i+a0GNeFdJI8RN072ox2/GE9Id7hsNepvdLQBVdJclwusjeRvJIc73AVyPsrhAiZFC7w5so8l2eLoYywl+UsusFUk1zl2w6nJTHjYpMc+VdqnSQ5wdB4a5VPpkW+S7EhsBZKrNZN0fAKGi79C/avUn+BoPQwiuZ/kzHLSxQwA2wGMBrAEQBeAhUWqf9tE/a7V72IAw+RTTuuRZogX9askP9P1YP3jRRF/c4lZmyDuCIfzcCLJhyJ7g/xrUvEZeowr1D9Wwmr1h5D8ieTbzk3uJ/mD9Ic6vIeC9J+KeyT86SCezt6tVfaBJL8m+SvJ5VJ8p7UQfC0BvyzOEuqfJFc6QeRQLd8lJHtI3hsCmxK9PfYoTk8W8AhxH5Kc47xhldJfpH69+isygUBLZX5iowJDCGwnyS8c0TXOgDlY260Zjtfa8oz+NvFz1X9Gb2MhDuwjpQHLUdO0r3U6g+VgM/MVyc0K7jDZJ+rmSx0fwykk/5Aftb4RB1YVkdbe07rxBkuxOiRE2W1P/D3ajE8W/0ayBCxBn6dHZ+2EdOy4M0nbhheAhw0aNPX5Xht/eDPrpNtBco+qiNCeiiuKGAdm5iDaGgBNAOqVfONmNdsOAJUAqgDsV/21DMCjALoBbNMYu7O39qLtA6syM5XC3uJvSI7SNrfP0WSRJTJYo6DGRXyLCsnUZ16SGyc7miyyhANLuulCvU83vTHRL5C9SRt5jTMeNOtzHXvZgbU7MxVmZFaifVH2qc44KTqknXMwgbXJeXxkuziThF+QvdEZJ8Xt0t6p30J/Alspp7rEXtDWFfqW8d8pIyib8btViFJLAToPUC+WldYjPeeAsDGPdzgPX5K80LEHDIteBNuqrk/4B6N13OENYHhXgmqHS3GHjmAeF2OgdoAehws4Xvdt8chnRW7V4/E0Ac9Je67D5bBVhcOghA+12TxvjYUTTr361rZlbrBYfDmzFeMk+R2X2B+T3V38i7QRh36otTYnuudld7879IEmFZPh0d2k65k66buBLVMJE9vCQXSL1sl89b1MPl1Bd+jscKmjuVb+a6OXwSqST3Q9xgusOZ7OCEO1NvaUCOolcV0qsber35roGnTS71TVa1XIbFUlXaGE8qa9U9Hn1tQUhwv//szEHuqxtJLts94rMkTJrlsJ7y0dRuz5Nzj69dIXFXtCKLPPdrgsUuIeDVKro9QmzaAdRo50BgnVRl9JeJdm3ONcpIXix8CBj3mTiwq34vY+gHMA1ALYWcT2blsA7AXQWMRkWvqJoEIVZl+tTUGNLSMoa3UANhRZS7VkGh/PvJXe4xvtcB7CUW2Uw2WREiM0yIKMQ6ifyj20XCn9LQ5XEh45Q4PZKegGZerZ+jRgrVfdVAK3Sv9wf4PKBWY4TZ85/1aasFOybejhMFsOLMWknwHKA4l/AEBc4bzuAKASAAAAAElFTkSuQmCC"
                      />
                    </svg>
                    Thông báo <br/> gần đây
                  </h4>
                  <div className="widget-news st-2 inner-infor">
                    <ul className="list-news">
                      <li className="fx">
                        <img
                          src="assets/images/thumbnails/widget1.jpg"
                          alt="Image"
                          className="feature"
                        />
                        <ul className="box-content">
                          <li>
                            <h6 className="title">
                              <Link href="#">
                                <a>Kế hoạch năm học mới</a>
                              </Link>
                            </h6>
                          </li>
                          <li>
                            <Link href="#">
                              <a className="fx meta-news clr-pri-4">
                                <i className="far fa-calendar-alt" />
                                <span className="f-rubik">25 nov 2021</span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="fx">
                        <img
                          src="assets/images/thumbnails/widget2.jpg"
                          alt="Image"
                          className="feature"
                        />
                        <ul className="box-content">
                          <li>
                            <h6 className="title">
                              <Link href="#">
                                <a>Bảng theo dõi sức khỏe lớp trẻ</a>
                              </Link>
                            </h6>
                          </li>
                          <li>
                            <Link href="#">
                              <a className="fx meta-news clr-pri-4">
                                <i className="far fa-calendar-alt" />
                                <span className="f-rubik">25 nov 2021</span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="fx">
                        <img
                          src="assets/images/thumbnails/widget3.jpg"
                          alt="Image"
                          className="feature"
                        />
                        <ul className="box-content">
                          <li>
                            <h6 className="title">
                              <Link href="#">
                                <a>Nhiệm vụ năm học mới</a>
                              </Link>
                            </h6>
                          </li>
                          <li>
                            <Link href="#">
                              <a className="fx meta-news clr-pri-4">
                                <i className="far fa-calendar-alt" />
                                <span className="f-rubik">25 nov 2021</span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                  
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default EventsDetails;
