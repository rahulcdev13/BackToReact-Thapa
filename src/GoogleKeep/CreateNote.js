import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {


    const [expand, setexpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    
    const inputEvent = (event) => {
        console.log(event);
        // const value = event.target.value;
        // const name = event.target.name;
        const { value, name } = event.target; //object destructuring..!

        setNote((predata) => {
            return {
                ...predata,
                [name]: value,
            }
        });
        console.log(note);

    }
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    }

    const Expandit = () => {
        setexpand(true)
    }
    const expandagain = () => {
        setexpand(false)
    }



    return (
        <>
            <div className="main_note" onDoubleClick={expandagain}>
                <form>
                    {expand ?
                        <input
                            type="text"
                            placeholder="Title"
                            autoComplete="off"
                            onChange={inputEvent}
                            value={note.title}
                            className="inpurs"
                            name="title" /> : null}

                    <textarea
                        rows=""
                        column=""
                        className="textareas"
                        placeholder="Write a notes..."
                        value={note.content}
                        onChange={inputEvent}
                        name="content"
                        onClick={Expandit}
                    />
                    {
                        expand ?
                            <Button onClick={addEvent}>
                                <AddIcon className="plus_sign" />
                            </Button> : null}
                </form>
            </div>
        </>
    )
}
export default CreateNote;