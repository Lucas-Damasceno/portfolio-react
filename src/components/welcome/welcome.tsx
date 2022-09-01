import react from 'react'
import * as S from './styles'

export const WelcomeComponent = () => {
  return (
    <S.WelcomeWrapper>
      <div>
        <h2>Lucas Damasceno</h2>
        <h1 className='primaryColor'>Front End Developer</h1>
      </div>
    </S.WelcomeWrapper>
  )
}