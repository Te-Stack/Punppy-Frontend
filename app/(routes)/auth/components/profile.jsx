import "../css/auth.css";


const ProfileForm =  () =>{
    return (
        <div className="mx-2 mt-4">
        <img className="profile-img" src="../images/auth/edit-profile.png"></img>
            <form>
            <div className="container-fluid">
            <div className="row">
            <div className="form-group mt-4">
            <input className="form-control input4" type="text" placeholder="Full Name" />
            </div>
            </div>
            <div className="row">
            <div className="col-lg-4">
            <div className="form-group mt-4">
            <div className="custom-select">
                <select className="form-control input4">
                <option>Gender</option>
                </select>
            </div>
            </div>
            </div>
            <div className="col-lg-4">
            <div className="form-group mt-4">
            <div className="custom-select">
                <select className="form-control input4">
                <option>Country</option>
                </select>
            </div>
            </div>
            </div>
            <div className="col-lg-4">
            <div className="form-group mt-4">
            <div className="custom-select">
                <select className="form-control input4">
                <option>State/City</option>
                </select>
            </div>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-8">
            <div className="form-group mt-4">
            <div className="custom-select">
                <select className="form-control input4">
                <option>Date of Birth</option>
                </select>
            </div>
            </div>
            </div>
            <div className="col-lg-4">
            <div className="form-group mt-4">
            <div className="custom-select">
                <select className="form-control input4">
                <option>Status</option>
                </select>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div style={{textAlign: "center"}} className="mt-5 mb-5">
                <button className="btn btn-primary btn-lg button py-3">Signup</button>
            </div>
            </form>
        </div>
    );
}
export default ProfileForm;