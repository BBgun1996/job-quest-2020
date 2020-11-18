import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DefaultStyledButton = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    width: ${(props) => (props.width ? `min(100%, ${props.width}px)` : "100%")} ;
    height: 34px;
    border: none;
    border-radius: 50px !important;
    color: white;
    font-weight: 600;
    position: relative;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    font-size: 14px;
    background: ${(props) =>
        props.background ? props.background : `#2ba167`};
    &:focus {
        outline: none;
    }
`;

const HoverStyledButton = styled(DefaultStyledButton)`
    background: #a8a9ab;

    &:hover {
        background: ${(props) => props.color}
        };
    }
`;

export const BaseButton = (props) => (
    <DefaultStyledButton {...props}>
        {props.title || props.children}
    </DefaultStyledButton>
);
export const HoverButton = (props) => (
    <HoverStyledButton {...props}>
        {props.title || props.children}
    </HoverStyledButton>
);

BaseButton.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
};

HoverButton.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
};
export default BaseButton;
