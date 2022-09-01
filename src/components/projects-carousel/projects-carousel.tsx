import react from 'react'
import * as S from './styles'

interface Project {
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
      name: 'NUMERO 0',
      title: 'string',
      info: 'string',
      mainImage: 'string',
    },
    {
      name: 'NUMERO 1',
      title: 'string',
      info: 'string',
      mainImage: 'string',
    }, {
      name: 'NUMERO 2',
      title: 'string',
      info: 'string',
      mainImage: 'string',
    }, {
      name: 'NUMERO 3',
      title: 'string',
      info: 'string',
      mainImage: 'string',
    }, {
      name: 'NUMERO 4',
      title: 'string',
      info: 'string',
      mainImage: 'string',
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
            <S.ProjectCard key={index}>
              <h1 className='primaryColor'>{item.name}</h1>
            </S.ProjectCard>
          )
        })}
        </S.CarouselMarquee>
      </S.CarouselContainer>

      <S.CarouselContainer className='second-carousel'>
      <S.CarouselMarquee className='marquee-left'>
        {reversalProjects.map((item, index) => {
          return (
            <S.ProjectCard key={index}>
              <h1 className='primaryColor'>{item.name}</h1>
            </S.ProjectCard>
          )
        })}
        </S.CarouselMarquee>
      </S.CarouselContainer>
    </S.CarouselWrapper>
  )
}
