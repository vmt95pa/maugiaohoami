import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import PagginationFuntion from "../src/components/PagginationFuntion";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";
import { requestEvent } from "../src/redux/action/eventAction";
import { useSelector, useDispatch } from "react-redux";
import data from "../database.json";

const Events = () => {
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".sc-event-box", sort, active);
    let list = document.querySelectorAll(".sc-event-box");
    setstate(getPagination(list.length, sort));
  }, [active]);
  const eventState = useSelector((state) => state.eventReducer);
  const dispatch = useDispatch();
  const { eventData } = eventState;
  useEffect(() => {
    dispatch(requestEvent(data));
  }, []);

  return (
    <Layout bodyClass={"pricing"}>
      <PageBanner pageName={"Thông báo"} />
      <section className="tf-section tf-event">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap-sc-event">
                {eventData.map((event) => (
                  <div
                    className="sc-event-box active fx wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                    key={event.id}
                  >
                    <div className="image">
                      <img src={event.image} alt="" />
                    </div>
                    <div className="content">
                      <h3>
                        <Link href="/event-details">
                          <a style={{ fontSize: "24px" }}>{event.title}</a>
                        </Link>
                      </h3>
                      <ul>
                        <li>
                          <span>
                            <i className="far fa-map-marker-alt" />
                            {event.address}
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="far fa-calendar-alt" />
                            {event.time}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <Link href="/event-details">
                      <a className="fl-btn st-1">
                        <span className="inner">Xem thêm</span>
                      </a>
                    </Link>
                  </div>

                ))}
              </div>
            </div>
            <div className="col-md-12">
              <div
                className="themesflat-pagination style m-t30 fx fx-style2"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <PagginationFuntion
                  setActive={setActive}
                  active={active}
                  state={state}
                />
              </div>
            </div>
          </div>
        </div>

      </section>

    </Layout>
  );
};
export default Events;
