import * as React from 'react'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'

export default class LoginButton extends React.Component{

    render(){
        const service = this.props.service
        

        return (           
            <FlatButton
                label={`Entrar com o ${service}`}
                icon={<FontIcon className={`muidocs-icon-custom-${service}`} />}
                secondary={true}
                href={this.props.href}    
                style={{margin: 12}}
            />           
        ) 

    }        
}