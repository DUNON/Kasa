import React from 'react'
import { Link } from "react-router-dom";
import "./Error.css"

export default function Error() {
  return (
    <div className="error_container">
			<p className="error_number">404</p>
			<p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="error_linkHome">
				Retourner sur la page d’accueil
			</Link>
		</div>
  )
}
