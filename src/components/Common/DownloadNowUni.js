'use client'
import React from 'react'
import { Modal} from 'rsuite';
import Launch from "@/components/Common/Launch"
const DownloadNowUni = ({ pathUrl='/', sticky='false' }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="modal-container">
            <button
                onClick={handleOpen}
                 className="inline-flex items-center justify-center rounded-md bg-pbutton px-7 py-[14px] text-center text-white text-base font-medium hover:shadow-2 hover:text-white hover:bg-pbutton/80 shadow-1 transition duration-300 ease-in-out"
            >
                Download App
            </button>


          


            <Modal open={open} onClose={handleClose} className='bg-primary'>
                <Modal.Header>
                    <Modal.Title>GetPaisa - Launching Soon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='flex flex-col items-center py-1 mt-10'>
                        <img className='w-[200px] animate-bounce mt-5' src='images1/icons/launch.svg' />
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

export default DownloadNowUni