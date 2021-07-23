import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/Dialog";
import MessageItem from "./Message/Message";
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {TextArea} from "../../assets/formControl/formControl";


const maxLength50 = maxLengthCreator(50);

let NewMessageForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={TextArea} name={"newMessage"} validate={[required, maxLength50]} cols="80" rows="5" placeholder="Enter here"/>
        <button>Send Message</button>
    </form>
}

const afterSubmit = (result, dispatch) => dispatch(reset('newMessage'));

NewMessageForm = reduxForm({form: "newMessage", onSubmitSuccess: afterSubmit})(NewMessageForm);

export default function Dialogs(props) {
    const dialogsConv = props.dialogData
        .map(i => <DialogItem key={i.id} id={i.id} name={i.name}/>);

    const messagesConv = props.messageData
        .map(m => <MessageItem key={m.id} message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.dialogsContent}>
                <div className={s.dialogsList}>
                    {dialogsConv}
                </div>
                <div className={s.messagesList}>
                    {messagesConv}
                </div>
            </div>
            <div className={s.addMessage}>
                <NewMessageForm onSubmit={props.onSubmit}/>
            </div>
        </div>
    );
}