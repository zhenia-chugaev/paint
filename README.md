### CI/CD status
[![linter-check](https://github.com/zhenia-chugaev/paint/actions/workflows/linter-check.yml/badge.svg?branch=dev)](https://github.com/zhenia-chugaev/paint/actions/workflows/linter-check.yml)
[![deploy](https://github.com/zhenia-chugaev/paint/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/zhenia-chugaev/paint/actions/workflows/deploy.yml)

# Paintter

## How to run the app
Live demo is available at [https://paintter.web.app/](https://paintter.web.app/).

## Application stack
Besides **Firebase** platform and **React** library (create-react-app with **Typescript** was used as a starting template) the following tools were applied for developing the application:
- **Redux Toolkit** for storing and managing the application data;
- **React Router** for client-side routing;
- **Material UI** components and icons formed the basis of application interface;
- **React Hook Form** library was utilized to handle form data;
- **Lodash.js** utility functions - to facilitate the developing process;
- **Prettier** in conjunction with **ESLint** was used as a primary formatting tool;

## Database snapshot
Entities in the database are structured as follows:
```
{
  drawings: {
    [drawingId]: {
      id: string,
      name: string,
      dataUrl: string,
      authorId: string,
      timestamp: number,
    }
      ... // other drawings
  }
  users: {
    [userId]: {
      id: string,
      firstName: string,
      lastName: string,
      drawings: {
        [drawingId]: boolean,
      }
    }
      ... // other users
  }
}
```
