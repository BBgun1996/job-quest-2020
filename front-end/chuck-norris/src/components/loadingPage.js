import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Spinner from "react-spinkit";

const StyledSpinner = styled(Spinner)`
  width: 100px;
  height: 40px;
  margin: 20px auto 10px;
`;

const StyledH5 = styled.h5`
  font-weight: 300;
`;

const LoadingContent = (props) => (
  <div className={"container text-center"}>
    <StyledSpinner style={{"left": "40px"}} name={props.spinName ? props.spinName : "line-scale-party"} color={props.error ? "red" : "#2ba167"} fadeIn={"none"}/>
    <StyledH5>
      {props.error ? (props.errorText || "Error, Please try again.") : (props.loadingText || "Loading")}
    </StyledH5>
  </div>
);

const LoadingPage = (props) => (
  props.contentOnly ? (
    <div className={"container-page d-flex"} style={{"marginTop": "100px"}}>
      <LoadingContent spinName={"ball-spin-fade-loader"} {...props} />
    </div>
  ) : (
    <div {...(props.containerProps || {})} style={{"marginTop": "100px"}}>
      <LoadingContent spinName={"ball-spin-fade-loader"} {...props} />
    </div>
  )

);

LoadingContent.propTypes = {
  error: PropTypes.bool,
  loadingText: PropTypes.bool,
  errorText: PropTypes.string,
}

LoadingPage.propTypes = {
  contentOnly: PropTypes.bool,
  containerProps: PropTypes.bool,
}

export default LoadingPage;
export { LoadingContent };
