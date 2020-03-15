import React, { useEffect, useState } from "react";
import db from "./config/fbConfig";
import "./Comments.css";

export default function Comments() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    // let dontpost = [];
    let dbComments = [];
    db.collection("comments").onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(doc => {
        dbComments = [doc.doc.data(), ...dbComments];
      });
      // console.log(changes)
      // console.log(changes[0].doc.dm.Rn.Ht.root.value.Ht);
      console.log(dbComments[0].title)
      console.log(dbComments)
      
      setComments([...dbComments]);
    });
  };

  const postComment = comment => {
    let doc = {
      title: comment
    };
    db.collection("comments")
      .add(doc)
      .then(doc => {
        window.M.toast({ html: `${comment}` });
      });
  };

  const handleClick = () => {
    recognition.start();
    recognition.onresult = e => {
      const current = e.resultIndex;
      const transcript = e.results[current][0].transcript;
      const upperCase =
        transcript.charAt(0).toUpperCase() + transcript.substring(1);
      postComment(upperCase);
      //   fetchComments();
    };
  };

  return (
    <div className="comments">
      <h1>Comment Section</h1>
      <button onClick={handleClick}>Click To Record</button>
      <div className="comment-block">
        {comments
          ? comments.map(comment => (
              <div key={comment.title} className="blockquote">
                {" "}
                <p>{comment.title}</p>{" "}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
