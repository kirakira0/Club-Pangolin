import React from 'react'
import { connect } from 'react-redux'
import rock from './rock.png'

function Rock(props) {
    return(
        <div
            style={{
                position: 'absolute',
                height: '28px',
                width: '35px',
                backgroundImage: `url('${rock}')`,
                bottom: props.rockPosition[1],
                left: props.rockPosition[0],
            }}
        >

        </div>
    )
}

function mapStateToProps(state) {
    return{
        ...state.eaterGame,
        rockPosition: state.eaterGame.rockPosition
    }
}

export default connect(mapStateToProps)(Rock)