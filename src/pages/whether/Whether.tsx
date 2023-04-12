import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Button} from 'antd';
import {RightCircleOutlined} from '@ant-design/icons';

const Whether = ()=>{
    const navigate = useNavigate();

    interface IWhetherProps {
        lat:number;
        lon:number;
    }

    interface IWhetherDataProps {
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
    const [whether, setWhether] = useState<IWhetherProps>({lat:0,lon:0});
    const [whetherData, setWhetherData] = useState<IWhetherDataProps>();

    const getCurrentLocation = () => {
        // 현재 위치 가져오기
        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          setWhether({lat:lat, lon:lon})
        });

        console.log(whether);
    };

    const getCurrentWhether = async(lat:number, lon: number)=>{
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`;

        const response = await axios.get(api);
        console.log(response);
        setWhetherData(response.data);
    }

    useEffect(() => {
        getCurrentLocation();
    }, []);

    useEffect(()=>{
        getCurrentWhether(whether['lat'],whether['lon']);
    },[whether]);

    return (
        <div>
            <div>{whetherData?.name}의 날씨</div>
            <div>최고 온도{whetherData?.main.temp_max}</div>
            <div>최저 온도{whetherData?.main.temp_min}</div>
            <Button onClick={()=>navigate('/todoList')}>Todo List</Button>
        </div>
    );
}

export default Whether;