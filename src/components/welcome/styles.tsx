import styled from "styled-components"

export const WelcomeWrapper = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  #starfield{
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }

  .info-container{
    h1{
      font-size: 5rem;
    }
    mix-blend-mode: difference;
  }

  svg{
    transform: rotate(180deg);
    position: absolute;
    align-self: center;
    width: 100%;
    height: 600px;
    margin-top: 60px;
    animation-name: triScale;
    animation-duration: 20s;
    animation-iteration-count: infinite;
  }

  @keyframes triScale {
    0%{
      transform: rotate(180deg) scale(1);
    }
    50%{
      transform: rotate(180deg) scale(0.7);
    }
    100%{
      transform: rotate(180deg) scale(1);
    }
  }

  .arrow-down{
    position: absolute;
    bottom: 24px;
    width: 40px;
    animation: arrowAnimation 1s infinite alternate;
    cursor: pointer;
  }

  @keyframes arrowAnimation{
    from{
      transform: translateY(0);
    }
    to{
      transform: translateY(10px);
    }
  }
`