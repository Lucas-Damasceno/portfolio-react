import styled from "styled-components"

export const WelcomeWrapper = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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