import React, {useState, useEffect }from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';



function About() {
    useEffect(() => {
        fetchUser();
    },[])

    const [user, setUser] = useState([]);

    const fetchUser = async () => {
        const data = await fetch ('http://localhost:3000/users');

        const user = await data.json();
        console.log(user[0])
        setUser(user[0])
    }
    return (
        <Card className='h-100 shadow-sm bg-grey rounded'>
            <Card.Img variant="thumbnail img-responsive" src='https://cdn.theatlantic.com/static/mt/assets/science/cat_caviar.jpg' height="300" width="500" alt={user.username} />
                <Card.Title className='mb-0 font-weight-bold'>{user.username} Iturralde         {user.age}</Card.Title> 
            <Card.Body className='d-flex flex-column' >
             Im a freshly graduated student from a bootcamp, working at a steller new start up. I have great ambitions so i will be looking to scale up for housing.
                I have no pets and I promise to tread lightly. As you can see from my profile picture, money isn't a problem. 👍🏽 In other words {user.interest} Ill take.
            </Card.Body >

        </Card>
        /* <div>
            <header>
            <h1> Welcome {`${user.username}`}</h1>
            <h2>Users Name: {user.username}</h2>
            <h3>Users Age: {user.age}</h3>
            <h4>Users interest:{user.interest}</h4>
            <img></img>
            </header>    
        </div> */
    )
}

export default About;
