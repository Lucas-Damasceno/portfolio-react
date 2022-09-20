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
      <div className='info-container'>
        <h1 className='primaryColor'>MOTU BR</h1>
        <h2>Wave 9 Lançada!</h2>
      </div>

      <div className='arrow-down' onClick={arrowClick}>
        <img src='images/arrow-down.svg'></img>
      </div>
    </S.WelcomeWrapper>
  )
}