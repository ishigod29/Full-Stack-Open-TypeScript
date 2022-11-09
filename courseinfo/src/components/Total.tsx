import React from "react";

interface Props {
    courses: Array<{
        name: string,
        exerciseCount: number
    }>
}

const Total = ({courses}: Props) => {
  return (
    <p>
      Number of exercises{" "}
      {courses.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  );
};

export default Total;
