import React from "react";
import Card from "../../UI/Card";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import img4 from "../../../assets/4.png";
import img5 from "../../../assets/1-1.png";
import img6 from "../../../assets/1-2.png";
import img7 from "../../../assets/1-3.png";
import img8 from "../../../assets/1-4.png";
import img9 from "../../../assets/2-1.png";
import img10 from "../../../assets/2-2.png";
import img11 from "../../../assets/2-3.png";
import img12 from "../../../assets/2-4.png";
import classes from "./Meals.module.css";
import MealsItem from "./MealsItem";
const Meals = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Whopper",
      size: 30,
      type: "Sandwich",
      img: img1,
    },
    {
      id: "m2",
      name: "Double Sausage, Egg, & Cheese",
      size: 40,
      type: "Sandwich",
      img: img2,
    },
    {
      id: "m3",
      name: "Ch'King Deluxe Sandwich",
      size: 35,
      type: "Sandwich",
      img: img3,
    },
    {
      id: "m4",
      name: "Egg-Normous Burrito",
      size: 38,
      type: "Sandwich",
      img: img4,
    },
    {
      id: "m5",
      name: "Family Bundle Classic",
      size: 200,
      type: "Meals",
      img: img5,
    },
    {
      id: "m6",
      name: "Family Bundle Crown",
      size: 170,
      type: "Meals",
      img: img6,
    },
    {
      id: "m7",
      name: "Meal Craver",
      size: 160,
      type: "Meals",
      img: img7,
    },
    {
      id: "m8",
      name: "Sausage,Egg & Cheese Small",
      size: 150,
      type: "Meals",
      img: img8,
    },
    {
      id: "m9",
      name: "Coca-Cola",
      size: 11,
      type: "Drinks",
      img: img9,
    },
    {
      id: "m10",
      name: "BK Café Iced Coffee",
      size: 13,
      type: "Drinks",
      img: img10,
    },
    {
      id: "m11",
      name: "Sprite Zero",
      size: 11,
      type: "Drinks",
      img: img11,
    },
    {
      id: "m12",
      name: "Mello Yello ",
      size: 15,
      type: "Drinks",
      img: img12,
    },
  ];
  const mealsItem = DUMMY_MEALS.filter((meals) => meals.type === "Meals");
  const sandwichItem = DUMMY_MEALS.filter((meals) => meals.type === "Sandwich");
  const drinkItem = DUMMY_MEALS.filter((meals) => meals.type === "Drinks");

  return (
    <React.Fragment>
      <h2>Meals Burger</h2>
      <Card className={classes.cardMeal}>
        <section>
          {mealsItem.map((meal) => (
            <MealsItem
              id={meal.id}
              img={meal.img}
              name={meal.name}
              size={meal.size}
            ></MealsItem>
          ))}
        </section>
      </Card>

      <h2>Sandwich Burger</h2>
      <Card className={classes.cardMeal}>
        <section>
          {sandwichItem.map((meal) => (
            <MealsItem
              id={meal.id}
              img={meal.img}
              name={meal.name}
              size={meal.size}
            ></MealsItem>
          ))}
        </section>
      </Card>

      <h2>Drinks Burger</h2>
      <Card className={classes.cardMeal}>
        <section>
          {drinkItem.map((meal) => (
            <MealsItem
              id={meal.id}
              img={meal.img}
              name={meal.name}
              size={meal.size}
            ></MealsItem>
          ))}
        </section>
      </Card>
    </React.Fragment>
  );
};

export default Meals;
