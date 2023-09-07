import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  width: 100%;
  max-width: 31.4375rem;
  height: 10.75rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;
  margin-bottom: 3.75rem;
  box-sizing: border-box;

  @media (max-width: 1208px) {
    width: 100%;
    height: 185px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Picture = styled.img`
  max-width: 12.875rem;
  max-height: 100%;
  object-fit: cover;

  @media (max-width: 1208px) {
    max-width: 100px;
    max-height: 100%;
    object-fit: cover;
    align-items: start;
    justify-content: center;
    margin-top: 10px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;

  h4 {
    font-family: 'Inter';
    font-size: 12px;
    font-style: normal;
    font-weight: bold;

    @media (max-width: 1208px) {
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

  @media (max-width: 1208px) {
    font-size: 10px;
    padding: 0 0.625rem;
    gap: 1px;
  }
`
