import React from 'react';
import Machine from './Machine';




const App = () => {

    return (

        <div className="main">
            <div className="head text ">
                <h1>π°Welcome to slot  Machine gameπ°</h1>
            </div>
            <div className="container">

                <Machine x='π' y='π' z="π" />
                <Machine x='π' y='π' z='π' />
                <Machine x='π' y='π' z='π' />


            </div>




        </div>
    )
};

export default App;