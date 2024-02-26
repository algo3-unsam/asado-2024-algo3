import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import InvitadosView from "./views/InvitadosView/invitadosView"
import LayoutWrap from "./views/layoutWrap"
import { useContext, useEffect } from 'react'
import { Context } from './context/context'
import ConfirmadosView from './views/confirmadosView/confirmadosView'
import { FormInvitados } from './views/EditInvitados/EditInvitados'

export const AsadoRoutes = () => {

    const {changeTitle} = useContext(Context)
  
    const DoSomethingWrapper = ({ children, title }) => {
      useEffect(() => {
        changeTitle(title)
      }, [title])
      return children
    }

    return(
        <Routes>
        <Route path="/" element={<LayoutWrap/>} >
        <Route path="/invitados" element={<DoSomethingWrapper title="Invitados"><InvitadosView/></DoSomethingWrapper>} />
        <Route path="/confirmados" element={<DoSomethingWrapper title="Confirmados"><ConfirmadosView/></DoSomethingWrapper>} />
        <Route path= "/Actualizar-Invitado" element={<DoSomethingWrapper title="Actualizar-Invitado"><FormInvitados/></DoSomethingWrapper>} />

        </Route>
        <Route path="*" element={<Navigate to="/invitados" />} />

        </Routes>
    )
}

export const AsadoRouter = () => {
    return (
      <Router>
        <AsadoRoutes />
      </Router>
    )
  }