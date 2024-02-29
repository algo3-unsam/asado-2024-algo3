/* eslint-disable react/prop-types */
import { MemoryRouter, } from "react-router-dom"
import { render } from "@testing-library/react"
import { expect, test, vi } from "vitest"
import { Context } from "src/context/context"
import { AsadoRoutes } from "src/routes"



  // const header = screen.getAllByTestId('headerTitle')
  describe('headerTest', () => {
    const contextValue = {
      changeTitle: vi.fn(),
    }

    const TestHeader =({title})=>{
      return (
        
      <MemoryRouter initialEntries={[title]} initialIndex={0} >
       <Context.Provider value={contextValue}>
          <AsadoRoutes />
        </Context.Provider>
      </MemoryRouter>
      )
    }


  test('cuando estoy en invitados, el titulo del header es Invitados', () => {
      render(
        <TestHeader title ='/invitados'/>
      )
      
    expect(contextValue.changeTitle).toHaveBeenCalledWith('Invitados')
  })

  test('cuando estoy en confirmados, el titulo del header es Confirmados', () => {
    render(
      <TestHeader title ='/confirmados'/>
    )
    expect(contextValue.changeTitle).toHaveBeenCalledWith('Confirmados')
  })


})
