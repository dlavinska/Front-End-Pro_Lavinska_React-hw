import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="row">
            <div className="col-12">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <NavLink className="btn btn-primary mt-4 mb-4" activeClassName = "btn-success" to="/users">
                            UsersList Home-Page
                        </NavLink>
                        
                    </li>                   
                </ul>
            </div>
        </div>
    )    
}

export default Navigation;