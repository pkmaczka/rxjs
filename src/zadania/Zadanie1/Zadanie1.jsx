import React, { Component } from 'react'
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

    }

    render = () => (
        <Button variant="contained" buttonRef={(ref) => this.ref = ref}>
            Increment ({this.state.counter})
        </Button>
    )
}