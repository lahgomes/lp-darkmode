import styled from 'styled-components'

export default function Home() {
  const Title = styled.h1`
    color: ${props => props.theme.red};
  `

  return (
    <div>
      <Title>oi</Title>
    </div>
  )
}
