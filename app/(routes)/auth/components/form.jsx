import "../css/auth.css";


const Form =  props =>{
    return (
        <div className="mx-2 mt-4">
            <form>
            <div className="form-group" style={props.emailGroup}>
            <input className="form-control icon-input" type="email" placeholder="Email Address"></input>
            </div>
            <div className="form-group password-input" style={props.passwordGroup}>
            <input className="form-control icon-input2" type="password" placeholder={props.password} />
            <img src="../images/auth/eye.svg" alt="Eye Icon" className="password-toggle" />
            </div>
            <div className="form-group" style={props.otpGroup}>
            <input className="form-control icon-input3" type="text" placeholder="- - - - - "></input>
            </div>
            <div>
            <a href={props.smallHref} style={props.style}><p className="reset text-primary">{props.small}</p></a>
            <p className="account">{props.account1} <a className="text-primary" href={props.href}>{props.account2}</a></p>
            </div>
            <div style={{textAlign: "center"}} className="mt-4">
                <button className="btn btn-primary btn-lg button py-3">{props.button}</button>
            </div>
            </form>
        </div>
    );
}
export default Form;