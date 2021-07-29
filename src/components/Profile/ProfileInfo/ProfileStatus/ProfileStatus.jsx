import React from "react";
import s from "./ProfileInfo.module.css"


export default class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = value => {
        if (this.props.profile.userId === this.props.userAuthData.id) {
            this.setState({editMode: value})
            if (!value) this.props.setStatus(this.state.status);
        }
    }

    onStatusChange = e => {
        this.setState({status: e.target.value});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div className={s.status}>
                <div>
                    {this.state.editMode ? <input type="text" value={this.state.status} autoFocus={true}
                                                  onChange={this.onStatusChange}
                                                  onBlur={() => this.toggleEditMode(false)}/>
                        : <div
                            onClick={() => this.toggleEditMode(true)}>
                            {this.state.status ? this.state.status
                                : this.props.profile.userId === this.props.userAuthData.id ?
                                    "Click here to change your status" : ""}
                        </div>
                    }
                </div>
            </div>
        );
    }
}