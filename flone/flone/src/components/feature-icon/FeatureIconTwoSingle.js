import PropTypes from "prop-types";
import React from "react";

const FeatureIconTwoSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  const config=JSON.parse(localStorage.getItem('config'));
  console.log("config",config.theme.categoryColor);
  const styles = {
    color: config.theme.color
  }
  const background = {
    background: config.theme.backgroundcolor
  }
  return (
    <div className="col-md-4">
      <div
        className={`support-wrap-2 support-shape ${
          spaceBottomClass ? spaceBottomClass : ""
        } ${textAlignClass ? textAlignClass : ""}`}
      >
        <div className="support-content-2">
          <img
            className="animated"
            src={process.env.PUBLIC_URL + data.image}
            alt=""
          />
          <h5 style={styles}>{data.title}</h5>
          <p style={styles}>{data.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

FeatureIconTwoSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string
};

export default FeatureIconTwoSingle;
