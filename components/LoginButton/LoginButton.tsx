import * as React from 'react'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'


interface LoginButtonProps{
    service: string,
    href: string
}; 

export default class LoginButton extends React.Component<LoginButtonProps,{}>{

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