import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {console.log(data)
      signInWithEmailAndPassword(data?.email, data?.password)};
    if(gUser || user){
      navigate(from, { replace: true });

    }
    let errorMessage;
    if(error || gError){
      errorMessage= <p className='text-red-600'>{error?.message}</p>
    }
    if(loading){
      return <p>Loading...</p>;
    }
    return (
        <div className='flex justify-center items-center h-screen'>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
        <h2 className="text-center text-2xl">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
            
          </label>
          <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                       value: true,
                                       message:'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
          <label className="label">
          {errors.email?.type === 'required' && <span className="label-text-alttext-red-500">{errors.email.message}</span>}
          {errors.email?.type === 'pattern' && <span className="label-text-alttext-red-500">{errors.email.message}</span>}
          
            
          </label>
          </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
            
          </label>
          <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                       value: true,
                                       message:'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'password min length 6 caractor'
                                    }
                                })}
                            />
          <label className="label">
          {errors.password?.type === 'required' && <span className="label-text-alttext-red-500">{errors.password.message}</span>}
          {errors.password?.type === 'minLength' && <span className="label-text-alttext-red-500">{errors.password.message}</span>}
          
            
          </label>
          </div>
        
          {errorMessage}
          <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
    </form>
          <p><small>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create Account</Link></small></p>
        <div className="divider">OR</div>
        <button
         onClick={() => signInWithGoogle()}
         className="btn btn-outline btn-secondary">
             Countinue with Google</button>
    
       
  </div>    
</div>  
        </div>
    );
};

export default Login;