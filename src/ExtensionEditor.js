import React, { useState } from "react";
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const ExtensionEditor = () => {

    const [markdown, setMarkdown] = useState('');

    function handleDrop(data, e){
        let files = e.dataTransfer.files;
        if(files.length > 0){
            let file = files[0];
            alert('FileName : ' + file.name );
            // any action
        }
    } 

    return(
        <SimpleMDE onChange={(e) => setMarkdown(e)} events={{'drop':handleDrop}}/>
    )
}
export default ExtensionEditor;