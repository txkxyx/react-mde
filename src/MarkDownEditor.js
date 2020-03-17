import React, { useState } from "react";
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import marked from "marked";
import highlight from 'highlightjs';
import 'highlightjs/styles/docco.css';

// delete file name
marked.setOptions({
    highlight: function (code, lang) {
        return highlight.highlightAuto(code, [lang.split(':')[0]]).value;
    }
});

const MarkDownEditor = () => {

    const [markdown, setMarkdown] = useState('');

    return(
        <div>
            <SimpleMDE onChange={(e) => setMarkdown(e)}/>
            <div id="body" >
                <span dangerouslySetInnerHTML={{ __html: marked(markdown)}}/>
            </div>
        </div>
        
    )
}
export default MarkDownEditor;