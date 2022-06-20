import React from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const navigate =useNavigate()

    const handleLogout= ()=>{
        navigate('/login',
        {replace:true})

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <NavLink 
                className="navbar-brand container" 
                to="/universes"
            >
                Universes
            </NavLink>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=>"nav-item nav-link " + (isActive? 'active':'') } 
                        to="/marvel"
                    >
                       
                    </NavLink>
 
                    <NavLink 
                        className={({isActive})=>"nav-item nav-link " + (isActive? 'active':'') }
                        to="/dc"
                    >
                       
                    </NavLink>
                    <NavLink 
                        className={({isActive})=>"nav-item nav-link " + (isActive? 'active':'') }
                        to="/search"
                    >
                        Search
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span
                    className='nav-item nav-link text-info  '>Agustin</span>
                    <button
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                        to="/login"
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}