import { useState, useEffect } from "react";
import firebase from '../services/firebaseConnection';
import { Navigate } from "react-router-dom";


export default function Private({ children }){
    
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);
    

    useEffect(()=>{
        async function checkLogin(){
            const unsub = firebase.auth().onAuthStateChanged((user)=>{
                    //se tem user logado
                if(user){
                    //criando objeto com os dados
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                    }
                    localStorage.setItem("@detailUser", JSON.stringify(userData))

                    setLoading(false)
                    setSigned(true)
                }else{
                    //se naõ tiver user
                    setLoading(false)
                    setSigned(false);   
                }
            })
        }
        checkLogin();
    },[])

    if(loading){
        return(
            <div>
                <h1>Carregando...</h1>
            </div>
        )
    }

    if(!signed){//se não tiver usuário redireciona para o login
        return <Navigate to='/'/>
    }

    return children;//retorna o componente childrem que engloba a padina de home la nas rotas
}