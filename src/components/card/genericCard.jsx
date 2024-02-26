import { useTheme } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardContent, Typography, Stack, Button } from '@mui/material'
import PropTypes from 'prop-types'
import Invitado from 'src/domain/Invitados'
import { faBowlFood, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons' // Importa el icono de FontAwesome que deseas usar

const GenericCard = ({ invitado, onConfirm, onDelete, onEdit }) => {
  const { nombre, apellido, comeEnsalada, confirmado } = invitado
  const globalTheme = useTheme()

  return (
    <Card onClick={onEdit} 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: globalTheme.spacing(2),
        borderRadius: '1.2rem',
        border: '1px solid black',
        boxShadow: '-2px 2px 4px 0px rgba(0, 0, 0, 0.75)',
        pb: 0,
      }}>

      <CardContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" gutterBottom>
            {nombre} {apellido}
          </Typography>
          <Stack direction="row" spacing={1}>
            {comeEnsalada && <FontAwesomeIcon icon={faBowlFood} />}
            {confirmado && <FontAwesomeIcon icon={faCheck} />}
            {/* Reemplaza IconButton por FontAwesomeIcon */}
            <FontAwesomeIcon icon={faTrash} onClick={(e) => { e.stopPropagation(); onDelete() }} />
          </Stack>
        </Stack>
      </CardContent>

      <Stack direction="row" justifyContent="center" alignItems="center" px={2} pb={1}>
        {!confirmado && 
          <Button
            variant="contained"
            style={{ width: '100%', backgroundColor: 'green', color: 'white', borderRadius: '0.5rem', padding: '0.5rem 1rem' }}
            onClick={(e) => { e.stopPropagation(); onConfirm() }}
          >
            Confirmar
          </Button>
        }
      </Stack>
    </Card>
  )
}

GenericCard.propTypes = {
  invitado: PropTypes.instanceOf(Invitado).isRequired,
  onConfirm: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default GenericCard
