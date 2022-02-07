// ---------------------
// index.tsx
exports.component = (name) => `import * as S from './styles'

export type ${name}Props = {
  props?: object
}

const ${name} = ({ props }: ${name}Props) => {
  return (
    <S.Wrapper>
      TODO: ${name}
    </S.Wrapper>
  )
}

export default ${name}
`

// ---------------------
// test.tsx
exports.test = (name) => `import { render } from '@testing-library/react'

import ${name} from '.'

describe('<${name} />', () => {
  test('it should render correctly', () => {
    const { asFragment } = render(<${name} />)
    expect(asFragment()).toBeInTheDocument()
  })
})
`

// ---------------------
// style.ts
exports.stylesheet = () => `import styled from 'styled-components'

export const Wrapper = styled.div\`\`
`
