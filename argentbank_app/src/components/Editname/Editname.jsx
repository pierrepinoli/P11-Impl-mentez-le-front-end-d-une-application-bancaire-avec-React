import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Editname() {
    // Obtenez les données de l'utilisateur depuis le state Redux
    const userData = useSelector(state => state.edit.userData);
    console.log (userData)
    // Utilisez les données de l'utilisateur pour pré-remplir le champ de l'username
    const [username, setUsername] = useState(userData.userName || ''); // Utilisez une valeur vide par défaut si le nom d'utilisateur est null
  

    return (
        <section className="header">
        <div className="welcome-content">
            <h2>Welcome back<br />{userData.userName} !</h2>
            <button className="editname-button">Edit Name</button>
        </div>

        <div className="editname-content">

            <form> 
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        className="input-disabled"
                        type="text"
                        id="firstname"
                        value={userData.firstName}
                        disabled
                        />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        className="input-disabled"
                        type="text"
                        id="lastname"
                        value={userData.lastName}
                        disabled
                        />
                </div>
                
                <button type="submit" className="validate-button">Valider</button>
                
                </form>
            </div>
        </section>
    )                    
}

export default Editname;