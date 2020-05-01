import React from 'react'
import { connect } from 'react-redux'
import termite from './termite.png'

function Termite(props) {
    return(
        <div
            style={{
                position: 'absolute',
                height: '35px',
                width: '23px',
                backgroundImage: `url('${termite}')`,
                bottom: props.termitePosition[1],
                left: props.termitePosition[0],
            }}
        >

        </div>
    )
}

function mapStateToProps(state) {
    return{
        ...state.eaterGame,
        termitePosition: state.eaterGame.termitePosition
    }
}

export default connect(mapStateToProps)(Termite)