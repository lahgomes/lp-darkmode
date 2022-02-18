import * as S from './styles'
import Header from '../../Header'

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
          <p>dog</p>
          <p>dog</p>
          <p>dog</p>
          <p>dog</p>
          <p>dog</p>
          <p>dog</p>
        </section>
      </S.Container>
    </>
  )
}

export default HomeLayout
