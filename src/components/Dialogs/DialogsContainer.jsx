import {sendMessage, updateMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import RedirectWrapper from "../HOC/AuthRedirect";


const mapStateToProps = (state) => {
    return {
        newMessage: state.messagesPage.newMessage,
        dialogData: state.messagesPage.dialogData,
        messageData: state.messagesPage.messageData,
    }
}

const WithRedirectDialogs = RedirectWrapper(Dialogs);

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateMessage})(WithRedirectDialogs);

export default DialogsContainer;