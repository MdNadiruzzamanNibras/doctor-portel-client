import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, UpError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const onSubmit =async data => {console.log(data)
       await createUserWithEmailAndPassword(data?.email, data?.password)
        await updateProfile({ displayName : data?.name });
        
    };
      if(gUser || user){
        navigate(from, { replace: true });
      }
      let errorMessage;
      if(error || gError || UpError){
        errorMessage= <p className='text-red-600'>{error?.message}|| {UpError?.message}</p>
      }
      if(loading || updating){
        return <p>Loading...</p>;
      }
    return (
        <div className='flex justify-center items-center h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
      <h2 className="text-center text-2xl">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Name</span>
          
        </label>
        <input
                              type="name"
                              placeholder="Your Name"
                              className="input input-bordered w-full max-w-xs"
                              {...register("name", {
                                  required: {
                                     value: true,
                                     message:'Name is required'
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
        <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
  </form>
  <p><small>Already Account to Doctors Portal? <Link className='text-secondary' to='/login'>Please Login</Link></small></p>
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

export default Signup;