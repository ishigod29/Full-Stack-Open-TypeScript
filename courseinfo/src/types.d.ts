interface CoursePartBase {
    name: string;
    exerciseCount: number;
    description?: string
  }
  
  export interface CoursePartOne extends CoursePartBase {
    name: "Fundamentals";
    description?: string;
  }
  
  export interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
  }
  
  export interface CoursePartThree extends CoursePartBase {
    name: "Deeper type usage";
    exerciseSubmissionLink: string;
  }
  
  export interface CoursePartFour extends CoursePartBase {
      name: "Another course part";
      comment: string;
    }
  
  export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;
  