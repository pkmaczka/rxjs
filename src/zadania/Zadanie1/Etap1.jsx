import React, { Component } from 'react'
import { fromEvent } from 'rxjs';
import { tap, throttleTime, debounceTime, scan } from 'rxjs/operators'
import Button from '@material-ui/core/Button';

// 1. Dodać funkcjonalność licznika przy pomocy funkcji scan
// 2. Dodać debounce na kliknięcia

export default class Zadanie1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        fromEvent(this.ref, 'click')
        .pipe(
            throttleTime(500),
            scan(x => x+1, 0),
            tap(x => this.setState({counter: x})),
        )
        .subscribe((x) => console.log(`Clicked ${this.state.counter} times`));
    }

    render = () => (
        <Button variant="contained" buttonRef={(ref) => this.ref = ref}>
            Increment ({this.state.counter})
        </Button>
    )
}