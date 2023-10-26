import "../css/auth.css";


const SetPassword =  () =>{
    return (
        <div className="mx-2 mt-4">
            <form>
            <div className="form-group password-input">
            <input className="form-control icon-input2" type="password" placeholder="Create a Strong Password" />
            <img src="../images/auth/eye.svg" alt="Eye Icon" className="password-toggle" />
            <small className="form-text"> <span className="text-muted">Password must be at least </span> 
            8 Characters <span className="text-muted"> and must contain at least a </span> Capital Letter, <span className="text-muted"> a</span> 
            Number  <span className="text-muted">and a</span>  Special Character.</small>
            </div>
            <div className="form-group password-input mt-4">
            <input className="form-control icon-input2" type="password" placeholder="Confirm Password" />
            <img src="../images/auth/eye.svg" alt="Eye Icon" className="password-toggle" />
            </div>
            <div>
            <a href="#"><p className="reset text-danger mt-4">Password not strong enough</p></a>
            </div>
            <div style={{textAlign: "center"}} className="mt-5 mb-5">
                <button className="btn btn-primary btn-lg button py-3">Reset</button>
            </div>
            </form>
        </div>
    );
}
export default SetPassword;