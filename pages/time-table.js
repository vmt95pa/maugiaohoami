import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";

const TimeTable = () => {
  return (
    <Layout bodyClass={"time-table"}>
      <PageBanner pageName={"Thời khóa biểu"} />
      <section className="tf-section tf-time-table">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Thời khóa biểu</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">
                  Lịch học các lớp <br/> ( 6 ngày / tuần )
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <Tab.Container defaultActiveKey={"1st"}>
                <div
                  className="flat-tabs tab-time-table wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1000ms"
                >
                  <Nav as={"ul"} className="menu-tab">
                    <Nav.Link eventKey={"1st"} as={"li"}>
                      <span>03 đến 12 tháng</span>
                    </Nav.Link>
                    <Nav.Link eventKey={"2nd"} as={"li"}>
                      <span>13 đến 24 tháng</span>
                    </Nav.Link>
                    <Nav.Link eventKey={"3rd"} as={"li"}>
                      <span>25 đến 36 tháng</span>
                    </Nav.Link>
                    <Nav.Link eventKey={"4th"} as={"li"}>
                      <span>Mẫu giáo 3-4 tuổi</span>
                    </Nav.Link>
                    <Nav.Link eventKey={"5th"} as={"li"}>
                      <span>Mẫu giáo 4-5 tuổi</span>
                    </Nav.Link>
                    <Nav.Link eventKey={"6th"} as={"li"}>
                      <span>Mẫu giáo 5-6 tuổi</span>
                    </Nav.Link>
                  </Nav>
                  <Tab.Content className="content-tab">
                    <Tab.Pane eventKey={"1st"} className="content-inner">
                      <ul className="list-date fx">
                        <li>
                          <span>Thứ 2</span>
                        </li>
                        <li>
                          <span>Thứ 3</span>
                        </li>
                        <li>
                          <span>Thứ 4</span>
                        </li>
                        <li>
                          <span>Thứ 5</span>
                        </li>
                        <li>
                          <span>Thứ 6</span>
                        </li>
                        <li>
                          <span>Thứ 7</span>
                        </li>
                        
                      </ul>
                      <ul className="calendar-box fx">
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li><li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li><li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li><li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey={"2nd"} className="content-inner">
                      <ul className="list-date fx">
                        <li>
                          <span>Saturday</span>
                        </li>
                        <li>
                          <span>Sunday</span>
                        </li>
                        <li>
                          <span>Monday</span>
                        </li>
                        <li>
                          <span>Tuesday</span>
                        </li>
                        <li>
                          <span>Wednesday</span>
                        </li>
                        <li>
                          <span>Thursday</span>
                        </li>
                        <li>
                          <span>Friday</span>
                        </li>
                      </ul>
                      <ul className="calendar-box fx">
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey={"3rd"} className="content-inner">
                      <ul className="list-date fx">
                        <li>
                          <span>Saturday</span>
                        </li>
                        <li>
                          <span>Sunday</span>
                        </li>
                        <li>
                          <span>Monday</span>
                        </li>
                        <li>
                          <span>Tuesday</span>
                        </li>
                        <li>
                          <span>Wednesday</span>
                        </li>
                        <li>
                          <span>Thursday</span>
                        </li>
                        <li>
                          <span>Friday</span>
                        </li>
                      </ul>
                      <ul className="calendar-box fx">
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey={"4th"} className="content-inner">
                      <ul className="list-date fx">
                        <li>
                          <span>Saturday</span>
                        </li>
                        <li>
                          <span>Sunday</span>
                        </li>
                        <li>
                          <span>Monday</span>
                        </li>
                        <li>
                          <span>Tuesday</span>
                        </li>
                        <li>
                          <span>Wednesday</span>
                        </li>
                        <li>
                          <span>Thursday</span>
                        </li>
                        <li>
                          <span>Friday</span>
                        </li>
                      </ul>
                      <ul className="calendar-box fx">
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey={"5th"} className="content-inner">
                      <ul className="list-date fx">
                        <li>
                          <span>Saturday</span>
                        </li>
                        <li>
                          <span>Sunday</span>
                        </li>
                        <li>
                          <span>Monday</span>
                        </li>
                        <li>
                          <span>Tuesday</span>
                        </li>
                        <li>
                          <span>Wednesday</span>
                        </li>
                        <li>
                          <span>Thursday</span>
                        </li>
                        <li>
                          <span>Friday</span>
                        </li>
                      </ul>
                      <ul className="calendar-box fx">
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey={"6th"} className="content-inner">
                      <ul className="list-date fx">
                        <li>
                          <span>Saturday</span>
                        </li>
                        <li>
                          <span>Sunday</span>
                        </li>
                        <li>
                          <span>Monday</span>
                        </li>
                        <li>
                          <span>Tuesday</span>
                        </li>
                        <li>
                          <span>Wednesday</span>
                        </li>
                        <li>
                          <span>Thursday</span>
                        </li>
                        <li>
                          <span>Friday</span>
                        </li>
                      </ul>
                      <ul className="calendar-box fx">
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg7"></li>
                        <li className="bg1">
                          <p className="bold">Nhận biết tập nói</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg2">
                          <p className="bold">Âm nhạc</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg3">
                          <p className="bold">Thể dục</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg4">
                          <p className="bold">Khám phá văn học</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg5">
                          <p className="bold">Tạo hình</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                        <li className="bg6">
                          <p className="bold">Toán</p>
                          <p>07.30 - 08.15</p>
                          <p>
                            <span>Giáo viên:</span>
                            <span className="bold">cô Vân</span>
                          </p>
                          <p>
                            <span> Phòng:</span>
                            <span className="bold">40G</span>
                          </p>
                          
                        </li>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default TimeTable;
