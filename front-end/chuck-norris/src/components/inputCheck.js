import React from "react";
import styled from "styled-components";
import PropType from "prop-types";

const Holder = styled.div`
width: ${(props) => props.width ? `min(${props.width}, 100% - 80px)` : "auto"};
position: relative;
  .container {
  width: fit-content !important;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-left: 0 !important;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 7px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: green;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 10px;
  top: 7px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.container .content {
  opacity: 1;
  margin-top: 5px;
  margin-left: 15px;
  width: 120px;
  height: 30px;
  font-size: 14px;
}
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: normal;
  margin-left: 10px;
  ${(props) => (props.textStyle)}
`;

const InputField = styled.input`
  background-color: #eee;
  border-radius: 50px;
  border: none;
  width: 120px;
  height: 30px;
  padding: 0 15px;
`;

export default function Checkbox({ onChange, ...props}) {
  const _onChange = (e) => {
    onChange?.(e.target.value, e.target.checked)
  }

  return (
    <Holder width={props.width}>
      <label className={"container"}>
        <input
          type={"checkbox"}
          name={props.name}
          value={props.value}
          onChange={_onChange}
          checked={props.checked}
          disabled={props.disabled}
        />
        <span className={"checkmark"}></span>
        <Text textStyle={props.textStyle} >
          {props.value}
        </Text>
        {
          props.showInput &&
          <InputField
            className={"content"}
            type={"text"}
            name={props.textInput || "noName"}
            onChange={props.onChangeInput}
            value={props.valueInput}
            disabled={!props.checked || props.disabled}
          />
        }
      </label>
    </Holder>
  )
}

Checkbox.propTypes = {
  props: PropType.object,
  name: PropType.string,
  value: PropType.string,
  onChange: PropType.func,
  onChangeInput: PropType.func,
  checked: PropType.func,
  width: PropType.number,
  textStyle: PropType.object,
  showInput: PropType.bool,
  textInput: PropType.string,
  valueInput: PropType.string,
  disabled: PropType.bool,
}
