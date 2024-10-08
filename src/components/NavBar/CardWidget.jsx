import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBell, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CardWidget = ({ActualizarClick})=>{
    
    const abrirCarrito = ()=>{
        ActualizarClick(false);
        
    }

    return(
   
        <button class="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full" onClick={abrirCarrito}>
            🛒 Ver Carrito
        </button>
    )
}

export default CardWidget;