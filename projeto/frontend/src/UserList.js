import React from 'react'
import ListComponent from './ListComponent'

export default class UserList extends React.Component{
    state = {lists:null,loading:true}

    async componentDidMount(){
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        config.headers["Authorization"] = "Token 72a4ea90db2eea73df584bf3493a498d9acc35bd"

        var url = "http://127.0.0.1:8000/list/"
        const response = await fetch(url,config)
        const data = await response.json()
        console.log(data)
        this.setState({lists:data,loading:false})
    }

    render(){
        return (
            <div>
                <ListComponent listName={"minha lista"}/>
            </div>
        )
    }
}