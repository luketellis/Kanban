export enum States {
  "To Do" = "1",
  "In Progress" = "2",
  "Code Review" = "3",
  "Complete" = "4",
}

export const states = [
  { number: 1, status: "Backlog" },
  { number: 2, status: "In Progress" },
  { number: 3, status: "Code Review" },
  { number: 4, status: "Complete" },
];

export const testData = [
  {
    id: 1,
    status: "Backlog",
    title: "Learn Storybook",
    description: "Helps making components",
  },
  {
    id: 2,
    status: "In Progress",
    title: "Make Typescript App",
    description: "Kanban Board",
  },
  {
    id: 3,
    status: "Code Review",
    title: "Postman Endpoints",
    description: "GET only",
  },
  {
    id: 4,
    status: "Complete",
    title: "Create Base App",
    description: "npm install",
  },
  {
    id: 5,
    status: "Backlog",
    title: "Automated Testing",
    description: "Appium",
  },
];
