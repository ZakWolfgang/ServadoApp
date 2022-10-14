import Typography from "@mui/material/Typography";
import {Rating} from "@mui/material";
import {useState} from "react";

function ReviewCard (props){
    const [value, setValue] = useState();

    const [expand, setExpand] = useState(false)

    return (
        <div className='card'>
            <div onClick={()=> setExpand(!expand)} className='title'>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Typography component="legend">{props.txt}</Typography>
            </div>
            {expand && (
                <div className='opener'>
                    <p>{props.desc}</p>
                </div>
            )}
        </div>
    );

}
export default ReviewCard;

/*
<div onClick={setExpand(!expand)} className='title'>
                <Typography component="legend">Controlled</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <p>Hot and Fast!</p>
            </div>
            {expand && (
                <div className='opener'>
                    <p>The food tasted great and the process was easy!</p>
                </div>
            )}
 */