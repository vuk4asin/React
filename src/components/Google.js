import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export default class Google extends Component
{
    state = {
        googleId: null,
        familyName: '',
        givenName: '',
        email: '',
        imageUrl: '',
        
    };

    responseGoogle = (response) => {
        console.log(response);
        this.setState({
           
            email: response.profileObj.email,
            familyName:response.profileObj.familyName,
            givenName: response.profileObj.givenName,
            googleId: response.profileObj.googleId,
            imageUrl: response.profileObj.imageUrl,
            name: response.profileObj.name
        });
    
    }


    render() {

        let googleContent;

        if(this.state.googleId != null){
            googleContent=(
                <div className="container bg-mute">
                    <img src={this.state.imageUrl} alt={this.state.name}/>
                    <h2>Welcome to Google:{this.state.familyName } {this.state.givenName}</h2>
                        Email:{this.state.email}
                </div>
            );
       
            }  else {
                    googleContent=(        
                    <GoogleLogin
                        clientId="873509417373-0s5fckfb3imj5sjrs99g4shhv017sijn.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                  /> 
            );
        }

        return(
            <div>
                {googleContent}
            </div>
        )
    
    }
}