import React,{useState, useEffect} from 'react';
import firebase from '../../services/firebaseConnection'
import {Navigate} from 'react-router-dom'
import {query, orderBy,where} from 'firebase/firestore'
import { toast } from 'react-toastify';

import {
    Container, 
    ContainerLeft, ContainerLeftTitle,
    ContainerRight, ContainerRightTitle, ContainerRightListArea,BtnSubmit,
    BtnLogout
} from './styles'

export default function Home() {

    const [tarefa, setTarefa] = useState('')
    const [user, setUser] = useState({});
    const [tarefas, setTarefas] = useState([]);
    const [btnRegistrar, setBtnRegistrar] = useState('Registrar tarefa')
    const [uidState, setUidState] = useState('')
 
    useEffect(()=>{
        async function loadUser(){
            const userDetail = localStorage.getItem('@detailUser')//buscando o user do local storage
            setUser(JSON.parse(userDetail) || [])

            if(userDetail){

                await firebase.firestore().collection('tarefas')//listando os dados do banco
                .onSnapshot((snapshot)=>{
                    let buscaTarefas = [];
                    snapshot.forEach((doc)=>{
                        buscaTarefas.push({
                            id: doc.id,//doc id da tarefa
                            tarefa: doc.data().tarefa,//nome tarefa
                            userUid: doc.data().userUid,//uid do user da tarefa
                        })
                    })
                    setTarefas(buscaTarefas)
                })
            }
        }

        loadUser();
    },[])

   async function handleSubmiteTarefa(e,id,tarefaProp,createdProp, userUidProp){
        e.preventDefault();

        if(btnRegistrar === 'Registrar tarefa'){
            if(tarefa == ''){
                toast.info('Preencha o campo tarefas')
                return;
            }else{
                await firebase.firestore().collection('tarefas')
                .add({
                    tarefa:tarefa,
                    created: new Date(),
                    userUid: user?.uid
                })
                .then(()=>{
                    toast.success('Tarefa inserida')
                    setTarefa('')
                })
                .catch((error)=>{
                    console.log('erro tarefa'+error)
                })
    
                return;
            }

        }else{//editando os dados
     
            await firebase.firestore().collection('tarefas')
            .doc(uidState)
            .update({
                tarefa: tarefa,
            })
            .then(()=>{
                toast.success('Tarefa Editada com sucesso')
                setTarefa('')
                setBtnRegistrar('Registrar tarefa ')
            })
            .catch((error)=>{
                console.log('erro ao editar'+error)
            })
        }
    }

    async function editTarefa(id,tarefaProp){

       setTarefa(tarefaProp)
       setBtnRegistrar('Confirmar Edição')     
       setUidState(id)//passando o id para um state
       toast.info('Faça a alteração desejada.')
    }

    async function deleteTarefa(id){
        await firebase.firestore().collection('tarefas')
        .doc(id)
        .delete()
        .then(()=>{
            toast.success('Tarefa Concluída.')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    async function handleLogout(){
        await firebase.auth().signOut();
        toast.info('Até mais...')
    }

    

 return (
   <Container>
        <ContainerLeft>
            <ContainerLeftTitle>Minhas Tarefas</ContainerLeftTitle>
        </ContainerLeft>

        <ContainerRight>
            <ContainerRightTitle>Registre aqui suas tarefas</ContainerRightTitle>
            
                <form onSubmit={handleSubmiteTarefa}>
                <textarea
                placeholder='Digite sua tarefa...'
                value={tarefa}
                onChange={(e)=>setTarefa(e.target.value)}
                />
                {
                    btnRegistrar === 'Confirmar Edição' ?
                        <BtnSubmit type='submit' style={{backgroundColor: '#efcb68'}}>{btnRegistrar}</BtnSubmit>
                    :
                        <BtnSubmit type='submit'>{btnRegistrar}</BtnSubmit>
                }
            </form>

            {
                tarefas.map((lista)=>{
                   return(
                        <ContainerRightListArea key={lista.id} >
                            <p>{lista.tarefa}</p>
                            <div>
                                <button onClick={()=>editTarefa(lista.id,lista.tarefa)}>Editar</button>
                                <button className='concluir' onClick={()=>deleteTarefa(lista.id)}>Concluir</button>
                            </div>
                        </ContainerRightListArea>
                   )
                })
            }
            
        </ContainerRight>
        <BtnLogout onClick={handleLogout}>Sair</BtnLogout>
   </Container>
 );
}