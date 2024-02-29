/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Alert, Container, Snackbar } from "@mui/material"
import GenericSearchBar from "src/components/busqueda/busqueda"
import GenericCard from "src/components/card/genericCard"
import ConfirmadoService from "src/services/confirmadosService"
import { handleError } from "src/services/config"
import { useNavigate } from 'react-router-dom' // Importar Link


export const GenericCardListComponent = ({ service, tipoVista }) => {
  const [items, setItems] = useState([])
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)
  const [open, setOpen] = useState(false)
  const [filtroNombre, setFiltroNombre] = useState("")
  const [montoTotal, setMontoTotal] = useState(0)
  const navigate = useNavigate()

  const buscarItems = async (textoBusquedaNuevo) => {
    try {
      const itemsFiltrados = await service.getItemsFiltrados(textoBusquedaNuevo)
      setItems(itemsFiltrados)
    } catch (error) {
      onActionCompleted(handleError(error), 'error')
    }
  }

  const obtenerMontoTotal = async () => {
    try {
      const confirmadoService = new ConfirmadoService()
      const total = await confirmadoService.obtenerMontoTotal()
      setMontoTotal(total)
    } catch (error) {
      onActionCompleted(handleError(error), 'error')
    }
  }

  const onActionCompleted = (message, type) => {
    setMessage(message)
    setMessageType(type)
    handleClick()
    buscarItems(filtroNombre)
    obtenerMontoTotal()
  }

  useEffect(() => {
    buscarItems('')
    obtenerMontoTotal()
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
      onActionCompleted('Invitado eliminado con éxito', 'success')
    } catch (error) {
      onActionCompleted(handleError(error), 'error')
    }
  }

  const cambioFiltroConBusqueda = (value) => {
    setFiltroNombre(value)
    buscarItems(value)
  }

  const goToEditarItem = (invitado) => {
    navigate(`/actualizar-Invitado/${invitado.id}`, { state: { invitado } })
  }

  const confirmarItem = async (id) => {
    try {
      await service.confirmarItem(id)
      onActionCompleted('Invitado confirmado con éxito', 'success')
    } catch (error) {
      onActionCompleted(handleError(error), 'error')
    }
  }

  const cancelarItem = async (id) => {
    try {
      await service.cancelarItem(id)
      onActionCompleted('Invitado cancelado con éxito', 'success')
    } catch (error) {
      onActionCompleted(handleError(error), 'error')
    }
  }

  return (
    <Container className="main" style={{ marginBottom: "5rem" }}>
      <GenericSearchBar value={filtroNombre} onChange={cambioFiltroConBusqueda} />
      {items.map(item =>
        <GenericCard key={item.id}
          invitado={item}
          onConfirm={() => confirmarItem(item.id)}
          onDelete={() => borrarItem(item.id)}
          onEdit={() => goToEditarItem(item)}
          onCancel={() => cancelarItem(item.id)}
          showCancelButton={tipoVista === "invitados"}
          showMonto={tipoVista === "confirmados"}

        />
      )}
      {tipoVista === "confirmados" &&
        <div>
          <p style={{ fontSize: '24px', textAlign: 'center' }}>Total a Recaudar: ${montoTotal}</p>
        </div>
      }
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity={messageType}> {message}</Alert>
      </Snackbar>
    </Container>
  )
}
