import React from 'react'
import { Modal} from 'rsuite';
import Launch from "@/components/Common/Launch"

const DownloadNow = ({ pathUrl='/', sticky='false' }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="modal-container">
            <div className="hidden sm:block">
                {pathUrl !== "/" ? (
                    <>
                        <button
                            onClick={handleOpen}
                            className="rounded-lg text-white hover:text-white bg-primary px-6 py-3 text-base font-medium duration-300 ease-in-out dark:bg-white/10 dark:hover:bg-white/20"
                        >
                            Download App
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={handleOpen}
                            className={`rounded-lg hover:text-white px-6 py-3 text-base font-medium text-white duration-300 ease-in-out ${sticky
                                ? "bg-primary dark:bg-white/10 dark:hover:bg-white/20"
                                : "bg-white/10 hover:bg-white/20"
                                }`}
                        >
                            Download App
                        </button>
                    </>
                )}
            </div>
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

export default DownloadNow