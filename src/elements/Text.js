import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, align, __onClick, is_text, textarea, center_text, right_text, left_text, width } = props;

  const styles = {bold: bold, color: color, size: size, margin : margin, align : align, textarea : textarea, width: width};
  
  if(is_text){
    return (
        <Div onClick={__onClick}>J.stagram</Div>
      )
    }
  
  if(center_text){
    return(
      <P align={align} margin={margin}>미리보기 화면입니다. 미리보기 화면입니다. 미리보기 화면입니다. 미리보기 화면입니다. 미리보기 화면입니다. 미리보기 화면입니다.</P>
    )
  }
  
  if(right_text){
    return(
      <P align={align} margin={margin} width={width}>미리보기 화면입니다. 미리보기 화면입니다. 미리보기 화면입니다. 미리보기 화면입니다. 미리보기 화면입니다. 미리보기 화면입니다.</P>
    )
  }
  
  if(left_text){
    return(
      <P align={align} margin={margin} width={width}>미리보기 화면입니다. 미리보기 화면입니다. 미리보기 화면입니다. 미리보기 화면입니다. 미리보기 화면입니다. 미리보기 화면입니다.</P>
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
  width: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
  ${(props) => (props.align? `text-align: ${props.align};` : '')}
  ${(props) => (props.width? `width: ${props.width};` : '')}
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
