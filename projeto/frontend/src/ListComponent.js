import React from 'react'
import ItemComponent from './ItemComponent'

export default function ListComponent(props){
    return (
        <div>
            <h2>{props.listName}</h2>
            <ul>
                <ItemComponent name={"meu item"}/>
                <ItemComponent name={"meu item"}/>
                <ItemComponent name={"meu item"}/>
                <ItemComponent name={"meu item"}/>
                <ItemComponent name={"meu item"}/>
                <ItemComponent name={"meu item"}/>
                <ItemComponent name={"meu item"}/>
                <ItemComponent name={"meu item"}/>
                <ItemComponent name={"meu item"}/>
                <ItemComponent name={"meu item"}/>
                <ItemComponent name={"meu item"}/>
                <ItemComponent name={"meu item"}/>
                <ItemComponent name={"meu item"}/>
                <ItemComponent name={"meu item"}/>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>

    )
}