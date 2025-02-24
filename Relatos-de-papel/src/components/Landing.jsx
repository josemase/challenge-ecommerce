import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import {Spinner} from "react-bootstrap";
import '../styles/Landing.css';
import { SiBookstack } from "react-icons/si";
function Landing() {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/main')
        }, 5000)
        return () => clearTimeout(timer)

    }, [navigate])
    return (
           <div className="landing">
               <h1>Bienvenidos a Relatos de papel  <SiBookstack className="landing__icon" /></h1>
               <p>Esta es la vista de acceso (Landing) serás redreccionado en 5 segundos...</p>
               <Spinner animation="grow" role="status">
                   <span className="visually-hidden">Loading...</span>
               </Spinner>
           </div>
    )
}

export default Landing