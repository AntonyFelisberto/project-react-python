import React from 'react'
import ItemComponent from './ItemComponent'

export default function ListComponent(){
    return (
        <div>
            <h2>Minha Lista</h2>
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