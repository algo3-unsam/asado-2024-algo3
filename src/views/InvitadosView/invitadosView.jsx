import InvitadoService from "src/services/invitadosService"
import { GenericCardListComponent } from "../genericView/genericView"
import Invitado from "src/domain/Invitados"

const InvitadosView = () => {
    return (
        <GenericCardListComponent
            service={new InvitadoService()} 
            tipoItem={new Invitado()} 
        />
    )
}

export default InvitadosView
