import React from 'react';
import {Link} from 'react-router-dom';
import PageHeader from '../components/PageHeader';

import './styles.css';


function Listafunc () {
        return (
            <div id = "page-func-list" className = "container">
                <PageHeader title = " GERENCIAMENTO ">
                <form id = "search-func">
                <button className="btn-geral">
                <Link to="local" className="btn-geral" >Cadastrar Local</Link>
                </button>
                <button>Relatórios</button>
                <button>
                   <Link to="quest" className="btn-geral" >Cadastrar Questionario</Link>
                </button>
                </form>
                </PageHeader>
                <main>

                <article className = "func-item">

                    <header>
                        <img src ="https://lh3.googleusercontent.com/ogw/ADGmqu-XcoHLlMdR-5naR_zgDyKpbojO1Laf0XbAbw3Duw=s83-c-mo"alt ="Meiryanne Martins"></img>
                         <div>
                            <strong>Meiryanne Martins</strong>
                            <span>Desenvolvedora</span>

                            <button type = "button">

                                Visualizar Histórico

                            </button>


                        </div>
                    </header>

                    <header>
                        <img src ="https://instagram.fbfh14-1.fna.fbcdn.net/v/t51.2885-19/s150x150/140377273_399087791379697_9137859398110211151_n.jpg?_nc_ht=instagram.fbfh14-1.fna.fbcdn.net&_nc_ohc=-OVaI3WoU1QAX-pPrV4&tp=1&oh=cd846494d76bd8091834b55a923ef427&oe=602FFA97" alt = ""></img>
                         <div>
                            <strong>Fábio</strong>
                            <span>Recursos Humanos</span>

                            <button type = "button">

                                Visualizar Histórico

                            </button>


                        </div>
                    </header>

                </article>

                </main>
            </div>
        )
        }

    export default Listafunc;
