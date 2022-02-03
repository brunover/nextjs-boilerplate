import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="A pink atom with the text Advanced React next to it"
    />
    <S.Title>Advanced React</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS and Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer looking to a screen with codes"
    />
  </S.Wrapper>
)

export default Main
