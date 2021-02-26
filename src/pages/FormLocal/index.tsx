import React from 'react';
import Input from '../components/Input';
import PageHeader from '../components/PageHeader';
import Select from '../components/Select';
import Textarea from '../components/Textarea';

import './styles.css';


function FormLocal () {

    return (

        <div id = "page-func-form" className = "container">
             <PageHeader title = "GERENCIAMENTO">
                <form id = "search-func">
                <button>Apagar Registro</button>
                <button>Buscar</button>
                </form>
                </PageHeader>

            <main>
                <fieldset>

                    <legend>Cadastro Localidade</legend>
                    <Input name="Endereço" label="Endereço" />
                    <Select
                    name="Estado"
                    label="Estado"
                    options = {[

                        {id: 'Maranhão', label: 'Maranhão'},
                        {id: 'Rio Grande do Sul', label: 'Rio Grande do Sul'},
                        {id: 'São Paulo', label: 'São Paulo'},
                    ]}
                     />
                    <Select
                    name="Cidade"
                    label="Cidade"
                    options = {[

                        {id: 'São Luís', label: 'São Luís'},
                        {id: 'Paço do Lumiar', label: 'Paço do Lumiar'},
                        {id: 'São José de Ribamar', label: 'São José de Ribamar'},
                        {id: 'Imperatriz', label: 'Imperatriz'},
                    ]}
                     />
                    <Textarea name ="Obs" label = "Observação" />
                </fieldset>

                <footer>
                    <p>
                    importante! <br />
                    Preencha todos os dados!
                    </p>
                    <button type ="button">
                        Salvar Cadastro
                    </button>

                </footer>

                <footer>
                <iframe title ="meumapa"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.6895188105773!2d-49.48344358491045!3d-28.9372664822985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95222f23260ce445%3A0xfb49810027f1829a!2sLord%20Beer!5e0!3m2!1spt-BR!2sbr!4v1580927906384!5m2!1spt-BR!2sbr"
                            ></iframe>
                </footer>



            </main>
             </div>


    )

}

export default FormLocal;
