
import "./profile.css";
import SecondTopBar from '../../components/secondtopbar/SecondTopBar';
import {SearchOutlined} from "@material-ui/icons";
import ProfileInfo from "../../components/profileInfo/ProfileInfo";
// import PaymentTb from "../../components/paymentTb/PaymentTb";
import ServicesSubscrip from "../../components/servicesSubscrip/ServicesSubscrip";


export default function Profile() {
  return (
    <div className="view">
           <SecondTopBar title="Profile"/>
      <div className="profileWrapper">
      
        <ProfileInfo/>
        <ServicesSubscrip/> 
        </div>  
    </div>
  )
}
