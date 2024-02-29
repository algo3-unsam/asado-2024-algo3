import { invitadoService } from "src/services/invitadosService"
import { GenericCardListComponent } from "../genericView/genericView"

const InvitadosView = () => {
    return (
        <GenericCardListComponent
            service={invitadoService} 
            tipoVista={"invitados"} 

        />
    )
}

export default InvitadosView
