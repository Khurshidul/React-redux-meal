import React from "react";
import Container from "../ui/Container";
import "./Meals.css";
import MealList from "./MealList.js";
export default function Meals({ itemList }) {
  return (
    <div className="meal-list">
      <Container>
        <div className="row">
          {itemList.map((item) => (
            <MealList key={item.id} meal={item} />
          ))}
        </div>
      </Container>
    </div>
  );
}
