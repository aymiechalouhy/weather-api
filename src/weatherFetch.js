import React, { useState, useEffect, Component } from "react";
import "./App.css";
import fog from "./img/weather-icons/fog.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import unknown from "./img/weather-icons/unknown.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

class Fog extends Component {
    render() {
        return (
            <div>
                <img src={fog} alt="fog icon" />
            </div>
        );
    }
}

class Rain extends Component {
    render() {
        return (
            <div>
                <img src={rain} alt="fog rain" />
            </div>
        );
    }
}

class Snow extends Component {
    render() {
        return (
            <div>
                <img src={snow} alt="snow rain" />
            </div>
        );
    }
}

class Storm extends Component {
    render() {
        return (
            <div>
                <img src={storm} alt="storm rain" />
            </div>
        );
    }
}

class Clear extends Component {
    render() {
        return (
            <div>
                <img src={clear} alt="clear icon" />
            </div>
        );
    }
}

class Cloudy extends Component {
    render() {
        return (
            <div>
                <img src={cloudy} alt="cloudy icon" />
            </div>
        );
    }
}

class Unknown extends Component {
    render() {
        return (
            <div>
                <img src={unknown} alt="unknown icon" />
            </div>
        );
    }
}

class Drizzle extends Component {
    render() {
        return (
            <div>
                <img src={drizzle} alt="drizzle icon" />
            </div>
        );
    }
}

class Mostlycloudy extends Component {
    render() {
        return (
            <div>
                <img src={mostlycloudy} alt="mostlycloudy icon" />
            </div>
        );
    }
}

class Partlycloudy extends Component {
    render() {
        return (
            <div>
                <img src={partlycloudy} alt="partlycloudy icon" />
            </div>
        );
    }
}

function WeatherFetch() {
    const key = '266949ef92ac6c49b0af1f36ae9f52af';
    const city = 'Tripoli';
    const country = 'LB';

    const [tempMax, setTempMax] = useState('');
    const [tempMin, setTempMin] = useState('');
    const [description, setDescription] = useState('');
    const [pressure, setPressure] = useState('');
    const [humidity, setHumidity] = useState('');
    const [id, setID] = useState('');

    const [temp1, setTemp1] = useState('');
    const [time1, setTime1] = useState('');
    const [id1, setID1] = useState('');

    const [temp2, setTemp2] = useState('');
    const [time2, setTime2] = useState('');
    const [id2, setID2] = useState('');

    const [temp3, setTemp3] = useState('');
    const [time3, setTime3] = useState('');
    const [id3, setID3] = useState('');

    const [temp4, setTemp4] = useState('');
    const [time4, setTime4] = useState('');
    const [id4, setID4] = useState('');

    const [temp5, setTemp5] = useState('');
    const [time5, setTime5] = useState('');
    const [id5, setID5] = useState('');

    const [temp6, setTemp6] = useState('');
    const [time6, setTime6] = useState('');
    const [id6, setID6] = useState('');

    const [temp7, setTemp7] = useState('');
    const [time7, setTime7] = useState('');
    const [id7, setID7] = useState('');
    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + country + '&cnt=8&units=metric&appid=' + key)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                var i = 0;
                setTempMax(data.list[i].main.temp_max);
                setTempMin(data.list[i].main.temp_min);
                setDescription(data.list[i].weather[0].description);
                setPressure(data.list[i].main.pressure);
                setHumidity(data.list[i].main.humidity);
                setID(data.list[i].weather[0].id);

                setTemp1(data.list[i + 1].main.temp);
                setID1(data.list[i].weather[0].id);
                setTime1(data.list[i + 1].dt_txt);

                setTemp2(data.list[i + 2].main.temp);
                setID2(data.list[i].weather[0].id);
                setTime2(data.list[i + 2].dt_txt);

                setTemp3(data.list[i + 3].main.temp);
                setID3(data.list[i].weather[0].id);
                setTime3(data.list[i + 3].dt_txt);

                setTemp4(data.list[i + 4].main.temp);
                setID4(data.list[i].weather[0].id);
                setTime4(data.list[i + 4].dt_txt);

                setTemp5(data.list[i + 5].main.temp);
                setID5(data.list[i].weather[0].id);
                setTime5(data.list[i + 5].dt_txt);


                setTemp6(data.list[i + 6].main.temp);
                setID6(data.list[i].weather[0].id);
                setTime6(data.list[i + 6].dt_txt);

                setTemp7(data.list[i + 7].main.temp);
                setID7(data.list[i].weather[0].id);
                setTime7(data.list[i + 7].dt_txt);
            })
    }, [])

    var arr = [
        [id, description, tempMin, tempMax, humidity, pressure],
        [time1.substring(10, 16), id1, temp1],
        [time2.substring(10, 16), id2, temp2],
        [time3.substring(10, 16), id3, temp3],
        [time4.substring(10, 16), id4, temp4],
        [time5.substring(10, 16), id5, temp5],
        [time6.substring(10, 16), id6, temp6],
        [time7.substring(10, 16), id7, temp7]
    ];
    const styles = {
        width: '220px',
        height: '220px'
    }

    var f0;
    if (arr[0][0] < 300) { f0 = <Storm /> }
    else if ((arr[0][0] >= 300) && (arr[0][0] <= 499)) { f0 = <Drizzle /> }
    else if ((arr[0][0] >= 500) && (arr[0][0] <= 599)) { f0 = <Rain /> }
    else if ((arr[0][0] >= 600) && (arr[0][0] <= 699)) { f0 = <Snow /> }
    else if ((arr[0][0] >= 700) && (arr[0][0] <= 799)) { f0 = <Fog /> }
    else if (arr[0][0] == 800) { f0 = <Clear /> }
    else if (arr[0][0] == 801) { f0 = <Partlycloudy /> }
    else if (801 < arr[0][0] <= 805) { f0 = <Mostlycloudy /> }
    else { f0 = <Unknown /> }

    let Items = [];
    for (var j = 1; j <= 7; j++) {
        var f;
        if (arr[j][1] < 300) { f = <Storm /> }
        else if ((arr[j][1] >= 300) && (arr[j][1] <= 499)) { f = <Drizzle /> }
        else if ((arr[j][1] >= 500) && (arr[j][1] <= 599)) { f = <Rain /> }
        else if ((arr[j][1] >= 600) && (arr[j][1] <= 699)) { f = <Snow /> }
        else if ((arr[j][1] >= 700) && (arr[j][1] <= 799)) { f = <Fog /> }
        else if (arr[j][1] == 800) { f = <Clear /> }
        else if (arr[j][1] == 801) { f = <Partlycloudy /> }
        else if (801 < arr[j][1] <= 805) { f = <Mostlycloudy /> }
        else { f = <Unknown /> }
        Items.push(
            <div className="later id">
                <h3>{arr[j][0]}</h3>
                <div className="imlater">
                    {f}
                </div>
                <h3>{arr[j][2]}°C</h3>
            </div>
        )
    }

    return (
        <div className="all">

            <div className="now">
                <div className="imnow">
                    {f0}
                </div>
                <p className="p0"> {arr[0][1]}</p>
                <p className="p1"><span>Temperature &nbsp;</span>{arr[0][2]}{"° to "}{arr[0][3]}°C</p>
                <p className="p2"><span>Humidity  &nbsp;</span>  {arr[0][4]}% <span>  &nbsp;Pressure  &nbsp;</span>  {arr[0][5]}</p>
            </div>

            <div className="laters">
                {Items}
            </div>

        </div>
    );
}
export default WeatherFetch;