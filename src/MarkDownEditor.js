import React, { Component } from "react";
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import marked from "marked";
import highlight from 'highlightjs';
import 'highlightjs/styles/docco.css'

const markrender = new marked.Renderer();
marked.setOptions({
    highlight: function (code, lang) {
        return highlight.highlightAuto(code, [lang.split(':')[0]]).value;
    }
});

class MarkDownEditor extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            data: e
        })
    }

    render(){
        return(
            <form>
            <SimpleMDE id='data' onChange={this.handleChange}/>
            <div id="body" >
                <span dangerouslySetInnerHTML={{ __html: marked(this.state.data, { renderer: markrender })}}/>
            </div>
            </form>
        )
    }
}

export default MarkDownEditor