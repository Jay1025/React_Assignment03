import styled from 'styled-components';
import React from "react";

import {Grid, Text} from "./index"

const Image = (props) => {
    const {shape, src, size, _onClick, padding} = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}  onClick={_onClick}></AspectInner>
            </AspectOutter>
        )
    }

    if(shape === "sample_center"){
        return (
            <AspectOutter>
                <CenterInner {...styles}  onClick={_onClick} padding={padding}></CenterInner>
            </AspectOutter>
        )
    }

    if(shape === "sample_right"){
        return (
            <AspectOutter>
                <RightInner {...styles}  onClick={_onClick} padding={padding}></RightInner>
            </AspectOutter>
        )
    }

    if(shape === "sample_left"){
        return (
            <AspectOutter>
                <LeftInner {...styles}  onClick={_onClick} padding={padding}></LeftInner>
            </AspectOutter>
        )
    }

    return (
        <React.Fragment>
            <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
    )


}


Image.defaultProps = {
  shape: "circle",
  src: "https://src.hidoc.co.kr/image/lib/2021/1/20/1611132055778_0.jpg",
  size: 36,
  _onClick: () => {},
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const AspectOutter = styled.div`
    width: 100%;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`;

const CenterInner = styled.div`
    position: relative;
    padding-bottom: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`;

const RightInner = styled.div`
    position: relative;
    padding-bottom: 133%;
    width: 100%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`;

const LeftInner = styled.div`
    position: relative;
    padding-bottom: 133%;
    width: 100%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;