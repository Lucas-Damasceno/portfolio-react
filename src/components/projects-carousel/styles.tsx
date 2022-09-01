import styled from "styled-components"

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 700px;
  /* background-color: #f5c2c2; */
  overflow-y: visible;
  overflow-x: clip;
  /* padding-top: 92px; */
  padding-bottom: 92px;
`

export const CarouselContainer = styled.div`
  width: 120%;
  margin-left: -10%;
  height: 400px;
  /* background-color: #fff; */
  transform: rotate(-6deg);
  overflow: hidden;

  .marquee-right{
    animation: marquee-right 20s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes marquee-right {
    0%{
      transform: translateX(-6%);
    }
    100%{
      transform: translateX(-81.7%);
    }
  }

  .marquee-left{
    animation: marquee-left 20s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes marquee-left {
    0%{
      transform: translateX(-81.7%);
    }
    100%{
      transform: translateX(-6%);
    }
  }
`

export const CarouselMarquee = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 16px;
`

export const ProjectCard = styled.div`
  min-width: 330px;
  height: 100%;
  background-color: #101010;
  
`