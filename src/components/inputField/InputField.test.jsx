import { render } from '@testing-library/react'
import InputField from '../inputField/InputField'

it('should render the InputField component', () => {
  const { container } = render(<InputField head="Duck" middle="Blue" bottom={'blue'} />)
  expect(container).toMatchSnapshot()
})
