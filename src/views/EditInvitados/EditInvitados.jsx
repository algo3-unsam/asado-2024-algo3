/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { TextField, Checkbox, Button, FormControlLabel, Container, Snackbar, Alert } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom' 
import { invitadoService } from 'src/services/invitadosService'
import Invitado from 'src/domain/Invitados'
import { handleError } from 'src/services/config'

export const FormInvitados = () => {
  const location = useLocation()
  const invitado = location.state ? location.state.invitado : null

  console.log("Datos del invitado en FormInvitados:", invitado)
  const [comeEnsalada, setComeEnsalada] = useState(invitado.comeEnsalada)
  const [tomate, setTomate] = useState(invitado.ingredientesDeEnsalada.includes('tomate'))
  const [lechuga, setLechuga] = useState(invitado.ingredientesDeEnsalada.includes('lechuga'))
  const [cebolla, setCebolla] = useState(invitado.ingredientesDeEnsalada.includes('cebolla'))


  const navigate = useNavigate()

  const {
    register, 
    handleSubmit, 
    formState : { errors }
  } = useForm({
    defaultValues:{
        id: invitado ? invitado.id : "",
        nombre: invitado ? invitado.nombre : "",
        apellido: invitado ? invitado.apellido : "",
        gramosDeCarne: invitado ? invitado.gramosDeCarne : 0,
        comeEnsalada: invitado ? invitado.comeEnsalada : false,
        ingredientesDeEnsalada: invitado ? invitado.ingredientesDeEnsalada : []
    }
  })

  /* -------------- SNACKBAR --------------- */
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)
  const [open, setOpen] = useState(false)

  const onActionCompleted = (message, type) => {
    setMessage(message)
    setMessageType(type)
    setOpen(true)
    setTimeout(() => {volver()}, 1500)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  /* --------------------------------------- */

  useEffect(() => {
    if (!comeEnsalada) {
      setTomate(false)
      setLechuga(false)
      setCebolla(false)
    }
  }, [comeEnsalada])


  const onSubmit = (data) => {
    actualizarInvitado(data)
  }
  
  const actualizarInvitado = async (invitadoActualizado) => {
    try {
      const invitadoAAactualizar = Object.assign(new Invitado(), invitadoActualizado)
      await invitadoService.actualizarInvitado(invitadoAAactualizar)
      onActionCompleted('Invitado actualizado con éxito', 'success')
    } catch (error) {
      onActionCompleted(handleError(error), 'error')
    }
  }

  const volver = () => {
    navigate("/invitados")
  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          inputProps={{"data-testid":"nombre"}}
          label="Nombre"
          fullWidth
          required
          margin="normal"
          {...register("nombre", {
            required: "El nombre es requerido"
          })}
          error={errors.nombre}
          helperText={errors.nombre?.message}
        />
        <TextField
          inputProps={{"data-testid":"apellido"}}
          label="Apellido"
          fullWidth
          required
          margin="normal"
          {...register("apellido", {
            required: "El apellido es requerido"
          })}
          error={errors.apellido}
          helperText={errors.apellido?.message}
        />
        <TextField
          inputProps={{"data-testid":"gramosDeCarne"}}
          label="Gramos de Carne"
          type="number"
          fullWidth
          required
          margin="normal"
          {...register("gramosDeCarne", {
            required: "Los gramos de carne son requeridos"
          })}
          error={errors.gramosDeCarne}
          helperText={errors.gramosDeCarne?.message}
        />
        <div>
          <FormControlLabel
            control={
              <Checkbox
              inputProps={{"data-testid":"comeEnsalada"}}
                {...register("comeEnsalada")}
                checked={comeEnsalada}
                onChange={(event) => setComeEnsalada(event.target.checked)}
              />
            }
            label="Come Ensalada"
          />
        </div>
        {comeEnsalada && 
          <div>
<FormControlLabel
  control={
    <Checkbox
      {...register("ingredientesDeEnsalada")}
      value="tomate"
      checked={tomate}
      onChange={(event) => setTomate(event.target.checked)}
    />
  }
  label="Tomate"
/>

<FormControlLabel
  control={
    <Checkbox
      {...register("ingredientesDeEnsalada")}
      value="lechuga"
      checked={lechuga}
      onChange={(event) => setLechuga(event.target.checked)}
    />
  }
  label="Lechuga"
/>

<FormControlLabel
  control={
    <Checkbox
      {...register("ingredientesDeEnsalada")}
      value="cebolla"
      checked={cebolla}
      onChange={(event) => setCebolla(event.target.checked)}
    />
  }
  label="Cebolla"
/>
          </div>
        }

        
        <div>
        <Button type="submit" variant="contained" fullWidth>
          Guardar Cambios
        </Button>     
        </div>
      </form>
      <div>
          <p style={{ fontSize: '24px', textAlign: 'center' }}> Monto de Consumo: ${invitado.calcularMonto}</p>
        </div>

      <Snackbar open={open} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity={messageType}>{message}</Alert>
      </Snackbar>
    </Container>
  )
}

export default FormInvitados