/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Alert , Container, Snackbar} from "@mui/material"
import { useNavigate } from 'react-router-dom'
import GenericSearchBar from "src/components/busqueda/busqueda"
import GenericCard from "src/components/card/genericCard"
import { handleError } from "src/services/config"
// eslint-disable-next-line react/prop-types
export const GenericCardListComponent = ({ service, tipoItem}) => {
  const [items, setItems] = useState([])
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)
  const [open, setOpen] = useState(false)
  const [filtroNombre, setFiltroNombre] = useState("")
  const navigate = useNavigate()

  const buscarItems = async (textoBusquedaNuevo) => {
    try{
      const itemsFiltrados = await service.getItemsFiltrados(textoBusquedaNuevo)
      setItems(itemsFiltrados)
    }
    catch(error){
      onActionCompleted(handleError(error), 'error')
    }
  }
  
  const onActionCompleted = (message, type) => {
      setMessage(message)
      setMessageType(type)
      buscarItems('')
      handleClick()
  }
    
  useEffect(() => {
    buscarItems('')
  }, [])

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }


  const borrarItem = async (id) => {
    try {
      await service.borrarItem(id)
      onActionCompleted('Item borrado con éxito', 'success')
    } catch (error) {
      onActionCompleted(handleError(error), 'error')
    }
  }
  const cambioFiltroConBusqueda = (value) => {
    setFiltroNombre(value)
    buscarItems(value)
  }

  const goToEditarItem = (elemento) => {
    const tipoElemento = tipoItem.constructor.name.toLowerCase()
    const tipoOperacion = 'actualizar'
    navigate(`/edit-view`, { state: { elemento, tipoOperacion, tipoElemento, esDetalles } })
  }


   const confirmarItem = async (id) => {
       try {
        await service.confirmarItem(id)
        onActionCompleted('Item confirmado con éxito', 'success')
      } catch (error) {
        onActionCompleted(handleError(error), 'error')
      }

       }
    
       const cancelarItem = async (id) => {
        try {
          await service.cancelarItem(id)
          onActionCompleted('Item cancelado con éxito', 'success')
        } catch (error) {
          onActionCompleted(handleError(error), 'error')
        }
  

       }
    
    
   



  return (
      <Container className="main" style={{marginBottom: "5rem"}}>
        <GenericSearchBar value={filtroNombre} onChange={cambioFiltroConBusqueda} />
        {items.map(item =>
        <GenericCard key={item.id}
         invitado={item}
         onConfirm={()=> confirmarItem(item.id)}
         onDelete={() => borrarItem(item.id)} 
         onEdit={() => goToEditarItem(item)}  
         />
        )}
        <div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity={messageType}> {message}</Alert>
        </Snackbar>
        </div>
      </Container>
  )
}

