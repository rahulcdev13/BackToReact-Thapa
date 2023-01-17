import React, { useState } from "react";
import "./KeepNote.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";


const Keep = () => {


    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        // alert('hello'); 
        setAddItem((predata) => {
            return [...predata, note];
        });
        console.log(note);
    }

    const onDelete = (id) => {
        setAddItem((oldItem) =>
            oldItem.filter((currdata, index) => {
                return index !== id;
            })
            
        )
    }

    return (
        <>
            <Header />
            <CreateNote
                passNote={addNote} />

            {addItem.map((currVal, index) => {
                return <Note
                    key={index}
                    id={index}
                    title={currVal.title}
                    content={currVal.content}
                    deleteItem={onDelete}

                />
            })}

            <Footer />
        </>
    )
}
export default Keep;