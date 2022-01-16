import React, {Component} from "react";
import logo from './img/LogoAlta.png';
import iconDashboard from './img/icon/icon-dashboard.png';
import iconEquipment from './img/icon/icon-equipment.png';
import iconService from './img/icon/icon-service.png';
import iconNumber from './img/icon/icon-number.png';
import iconReport from './img/icon/icon-report.png';
import iconSetting from './img/icon/icon-setting.png';
class Dashboard extends Component {
render(){
    return (
        <div className="SlideBar">
              <div className="SlidebarIMG"><img src={logo}/></div>
              <div className="slibarDetail">
                  <div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={iconDashboard} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                          Dashboard
                      </span>
                  </div>
                  <div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={iconEquipment} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                      Thiết bị
                      </span>
                  </div> <div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={iconService} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                      Dịch vụ
                      </span>
                  </div> <div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={iconNumber} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                      Cấp số
                      </span>
                  </div> <div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={iconReport} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                      Báo cáo
                      </span>
                  </div> <div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={iconSetting} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                            Cài đặt hệ thống
                            <div className="settingMore">
                                <img src={morelogo} alt="" />
                            </div>
                      </span>
                  </div>

                 
              </div>
              <div className="slidebarButton">
                      <div className="slidebarButtonimg">
                          <img src={logoutlogo} alt="" />
                      </div>
                      <span> Đăng xuất</span>
                  </div>
        </div>
        )
    }
}
export default Dashboard;