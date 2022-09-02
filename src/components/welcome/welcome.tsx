import react, { useEffect, useRef } from 'react'
import * as S from './styles'

export const WelcomeComponent = () => {
  const canvasStarfield = useRef<HTMLCanvasElement>(null);

  const resizeCanvas = () => {
    const canvas = canvasStarfield.current as HTMLCanvasElement;
    canvas.height = window.innerHeight;
    canvas.width = document.body.clientWidth;
  }

  const drawStars = () => {
    const getRandom = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const stars = window.innerWidth;
    const colorrange = [0, 60, 240];

    if (canvasStarfield.current !== null) {
      resizeCanvas();
      const context = canvasStarfield.current.getContext('2d') as CanvasRenderingContext2D;
      for (var i = 0; i < stars; i++) {
        const x = Math.random() * canvasStarfield.current.offsetWidth;
        const y = Math.random() * canvasStarfield.current.offsetHeight;
        const radius = Math.random() * 2.2;
        const hue = colorrange[getRandom(0, colorrange.length - 1)];
        const sat = getRandom(50, 100);
        context.beginPath();
        context.arc(x, y, radius, 0, 360);
        context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
        context.fill();
      }
    }
  }

  useEffect(() => {
    // TODO Usar um debounce no resize
    drawStars();
    window.addEventListener('resize', drawStars)
  }, [])


  const arrowClick = () => {
    const viewport = window.innerHeight;
    window.scrollBy(0, viewport)
  }

  return (
    <S.WelcomeWrapper>
      <canvas width='100%' height='auto' id="starfield" ref={canvasStarfield}></canvas>
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