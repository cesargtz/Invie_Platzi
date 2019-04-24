//desde de la coma las llaves significa que importada de React
import React, {Component} from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Heart from './Heart.jsx'

function mapStateToProps(state) {
  return{
    logo: state.logoPortada,
    menu: state.menu,
    isAnimated: state.isAnimated
  }
}

class Portada extends Component  {
  renderHeart() {
    const hearts = new Array(100).fill({})
    return (
      hearts.map((element, index) => {
        const style = {
          left: Math.floor((Math.random() * (window.innerWidth - 0))) + 0 +  "px",
          animationDelay: Math.floor((Math.random() * (10000 - 0))) + 0 +  "ms"
        }
        return(
          <Heart key={index} style={style}/>
        )
      })
    )
  }

  render(){
    return(
      <section id="portada" className={`portada background ${this.props.isAnimated}`}>
        <header id="header" className="header contenedor">
          <CSSTransitionGroup
            transitionName="logoanimation"
            transitionEnterTimeout={1200}
            transitionLeaveTimeout={1200}
          >
            <figure className="logotipo" key ={ this.props.logo }>
              <img src={this.props.logo}  width="186" height="60" alt="Invie logotipo"/>
            </figure>
          </CSSTransitionGroup>
          <span id="burger-button" className="burger-button icon-menu"></span>
          <nav id="menu" className="menu">
            <ul>
              {/* map sirve para iterar */}
              {/* para consumir  la propiedad que es mandada desde el padre osea invie, necesitamos 
              anteponer this.props y luego el nombre de la propiedad*/}
              {this.props.menu.map((item) => {
                return(
                  <li>
                    <a href={item.href}>{item.title}</a>
                  </li> 
                )
              })}
            </ul>
          </nav>
        </header>
        <CSSTransitionGroup
          transitionName="animationInOut"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}
        >
        {/* con las llaves puedes poner una condicion y los && quiere decir si se cumple va ejecutar el codigo que le sigue
          y el signo de ! al inicio es para el caso contrario de la condicion como un diferente.
          solo cuando se use el easteregg invie debe desaparecer el contenedor. osea solo se aplica al momento de poner
          el easteregg de invie */}
        {
          !this.props.isAnimated &&
          <div className="contenedor" key="Portada">
            <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
            <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
            <a className="button" href="#guitarras">Conoce mas</a>
          </div>
        }
        </CSSTransitionGroup>
        {
          this.props.isAnimated &&
            this.renderHeart()
        }
      </section>
    )
  }
}

export default connect(mapStateToProps)(Portada);
