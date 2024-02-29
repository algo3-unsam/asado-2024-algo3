// /* eslint-disable react/prop-types */

// import { describe, test } from 'vitest'
// import { render } from '@testing-library/react'
// import { BrowserRouter } from 'react-router-dom'
// import FormInvitados from './EditInvitados'

// describe('FormInvitados', () => {

//     const invitadoValores = {
//         id: 1,
//         nombre: "Juan",
//         apellido: "Perez",
//         comeEnsalada: true,
//         gramosDeCarne: 150,
//         ingredientesDeEnsalada: ["tomate", "lechuga"]
//     }

//     test("El componente se renderiza", () => {
//         render(<BrowserRouter><FormInvitados invitado={invitadoValores} /></BrowserRouter>)
//     })

//     test("El valor default del campo nombre, es el mismo que el del invitado que se recibe por props", () => {
//         render(<BrowserRouter><FormInvitados invitado={invitadoValores} /></BrowserRouter>)
//         const nombreInvitadoInput = screen.getByTestId("nombre")
//         expect(nombreInvitadoInput.value).toBe(invitadoValores.nombre)
//     })

//     test("El valor default del campo apellido, es el mismo que el del invitado que se recibe por props", () => {
//         render(<BrowserRouter><FormInvitados invitado={invitadoValores} /></BrowserRouter>)
//         const apellidoInvitadoInput = screen.getByTestId("apellido")
//         expect(apellidoInvitadoInput.value).toBe(invitadoValores.apellido)
//     })

//     test("El valor default del campo comeEnsalada, es el mismo que el del invitado que se recibe por props", () => {
//         render(<BrowserRouter><FormInvitados invitado={invitadoValores} /></BrowserRouter>)
//         const esliderInvitado = screen.getByTestId("comeEnsalada")
//         expect(esliderInvitado.checked).toBe(invitadoValores.comeEnsalada)
//     })
//     })

