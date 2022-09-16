import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function FileUploader(formData) {


    const [file, setFile] = useState()

    // On file select (from the pop up)
    const onFileChange = event => {

        // Update the state
        setFile({ selectedFile: event.target.files[0] });
        propTypes.setFile(file)
    };

    // On file upload (click the upload button)
    const onFileUpload = (file) => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(this.state.selectedFile);

    };





    return (
        <div>

            <div>
                <input type="file" onChange={onFileChange} id="fileId" name="fileId" accept="image/png, image/jpeg, application/pdf" required />
                <button onClick={onFileUpload}>
                    Upload
                </button>
            </div>
            {this.fileData()}
        </div>
    );

}

export default FileUploader;
