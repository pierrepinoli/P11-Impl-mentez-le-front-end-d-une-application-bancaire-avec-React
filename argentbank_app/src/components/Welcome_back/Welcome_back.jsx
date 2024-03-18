import { useSelector  } from 'react-redux';

function WelcomeBack() {
    
    // importe les données de l'utilisateur depuis le state
    const userData = useSelector(state => state.edit.userData);
    return (
        <section>      
                <div className="welcome-content">
                    <h2>Welcome back<br />{userData.userName} !</h2>            
                </div>
        </section>
    )                    
}

export default WelcomeBack;