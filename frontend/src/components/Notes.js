import React from "react";
import Note from "./Note/Note";

export default function Notes() {
  const notes = [
    {
      id: "2323",
      title: "Wash the dog",
      body: "Remember to wash the dog!",
    },
    {
      id: "2323",
      title: "Wash the dog",
      body: "Remember to wash the dog!",
    },
    {
      id: "2323",
      title: "Wash the dog",
      body: "Remember to wash the dog!",
    },
  ];
  return (
    <div className="notes">
      <div className="title">
        <p> My notes:</p>
      </div>
      {notes.map((note) => {
        return <Note title={note.title} body={note.body} id={note.id} />;
      })}
    </div>
  );
}
