import React, { useState } from 'react';
import { Modal } from 'rsuite';

const DownloadNow = ({ pathUrl = '/', sticky = false }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="modal-container">
      <div className="hidden sm:block">
        <button
          onClick={handleOpen}
          className={`rounded-lg px-6 py-3 text-base font-medium duration-300 ease-in-out
            ${pathUrl !== '/'
              ? 'bg-primary text-white hover:text-white dark:bg-white/10 dark:hover:bg-white/20'
              : sticky
              ? 'bg-primary text-white hover:text-white dark:bg-white/10 dark:hover:bg-white/20'
              : 'bg-white/10 text-white hover:bg-white/20'
            }`}
        >
          Download App
        </button>
      </div>
      <Modal open={open} onClose={handleClose} className="bg-primary">
        <Modal.Header>
          <Modal.Title>GetPaisa - Disbursement Soon </Modal.Title>
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
                 onClick={() => window.open('https://play.google.com/store/apps/details?id=com.get.paisa')}
                 className="inline-flex justify-center items-center rounded-md bg-pbutton px-9 py-[12px] text-center text-white text-base font-medium hover:shadow-2 hover:text-white hover:bg-pbutton/80 shadow-1 transition duration-300 ease-in-out"
            >
                Download App
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DownloadNow;
