import React, {useState} from 'react'
import api from '../../services/api'

export default function Login({history}){
    const [email, setEmail] = useState('')

    async function handleSubmit(event){
        event.preventDefault()
        console.log("foi")
        const response = await api.post('/sessions',{email})
        
        const {_id} = response.data
        localStorage.setItem('user', _id)
        history.push('/dashboard')
    }
    
    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para progamadores e encontre <strong>talentos</strong> para sua aplicação.
            </p>

            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="seu melhor email"
                    value = {email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button className="btn">Entrar</button>
            </form>
        </>
    )
}