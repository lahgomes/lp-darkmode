import Image from 'next/image'
import Header from '../../components/Header'
import * as S from './styles'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <S.Container>
        <section>
          <S.Title>
            Ajude quem <br /> precisa de ajuda
          </S.Title>
          <S.Text>
            Com apenas 1 real você pode ajudar a alimentar cães de rua.
          </S.Text>
          <div>
            <S.Button>Contribuir</S.Button>
            <S.Contato href="#">Entrar em contato</S.Contato>
          </div>
        </section>
        <S.WrapperIllustration>
          <S.Shape>
            <img
              src="/assets/viralata-home-1.png"
              alt="vira-lata sorrindo"
              width="450"
              height="465"
              className="cachorro"
            />
          </S.Shape>
          <img
            src="/assets/racao-no-chao 2.png"
            alt="ração para cachorro"
            width="280"
            height="240"
            className="comida"
          />
        </S.WrapperIllustration>
      </S.Container>
    </>
  )
}

export default HomeLayout
