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
      name: 'Webmail UOL',
      title: 'Webmail UOL',
      info: 'string',
      mainImage: 'webmail_uol/webmail_uol.png',
    },
    {
      name: 'Scan Nestlé',
      title: 'Scan Nestlé',
      info: 'string',
      mainImage: 'nestle/nestle.jpg',
    }, {
      name: 'Lista Hotéis',
      title: 'Lista Hotéis',
      info: 'string',
      mainImage: 'hotel_list/hotel_list.jpg',
    }, {
      name: 'Kontrol_viagens',
      title: 'Kontrol_viagens',
      info: 'string',
      mainImage: 'kontrol_viagens/kontrol_viagens.jpg',
    }, {
      name: 'Cidadelas',
      title: 'Cidadelas',
      info: 'string',
      mainImage: 'cidadelas/cidadelas.jpg',
    },
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
