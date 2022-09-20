import react, { useEffect, useRef } from 'react'
import * as S from './styles'

export const FigurePage = () => {
  return (
    <S.FigurePage>
      <article>
        <div className='left-side'>


          <div className='main-image' style={{backgroundImage: 'url("waves/9/he-man-200x.jpg")'}}></div>

          <h2>He Man (<a href='#'>200X</a>)</h2>
          <h3>Wave 9</h3>

          <p>
            He-Man and the Masters of the Universe[a] is an animated television series. Developed for television by Michael Halperin, who created the original series, it was animated by Mike Young Productions.[3] It served as an update of the 1980s Filmation series, produced to coincide with Mattel's revival of the Masters of the Universe franchise eleven years after its previous attempt.[4] The series ran on Cartoon Network's Toonami programming block between August 16, 2002, and January 10, 2004.
          </p>

          <h4>Lançamento</h4>
          <span>2022</span>
        </div>
        <div className='right-side'>
          <h3>Imagens Oficiais</h3>
          <div className='oficial-images'>

            <img src='waves/9/he-man-200x.jpg'></img>
            <img src='waves/9/he-man-200x-2.jpg'></img>
            <img src='waves/9/he-man-200x-3.jpg'></img>
            <img src='waves/9/he-man-200x-4.jpg'></img>

          </div>

          <div className='user-images'>

          </div>
        </div>
      </article>
    </S.FigurePage>
  )
}