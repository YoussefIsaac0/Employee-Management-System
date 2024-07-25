import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation'
import React, { useState } from 'react';


export default function EditPage(){
    const [formData, setFormData] = useState({
        Name:'',
        HasAccess: false
    })
    const [error,setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState();
    const [isLoading, setIsLoading]=useState(false)
    const handleChange=(event)=>{
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
        console.log(formData)
    }
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      setIsLoading(true)
        event.preventDefault();
        try {
          const response = await fetch('https://localhost:5001/api/Person/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            // If the request is successful, navigate to the /view page
            setIsLoading(false);
            navigate('/view');
          } else {
            // Handle errors here
            console.error('Failed to submit the form');
          }
        } catch (error) {
          setIsLoading(false);
          setError(true);
          setErrorMessage("Something went wrong, please try again after a while, if the problem persists contact our support");
          console.error('Error submitting the form:', error);
        }
      };
    

  return (
    <div className='viewContainer'>
      <Navigation style={{backgroundColor: "#008080"}}/>
      {isLoading &&
      <div className='Message'>
      <div className='loadingCircle'/>
      Loading...
    </div>}
      {error && <p className="Message">{errorMessage}</p>}
      {!error && <h1>Add New Member</h1>}
      { !error &&!isLoading && 
        
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="Name"
                name="Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="isAuthorized">Is Authorized:</label>
              <input
                type="checkbox"
                id="HasAccess"
                name="HasAccess"
                checked={formData.hasAccess}
                onChange={handleChange}
              />
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
      }
    </div>
  )
}
