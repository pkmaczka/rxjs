import React, { Component } from 'react'
import { fromEvent } from 'rxjs';
import { tap, throttleTime, debounceTime, map } from 'rxjs/operators'
import Button from '@material-ui/core/Button';

// 1. Dodać funkcjonalność licznika przy pomocy funkcji scan
// 2. Dodać debounce na kliknięcia

export default class Zadanie1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {

        fromEvent(this.ref, 'click')
        .pipe(
            tap(_ => this.setState({counter: this.state.counter+1})),
        )
        .subscribe();
    }

    render = () => (
        <Button variant="contained" buttonRef={(ref) => this.ref = ref}>
            Increment ({this.state.counter})
        </Button>
    )
}