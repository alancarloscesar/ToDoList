import React,{useState} from 'react';
import firebase from '../../services/firebaseConnection'
import { useNavigate } from 'react-router-dom';

import {
    Container, 
    ContainerLeft, ContainerLeftTitle,
    ContainerRight, ContainerRightTitle
} from './styles'
import { Link } from 'react-router-dom';

export default function Register() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    async function handleCreateLogin(e){
        e.preventDefault();

        if(email !== '' && senha !== ''){
            await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(()=>{
                navigate('/home',{replace:true})
            })
            .catch((error)=>{
                console.log('Erro ao criar login'+error)
            })
        }else{

            alert('Preencha todos os campos!')
        }
    }

 return (
   <Container>
        <ContainerLeft>
            <ContainerLeftTitle>Olá, vamos criar sua conta.</ContainerLeftTitle>
        </ContainerLeft>

        <ContainerRight>
            <ContainerRightTitle>Preencha seus dados.</ContainerRightTitle>
            <form onSubmit={handleCreateLogin}>
                <input
                    placeholder='Seu e-mail...'
                    type='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    placeholder='*******'
                    type='password'
                    value={senha}
                    onChange={(e)=>setSenha(e.target.value)}
                />
                <button type='submit'>Cadastrar</button>
            </form>
            <div className='register'>
                <strong>Já tem um login?</strong> <a href='/'>Entre na sua conta.</a>
            </div>
        </ContainerRight>
   </Container>
 );
}