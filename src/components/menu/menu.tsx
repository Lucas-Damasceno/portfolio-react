import react from 'react'
import * as S from './styles'

export const MenuComponent = () => {  

  return (
    <S.Header>
      <S.Ul>
        <li>Home</li>
        <li>Waves</li>
        <li>Actions Figures</li>
        <li>Grupos</li>
        <li>Sobre</li>
      <button>Login</button> 
      </S.Ul>
    </S.Header>
  )
}