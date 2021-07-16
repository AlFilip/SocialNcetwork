import React from "react";

import {sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import RedirectWrapper from "../HOC/AuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {
    sendMessage = values => {
        this.props.sendMessage(values.newMessage);
    }

    render() {
        return <Dialogs {...this.props} onSubmit={this.sendMessage}/>
    }
}


const mapStateToProps = (state) => {
    return {
        newMessage: state.messagesPage.newMessage,
        dialogData: state.messagesPage.dialogData,
        messageData: state.messagesPage.messageData,
    }
}

export default compose(
    RedirectWrapper,
    connect(mapStateToProps, {sendMessage})
)(DialogsContainer);