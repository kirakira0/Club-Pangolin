import React from 'react'
import { connect } from 'react-redux'
import pixelArt from './pixelArt.png'

function Grass(props) {
    return(
        <div 
            style={{
                position: 'absolute',
                bottom: 10,
                left: props.grassX,
                backgroundImage: `url('${pixelArt}')`,
                width: '60px',
                height: "60px",
            }}
        >
        </div>
    )
}
function mapStateToProps(state) {
    return{
        ...state.game,
        grassX: state.game.grassX,
    }
}

export default connect(mapStateToProps)(Grass)