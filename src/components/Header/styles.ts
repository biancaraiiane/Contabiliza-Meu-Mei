import Link from 'next/link'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 90rem;
  height: 10.3125rem;
  margin: 0 auto;
  padding: 0 1.5625rem 0 1.25rem;
  background-color: ${({ theme }) => theme.colors.green};

  @media (max-width: 436px) {
    height: 3.75rem;
    padding: 0 1.25rem;
  }

  @media (max-width: 280px) {
    height: 3.75rem;
  }
`
export const Message = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.yellow};

  @media (max-width: 951px) {
    font-size: 1rem;
  }

  @media (max-width: 733px) {
    font-size: 0.75rem;
  }

  @media (max-width: 655px) {
    font-size: 0.625rem;
  }

  @media (max-width: 412px) {
    font-size: 0.375rem;
  }
  @media (max-width: 315px) {
    font-size: 0.25rem;
  }
`
export const Messages = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';
  font-size: 1.375rem;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.yellow};

  @media (max-width: 951px) {
    font-size: 1rem;
  }

  @media (max-width: 733px) {
    font-size: 0.75rem;
  }

  @media (max-width: 655px) {
    font-size: 0.625rem;
  }

  @media (max-width: 412px) {
    font-size: 0.375rem;
  }

  @media (max-width: 315px) {
    font-size: 0.25rem;
  }
`
export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  @media (max-width: 951px) {
    gap: 2rem;
  }

  @media (max-width: 733px) {
    gap: 1rem;
  }
`

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 585px) {
    max-width: 80%;
    max-height: 6.25rem;
  }

  @media (max-width: 489px) {
    max-width: 80%;
    max-height: 4.375rem;
  }

  @media (max-width: 440px) {
    max-width: 80%;
    max-height: 3.75rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90rem;
  height: 40.625rem;
  margin: 0 auto;
  background-image: url('/background.png');
  background-size: cover;
  background-position: center;

  @media (max-width: 748px) {
    height: auto;
  }
`
export const Title = styled.div`
  width: 43.0625rem;
  height: 9.375rem;
  display: flex;
  justify-content: center;
  margin-top: 7.4375rem;
  align-items: center;
  text-align: center;
  font-family: 'Krona One';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.colors.blue};
  width: 43.0625rem;
  height: 9.375rem;
  margin-left: 1.9375rem;
  margin-bottom: 6.5625rem;

  @media (max-width: 748px) {
    width: 80%;
    height: auto;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 4.375rem;
  }
`
export const More = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34.875rem;
  height: 3.25rem;
  flex-shrink: 1;
  border-radius: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.blue};
  text-align: center;
  font-family: 'Krona One', sans-serif;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  margin-left: 7.1875rem;

  @media (max-width: 748px) {
    margin: 0 auto;
    max-width: 50%;
    font-size: 1.15rem;
    margin-left: 8.125rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: 519px) {
    margin: 0 auto;
    max-width: 50%;
    font-size: 1rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: 320px) {
    margin: 0 auto;
    max-width: 60%;
    font-size: 1rem;
    margin-bottom: 0.625rem;
  }
`
export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  width: 100%;
  max-width: 90rem;
  height: 82.3125rem;
  margin: 0 auto;
  padding: 60px 20px 10px 20px;

  @media (max-width: 1299px) {
    height: auto;
  }
`

export const Information = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 90rem;
  height: 9.375rem;
  text-align: center;
  font-family: 'Inter';
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.blue};

  @media (max-width: 1299px) {
    margin: 0 auto;
    max-width: 90%;
    font-size: 2.5rem;
  }

  @media (max-width: 1193px) {
    margin: 0 auto;
    max-width: 90%;
    font-size: 2.1875rem;
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
    max-width: 90%;
    font-size: 1.875rem;
  }

  @media (max-width: 883px) {
    margin: 0 auto;
    max-width: 90%;
    font-size: 1.5625rem;
  }

  @media (max-width: 748px) {
    margin: 0 auto;
    max-width: 90%;
    font-size: 1.25rem;
    height: auto;
  }

  @media (max-width: 300px) {
    margin: 0 auto;
    max-width: 90%;
    font-size: 0.9375rem;
  }
`

export const ColumnsContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const Column = styled.div`
  padding: 2.5625rem 6.4375rem 5.0625rem 3.5rem;

  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

export const Frase_e_Icon = styled.div`
  display: flex;
  justify-content: end;
  gap: 133px;
`
export const Read = styled.p`
  font-family: 'Krona One';
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.yellow};

  @media (max-width: 746px) {
    font-size: 25px;
  }

  @media (max-width: 398px) {
    font-size: 18px;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: end;
  position: fixed;
  right: 35px;
  bottom: 0;
`

export const BgContainer2 = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 151px;
  margin: 0 auto;

  @media (max-width: 1299px) {
    height: auto;
    padding: 50px;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 51px;
  padding-right: 200px;
  padding-top: 22px;

  h4 {
    text-align: center;
    font-family: 'Inter';
    font-size: 22px;
    font-style: normal;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: 1341px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;

    h4 {
      font-size: 18px;
    }
  }

  @media (max-width: 450px) {
    justify-content: center;
  }
`

export const Others = styled.h4`
  @media (max-width: 1341px) {
    display: none;
  }
`
export const Others2 = styled.h4`
  @media (max-width: 450px) {
    display: none;
  }
`

export const ContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 51px;
  padding-right: 200px;
  padding-top: 17px;

  @media (max-width: 1341px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
  }

  @media (max-width: 450px) {
    justify-content: center;
  }
`
export const IconsFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 1341px) {
    gap: 10px;
  }
`

export const AllIcon = styled.div`
  display: flex;
  gap: 21px;
  justify-content: baseline;

  @media (max-width: 1341px) {
    gap: 10px;
  }

  @media (max-width: 450px) {
    align-items: center;
    justify-content: center;
  }
`
export const Adress = styled.div`
  display: flex;
  gap: 32px;

  p {
    text-align: center;
    font-family: 'Inter';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: 1341px) {
    gap: 10px;

    p {
      font-size: 10px;
    }
  }
`
export const Services = styled.div`
  display: flex;
  justify-content: center;
  max-width: 900px;
  gap: 50px;

  p {
    text-align: center;
    font-family: 'Inter';
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
  }

  @media (max-width: 1341px) {
    /* flex-direction: column;
    justify-content: center;
    gap: 20px; */
    display: none;
  }
`
export const ColumnsServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1341px) {
    justify-content: center;
  }
`
export const Invite = styled.div`
  display: flex;

  p {
    text-align: center;
    font-family: 'Inter';
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
  }

  @media (max-width: 450px) {
    display: none;
  }
`
