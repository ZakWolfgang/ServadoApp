import Typography from "@mui/material/Typography";
import {Rating} from "@mui/material";
import {useState} from "react";
import ReviewPop from "./ReviewPop";
import './ReviewCard.css'

function ReviewCard (props){

    const [pop, setPop] = useState(false)

    return (
        <div onClick={()=>setPop(!pop)} className='revcard'>
            <p>{props.name}</p>
            <Rating name="read-only" value={props.value} readOnly />
            <p>{props.txt}</p>
            <ReviewPop
                name={props.name}
                value={props.value}
                txt={props.txt}
                pop={pop}
                desc={props.desc}/>
        </div>
    );

}
export default ReviewCard;