import BoredAPIService from '../../shared/api/service/BoredAPIService'
import {useState} from 'react'

export const Home = () => {
const [data, setData] = useState()
const [type, setType] = useState()

const fetchData = async () =>
{
try{

    const response = await BoredAPIService.getRandomActivity(type)
    setData(response.data)
    }catch(error){
        console.log('error occurred', error)
    }
    }


    return (
        <div>
            <h1>Welcome to Bored API</h1>
            <p>Type an activity and press the activity button to get a random activity</p> <br/>
            <li>social</li><br/>
            <li>recreational</li><br/>
            <li>relaxation</li><br/>
            <li>education</li><br/>
            <button onClick={() => fetchData()}>Activity</button>
            <input placeholder="Type of activity" onChange={event => setType(event.target.value)}/>
            
            <h2>Activity: {data?.activity}</h2> <br/>
            <h2>Type of activity: {data?.type}</h2> <br/>
        </div>
    )
}
