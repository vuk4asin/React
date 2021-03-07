import React , {useState} from 'react';
import LoginForm from './components/LoginForm';
 
function App() {

  const adminUser = {
    email:'admin@admin.com',
    password:"admin123"
  }

  function getCookie(name) {
    if (!document.cookie) {
      return null;
    }
  
    const xsrfCookies = document.cookie.split(';')
      .map(c => c.trim())
      .filter(c => c.startsWith(name + '='));
  
    if (xsrfCookies.length === 0) {
      return null;
    }
    return decodeURIComponent(xsrfCookies[0].split('=')[1]);
  }


  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

const csrfToken = getCookie('CSRF-TOKEN');
const headers = new Headers({
  'Content-Type': 'x-www-form-urlencoded',
  'X-CSRF-TOKEN': csrfToken
});

const Login = details => {

  console.log(details);

  // if (details.email == adminUser.email && details.password == adminUser.password) {
  //   console.log("Logged in");
  //     setUser ({
  //       name: details.name,
  //       email: details.email
  //     })
  // }
  // else
  // {
  //   console.log("Details do not match!");
  // }
  //   setError("Details do not match");

  fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers,
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(details)
      })
      .then(function(response) {
        console.log( "blll", response);
        setUser ({
          email: response.email,
          password: response.password
        });
        // return response.json();
      })
      .catch(err => console.error(err));
}

const Logout = () => {
  setUser({name:"",email: ""});
}

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
      <h2>Welcome, <span>{user.name}</span></h2>
        <button  className='LogOut' onClick={Logout}>Logout</button>
     
      </div>
    ) : (
      <LoginForm Login={Login} error={error}/>
    )}
    </div>
  );
}

export default App;
