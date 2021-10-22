import React, { useRef, useState } from "react";
import classes from "./Contact.module.css";
import Title from "../UI/Title";
import Card from "../UI/Card";
const Contact = (props) => {
  const [error, setError] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const FirstNameIpnut = useRef();
  const LastNameIpnut = useRef();
  const MessageIpnut = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    let eneterFname = FirstNameIpnut.current.value;
    let eneterLname = LastNameIpnut.current.value;
    let eneterMessage = MessageIpnut.current.value;
    if (eneterFname.trim().length === 0) {
      setError("First Name input must be fill (no null)");
      setFormIsValid(false);
    } else if (eneterLname.trim().length === 0) {
      setError("Last Name input must be fill (no null)");
      setFormIsValid(false);
    } else if (eneterMessage.trim().length === 0) {
      setError("You must write Message .");
      setFormIsValid(false);
    } else setError("thanks,we will contact with you soon");

    if (
      eneterFname.trim().length > 0 &&
      eneterLname.trim().length > 0 &&
      eneterMessage.trim().length > 0
    ) {
      setFormIsValid(true);
    }
  };
  return (
    <div>
      <Title> contact US</Title>
      <Card className={classes.cont}>
        <form className={classes.form}>
          <label htmlFor="fname">First Name</label>
          <input
            ref={FirstNameIpnut}
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <label htmlFor="lname">Last Name</label>
          <input
            ref={LastNameIpnut}
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="amman">Amman</option>
            <option value="irbed">Irbed</option>
            <option value="zarqaa">Zarqaa</option>
            <option value="Maan">Ma`an</option>
            <option value="Al-salt">Al-salt</option>
          </select>

          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            ref={MessageIpnut}
          ></textarea>

          <button onClick={submitHandler}> Submit</button>
        </form>
        <div className={formIsValid ? classes.correct : classes.error}>
          {error}
        </div>
      </Card>
    </div>
  );
};

export default Contact;
