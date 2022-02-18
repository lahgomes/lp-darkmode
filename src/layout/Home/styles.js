import styled from 'styled-components'

export const Container = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  //height: 100vh;
`

export const Title = styled.h1`
  color: ${props => props.theme.darkPurple};
  font-family: ${props => props.theme.fontFamilyTitle};
  font-size: 6rem;
  font-weight: ${props => props.theme.black};
  padding-bottom: 2rem;
  padding-right: 5rem;
  padding-top: 10rem;
`

export const Text = styled.p`
  color: ${props => props.theme.darkPurple};
  font-family: ${props => props.theme.fontFamilyText};
  font-size: 1.6rem;
  font-weight: ${props => props.theme.normal};
  padding-bottom: 2rem;
`
export const Button = styled.button`
  border: none;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.purple};
  font-family: ${props => props.theme.fontFamilyText};
  font-size: 1.6rem;
  font-weight: ${props => props.theme.normal};
  padding: 1.2rem 3.2rem;
  border-radius: 4rem;
`
export const Contato = styled.a`
  font-family: ${props => props.theme.fontFamilyText};
  font-size: 1.6rem;
  font-weight: ${props => props.theme.normal};
  margin-left: 2.4rem;
`
