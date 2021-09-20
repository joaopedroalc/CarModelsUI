import styled from 'styled-components'
import img1 from "../../assets/manav.jpg"
import img2 from '../../assets/martin.jpg'
import img3 from '../../assets/josh.jpg'
import img4 from '../../assets/tyler.jpg'
import img5 from '../../assets/clemmer.jpg'
import img6 from '../../assets/yellow.jpg'
import img7 from '../../assets/black_camaro.jpg'
import img8 from '../../assets/flores.jpg'
import img9 from '../../assets/lee.jpg'
import img10 from '../../assets/katler.jpg'
import img11 from '../../assets/ixo.jpg'


export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url(${img1});
    background-position: bottom center;
    background-size:cover;
  }
  .colored:nth-child(2) {
    background-image: url(${img2});
    background-position: center center;
    background-size:cover;
  }
  .colored:nth-child(3) {
    background-image: url(${img3});
    background-position: center center;
    background-size:cover;
  }
  .colored:nth-child(4) {
    background-image: url(${img4});
    background-position: center center;
    background-size:cover;
  }
  .colored:nth-child(5) {
    background-image: url(${img5});
    background-position: center center;
    background-size:cover;
  }
  .colored:nth-child(6) {
    background-image: url(${img6});
    background-position: center center;
    background-size:cover;
  }
  .colored:nth-child(7) {
    background-image: url(${img7});
    background-position: center center;
    background-size:cover;
  }
  .colored:nth-child(8) {
    background-image: url(${img8});
    background-position: center center;
    background-size:cover;
  }
  .colored:nth-child(9) {
    background-image: url(${img9});
    background-position: center center;
    background-size:cover;
  }
  .colored:nth-child(10) {
    background-image: url(${img10});
    background-position: center center;
    background-size:cover;
  }
  .colored:nth-child(11) {
    background-image: url(${img11});
    background-position: center center;
    background-size:cover;
  }
`

export const Spacer = styled.div`
  height: 15vh;
  background: #ccc;
`
