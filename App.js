import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import User from './User'
import Users from './Users'
import axios from 'axios'
import Search from './Search'
import Alert from './Alert'
export class App extends Component {
    constructor(props){
        super(props);
        this.searchUsers=this.searchUsers.bind(this);
        this.clearUsers=this.clearUsers.bind(this);
        this.setAlert=this.setAlert.bind(this);

        this.state={
            loading: false,
            users: [],
            alert:null
        }
    }

    searchUsers(keyword){
        this.setState({loading:true});
        //loading gif i in ekranda 3 sn gozukmesi icin settimeout kullandik
        setTimeout (() =>{
            //react a ozel  axios ile github uzerinden veri cektik
            axios.get(`https://api.github.com/search/users?q=${keyword}`)
            .then(res => this.setState({users: res.data.items, loading:false}));
        },2000);
        
    }

    clearUsers(){
        this.setState({users: []});
    }

    setAlert(msg,type){
        this.setState({alert:{msg,type}});
    }
    render() {
         
        return (
            <Fragment>
           <Navbar/>
           <Alert alert={this.state.alert}/>
           <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}  
           showClearButton={this.state.users.length>0? true:false}
           setAlert={this.setAlert}/>
           <Users users={this.state.users} loading={this.state.loading}/>       
           </Fragment>
        )
    }
}

export default App
