import styled from 'styled-components'

export const Container = styled.main`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;

  section {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.darkPurple};
  font-family: ${props => props.theme.fontFamilyTitle};
  font-size: 6rem;
  font-weight: ${props => props.theme.black};
  padding-bottom: 2rem;

  &:after {
    content: '';
    display: block;
    width: 22rem;
    height: 2rem;
    border: 5px solid #713fff;
    border-color: #713fff transparent transparent transparent;
    border-radius: 246%/113px 50px 0 0;
  }
`

export const Text = styled.p`
  color: ${props => props.theme.darkPurple};
  font-family: ${props => props.theme.fontFamilyText};
  font-size: 1.6rem;
  font-weight: ${props => props.theme.normal};
  padding-bottom: 2rem;
`

export const Button = styled.button`
  background-color: ${props => props.theme.purple};
  border-radius: 4rem;
  border: none;
  color: ${props => props.theme.white};
  cursor: pointer;
  font-family: ${props => props.theme.fontFamilyText};
  font-size: 1.6rem;
  font-weight: ${props => props.theme.normal};
  padding: 1.2rem 3.2rem;
`

export const Contato = styled.a`
  font-family: ${props => props.theme.fontFamilyText};
  font-size: 1.6rem;
  font-weight: ${props => props.theme.normal};
  margin-left: 2.4rem;
`

export const Shape = styled.div`
  background: linear-gradient(180deg, #3cb7de 0%, #3fa3ff 100%);
  border-radius: 500px 0px 0px 500px;
  height: 500px;
  position: relative;
  transform: rotate(-17.91deg) translate(213px, 67px);
  width: 800px;
  overflow: hidden;

  .cachorro {
    position: absolute;
    transform: rotate(15.09deg) translate(71px, 29px);
  }
`

export const WrapperIllustration = styled.section`
  position: relative;

  .comida {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-70%);
  }
`
