import React from 'react';
import { Modal} from 'rsuite';

const DownloadNowUni = () => {
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
             <Modal open={open} onClose={handleClose} className="bg-primary">
                   <Modal.Header>
                     <Modal.Title>GetPaisa - Live</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                     <div className="flex flex-col items-center py-1 mt-10">
                       <img
                         className="w-[200px] animate-bounce mt-5"
                         src="images1/icons/launch.svg"
                         alt="Launching Soon"
                       />
                       <span className="text-primary text-2xl mt-5">Exciting Announcement</span>
                       <p className="text-center text-[15px] mt-4">
                         We are now available on Play Store & App Store. However, we shall start official disbursements from 2nd February 2025 onwards.
                         Thank you for your patience, we appreciate your business.
                         At GetPaisa, we are committed to providing the best possible services.
                       </p>
                     </div>
                     <div className="container mt-2 flex justify-center">
                      <button
                          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.get.paisa' , '_blank')}
                          className="inline-flex justify-center items-center rounded-md bg-pbutton px-9 py-[12px] text-center text-white text-base font-medium hover:shadow-2 hover:text-white hover:bg-pbutton/80 shadow-1 transition duration-300 ease-in-out"
                      >
                          Download App
                      </button>
                     </div>
                   </Modal.Body>
                 </Modal>
        </div>
    );
}

export default DownloadNowUni