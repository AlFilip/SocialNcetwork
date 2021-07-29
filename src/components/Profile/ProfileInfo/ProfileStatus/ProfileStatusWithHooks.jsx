import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css"


const ProfileStatusWithHooks = props => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)

    useEffect(() => setStatus(props.status), [props.status])

    const onStatusChange = e => setStatus(e.target.value);

    const activateEditMode = () => {
        if (props.profile.userId === props.userAuthData.id) {
            setEditMode(true);
        }
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        if (status !== props.status) props.setStatus(status);
    }

    return (
        <div className={s.status}>
            {editMode &&
            <div>
                <input type="text" value={status} autoFocus={true} onChange={onStatusChange}
                       onBlur={deactivateEditMode}/>
            </div>
            }

            {!editMode &&
            <div onClick={activateEditMode}> {status ? status : props.profile.userId === props.userAuthData.id ?
                "Click here to change your status" : ""}
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;