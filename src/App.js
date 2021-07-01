import React from 'react';
import Machine from './Machine';




const App = () => {

    return (

        <div className="main">
            <div className="head text ">
                <h1>🎰Welcome to slot  Machine game🎰</h1>
            </div>
            <div className="container">

                <Machine x='😄' y='😄' z="😄" />
                <Machine x='😄' y='😄' z='😄' />
                <Machine x='🎅' y='😄' z='🎅' />


            </div>




        </div>
    )
};

export default App;