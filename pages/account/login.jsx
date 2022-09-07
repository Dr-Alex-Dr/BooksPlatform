import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from '../../components/Link'

function Login() {
    const router = useRouter();

    const validationSchema = Yup.object().shape({
        login: Yup.string().required('Требуется логин или почта'),
        password: Yup.string().required('Требуется пароль')
    });

    const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(validationSchema) });
    const { errors } = formState;

    return (
        <div className='card'>
            <h4 className="card-header">Вход</h4>
            <div className='card-body'>
                <form onSubmit={handleSubmit((d) => console.log(d))}>
                    <div className="form-group">
                        <label>почта</label>
                        <input name="login" type="text" {...register('login')} className={`form-control ${errors.login ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.login?.message}</div>
                    </div>
                    <div className="form-group">
                        <label>Пароль</label>
                        <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.password?.message}</div>
                    </div>
                    <button disabled={formState.isSubmitting} className="btn btn-primary">
                        {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Войти
                    </button>
                    <Link href="/account/register" className="btn btn-link">Регестрация</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;