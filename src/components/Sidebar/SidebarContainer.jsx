import {connect} from "react-redux";
import Sidebar from "./Sidebar";


const mapStateToProps = (state) => {
    return {
        friendsList: state.sidebar.friendsList,
    }
};
const mapDispatchToProps = (dispatch) => {
    return{}
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;

