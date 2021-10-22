import { Fragment, useState, useEffect } from "react";
import Card from "../UI/Card";
import Title from "../UI/Title";
import aboutImg from "../../assets/about.jpg";
import classes from "./About.module.css";
import { FaSmileBeam } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";

const About = () => {
  const initialValue = [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }];
  const [number, setNumber] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if  (number[2].value < 200  ) {
        setNumber([{ value:number[0].value+1}, { value: number[1].value +1}, {value: number[2].value+1 }, { value: number[3].value +1}])
      } 
      else if (number[1].value < 420) {
        setNumber([{ value:number[0].value+1 }, { value: number[1].value +1}, {value: number[2].value }, { value: number[3].value+1 }])
      }
      else if  (number[0].value < 920) {
        setNumber([{ value:number[0].value+1 }, { value: number[1].value }, {value: number[2].value}, { value: number[3].value+1 }])
      } 
      else if (number[3].value < 1000) {
        setNumber([{ value:number[0].value }, { value: number[1].value }, {value: number[2].value }, { value: number[3].value +1}])
      }
    }, 0.100);
    return () => clearInterval(interval);
  }, [number]);

  return (
    <Fragment>
      <Title> About Us</Title>
      <Card className={classes.about}>
        <img src={aboutImg} alt="aboutUsimage"></img>
        <div>
          <h2>‘Burger’</h2>
          <p>
            We welcome you to sit back, unwind and appreciate the lovely sights
            and hints of the ocean while our best gourmet expert sets you up a
            scrumptious dinner utilizing the best and freshest
            ingredients.’Company Name’ ‘s legacy comes from The parent
            Restaurant which was built up in 1963. ‘Organization Name’ was
            worked for people in general and has advanced into a combination
            between exquisite chic and contemporary fine charge.
          </p>
          <p>
            Enjoy our dazzling dishes and make the most of your eating
            background with us!
          </p>
        </div>
      </Card>
      <Card className={classes.about}>
        <section>
          <div>
            <FaSmileBeam size="2.3rem" />
            <h3>{number[0].value}M</h3>
            <p>Happy Customer</p>
          </div>
          <div>
            <FaStore size="2.3rem" /> <h3>{number[1].value}k</h3>
            <p>international branches </p>
          </div>
          <div>
            <FaGift size="2.3rem" /> <h3>{number[2].value}M</h3>
            <p>Happy Meals</p>
          </div>
          <div>
            <FaCertificate size="2.3rem" />
            <h3>{number[3].value}</h3>
            <p>Achievements </p>
          </div>
        </section>
      </Card>
    </Fragment>
  );
};

export default About;
