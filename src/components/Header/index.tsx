import * as S from './styles'

export function Header() {
  return (
    <>
      <S.Container>
        <div>
          <S.Logo src="logo.png" alt="logo" />
        </div>
        <S.Links>
          <S.Message href={'https://w.app/2wVKCy'} target="_ablank">
            ABRIR MEI
          </S.Message>
          <S.Message href={'https://w.app/2wVKCy'} target="_ablank">
            TIRAR DUVIDAS
          </S.Message>
          <S.Messages href={'https://w.app/2wVKCy'} target="_ablank">
            ENTRE EM CONTATO
          </S.Messages>
        </S.Links>
      </S.Container>
    </>
  )
}
