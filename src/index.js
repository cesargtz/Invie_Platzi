import React from 'react';
import ReactDOM from 'react-dom';
import Invie from './Invie';
import './css/invie.css';
import './css/animations.css';
import * as serviceWorker from './serviceWorker';
import cheet from 'cheet.js';
import logoPortada from './images/invie.png';
import logoEaster from './images/logo-easter.png';
import acustica from './images/invie-acustica.png'
import clasica from './images/invie-classic.png';
import easterA from './images/easter-a.png'
import easterB from './images/easter-b.png'
import { Provider } from 'react-redux';
import { createStore} from 'redux';

const initialState = {
    isAnimated: false,
    menu: [{
            href: 'index.html',
            title: 'Home'
        },
        {
            href: '#guitarras',
            title: 'Guitarras'
        },
        {
            href: 'precios.html',
            title: 'Precios'
        }
    ],
    logoPortada: logoPortada,
    guitarras: [{
            image: acustica,
            alt: 'Guitarra Invie Acustica',
            name: 'Invie Acustica',
            features: [
                'Estilo vintage',
                'Madera pura',
                'Incluye estuche invisible de aluminio'
            ]
        },
        {
            image: clasica,
            alt: 'Guitarra Invie Classic',
            name: 'Invie Classic',
            features: [
                'Estilo vintage',
                'Liviana',
                'Inicia tu camino como Rockstar'
            ]
        }
    ]
}

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_PROPS':
            {
                const newProps = action.payload.props;
                return { ...state, ...newProps }
            }
        default:
            return state
    }
}

const store = createStore(reducer, initialState);

const easter = {
    isAnimated: 'is-animated',
    menu: [ ],
    logoPortada: logoEaster,
    guitarras: [{
            image: easterA,
            alt: 'Guitarra Invie Familiar',
            name: 'Invie Familiar',
            features: [
                'Lista para copiar a los simpson',
                'Aire puro',
                'Chistes Malos'
            ]
        },
        {
            image: easterB,
            alt: 'Guitarra Invie Classic',
            name: 'Invie Classic',
            features: [
                'Estilo vintage',
                'Liviana',
                'Inicia tu camino como Rockstar'
            ]
        }
    ]
}

cheet('i n v i e', function () {
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: easter
        }
    })
});

cheet('g o b a c k', function () {
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: initialState
        }
    })
});

ReactDOM.render( 
    <Provider store = { store } >
        <Invie/>
    </Provider>, 
    document.getElementById('root')
);
