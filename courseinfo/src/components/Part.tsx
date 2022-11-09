import React from "react";
import { CoursePart } from "../types";

interface PartProps {
    part: CoursePart
}

const Part = ({ part }: PartProps) => {
  switch (part.name) {
    case "Fundamentals":
      return (
        <p>
          {part.name} {part.description} {part.exerciseCount}
        </p>
      );
    case "Using props to pass data":
      return (
        <p>
          {part.name} {part.description} {part.exerciseCount}{" "}
          {part.groupProjectCount}
        </p>
      );
    case "Deeper type usage":
      return (
        <p>
          {part.name} {part.description} {part.exerciseCount}{" "}
          {part.exerciseSubmissionLink}
        </p>
      );
    default:
      return null;
  }
};

export default Part;
