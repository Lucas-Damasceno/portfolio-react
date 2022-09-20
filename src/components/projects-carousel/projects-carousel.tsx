import react, { CSSProperties } from 'react'
import { ProjectCard } from './project-card/project-card';
import * as S from './styles'

export interface Project {
  name: string;
  title: string;
  info: string;
  mainImage: string;
  text?: string;
  tools?: string;
  role?: string;
  backgroundColor?: string;
  images?: string[];
}


export const ProjectCarousel = () => {
  const projects: Project[] = [
    {
      name: 'He Man 200X',
      title: 'He Man 200X',
      info: 'string',
      mainImage: '9/he-man-200x.jpg',
    },
    {
      name: 'Skeletor 200X',
      title: 'Skeletor 200X',
      info: 'string',
      mainImage: '9/skeletor-200x.jpg',
    }, {
      name: 'Mantenna',
      title: 'Mantenna',
      info: 'string',
      mainImage: '9/mantenna.jpg',
    }, {
      name: 'Pig Head',
      title: 'Pig Head',
      info: 'string',
      mainImage: '9/pig-head.jpg',
    }
  ]
  const projectsSlideShow = [...projects, ...projects, ...projects];

  const reversalProjects = [...projectsSlideShow].reverse();

  return (
    <S.CarouselWrapper>
      <S.CarouselContainer>
        <S.CarouselMarquee className='marquee-right'>
        {projectsSlideShow.map((item, index) => {
          return (
            <S.CardWrapper key={index}>
              <ProjectCard data={item}/>
            </S.CardWrapper>
          )
        })}
        </S.CarouselMarquee>
      </S.CarouselContainer>

      <S.CarouselContainer className='second-carousel'>
      <S.CarouselMarquee className='marquee-left'>
        {reversalProjects.map((item, index) => {
          return (
            <S.CardWrapper key={index}>
              <ProjectCard data={item}/>
            </S.CardWrapper>
          )
        })}
        </S.CarouselMarquee>
      </S.CarouselContainer>
    </S.CarouselWrapper>
  )
}
