import React, { useState } from 'react';
import { propTypes } from 'prop-types';

function FileUploader(props) {

    // On file select (from the pop up)
    const OnFileChange = (e) => {

        const input = e.target;

        props.file(input.files[0]);
    };

    return (
        <div>

            <div>
                <input type="file" onChange={OnFileChange} id="fileId" name="fileId" accept="image/png, image/jpeg, application/pdf" required />
            </div>
        </div>
    );

}

export default FileUploader;
