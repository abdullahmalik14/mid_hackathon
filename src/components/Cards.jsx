import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Cards(props) {
    const navigate = useNavigate()
    const submit_handle=()=>{
      if(props.title === "Blood Donor"){
        navigate("/blood_donor_form")
      }
      else if (props.title === "Blood Request"){
        navigate("/blood_request_form")
       }
       
    }
  return (
    <Card 
    
    onClick={submit_handle}
    sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
          sx={{width:"350px",height:"150px",objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}