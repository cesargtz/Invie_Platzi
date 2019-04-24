import React, {Component} from 'react';
import logo from '../images/invie-white.png'
class Footer extends Component  {
  render(){
    return(
      <footer className="footer">
        <div className="contenedor">
          <div className="contacto">
            <img src={logo} alt="logotipo blanco"/>
            <a href="tel:+573024456678"><strong>Telefono</strong> <span>3024456678</span></a>
            <a href="mailto:contacto@invie.com"><strong>E-mail</strong> <span>contacto@invie.com</span></a>
          </div>
          <form className="formulario">
            <div className="col1">
              <label htmltFor="nombre">Nombre</label>
              <input type="text" required id="nombre" name="nombre"/>
              <label htmltFor="email">E-mail</label>
              <input type="email" required id="email" name="email"/>
              <div className="sexo">
                <label htmltFor="mujer">
                  <input type="radio" id="mujer" defaultChecked name="sexo" value="mujer"/>Mujer
                </label>
                <label htmltFor="hombre">
                  <input type="radio" id="hombre" name="sexo" value="hombre"/>Hombre
                </label>
              </div>
              <div className="intereses">
                <label htmltFor="cotizacion">
                  <input type="checkbox" defaultChecked id="cotizacion" name="intereses" value="cotizacion"/>Cotizacion
                </label>
                <label htmltFor="reclamos">
                  <input type="checkbox" id="reclamos" name="intereses" value="reclamos"/>Reclamos
                </label>
                <label htmltFor="comentarios">
                  <input type="checkbox" id="comentarios" name="intereses" value="comantarios"/>Comentarios
                </label>
                <label htmltFor="otros">
                  <input type="checkbox" id="otros" name="intereses" value="otros"/>Otros
                </label>
              </div>
            </div>
            <div className="col2">
              <label htmltFor="comentarios">Comentarios</label>
              <textarea name="comantarios" id="comentarios" cols="30" rows="7"></textarea>
              <input type="submit" value="Enviar" className="button"/>
            </div>
          </form>
        </div>
      </footer>
    )
  }
}

export default Footer;
