export default function Navbar(){
    return(
        <nav>
            <img src={require("../Images/reactjs-icon.png")} alt="react logo" className="nav--icon"></img>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course- Project1</h4>
        </nav>
    )
}