import {useForm} from '../components/hook/useForm'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const navigate  = useNavigate()

    const { name, email, password, onInputChange, onResetForm } = useForm({
        name: '',
        email: '',
        password: ''
    })

    const onLogin = (e) =>{
        e.preventDefault()
        navigate('/home', {
            replace: true,
            state: {
                logged: true,
                name,
            }
        })
        onResetForm();
    }

    return (
        <div className='encabezado-login'>
            <div className='logo-login'>
   
                <h2>
                    GreenBox <br />
                    <span>Te conecta con el campo</span>
                </h2>
            </div>
            <div className='formulario'>
                <form onSubmit={onLogin}>
                    <h1>Inicio de seccion</h1>
                    <div className='input-group'>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            value={name}
                            onChange={onInputChange}
                            required
                            autoComplete='off'
                            placeholder='Nombre de usuario'
                        />
                        <label htmlFor='name'></label>
                    </div>

                    <div className='input-group'>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            value={email}
                            onChange={onInputChange}
                            required
                            autoComplete='off'
                            placeholder='correo eletronico'
                        />
                        <label htmlFor='email'></label>
                    </div>

                    <div className='input-group'>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={password}
                            onChange={onInputChange}
                            required
                            autoComplete='off'
                            placeholder='Contraseña'
                        />
                        <label htmlFor='password'></label>
                    </div>
                    <div className='recordar'>¿Olvido su contraseña?</div>
                    <button className='iniciar'>Iniciar sesión</button>
                </form>
            </div>
        </div>
    )
}
