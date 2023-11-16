import React from 'react'
import ListComponent from './ListComponent'

export default class UserList extends React.Component{
    render(){
        return (
            <div>
                <ListComponent listName={"minha lista"}/>
            </div>
        )
    }
}