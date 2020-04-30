import React from "react"
import {connect} from "react-redux"
import walkSprite from "./player_walk.png"
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
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: "0 0",
                width: "40px",
                height: "40px"
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
