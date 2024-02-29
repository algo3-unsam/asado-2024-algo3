import { Header } from 'src/components/header/header'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from 'src/context/context'
import { BottomNav } from 'src/components/bottom-Nav/bottomNav'

const LayoutWrap = () => {

    const {title} = useContext(Context)
  
    return (
      <>
        <Header title={title} />
        <Outlet />
        <BottomNav />
      </>
    )
  }
  
  
  
  
  export default LayoutWrap
  