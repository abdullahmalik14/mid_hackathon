import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Cards from '../components/Cards';
const Home = () => {
  return (
    <>
<div style={{ display: "flex", justifyContent: "center", margin: "10px", gap: "40px", flexWrap: "wrap" }}>
<Cards title="Blood Donor" desc="Blood types are determined by the presence or absence of certain antigens – substances that can trigger an immune response if they are foreign to the body.  Since some antigens can trigger a patient's immune system to attack the transfused blood, 
safe blood transfusions depend on careful blood typing and cross-matching"  img="https://mmi.edu.pk/wp-content/uploads/2022/03/banner-blood-donation.jpg"/>
<Cards  title="Blood Request" desc="The blood transfusion procedure begins when an intravenous (IV) line is placed onto the patient’s body. It is through the IV that the patient will begin to receive the new blood. 
Depending on the amount of blood, a simple blood transfusion can take between 1-4 hours."  img="https://maruthibloodbank.org/wp-content/uploads/2021/05/blood-request-01.jpg"/>
</div>
    
    </>
  )
}

export default Home