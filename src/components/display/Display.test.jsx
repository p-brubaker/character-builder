import { render } from '@testing-library/react'
import Display from '../display/Display'

it('should render the Display component', () => {
  const { container } = render(
    <Display
      report={{ Head: 0, Middle: 3, Bottom: 2 }}
      catchphrases={['Okey-Dokey', 'Well, I suppose...']}
    />
  )
  expect(container).toMatchSnapshot()
})
