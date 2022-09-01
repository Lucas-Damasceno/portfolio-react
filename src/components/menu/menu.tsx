import react from 'react'
import * as S from './styles'

export const MenuComponent = () => {  

  return (
    <S.Header>
      <S.Ul>
        <li>Home</li>
        <li>Projetos</li>
        <li>Blog</li>
        <li>Sobre</li>
      </S.Ul>
    </S.Header>
  )
}