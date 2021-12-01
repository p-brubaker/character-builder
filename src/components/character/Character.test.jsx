import { render } from '@testing-library/react'
import Character from './Character'

it('should render the Character component', () => {
  const { container } = render(<Character head="Bird" middle="Fancy" bottom="White" />)
  expect(container).toMatchSnapshot()
})
