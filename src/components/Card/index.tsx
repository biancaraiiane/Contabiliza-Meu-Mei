import * as S from './styles'

interface CardProps {
  image: string
  title: string
  text: string
}

export function Card({ image, title, text }: CardProps) {
  return (
    <>
      <S.Main>
        <div>
          <S.Picture src={image} alt={title} />
        </div>
        <S.Info>
          <h4>{title}</h4>
          <p>{text}</p>
        </S.Info>
      </S.Main>
    </>
  )
}
