import Modal from 'react-bootstrap/Modal';
import './ProjectModal.css'
import { useEffect } from 'react';

function ProjectModal({onHide, body}) {

  useEffect(()=>{
    const chekKey = e =>{
      if(e.keyCode === 27){
        onHide()
      }
    }
    window.addEventListener('keydown',chekKey)
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', chekKey);
      document.body.style.overflow = 'auto';
    }
  }, [onHide]);

  return (
    <Modal show={true} onHide={onHide} centered className='details-modal'>
        <Modal.Body className='detail-modal__body'>
          <div className="detail-modal__left">
            <img src={body[0]} alt={body[1]} className='img-fluid' />
          </div>
          <div className="detail-modal__left">
            <p className='details-modal__subtitle'>{body[1]}</p>
            <p className='details-modal__text'>{body[2]}</p>
          </div>
        </Modal.Body>
    </Modal>
  );
}

export default ProjectModal;

