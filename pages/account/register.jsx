
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from '../../components/Link';

function Register() {
    const router = useRouter();

    const validationSchema = Yup.object().shape({
        firstName: Yup.string(),
        lastName: Yup.string(),
        login: Yup.string().required('Требуется логин'),
        email: Yup.string().email().required('Требуется email'),
        password: Yup.string()
            .required('Требуется пароль')
            .min(6, 'Пароль должен быть не менее 6 символов')
    });

    const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(validationSchema) });
    const { errors } = formState;

    return (
            <div className="card">
                <h4 className="card-header">Регестрация</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit((d) => console.log(d))}>
                        <div className="form-group">
                            <label>Ваше имя</label>
                            <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Ваша фамилия</label>
                            <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Логин</label>
                            <input name="login" type="text" {...register('login')} className={`form-control ${errors.login ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.login?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>email</label>
                            <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Пароль</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <button disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            зарегистрироваться
                        </button>
                        <Link href="/account/login" className="btn btn-link">Вход</Link>
                    </form>
                </div>
            </div>
    );
}

export default Register;
