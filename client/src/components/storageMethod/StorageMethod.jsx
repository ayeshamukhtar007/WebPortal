import React,{useState} from "react";
import "./storageMethod.css";
import 'react-calendar/dist/Calendar.css';
import {MdOutlineAddModerator} from "react-icons/md";
import Calendar from 'react-calendar';
import Modal from 'react-modal';
export default function StorageMethod() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      inset:'50% auto auto 90%',
      padding:'0px',
     border:'none',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  const [date, onChange] = useState(new Date());

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal=() =>{
    setIsOpen(true);
  }
  const closeModal=()=>{
    onChange(date)
    setIsOpen(false);
  }
  return (
    <div className="modeSetting">
      <div className="modeSettingWrapper">
      
      <p className="modeSettingTitle">Storage Settings</p>
      <div className="ModeSettingCard">
        <div className="ModeSettingCardLeft">
        <MdOutlineAddModerator className="ModeSettingCardIcon"/>
        <span>Active Mode</span>
        </div>
        <div className="ModeSettingCardRight">
          <span className="ModeSettingCardRightSpan" onClick={openModal}>Start Time</span>
            <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Calendar             
                onChange={closeModal}
              value={date}
              />
          </Modal>    
           
          <span className="ModeSettingCardLeftSpan" onClick={openModal}>End Time</span>
        </div>

      </div>
      <div className="ModeSettingCard">
        <div className="ModeSettingCardLeft">
        <MdOutlineAddModerator className="ModeSettingCardIcon"/>
        <span>Silent Mode</span>
        </div>
        <div className="ModeSettingCardRight">
          <span className="ModeSettingCardRightSpan" onClick={openModal}>Start Time</span>
            <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Calendar             
                onChange={closeModal}
              value={date}
              className="SilentMargin"
              />
          </Modal>    
           
          <span className="ModeSettingCardLeftSpan" onClick={openModal}>End Time</span>
        </div>

      </div>
      {/* <input type="file" accept="video/*" capture /> */}
        </div>  
    </div>
  )
}
