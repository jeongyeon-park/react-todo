import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Button} from 'antd';
import * as S from "../components/style";
import { useRecoilValue } from 'recoil';
import { userNameState } from '../atom';

const Weather = ()=>{
    const navigate = useNavigate();

    interface IWeatherDataProps {
        base: string;
        clouds: {all: number};
        cod: number;
        coord: {lon: number, lat: number};
        dt: number;
        id: number;
        main: {temp_max:number, temp_min: number};
        name: string;
        sys:{};
        timezone: number;
        visiblity: number;
        weather: [{id: number, main: string, description: string, icon: string}];
        length: number;
    }
    const [weatherData, setWeatherData] = useState<IWeatherDataProps>({
        base: "",
        clouds: {all: 0},
        cod: 0,
        coord: {lon: 0, lat: 0},
        dt: 0,
        id: 0,
        main: {temp_max:0, temp_min: 0},
        name: " ",
        sys:{},
        timezone: 0,
        visiblity: 0,
        weather: [{id: 0, main: " ", description: " ", icon: "01d"}],
        length: 0,
    });

    const [imageUrl, setImageUrl] = useState("01d"); 

    const userName = useRecoilValue(userNameState);

    const getCurrentLocation = () => {
        // 현재 위치 가져오기
        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;

          getCurrentWeather(lat, lon);
        });
    };

    const getCurrentWeather = async(lat:number, lon: number)=>{
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
            const {data} = await axios.get(api);
            setWeatherData(data);
            setImageUrl(data.weather[0].icon)
    }

    useEffect(()=>{
        getCurrentLocation();
        if(!userName) navigate("/");
    },[]);

    return (
        <S.Container>
            <S.ComponentWrap>
            <div>{userName}님 안녕하세요.</div>

            <img src={`${process.env.PUBLIC_URL}/react-todo/images/${imageUrl}.png`} alt="weather_image"/>
            <div>{weatherData.name}의 날씨</div>
            <div>{weatherData.weather[0].main}</div>
            <div>{weatherData.weather[0].description}</div>
            <div>최고 온도 {(weatherData.main.temp_max -  273.15).toFixed(2)}</div>
            <div>최저 온도 {(weatherData.main.temp_min -  273.15).toFixed(2)}</div>
            <Button
                style={{marginTop: "20px"}} 
                onClick={()=>navigate('/todoList')}
            >
                Todo List
            </Button>
            </S.ComponentWrap>    
        </S.Container>
    );
}

export default Weather;