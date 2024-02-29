import Invitado from "src/domain/Invitados"
import { REST_SERVER_URL } from "./config"
import axios from "axios"
class ConfirmadoService {

    invitadoAsJson(invitadoJson){
        return Invitado.fromJson(invitadoJson)
    }

    async getItemsFiltrados(busqueda){
        const InvitadosJson = await axios.get(`${REST_SERVER_URL}/confirmado-ordenado?nombreABuscar=${busqueda}`)
        const confirmados = InvitadosJson.data.map(this.invitadoAsJson)
        return confirmados
    }

    async borrarItem(id){
        await axios.delete(`${REST_SERVER_URL}/borrar/${id}`)
    }

    async cancelarItem(id){
        await axios.put(`${REST_SERVER_URL}/cancelar/${id}`)
    }
    
    async obtenerMontoTotal() {
          const response = await axios.get(`${REST_SERVER_URL}/monto`)
          return response.data
      }
 

}
export default ConfirmadoService 