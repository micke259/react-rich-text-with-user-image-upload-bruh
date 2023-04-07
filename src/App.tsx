import React, {useState} from 'react';
import './App.css'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
const App = () => {

    const [value,setValue] = useState('')

    const modules  = {
        toolbar:[
            [{header:[1,2,3,4,5,6,false]}],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['link', 'image'],
            ['clean']
        ]
    }

    return (
        <div>
          <ReactQuill
              theme='snow'
              value={value}
              onChange={(e)=>setValue(e)}
              modules={modules}
          />
        </div>
    );
};

export default App;