import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import api from '../../services/api';
import Chat from  '../../component'
import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';

export default function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')
        } catch (err) {
            alert('falha')
        }
    }
    

    return (
        <div className="logon-container">
            <section className="form">
               

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <div className="" >

                    </div>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#10559b" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
           
            <Chat></Chat>
        </div>
    );
}