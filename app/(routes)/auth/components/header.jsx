import "../css/auth.css";


const Header =  (props) =>{
    return (
        <div>
            <header>
            <a><img src="../images/fav.png" width="60"/></a>
            <h1 className="mt-4 header-text">{props.name}</h1>
            <p className="text-muted">{props.sub}</p>
            <img style={props.progress} src="../images/auth/progress.png"/>
            <img style={props.progress2} src="../images/auth/progress-2.png"/>
            </header>
        </div>
    )
}
export default Header;