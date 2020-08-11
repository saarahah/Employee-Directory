# Unit 19 React Homework: Employee Directory

## Overview

For this assignment, you'll create a employee directory with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

## User Story

* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users, when the user loads the page, a table of employees should render. 

  * Use the Random User API ( https://randomuser.me ) to generate a list of random employees.
  
  * Create a table to display the random employees and display at least the following categories (Columns):
      - Image
      - First Name
      - Last Name
      - Email
      - Age

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.

### Example Image

![Employee Directory demo](./image/employee_800.png)


## Check list
```
✓ The application have to be deployed to Git Hub Pages (instructions below).

✓ Application utilizes React.js for its front-end.

✓ Application allows user to view a list of random employees.

✓ Application should sort the table by at least one category.

✓ Application filters users by at least one property.

✓ Repository contains quality README with description, screenshot, link to deployed application.
```


## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

Follow these guidelines for committing:

* Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

* Don't commit half done work, for the sake of your collaborators (and your future self!)

* Test your application before you commit to ensure functionality at every step in the development process

We would like you to have well over 200 commits by graduation, so commit early and often!


## Submission
```
You are required to submit the following for review:

1. The URL of the deployed application (Git Hub Pages).

2. The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

Total of two (2) links.
```


## GitHub Pages Deployment Instructions

#### Step 1: Add homepage to package.json

* At the top level of the  package.json file, add a `homepage` property. Define its value to be the string `http://{username}.github.io/{repo-name}`, where `{username}` is your GitHub username, and `{repo-name}` is the name of the GitHub repository you created for this project. For this example, GitHub username is: `gitname` and the name of the GitHub repository is: `react-gh-pages`:
    
    ```js
    //...
    "homepage": "http://gitname.github.io/react-gh-pages"

    ```

#### Step 2: Add "predeploy" and "deploy" to scripts in package.json

  * In the existing `scripts` property, add a `predeploy` property and a `deploy` property, each having the values shown below:

    ```js
    "scripts": {
      //...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```

#### Step 3: Install gh-pages

  ```
    $ npm install --save gh-pages
  ```

#### Step 4: Deploy the site by running npm run deploy
  ```
    $ npm run deploy
  ```

#### Step 5: Ensure your project’s settings use gh-pages

![Employee Directory demo](./image/git_deploy.png)


If you need more information on deploying your React app, click this link: https://facebook.github.io/create-react-app/docs/deployment
