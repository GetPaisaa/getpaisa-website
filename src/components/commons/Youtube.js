'use client'
import React from 'react'
import { Modal,Button } from 'rsuite';
const Youtube = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="modal-container">
            <button
                onClick={handleOpen}
                className="flex items-center font-normal text-base text-black dark:text-white hover:text-primary dark:hover:text-primary group transition-all"
            >
                <span
                    className="w-[60px] h-[60px] rounded-full inline-flex items-center justify-center bg-white hover:bg-primary cursor-pointer text-primary mr-5 transition-all group-hover:bg-opacity-100 group-hover:text-white"
                >
                    <svg
                        width="15"
                        height="18"
                        viewBox="0 0 15 18"
                        className="fill-current"
                    >
                        <path
                            d="M15 9L-8.15666e-07 17.6603L-5.85622e-08 0.339746L15 9Z"
                        />
                    </svg>
                </span>
                <span className='text-[#3C0050] hidden md:block'>Watch Intro</span>
            </button>

            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>GetPaisa - Empowering your financial needs</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="315"
                        src="https://www.youtube.com/embed/dH59z5IOUsY">
                    </iframe>
                </Modal.Body>
                 
            </Modal>
        </div>
    );
}

export default Youtube