import * as React from 'react'
import {AppBar} from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


export default class NewUser extends React.Component{
    render() {
        return (
            <div className="newUser grid">
                <TextField hintText="Nome" />
                <TextField hintText="Email" />
                <TextField hintText="Telefone" />
                <RaisedButton href="/client/01" secondary={true} fullWidth={true} label="Adicionar"></RaisedButton>
            </div>
        )
    }
}