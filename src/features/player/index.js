import React from "react"
import {connect} from "react-redux"
import sprite from "./pangolin.png"
import handleMovement from "./movement"

//tutorials used: https://www.youtube.com/watch?v=DyWUW7Px1MQ
//https://www.youtube.com/watch?v=QZcNGfcn-oo&t=1089s
//https://www.youtube.com/watch?v=J6Xs3eGTfTQ

function Player(props) {
    return (
        <div style={
            {
                position: "relative",
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${sprite}')`,
                backgroundPosition: '0 0',
                backgroundSize: 'contain',
                width: "40px",
                height: "37px"
            }
        }
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player))
