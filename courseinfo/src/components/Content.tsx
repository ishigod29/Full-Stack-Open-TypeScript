import React from "react";
import { CoursePart } from "../types";
import Part from "./Part";

interface Props {
    courses: CoursePart[]
}   

const Content = ({courses}: Props) => {
  return (
    <div>
      {courses.map(course => (
        <Part key={course.name} part={course}/>
      ))}
    </div>
  );
};

export default Content;
