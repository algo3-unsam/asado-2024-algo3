import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { BottomNav } from './bottomNav'
import { describe, expect, test } from 'vitest'

describe('bottom nav', () => {
  test('el componente renderiza', () => {
    render(<BrowserRouter><BottomNav/></BrowserRouter>)
  })

  test('clickeo en invitados, me envia a la vista de invitados', () => {
    render(<BrowserRouter><BottomNav/></BrowserRouter>)

    fireEvent.click(screen.getByTestId('botNavInvitados'))

    expect(window.location.pathname).toBe('/invitados')
  })

  test('clickeo en confirmados, me envia a la vista confirmados', () => {
    render(<BrowserRouter><BottomNav/></BrowserRouter>)

    fireEvent.click(screen.getByTestId('botNavConfirmados'))

    expect(window.location.pathname).toBe('/confirmados')
  })
})
