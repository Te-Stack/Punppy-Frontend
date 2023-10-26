import "../css/auth.css";

const Loader = props => {
    return (
    <div className={props.body}>
                <div className={props.body}>
                <div style={props.content1}>
                <img className="logo" src="../images/logo/logo-white.png" width="200"/>
                <img className="spinner" src="../images/auth/spinner.gif"/>
                </div>
                <div style={props.content2}>
                <img className="spinner" src="../images/auth/spinner-white.gif"/>
                <p>Creating Your Account</p>
                </div>
                </div>

            </div>
    )
}
export default Loader;