"use client"
import React from 'react'
import { useForm } from "react-hook-form";


const Newsletter = () => {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const { register, handleSubmit, reset, submittedData, formState, formState: { errors } } = useForm();

    const onSubmit = async data => { 
        setLoading(true);
        const response = await fetch('/api/newsletter', {
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
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="w-full bg-white dark:bg-dark rounded-xl border border-transparent py-[14px] px-6 font-normal text-sm text-body-color outline-none focus-visible:shadow-none focus:border-primary"
            />
            <button
                className="absolute right-[6px] top-1/2 -translate-y-1/2 rounded-lg w-[42px] h-[42px] flex items-center justify-center bg-primary text-white"
                name="submit-btn"
                aria-label="submit-btn"
            >
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.83333 19.25L21.0833 11L1.83333 2.75V9.16667L15.5833 11L1.83333 12.8333V19.25Z"
                        fill="white"
                    />
                </svg>
            </button>
            <span className={`${success?'block':'hidden'} mt-3 text-start text-primary`}>Newsletter Subscribed!</span>
        </form>
    )
}

export default Newsletter