import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, padding, bg, children, center, justify, _onClick, width, margin, max } = props;

  const styles = {
      is_flex: is_flex,
      width: width,
      margin: margin,
      padding: padding,
      bg: bg,
      center: center,
      justify: justify,
      max: max,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>{children} </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  justify: false,
  _onClick: () => {},
  max: false
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  max-width: ${(props) => props.max? `${props.max};` : ""};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; `
      : ""};
  ${(props) => props.center? `text-align: center;`: ""};
  justify-content: ${(props) => props.justify? `${props.justify};` : ""};
  /* border: 1px solid black; */
`;

export default Grid;
