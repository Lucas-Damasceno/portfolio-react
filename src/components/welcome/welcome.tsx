import react, { useEffect, useRef } from 'react'
import * as S from './styles'

export const WelcomeComponent = () => {
  const canvasStarfield = useRef<HTMLCanvasElement>(null);

  const arrowClick = () => {
    const viewport = window.innerHeight;
    window.scrollBy(0, viewport)
  }

  return (
    <S.WelcomeWrapper>
      <svg viewBox="0 0 60 60">
          <polygon fill="#232323" points="30,10 0,60 60,60"></polygon>
      </svg>
      <div className='info-container'>
        <h2>Lucas Damasceno</h2>
        <h1 className='primaryColor'>Front End Developer</h1>
      </div>

      <div className='arrow-down' onClick={arrowClick}>
        <img src='images/arrow-down.svg'></img>
      </div>
    </S.WelcomeWrapper>
  )
}