import React from "react";
import O from "./O";
import X from "./X";
import GameUserInfo from "./game-user-info";
import { connect } from "react-redux";
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { CHESS_X, CHESS_O, onQuit } from "../actions/room";
import {onDrawRequest, onUndoRequest} from "../actions/room";

class History extends React.Component {
    renderHistory(){
        const {history} = this.props
        let list = []
        history.map((element,index)=>{
            index === history.length - 1
            ?list.push(<p className="text-warning">{element.chess} đánh ở [{element.row};{element.col}]</p>)
            :list.push(<p>{element.chess} đánh ở [{element.row};{element.col}]</p>)
        })
        return list.reverse()
    }

    render() {
        const { onDrawRequest, onUndoRequest } = this.props
        return (
            <div>
                <div className="game-info h-50 bg-gradient d-flex flex-column justify-content-between">
                    <h2 className="text-white">Lịch sử nước đi</h2>
                    <Button variant="warning" onClick={()=>onDrawRequest}>Xin hòa</Button>
                    <Button variant="success" onClick={()=>onUndoRequest}>Xin đánh lại</Button>
                    <PerfectScrollbar className="chat-body" style={{ height: 450}}>
                        <ListGroup>
                            <ListGroupItem>{this.renderHistory()}</ListGroupItem>
                        </ListGroup>
                    </PerfectScrollbar>
                </div>
            </div>
        );
    }
}
/*
GameInfo.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        point: PropTypes.number.isRequired,
        rank: PropTypes.number.isRequired,
        ratioWinning: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
    }).isRequired,
    opponent: PropTypes.shape({
        username: PropTypes.string.isRequired,
        point: PropTypes.number.isRequired,
        rank: PropTypes.number.isRequired,
        ratioWinning: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
    }).isRequired,
    userWin: PropTypes.number.isRequired,
    opponentWin: PropTypes.number.isRequired,
    chess: PropTypes.number.isRequired,
    onQuit: PropTypes.func.isRequired
};
*/
const mapStateToProps = state => ({
    history: state.room.history
});

 const mapDispatchToProps = dispatch => ({
    onUndoRequest: () => dispatch(onUndoRequest()),
    onDrawRequest: () => dispatch(onDrawRequest())
})
export default connect(mapStateToProps, mapDispatchToProps)(History);