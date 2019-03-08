import React, { Component } from 'react'
import ReactJson from 'react-json-view'
import { Subject, empty } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { map, switchMap, catchError } from 'rxjs/operators';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators'
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
    this.subject = new Subject();
  }

  componentDidMount() {
    this.subject
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        map(x => x*2),
        map(x => x%cities.length),
        map(x => cities[x]),
        tap(x => console.log(`Fetching weather from ${x}`)),
        switchMap(city =>
          ajax.getJSON(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=4550d02a49c044c506beae2dc1debbaf&units=metric`)
            .pipe(
              catchError(() => empty())
            ))
      )
      .subscribe((x) => {
        this.setState({
          weather: x
        });
        console.log(x);
      });
  }

  sendEvent = (event) => {
    this.subject.next(event.target.value)
  }

  render = () => (
    <>
      <Input type="number" onChange={this.sendEvent} />
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