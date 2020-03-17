import React, { useState } from "react";
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const toolbar = [
        {
            name: "save",
            action: function customFunction(editor) {
                alert(editor.value())
                // save action
            },
            className: "fa fa-save",
            title: "Save"
        },
        '|',
        'bold',
        'italic',
        'heading',
        '|',
        'quote',
        'unordered-list',
        'ordered-list',
        '|',
        'link',
        'image',
        '|',
        'preview',
        'side-by-side',
        'fullscreen',
        '|',
        'guide',
    ]

const ToolbarCustomEditor = () => {

    const [markdown, setMarkdown] = useState('');

    return(
        <SimpleMDE onChange={(e) => setMarkdown(e)} options={{toolbar:toolbar}}/>
    )
}
export default ToolbarCustomEditor;