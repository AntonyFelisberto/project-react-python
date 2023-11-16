import React from "react";

export default function ItemComponent(props) {
    const status = props.status;
    return <li>{props.name} Status: {status ? <div><p>Completo</p></div> : <div><p>Nao finalizado</p></div> }</li>
}