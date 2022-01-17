import React, {Component} from "react";
import './dashboard.css'
import logo from './img/LogoAlta.png';
import iconDashboard from './img/icon/icon-dashboard.png';
import iconEquipment from './img/icon/icon-equipment.png';
import iconService from './img/icon/icon-service.png';
import iconNumber from './img/icon/icon-number.png';
import iconReport from './img/icon/icon-report.png';
import iconSetting from './img/icon/icon-setting.png';
import iconMore from './img/icon/icon-more.png';
import iconLogout from './img/icon/icon-logout.png';
class Dashboard extends Component {

render(){
    return (
        <div className="MenuBar">
              <div className="MenuBarLogo">
                  <img src={logo} alt = ""/>
              </div>
              <div className="MenuBarDetail">
                  <div className="MenuBarDetailItem">
                      <div className="MenuBarDetailItemimg">
                          <img src={iconDashboard} alt= "" />
                      </div>
                      <span className="MenuBarDetailItemName">
                          Dashboard
                      </span>
                  </div>
                  <div className="MenuBarDetailItem">
                      <div className="MenuBarDetailItemimg">
                          <img src={iconEquipment} alt="" />
                      </div>
                      <span className="MenuBarDetailItemName">
                      Thiết bị
                      </span>
                  </div> <div className="MenuBarDetailItem">
                      <div className="MenuBarDetailItemimg">
                          <img src={iconService} alt="" />
                      </div>
                      <span className="MenuBarDetailItemName">
                      Dịch vụ
                      </span>
                  </div> <div className="MenuBarDetailItem">
                      <div className="MenuBarDetailItemimg">
                          <img src={iconNumber} alt="" />
                      </div>
                      <span className="MenuBarDetailItemName">
                      Cấp số
                      </span>
                  </div> <div className="MenuBarDetailItem">
                      <div className="MenuBarDetailItemimg">
                          <img src={iconReport} alt="" />
                      </div>
                      <span className="MenuBarDetailItemName">
                      Báo cáo
                      </span>
                  </div> <div className="MenuBarDetailItem">
                      <div className="MenuBarDetailItemimg">
                          <img src={iconSetting} alt="" />
                      </div>
                      <span className="MenuBarDetailItemName">
                            Cài đặt hệ thống
                            <div className="settingMore">
                                <img src={iconMore} alt="" />
                            </div>
                      </span>
                  </div>

                 
              </div>
              <div className="MenuBarButton">
                      <div className="MenuBarButtonimg">
                          <img src={iconLogout} alt="" />
                      </div>
                      <span> Đăng xuất</span>
                  </div>
        </div>
        )
    }
}
export default Dashboard;