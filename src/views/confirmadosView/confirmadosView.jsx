import ConfirmadoService from "src/services/confirmadosService"
import { GenericCardListComponent } from "../genericView/genericView"

export const ConfirmadosView = () => {
    return(

        <GenericCardListComponent
            service={new ConfirmadoService()} 
            tipoVista={"confirmados"} 
        />
    )
}


export default ConfirmadosView