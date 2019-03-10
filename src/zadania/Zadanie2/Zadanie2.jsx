import React, { Component } from 'react'
import ReactJson from 'react-json-view'

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';

// Zaprogramuj zachowanie polegające na reakcji na zdarzenie zmiany numeru w inpucie w następujący sposób:
// 1. Upewnij się, że aplikacja poczeka 1 sekundę aż wpiszesz ostateczny numer
// 2. Upewnij się, że stream nie zostanie wykonany w przypadku kiedy poprzednia wartość była identyczna
// 3. Pomnóż numer przez 2
// 4. Upewnij się, że numer nie jest większy niż długość tablicy "cities"
// 5. Pobierz miasto spod indeksu o podanym numerze
// 6. Pobierz i wyświetl pogodę przy pomocy żądania HTTP pod adres
// `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=4550d02a49c044c506beae2dc1debbaf&units=metric`
// 7. Upewnij się, że stream nie zostanie przerwany w przypadku blędu HTTP (będzie można wprowadzić kolejny numer)

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