import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { editUsername } from '../../redux/Actions/editActions';

function Editname() {
    // cherche les données de l'utilisateur depuis le state Redux
    const userData = useSelector(state => state.edit.userData);
    const dispatch = useDispatch();
    // recuperation du token dans le sessions storage
    const token = sessionStorage.getItem('token');
    
    // Utilise les données de l'utilisateur pour pré-remplir le champ de l'username
    const [username, setUsername] = useState(userData.userName || ''); // Utilisez une valeur vide par défaut si le nom d'utilisateur est null
  
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // Effectuer la requête API PUT pour mettre à jour le nom d'utilisateur
            await Axios.put(
                'http://localhost:3001/api/v1/user/profile',
                { userName: username },
                {
                    headers: {
                        Authorization: token,
                        'Content-Type': 'application/json'
                    }
                }
            );

            // Dispatchez l'action pour mettre à jour le nom d'utilisateur dans le state Redux
            dispatch(editUsername({ userName: username }));

            
        } catch (error) {
            console.error('Error updating username:', error);
        }
    };

    return (
        <section className="header">
        <div className="welcome-content">
            <h2>Welcome back<br />{userData.userName} !</h2>
            <button className="editname-button">Edit Name</button>
        </div>

        <div className="editname-content">

            <form onSubmit={handleFormSubmit}> 
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