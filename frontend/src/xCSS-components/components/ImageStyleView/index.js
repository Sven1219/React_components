import React from 'react';

import FileUploadPanel from './fileUpload-panel';
import FileOpacityPanel from './fileOpacity-panel';

export default function ImageStyleBox(){
    return <>
       <h1>Image Style Box</h1> 
       <FileUploadPanel />
       <FileOpacityPanel />
    </>
}