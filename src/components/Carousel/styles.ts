import { Carousel } from 'react-bootstrap'

import styled from 'styled-components'

export const CardCarouselItem = styled(Carousel.Item)`
  width: 600x;
  height: 200px;

  @media (max-width: 566px) {
    width: 80%;
    max-width: 200px;
    height: auto;
  }
`

export const MyMain = styled.div`
  display: flex;
  width: 100%;
  max-width: 31.4375rem;
  height: 10.75rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;
  margin: 20px;
  box-sizing: border-box;

  @media (max-width: 566px) {
    max-width: 100%;
    margin: 20px;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Picture = styled.img`
  max-width: 12.875rem;
  max-height: 100%;
  object-fit: cover;

  @media (max-width: 566px) {
    max-width: 106px;
    max-height: 100%;
    object-fit: cover;
    align-items: start;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-family: 'Inter';
    font-size: 12px;
    font-style: normal;
    font-weight: bold;

    @media (max-width: 566px) {
      font-size: 10px;
      padding: 5px 0;
    }
  }

  text-align: center;
  font-family: 'Inter';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  padding: 0 2.8125rem 0 2.8125rem;

  @media (max-width: 566px) {
    font-size: 10px;
    padding: 0 0.625rem;
  }
`
