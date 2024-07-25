import React , {useState, useEffect} from 'react'
import Navigation from './Navigation.js'
import Card from "./Card.js"

export default function ViewPage() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await fetch('https://localhost:5001/api/Person/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPersons(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPersons();
  }, []);

  
  //console.log(persons);
  return (
    <div className='viewContainer'>
    <Navigation style={{backgroundColor: "#008080"}}/>
    <h1>Our Beloved Interns</h1>
    {loading &&
      <div className='Message'>
      <div className='loadingCircle'/>
      Loading...
    </div>}
    {error && <div className='Message'>Error: {error.message}</div>}
    {
      !error &&
      <div className='CardContainer'>
      {persons.map(person => (
            <Card
              name={person.name} 
              id={person._id}
              hasAccess={person.hasAccess ? "Yes" : "No"}
            />
          ))}
      </div>
    }
    </div>
  )
}
