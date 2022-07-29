import React from 'react'
import MenuBar from './MenuBar'
import WindowsBar from './WindowsBar'
import logo from '../img/icons/notepadIcon.png'

const Readme = () => {
  return (
    <div className='notepad'>
        <WindowsBar title='Block de Notas - README.txt (Solo lectura)' logo={logo}/>
        <MenuBar />
        <div className="content">
            <p>!Bienvenido a mi PORTFOLIO!</p>
            <p>En esta pequeña máquina virtual he introducido todos los proyectos de React que he construido</p>
            <p>¡Incluso el propio portofolio está realizado con REACT!</p>
            <p>Te invito a que investigues un poco en este mini pc e intentes descubrir todos los proyectos que hay!!!</p>
            <p>Te dejo una pequeña lista, por si no te das cuenta de alguno:</p>
            <ul>
                <li> - Clock</li>
            </ul>
            <p>AVISO!!! El portfolio aún está en desarrollo, si ves que algo no funciona como debería probablemente esté en desarrollo</p>
        </div>
    </div>
  )
}

export default Readme
