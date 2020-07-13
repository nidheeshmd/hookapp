//##### useEffect hook fire side effects inside of our functional components #####
import React, {useState , useEffect} from 'react';
import axios from 'axios';

const UseEffectExample = () => {

    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('Bret');

    //useEffect does not get back any return value, instead call function when ever the component changes

    //fire when componentDidMount and also fire when any of the above 'set' functions (setUser or setSearchQuery).
    //In other words when ever the render method is invoke also useEffect too invoke
    /*to avoid this unwanted invoking we send a secondary parameter to useEffect and it 
    is an array with properties that this effect has access to and do not trigger a re-render.
    for example if we put 'user' there, useEffect invoke when only use value change. Also invoke when componentDidMount because 
    changing user value when component load*/
    /* If we put an empty array useEffect will only invoke when component load */
    

    useEffect(() =>{
        const fetchFunc = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
            console.log(user);
            console.log(response);
            setUser(response.data[0]);
            console.log(user);
        }
        fetchFunc();
    },[searchQuery]);

    return(
        <div>
            <input type='search' value={searchQuery} onChange={event => setSearchQuery(event.target.value)}/>
{
            user ? <div>{user.name}</div> : <div>null</div>
}
            </div>

            
    );
};


export default UseEffectExample;