// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CarouselItem } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

import * as S from './styles'

export function MyCarousel() {
  return (
    <>
      <main>
        <Carousel indicators={false}>
          <S.CardCarouselItem>
            <S.MyMain>
              <div>
                <S.Picture src="card1.png" alt="card1" />
              </div>
              <S.Info>
                <h4>ABRIR MEU MEI</h4>
                <p>
                  Escolher corretametne o CNAE do CNPJ é primordial, pois
                  evitará problemas na emissão das notas fiscais, e taxação de
                  impostos.
                </p>
              </S.Info>
            </S.MyMain>
          </S.CardCarouselItem>
          <S.CardCarouselItem>
            <S.MyMain>
              <div>
                <S.Picture src="card4.png" alt="card4" />
              </div>
              <S.Info>
                <h4>DECLARAÇÃO DASN MEI</h4>
                <p>
                  Orientação no envio da Declaração de Faturamento Anual (DASN)
                </p>
              </S.Info>
            </S.MyMain>
          </S.CardCarouselItem>
          <S.CardCarouselItem>
            <S.MyMain>
              <div>
                <S.Picture src="card7.png" alt="card7" />
              </div>
              <S.Info>
                <h4>ASSINAR CARTEIRA MEI</h4>
                <p>Orientação da folha de pagamento MEI</p>
              </S.Info>
            </S.MyMain>
          </S.CardCarouselItem>
          <S.CardCarouselItem>
            <S.MyMain>
              <div>
                <S.Picture src="card2.png" alt="card2" />
              </div>
              <S.Info>
                <h4>EMISSÃO DE ALVARÁS</h4>
                <p>
                  MEI também precisa de alvará de funcionamento e sanitário!
                </p>
              </S.Info>
            </S.MyMain>
          </S.CardCarouselItem>
          <S.CardCarouselItem>
            <S.MyMain>
              <div>
                <S.Picture src="card5.png" alt="card5" />
              </div>
              <S.Info>
                <h4>CONSUTAR DEBITOS MEI</h4>
                <p>
                  Regularização dos boletos DAS em atraso, e emissão das guias
                </p>
              </S.Info>
            </S.MyMain>
          </S.CardCarouselItem>
          <S.CardCarouselItem>
            <S.MyMain>
              <div>
                <S.Picture src="card6.png" alt="card6" />
              </div>
              <S.Info>
                <h4>SAIR DO MEI PARA ME</h4>
                <p>
                  Assessoria na alteração dos dados para uma transição de CNPJ
                  MEI para ME, ou retornar para MEI de forma segura
                </p>
              </S.Info>
            </S.MyMain>
          </S.CardCarouselItem>
          <S.CardCarouselItem>
            <S.MyMain>
              <div>
                <S.Picture src="card1.png" alt="card1" />
              </div>
              <S.Info>
                <h4>CANCELAR MEI</h4>
                <p>
                  Auxilio no cancelamento do MEI, sem correr riscos de ficar com
                  débitos.
                </p>
              </S.Info>
            </S.MyMain>
          </S.CardCarouselItem>
          <S.CardCarouselItem>
            <S.MyMain>
              <div>
                <S.Picture src="card3.png" alt="card3" />
              </div>
              <S.Info>
                <h4>EMISSÃO DAS NOTAS FISCAIS</h4>
                <p>
                  Orientação da emissão das Notas Fiscais e cálculos
                  tributários.
                </p>
              </S.Info>
            </S.MyMain>
          </S.CardCarouselItem>
        </Carousel>
      </main>
    </>
  )
}
