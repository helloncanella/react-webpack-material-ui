import * as React from 'react'
import {Avatar} from 'material-ui'
import './style.scss'


export default class CardContainer extends React.Component{

    render() {
        let {name, image, children} = this.props



        return (
            <div className="cardContainer">
                <div className="header">
                    <Avatar className="avatar" src={image}/>
                    <h2 className="name">{name}</h2>
                </div>
                
                <div className="cards">
                    {children}
                </div>
            </div>
        )
    }

}