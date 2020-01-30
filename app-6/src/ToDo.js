import React, {component} from 'react'


export default class ToDo extends component{
    render(){
        return <p>{this.props.tasks}</p>
    }
}