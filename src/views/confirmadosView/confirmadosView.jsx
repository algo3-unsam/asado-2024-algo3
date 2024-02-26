import ConfirmadoService from "src/services/confirmadosServie"
import { GenericCardListComponent } from "../genericView/genericView"
import Invitado from "src/domain/Invitados"

export const ConfirmadosView = () => {
    return(

        <GenericCardListComponent
            service={new ConfirmadoService()} 
            tipoItem={new Invitado()} 
        />
    )
}


export default ConfirmadosView