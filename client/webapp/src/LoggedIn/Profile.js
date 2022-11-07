import React, {useState} from 'react';
import './Profile.css'
import Form from 'react-bootstrap/Form';
import TextField from "@mui/material/TextField";
import { MuiTelInput } from 'mui-tel-input'

function Profile(props) {

    const [edit, setEdit] = useState(false)
    const [name, setName] = useState('Milan Mondayz')
    const [location, setLocation] = useState('1239 Send Help Dr.')
    const [description, setDescription] = useState('New meal every week, come check me out!')
    const [email, setEmail] = useState('zach@zach.com')

    return (
        <div>
            <div className='profheader'>This finna be a bomb ass header</div>
            <div className='currbody'>
                <h3 className='title'>Current Profile</h3>
                <div className='sbs'>
                    <div className='proficon'>
                        <i className="fa-solid fa-user" sm={{bgcolor: 'white'}}></i>
                    </div>
                    <div className='spacious'>
                        {(edit) ? (
                            <div className='cusform'>
                                <p>bring up files on button</p>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="name"
                                    label="name"
                                    name="name"
                                    autoFocus
                                    InputLabelProps={{ shrink: true }}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="location"
                                    label="location"
                                    name="location"
                                    InputLabelProps={{ shrink: true }}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="email"
                                    name="email"
                                    InputLabelProps={{ shrink: true }}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    multiline
                                    id="outlined-textarea"
                                    label="description"
                                    name="description"
                                    InputLabelProps={{ shrink: true }}
                                />
                                <div className='sbs'>
                                    <button>submit</button>
                                    <button onClick={()=> setEdit(!edit)}>close</button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p>{name}</p>
                                <p>{location}</p>
                                <p>{email}</p>
                                <p>{description}</p>
                                <button onClick={()=> setEdit(!edit)}>edit</button>
                            </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;