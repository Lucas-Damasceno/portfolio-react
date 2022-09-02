import styled from "styled-components"

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 700px;
  /* background-color: #f5c2c2; */
  overflow-y: visible;
  overflow-x: clip;
  /* padding-top: 92px; */
  padding-bottom: 250px;
`

export const CarouselContainer = styled.div`
  width: 120%;
  margin-left: -250px;
  height: 400px;
  /* background-color: #fff; */
  transform: rotate(-6deg);
  overflow: hidden;

  &.second-carousel{
    margin-top: 16px;
  }

  .marquee-right{
    animation: marquee-right 20s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes marquee-right {
    0%{
      transform: translateX(-80px);
    }
    100%{
      transform: translateX(-1810px);
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
      transform: translateX(-1810px);
    }
    100%{
      transform: translateX(-80px);
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