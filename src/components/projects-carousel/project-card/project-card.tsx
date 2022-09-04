import { url } from 'inspector'
import react, { CSSProperties } from 'react'
import { Project } from '../projects-carousel'
import * as S from './styles'

interface Props {
  data: Project
}

export const ProjectCard = ({ data }: Props) => {

  const overlayStyle: CSSProperties = {
    backgroundColor: '#ffffffcd',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <S.ProjectCardWrapper image={data.mainImage}>
      <div className='card-content'>
      <h1>{data.title}</h1>
      </div>
    </S.ProjectCardWrapper>
  )
}