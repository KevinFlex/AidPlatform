import React from 'react'


function ApplyModal(props) {
    if (!props.show) {
        return null
    }



    return (
        <>
            <div className="modal">
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4>{props.title}</h4>
                    </div>
                    <div className='modal-body'>
                        {props.children}
                    </div>
                    <div className='modal-footer'>
                        <button onClick={props.onApply} className="button">Apply</button>
                        <button onClick={props.onClose} className="button">Close</button>
                    </div>
                </div>
            </div>
        </>

    )
}



export default ApplyModal;