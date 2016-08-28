import * as React from 'react'
import {Tabs, Tab, FontIcon, AppBar} from 'material-ui'
import InstructorsList from '../InstructorsList/InstructorsList';
import ChatList from '../ChatList/ChatList'
import ContactsList from '../ContactsList/ContactsList'

export default class Home extends React.Component {
    render(){
        return(
            <div className="home">
                <AppBar></AppBar>
                <Tabs>
                    <Tab icon={<FontIcon className="fa fa-user"></FontIcon>}>
                        <Tabs>
                            <Tab label="todos">
                                <InstructorsList></InstructorsList>
                            </Tab>
                            <Tab label="favoritos">
                                <InstructorsList></InstructorsList>
                            </Tab>
                        </Tabs>
                    </Tab>
                    <Tab icon={<FontIcon className="fa fa-comment"></FontIcon>}>
                        <Tabs>
                            <Tab label="recentes"><ChatList /></Tab>
                            <Tab label="todos">
                                <ContactsList />
                            </Tab>
                        </Tabs>
                    </Tab>
                    <Tab icon={<FontIcon className="fa fa-calendar-o"></FontIcon>}>
                        <h1>Como Lai?</h1>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
