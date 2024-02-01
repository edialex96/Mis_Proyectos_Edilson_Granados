import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
export const Landing = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', {
      replace: true,
    });
  };
  return (
    
    <div className="navegacion">
    {state?.logged ? (
      <div className="user">
        <span className="username"> {state?.name} </span>
        <button className="btn-logout" onClick={onLogout}>
          Cerrar sesión
        </button>
        <nav>
          <Link to="/perfil">Perfil</Link>
          <Link to="/perfil">compras</Link>
          <Link to="/perfil">ayuda</Link>
        </nav>
      </div>
    ) : (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/register">Registrarse</Link>
      </nav>
    )}
  </div>
  )
}
