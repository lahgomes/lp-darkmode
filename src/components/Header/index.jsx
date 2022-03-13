import Link from 'next/link'
import Image from 'next/image'
import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderContainer>
      <Link href="/">
        <a>
          <Image
            src="/assets/logo.png"
            alt="logo HelpDog na cor roxa"
            width={150}
            height={60}
            quality={80}
          />
        </a>
      </Link>
    </S.HeaderContainer>
  )
}

export default Header
