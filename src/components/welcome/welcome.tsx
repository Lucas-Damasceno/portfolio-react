import react from 'react'
import * as S from './styles'

export const WelcomeComponent = () => {
  const arrowClick = () =>{
    const viewport = window.innerHeight;
    window.scrollBy(0, viewport)
  }

  return (
    <S.WelcomeWrapper>
      <div>
        <h2>Lucas Damasceno</h2>
        <h1 className='primaryColor'>Front End Developer</h1>
      </div>

      <div className='arrow-down' onClick={arrowClick}>
        <img src='images/arrow-down.svg'></img>
      </div>
    </S.WelcomeWrapper>
  )
}