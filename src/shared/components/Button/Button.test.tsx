import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByTestId('button')).toBeInTheDocument()
    })

    test('Test clear theme', () => {
        render(<Button theme="clear">TEST</Button>)
        expect(screen.getByTestId('button')).toHaveClass('clear')
        screen.debug()
    })
})
