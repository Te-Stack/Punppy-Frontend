import "../css/auth.css";


const Socials =  (props) =>{
    return (
        <div className="mx-2">
        <a href="#">
        <div className="google">
        <img src={props.img} alt="Google Icon" />
        <p>{props.name}</p>
        </div>

        </a>
        </div>
    );
}
export default Socials;