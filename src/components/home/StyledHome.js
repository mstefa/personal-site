import styled from 'styled-components'
import { lightTel, mediumGray, animationTime} from "../../GlobalStyles";

export const StyledHome = styled.section`
  padding: 6rem 0rem 10rem 4rem;
  display:flex;
  flex-direction:column;

  @keyframes slideInX {
    from {
      transform: translate(1rem);
      opacity:10%;
    }
    to {
      transform: translate(0px);
      opacity:100%;
    }
  }

  h1{
    font-size: 5rem;
    margin: 0.5rem 0 0 0;
    padding:0;
    animation-duration: ${animationTime};
    animation-name: slideInX;
  }

  h3{
    font-size: 3rem;
    color:${mediumGray};
    margin: 0 0 1rem 0;
    animation-duration: ${animationTime};
    animation-name: slideInX;
    
  }

  span{
    color: ${lightTel};
    animation-duration: ${animationTime};
    animation-name: slideInX;
  }

  @media (max-width: 850px) {

    padding: 5rem 0rem 8rem 1rem;

    h1{
      font-size: 4rem;
    }

    h3{
      font-size: 2.5rem;
    }

  }

  @media (max-width: 450px) {

    padding: 5rem 0rem 8rem 1rem;

  }


`
