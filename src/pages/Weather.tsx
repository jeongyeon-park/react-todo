import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Button} from 'antd';
import {RightCircleOutlined} from '@ant-design/icons';
import * as S from "../components/style";

const Weather = ()=>{
    const navigate = useNavigate();

    interface IWeatherProps {
        lat:number;
        lon:number;
    }

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
        weather: [];
        length: number;
    }
    const [location, setLocation] = useState<IWeatherProps>({lat:0,lon:0});
    const [weatherData, setWeatherData] = useState<IWeatherDataProps>();

    const getCurrentLocation = () => {
        // 현재 위치 가져오기
        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          setLocation({lat:lat, lon:lon})
        });

        console.log(location);
    };

    const getCurrentWeather = async(lat:number, lon: number)=>{
        if(lat && lon){
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
            const response = await axios.get(api);
            console.log(response);
            setWeatherData(response.data);
        }else{
            getCurrentLocation();
        }
    }

    return (
        <S.Container>
            <S.ComponentWrap>
            <div>{weatherData?.name}의 날씨</div>
            <div>최고 온도{weatherData?.main.temp_max}</div>
            <div>최저 온도{weatherData?.main.temp_min}</div>
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