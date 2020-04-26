import React from 'react'
import { connect } from 'react-redux'
import pangolin from './pangolin.png'

function Player(props) {
    return(  
        <div
            style={{
                position: 'absolute',
                bottom: props.position,
                left: 50,
                backgroundImage: `url('${pangolin}')`,
                width: '80px',
                height: props.height,

            }}
        />
    )
}
function mapStateToProps(state) {

    return{
        ...state.game,
        position: state.game.position,
        height: state.game.height,
    }
}
export default connect(mapStateToProps)(Player)