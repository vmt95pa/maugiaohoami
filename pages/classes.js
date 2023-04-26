import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import PagginationFuntion from "../src/components/PagginationFuntion";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";
import { requestClasses } from "../src/redux/action/classesAction";
import { useSelector, useDispatch } from "react-redux";
const Classes = () => {
  let sort = 6;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".single-product__", sort, active);
    let list = document.querySelectorAll(".single-product__");
    setstate(getPagination(list.length, sort));
  }, [active]);
  const classesState = useSelector((state) => state.classesReducer);
  const {classesData} = classesState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestClasses(classesData));
  }, []);
  return (
    <Layout bodyClass={"classes"}>
      <PageBanner pageName={"Tuyển sinh"} />

      <section className="tf-section tf-courses">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Thông báo tuyển sinh</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  MẦM NON HỌA MI <br /> THÔNG BÁO TUYỂN SINH NĂM HỌC 2023-2024
                </h2>
              </div>
            </div>
            {classesData.map((classes) => (

              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 single-product__">

                <div
                  className="item-courses wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1300ms"
             
                >
                  <div className="box-feature">
                    <img
                      src={classes.image}
                      alt="Image"
                    />
                  </div>
                  <div className="box-content">
                    <div className="box-wrap">
                      <h4 className="title">
                        <Link href="/classe-details">
                          <a>{classes.name_class}</a>
                        </Link>
                      </h4>
                      <p className="sub f-mulish">
                        
                      </p>
                    </div>
                    <ul>
                      <li>
                        <i className="far fa-user-graduate clr-pri-5" />
                        {classes.year}
                      </li>
                      <li>
                        <i className="far fa-book clr-pri-6" />
                        {classes.quantity}
                      </li>
                      <li>
                        <i className="fal fa-usd-circle clr-pri-3" />
                        {classes.fee}
                      </li>
                      <li>
                        <i className="far fa-clock clr-pri-8" />
                        {classes.time}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            ))}
            <div className="col-md-12">
              <div
                className="themesflat-pagination style fx fx-style2"
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
export default Classes;
