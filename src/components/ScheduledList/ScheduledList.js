import * as React from 'react'
import fakeMeetings from '../fakedData/fakeMeetings'
import MeetingCard from '../MeetingCard/MeetingCard'
import CardContainer from '../CardContainer/CardContainer'
import _ from 'lodash'


export default class ScheduledList extends React.Component {

    _meetings() {

        //organezed meeting by user id
        let organizedMeetings = _.groupBy(fakeMeetings, (item) => {
            return item.instructor._id
        })


        var cardContainers = []

        for (var key in organizedMeetings) {

            let 
                //get meetings ordered by date
                allMeetings = organizedMeetings[key],
                meetings = _.sortBy(allMeetings, (meeting) => {
                    return Date.parse(meeting.start.replace(/\"/g, ""))
                })

            let 
                instructorObject = meetings[0].instructor,
                {name, image} = instructorObject

            var meetingComponents = meetings.map((meeting, index) => {

                let { subject, start, end, address } = meeting
                let props = { subject, start, end, address }

                return (
                    <MeetingCard {...props} key={index}/>
                )

            })


            cardContainers.push({ name, image, meetingComponents })

        }


        return cardContainers.map((container, index) => {


            let {meetingComponents, name, image} = container,
                props = { name, image }

            return <CardContainer {...props} key={index}>{meetingComponents}</CardContainer>
        })
    }

    render() {

        return (
            <div className="ScheduledList grid">
                {this._meetings() }
            </div>
        )
    }
}