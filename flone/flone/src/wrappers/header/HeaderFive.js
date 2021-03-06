import React from "react";
import Logo from "../../components/header/Logo";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import NavMenu from "../../components/header/NavMenu";

const HeaderFive = () => {
  const config=JSON.parse(localStorage.getItem('config'));
  console.log("config",config.theme.categoryColor);
  const styles = {
    color: config.theme.categoryColor
  }
  const textColor= {
    color: config.theme.color
  }
  return (
    <div>
      <div className="home-sidebar-left">
        {/* header logo */}
        {/* <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" /> */}
        {/* Icon group */}
        <IconGroup />
        {/* sidebar nav menu */}
        <NavMenu sidebarMenu={true} />
        <div className="sidebar-copyright">
          <p style={textColor}>
            ©2021 All Rights Reserved.
          </p>
        </div>
      </div>
      <header className="header-area header-padding-1 sticky-bar header-res-padding clearfix header-hm4-none">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              {/* header logo */}
              <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
            </div>
            <div className="col-xl-10 col-lg-102 col-md-6 col-8">
              {/* Icon group */}
              <IconGroup />
            </div>
          </div>
          {/* mobile menu */}
          <MobileMenu />
        </div>
      </header>
    </div>
  );
};

export default HeaderFive;
