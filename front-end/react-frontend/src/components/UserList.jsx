import React from "react";
import UserService from "../service/UserService";

class UserList extends React.Component{
    constructor(){
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getAll().then((response) => {
            this.setState({users:response.data})
        })
    }
    render(){
        return(
            <div>
                this.state.users.map{
                    user => <p>{user.id}</p>
                }
            </div>
        )
    }
}

export default UserList