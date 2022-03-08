import Image from 'next/image'
import Header from '../../Header'
import * as S from './styles'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <S.Container>
        <section>
          <S.Title>
            Ajude quem <p>precisa de ajuda</p>
          </S.Title>
          <S.Text>
            Com apenas 1 real você pode ajudar a alimentar cães de rua.
          </S.Text>
          <div>
            <S.Button>Contribuir</S.Button>
            <S.Contato href="#">Entrar em contato</S.Contato>
          </div>
        </section>
        <section>
          <S.Shape>
            <div>
              <Image
                src="/assets/viralata-home 1.png"
                alt="vira-lata sorrindo"
                width={340}
                height={350}
                quality={80}
              />
            </div>
            <div>
              <Image
                src="/assets/racao-no-chao 2.png"
                alt="ração para cachorro"
                width={230}
                height={200}
                quality={80}
              />
            </div>
          </S.Shape>
        </section>
      </S.Container>
    </>
  )
}

export default HomeLayout
