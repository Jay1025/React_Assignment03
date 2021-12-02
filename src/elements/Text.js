import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, align, __onClick, is_text } = props;

  const styles = {bold: bold, color: color, size: size, margin : margin, align : align};
  
  if(is_text){
    return (
        <Div onClick={__onClick}>J.stagram</Div>
      )
    }
    
    return (
      <P {...styles}>
          {children}
      </P>
    )
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  align: false,
  __onClick: () => {},
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
  ${(props) => (props.align? `text-align: ${props.align};` : '')}
`;

const Div = styled.div`
  font-size: 2em;
  font-weight: 800;
  cursor: pointer;
  &:hover{
    opacity: 0.7;
  }
`;


export default Text;
