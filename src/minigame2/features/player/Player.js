import React from 'react'
import { connect } from 'react-redux'
import pangolin from './pangolin.png'

function Player(props) {
    return(
        <div
            style={{
                position: 'absolute',
                bottom: props.playerPosition[1],
                left: props.playerPosition[0],
                backgroundImage: `url('${pangolin}')`,
                height: '80px',
                width: '80px',
            }}
        >

        </div>
    )
}

function mapStateToProps(state) {
    return{
        ...state.eaterGame,
        position: state.eaterGame.playerPosition
    }
}

export default connect(mapStateToProps)(Player)