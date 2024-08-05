'use client'
import React from 'react'
import { Modal, Button } from 'rsuite';
import Launch from './Launch';
const DownloadNowOutline = ({color}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="modal-container">
            <button
                onClick={handleOpen}
                href="#about"
                className={`bg-white text-primary border-2 font-medium text-primary hover:bg-primary hover:text-white border-primary text-white shadow-md rounded-xl py-5 px-6 md:px-10 transition-all bg-white border-primary mr-9`}
            >
                Download App
            </button>

            <Modal open={open} onClose={handleClose} className='bg-primary'>
                <Modal.Header>
                    <Modal.Title>GetPaisa - Launching Soon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='flex flex-col items-center py-1 mt-10'>
                        <img className='w-[200px] animate-bounce mt-5' src='images/icons/launch.svg'/>
                        <span className='text-primary text-2xl mt-5 '>Exciting Announcement</span>
                        <span className='text-center text-[15px] mt-4'> We are thrilled to announce that our new app is launching soon!</span>
                    </div>

                    <div className='container mt-2'>
                    <Launch/>
                    </div>

                </Modal.Body>

            </Modal>
        </div>
    );
}

export default DownloadNowOutline