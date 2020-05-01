import React from 'react'
import { connect } from 'react-redux'
import pangolin from './pangolin2.png'

function Player(props) {
    return(
        <div
            style={{
                position: 'absolute',
                bottom: props.playerPosition[1],
                left: props.playerPosition[0],
                backgroundImage: `url('${pangolin}')`,
                height: '70px',
                width: '80px',
            }}
        >

        </div>
    )
}

function mapStateToProps(state) {
    return{
        ...state.eaterGame,
        playerPosition: state.eaterGame.playerPosition
    }
}

export default connect(mapStateToProps)(Player)