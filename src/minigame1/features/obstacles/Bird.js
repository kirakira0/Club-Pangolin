import React from 'react'
import { connect } from 'react-redux'
import bird from './bird.png'

function Bird(props) {
    return(
        <div
            style={{
                position: 'absolute',
                bottom: props.birdY,
                left: props.birdX,
                height: '50px',
                width: '80px',
                backgroundImage: `url('${bird}')`,
            }}
        >
        </div>
    )
}

function mapStateToProps(state){
    return{
        ...state.game,
        birdX: state.game.birdX,
        birdY: state.game.birdY,
    }
}

export default connect(mapStateToProps)(Bird)