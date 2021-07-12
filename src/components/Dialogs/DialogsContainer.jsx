import {sendMessage, updateMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import RedirectWrapper from "../HOC/AuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        newMessage: state.messagesPage.newMessage,
        dialogData: state.messagesPage.dialogData,
        messageData: state.messagesPage.messageData,
    }
}

export default compose(
    RedirectWrapper,
    connect(mapStateToProps, {sendMessage, updateMessage})
)(Dialogs);