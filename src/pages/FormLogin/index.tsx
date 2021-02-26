import React from 'react';
import Input from '../components/Input';


import './styles.css';


function Formlogin () {

    return (

        <div id = "page-form-login" className = "container">

            <main>
            <footer>
                <fieldset>
                    <legend>LOGIN</legend>
                    <Input name="EMAIL" label="EMAIL" />
                    <Input name="senha" label="SENHA" />

                </fieldset>
                    <button type ="button">
                        ACESSAR
                    </button>
                </footer>

            </main>
             </div>
    )

}

export default Formlogin;
