import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HolderInput = styled.div`
  width: ${(props) => props.widthArea ? props.widthArea : `auto`};
  margin: 0 10px;
`;

const Input = styled.input`
  height: ${(props) => props.height ? props.height : `30`}px;
  width: ${(props) => props.width ? props.width : `250`}px;
  background-color: ${(props) => props.background ? props.background : `#eee`};
  color: ${(props) => props.color ? props.color : `black`};
  padding: ${(props) => props.padding ? props.padding : `0 15px`};
  font-size: ${(props) => props.fontSize ? props.fontSize : `14px`};
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : `normal`};
  border-radius: 20px;
  border: none;
`;

export default function InputText({ type, name, onChange, value, disabled, ...props }) {
  const _onChange = (e) => {
    onChange?.(e.target.value)
  }
  return (
    <HolderInput widthArea={props.widthArea}>
      <Input
        type={type}
        name={name}
        onChange={_onChange}
        value={value}
        disabled={disabled}
        {...props}
      />
    </HolderInput>
  )
}

InputText.defaultProps = {
  type: "text",
}

InputText.propTypes = {
  type: PropTypes.oneOf(['text', 'number']),
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  widthArea: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
}
