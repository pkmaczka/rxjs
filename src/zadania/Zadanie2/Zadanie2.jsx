import React, { Component } from 'react'
import ReactJson from 'react-json-view'

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';


const cities = [
    'Warsaw',
    'Cape Town',
    'Singapore',
    'New York',
    'San Francisco',
    'Tokyo'
]


export default class Zadanie2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            weather: {
                city: {
                    name: 'Unknown'
                },
                list: [
                    {
                        main: {
                            temp: -274
                        }
                    }
                ]
            }
        }
        this.inputRef = React.createRef();
    }

    render = () => (
        <>
            <Input type="number"  />
            <br /><br />
            { this.state.weather.city.name !== 'Unknown' && <Paper>
                <Typography variant="h2">
                    {this.state.weather.city.name} ({this.state.weather.list[0].main.temp})
                    </Typography>
                <ReactJson src={this.state.weather} />
            </Paper>}
        </>
    )
}