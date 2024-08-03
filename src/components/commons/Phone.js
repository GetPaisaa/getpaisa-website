"use client"
import React from 'react'
import { useForm } from "react-hook-form";


const Phone = () => {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const { register, handleSubmit, reset, submittedData, formState, formState: { errors } } = useForm();

    const onSubmit = async data => { 
        setLoading(true);
        const response = await fetch('/api/loan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        const returndata = await response.json();
    };

    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
          setSuccess(true);
          setLoading(false);
          reset();
          setTimeout(()=>{
            setSuccess(false);
          },[5000]);
        }
      }, [formState, submittedData, reset]);

    return (
        <form className="relative" onSubmit={handleSubmit(onSubmit)}>
            <input
                type="number"
                {...register("phone", { required: true })}
                placeholder="Enter Phone Number"
                className="w-full bg-white dark:bg-dark rounded-xl border border-transparent py-[20px] px-6 font-normal text-sm text-body-color outline-none focus-visible:shadow-none focus:border-primary"
            />
            <button
                className="absolute right-[6px] top-[6px] rounded-lg px-4 h-[52px] flex items-center justify-center bg-primary text-white"
                name="submit-btn" 
            >
                <div>{!loading?<span>Get Loan</span>:<span>Loading...</span>}</div>
            </button>
            <span className={`${success?'block':'hidden'} mt-3 text-start text-primary`}>Loan applied successfully</span>
            {/* <span className={`mt-4 text-start text-primary`}>Loan applied successfully</span> */}
        </form>
    )
}

export default Phone