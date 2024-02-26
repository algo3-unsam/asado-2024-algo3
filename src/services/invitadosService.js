import Invitado from "src/domain/Invitados"
import { REST_SERVER_URL } from "./config"
import axios from "axios"
class InvitadoService {

    invitadoAsJson(invitadoJson){
        return Invitado.fromJson(invitadoJson)
    }

    async getItemsFiltrados(busqueda){
        const InvitadosJson = await axios.get(`${REST_SERVER_URL}/ordenado?nombreABuscar=${busqueda}`)
        const invitados = InvitadosJson.data.map(this.invitadoAsJson)
        return invitados
    }
    async borrarItem(id){
        await axios.delete(`${REST_SERVER_URL}/borrar/${id}`)
    }

    async confirmarItem(id){
        await axios.put(`${REST_SERVER_URL}/confirmar/${id}`)
    }

}
export default InvitadoService 