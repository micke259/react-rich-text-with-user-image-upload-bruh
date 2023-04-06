import React, {useState} from 'react';
import './App.css';

import {Editor} from "react-draft-wysiwyg";
import {convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const App = () => {


    const [content, setContent] = useState<string>('')
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const handleImageUpload = (file: File) => {
        return new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                resolve(reader.result as string);
            };
        });
    };
    const uploadCallback = async (file: File) => {
        try {
            const imageUrl = await handleImageUpload(file);
            return { data: { link: imageUrl } };
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            editorState={editorState}
            placeholder="Пишу хуйню на стэке PIDOR"
            onEditorStateChange={newState=>{
                setEditorState(newState)
                setContent(draftToHtml(convertToRaw(newState.getCurrentContent())))
            }}
            toolbar={{
                options:['inline','blockType','fontSize','list', 'textAlign', 'history', 'embedded', 'emoji', 'image'],
                inline:{isDropdown:true},
                list:{isDropdown:true},
                textAlign:{isDropdown:true},
                link:{isDropdown:true},
                history:{isDropdown:true},
                image: {
                    uploadCallback,
                    previewImage: true,
                    alt: { present: true, mandatory: false },
                },
            }}
        />
    );
};

export default App;