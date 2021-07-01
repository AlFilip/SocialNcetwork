import {sendMessage, updateMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newMessage: state.messagesPage.newMessage,
        dialogData: state.messagesPage.dialogData,
        messageData: state.messagesPage.messageData
    }
}

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateMessage})(Dialogs);

export default DialogsContainer;