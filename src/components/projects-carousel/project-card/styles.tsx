import styled from "styled-components";

interface CardWrapperProps {
  image: string
}

export const ProjectCardWrapper = styled.div<CardWrapperProps>`
  width: 100%;
  height: 100%;
  background-image: url("./projetos/${props => props.image}");
  background-size: cover;
  width: 100%;
  height: 100%;

  .card-content{
    background-color: #ffffffcd;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  .card-content:hover{
    opacity: 1;
  }
`