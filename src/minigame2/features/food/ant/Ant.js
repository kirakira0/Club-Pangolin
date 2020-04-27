import React from 'react'
import { connect } from 'react-redux'
import ant from './ant.png'

function Ant(props) {
    return(
        <div
            style={{
                position: 'absolute',
                height: '30px',
                width: '30px',
                backgroundImage: `url('${ant}')`,
                bottom: props.antPosition[1],
                left: props.antPosition[0],
            }}
        >

        </div>
    )
}

function mapStateToProps(state) {
    return{
        ...state.eaterGame,
        antPosition: state.eaterGame.antPosition
    }
}

export default connect(mapStateToProps)(Ant)