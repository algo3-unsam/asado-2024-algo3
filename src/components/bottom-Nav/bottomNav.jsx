import { useState} from "react"
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import { DoneOutlineOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"

export const BottomNav = () => {

const [value, setValue] = useState(0)

return(
<BottomNavigation
className='footer'
value={value}
onChange={(event, newValue) => {
    setValue(newValue)
}}
>
<BottomNavigationAction data-testId='botNavInvitados' component={Link} to="/invitados" label="Invitados" icon={<PersonIcon/>} />
<BottomNavigationAction data-testId='botNavConfirmados' component={Link} to="/confirmados" label="Confirmados" icon={<DoneOutlineOutlined/>} />

</BottomNavigation>

)

}