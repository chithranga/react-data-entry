import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from "./AddUser.module.css";
import ErrorModal from './ErrorModal';

const AddUser= (props) => {
        const [enteredUserName, setEnteredUserName] = useState('');
        const [enteredAge, setEnteredAge] = useState('');
        const [error, setError]= useState('');

        const addUserHandler = (event)=>{
            event.preventDefault();
            if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
                setError({
                    title: "Invalid input",
                    message:"Please enter a valid name and age (non empty values) "
                })
                return;
            }

            if (+enteredAge < 1){
                setError({
                    title:"Invalid Age Input",
                    message:"Please enter a valid age (> 0)"
                })
                return;
            }
            props.onAddUser(enteredUserName, enteredAge);
            //console.log(enteredUserName , enteredAge)
            setEnteredUserName('');
            setEnteredAge('');
        }

        const addUserNameChangeHendler = (event) =>{
            setEnteredUserName(event.target.value);
           
        }

        const addAgeChangeHeadler = (event ) =>{
            setEnteredAge(event.target.value)
            
        }

        const errorHandler =() =>{
            setError(null);
        }
        return (
            <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>    }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input  id="username" type="text" value={enteredUserName} onChange={addUserNameChangeHendler}/>
                    <label htmlFor="age" >Age (Year)</label>
                    <input  id="age" type="number" value={enteredAge} onChange={addAgeChangeHeadler} />
                    <Button type="submit">Add User</Button>
                    
                </form>
            </Card>
            </div>
        )
   
}

export default AddUser;
