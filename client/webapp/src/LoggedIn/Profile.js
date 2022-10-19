import React, {useState} from 'react';
import './Profile.css'
import TextField from "@mui/material/TextField";

function Profile(props) {

    const [edit, setEdit] = useState(false)
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
                                    label="Company Name"
                                    name="name"
                                    autoFocus
                                    inputProps={{ maxLength: '8' }}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="location"
                                    label="Location"
                                    name="location"
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="name"
                                    label="Company Name"
                                    name="name"
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="name"
                                    label="Company Name"
                                    name="name"
                                />
                                <div className='sbs'>
                                    <button>submit</button>
                                    <button onClick={()=> setEdit(!edit)}>close</button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p>Name</p>
                                <p>Location</p>
                                <p>email</p>
                                <p>phone number</p>
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