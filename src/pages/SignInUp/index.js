import React,{useState} from 'react';
import firebase from '../../services/firebaseConnection'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import {
    Container, 
    ContainerLeft, ContainerLeftTitle,
    ContainerRight, ContainerRightTitle
} from './styles'

export default function Register() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();

        if(email !== '' && senha !== ''){
            await firebase.auth().signInWithEmailAndPassword(email,senha)
            .then(()=>{
                navigate('/home',{replace:true})
                toast.info('Bem-vindo(a)')
            })
            .catch((error)=>{
                console.log('Erro ao fazer login'+error)
            })
        }else{

            toast.error('Preencha todos os campos!')
        }
    }

 return (
   <Container>
        <ContainerLeft>
            <ContainerLeftTitle>Entre, ou crie uma nova conta.</ContainerLeftTitle>
        </ContainerLeft>

        <ContainerRight>
            <ContainerRightTitle>Efetue seu Log-in</ContainerRightTitle>
            <form onSubmit={handleLogin}>
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
                <button type='submit'>Acessar</button>
            </form>
            <div className='register'>
                <strong>É novo por aqui?</strong> <Link to='/register'>Crie uma conta agora mesmo.</Link>
            </div>
        </ContainerRight>
   </Container>
 );
}