import * as React from 'react'
import moment from 'moment'
import { parseDate } from '../helperFunctions/helperFunctions'
import imagesMap from '../imagesMap/imagesMap'
import {Paper, Divider} from 'material-ui'
import { Link } from 'react-router'
import './style.scss'

export default class MeetingCard extends React.Component {

    render() {

        let
            {subject, start, end, address } = this.props

        let
            parsedStart = parseDate(start),
            parsedEnd = parseDate(end)

        let day = parsedStart.day,
            week = parsedStart.week.toUpperCase(),
            startHour = parsedStart.hour,
            endHour = parsedEnd.hour



        let cardImage = imagesMap[subject.toLowerCase()]

        return (
           
            <Paper className="meetingCard">
                <img src={cardImage} />
                <Divider />
                <div className="body grid">
                    <div><b>{week}, {day}</b></div>
                    <div> {startHour} - {endHour} h </div>
                    <div>{address}</div>
                    <Link to="#"><b>detalhes</b></Link>
                </div>
            </Paper>
        )

    }
}