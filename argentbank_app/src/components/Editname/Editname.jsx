import React from 'react';

function Editname() {

    return (
        <section className="header">
        <div className="welcome-content">
            <h2>Welcome back<br />Tony Jarvis!</h2>
            <button className="editname-button">Edit Name</button>
        </div>

        <div className="editname-content">

        {/* onSubmit={handleSignIn} */}
            <form> 
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    id="username" 
                    // value={username} 
                    // onChange={(e) => setUsername(e.target.value)} 
                    required 
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">First Name</label>
                    <input 
                    className="input-disabled"
                    type="text" 
                    id="firstname" 
                    // value={password}  
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Last Name</label>
                    <input 
                    className="input-disabled"
                    type="text" 
                    id="lastname" 
                    // value={password}
                    />
                </div>
                
                <button type="submit" className="validate-button">Valider</button>
                
                </form>
            </div>
        </section>
    )                    
}

export default Editname;