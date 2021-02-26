import React from 'react';
import Input from '../components/Input';
import PageHeader from '../components/PageHeader';
import Textarea from '../components/Textarea';

import './styles.css';


function FormQuest () {

    return (

        <div id = "page-form-quest" className = "container">
             <PageHeader title = "QUESTIONÁRIO">
             <form id = "search-func">
                </form>
                </PageHeader>

            <main>
            <footer>
                <fieldset>
                    <legend>MATERIAIS/DOCS</legend>
                    <Input name="pergunta" label="PERGUNTA" />
                    <Textarea name ="Obs" label = "Observação" />
                </fieldset>
                    <button type ="button">
                        Adicionar Pergunta
                    </button>
                </footer>

                <footer>
                <fieldset>
                    <legend>FISCALIZAÇÃO</legend>
                    <Input name="pergunta" label="PERGUNTA" />
                    <Textarea name ="Obs" label = "Observação" />
                </fieldset>
                    <button type ="button">
                        Adicionar Pergunta
                    </button>
                </footer>

                <footer>
                    <p>Listagem de perguntas</p>
                </footer>



            </main>
             </div>
    )

}

export default FormQuest;
