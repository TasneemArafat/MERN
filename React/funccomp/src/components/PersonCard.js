import React, { useState } from 'react';
    
    
const PersonCard = (props) =>{
    //    const [age,setAge] = useState(props.age);

        return <div>
                    <h1>{props.lastName}, {props.firstName}</h1>
                    <p>Age: {props.age}</p>
                    <p>Hair Color: {props.hairColor}</p>
                    {/* <button onClick={()=> this.setState({age: this.state.age+1})}> Birthday Button for {this.props.firstName} {this.props.lastName}</button> */}
                </div>;
    
}
    
export default PersonCard;