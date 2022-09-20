import styled from "styled-components"

export const FigurePage = styled.div`

padding-top: 88px;

  article{
    margin: 0 auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 32px;
  }

  .left-side{
    max-width: 350px;

    h2{
    text-align: center;
  }

  h3{
    text-align: right;
  }

  }

  .right-side{
    max-width: 100%;
  }

  .main-image{
    width: 100%;
    height: 350px;
    background-position: top;
    box-sizing: border-box;
    border: 16px solid orange;
  }

  .oficial-images{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    img{
      mix-blend-mode: multiply;
      max-width: 100%;
    }
  }


  @media screen and (max-width: 600px) {
    box-sizing: border-box;
    padding: 22px;
    padding-top: 88px;

    article{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .oficial-images{
      grid-template-columns: 1fr;
    }
  }
`
