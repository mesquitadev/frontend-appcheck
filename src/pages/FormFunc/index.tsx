import React from 'react';
import Input from '../components/Input';
import PageHeader from '../components/PageHeader';
import Select from '../components/Select';
import Textarea from '../components/Textarea';
import './styles.css'


function Formfunc () {

    return (

        <div id = "page-func-form" className = "container">
             <PageHeader title = "GERENCIAMENTO">
             <form id = "search-func">
                <button>Apagar Registro</button>
                <button>Buscar Registro</button>
                </form>
                </PageHeader>

            <main>
                <fieldset>

                    <legend>Cadastro Funcionário</legend>
                    <Input name="name" label="Nome Completo" />
                    <Input name="cpf" label="CPF" />
                    <Select
                    name="cargo"
                    label="Cargo"
                    options = {[

                        {id: 'Supervisor', label: 'Supervisor'},
                        {id: 'Preposto', label: 'Preposto'},
                        {id: 'Fiscal', label: 'Fiscal'},
                        {id: 'Funcionário', label: 'Funcionário'},
                    ]}
                     />
                    <Input type="email" name="email" label="Email" />
                    <Input type = "date" name="nascimento" label="Nascimento" />
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



            </main>
             </div>
    )

}

export default Formfunc;
