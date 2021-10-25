import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from "./AddUser.module.css";

const AddUser= (props) => {
        const [enteredUserName, setEnteredUserName] = useState('');
        const [enteredAge, setEnteredAge] = useState('');

        const addUserHandler = (event)=>{
            event.preventDefault();
            console.log(enteredUserName , enteredAge)
            setEnteredUserName('');
            setEnteredAge('');
        }

        const addUserNameChangeHendler = (event) =>{
            setEnteredUserName(event.target.value);
           
        }

        const addAgeChangeHeadler = (event ) =>{
            setEnteredAge(event.target.value)
            
        }
        return (
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input  id="username" type="text" value={enteredUserName} onChange={addUserNameChangeHendler}/>
                    <label htmlFor="age" >Age (Year)</label>
                    <input  id="age" type="number" value={enteredAge} onChange={addAgeChangeHeadler} />
                    <Button type="submit">Add User</Button>
                    
                </form>
            </Card>
        )
   
}

export default AddUser;
