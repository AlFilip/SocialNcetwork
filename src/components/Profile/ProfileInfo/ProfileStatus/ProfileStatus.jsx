import React from "react";
import s from "./ProfileInfo.module.css"
import {profileAPI} from "../../../api/api";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class ProfileStatus extends React.Component {
    componentDidMount() {
        this.getStatus(this.props.match.params.userId);
    }

    state = {
        editMode: false,
        tempStatus: ""
    }

    toggleEditMode = (value) => {
        this.setState({editMode: value})
    }

    getStatus = (userId) => {
        profileAPI.getStatus(userId).then(response => this.setState({tempStatus: response.data}));
    }

    render() {
        return (
            <div className={s.status}>
                <div>
                    {this.state.editMode ? <input type="text" value={this.state.tempStatus} autoFocus={true}
                                                  onBlur={() => this.toggleEditMode(false)}/>
                        : <div onClick={() => this.toggleEditMode(true)}>Status: {this.state.tempStatus}</div>}
                </div>
            </div>
        );
    }
}

export default compose(withRouter)(ProfileStatus);