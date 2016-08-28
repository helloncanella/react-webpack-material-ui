import * as React from 'react'
import MessageContainer from '../MessageContainer/MessageContainer'
import faker from 'faker'
import { fakeMessages } from '../fakedData/fakeMessages'

export default class newComponents extends React.Component {
    _messages(){
        let 
            chat = [],
            authorId,
            image

        var fragment = []; //Uninterruped sequences of messages

        fakeMessages.map((item, index)=>{
            if(!authorId){
                authorId = item.author._id
                image = item.image
            }
          
            if(item.author._id === authorId){
                fragment.push(item.message)
            }else{
                chat.push({fragment: fragment, author: item.author})
                authorId = item.author.id
                fragment = []    
            }
        })
      
        var Me = fakeMessages[0].author._id

        return chat.map((item, index)=>{
            console.log(item.author._id === Me, item.author._id, Me)
            
            return (
                <MessageContainer
                    key={index}
                    image={item.author._id === Me? '' : item.author.image}
                    direction={item.author._id === Me ? 'right' : 'left'}
                    messages={item.fragment}
                />
            )
        })
    }
    
    render() {
        return (
            <div className="grid allMessages">
                {this._messages()}
            </div>
        )
    }
}                    