
import "../css/auth.css";
import Header from "../components/header";
import ProfileForm from "../components/profile";


const Profile = () => {
    return ( 
        <div className="card shadow-lg">
        <div className="card-body">

       <Header 
        name="Set up your profile" 
        sub=""
        progress={{display: "none"}}
         />

       <ProfileForm
         />
       
        </div>
        </div>
     );
} 
 
export default Profile;