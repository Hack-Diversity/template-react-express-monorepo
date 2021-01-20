# --- Hack.Diversity React/Redux Template ---

## Getting Started
Some _really_ great instructions and stuff...eventually.

## Installing Node Packages
_TBD:_

Required Versions:
- Node.js: v10.14.2
- Either
--- npm: v6.4.1
--- yarn: v1.22.5

Upgrading versions:
- Node.js
```
TODO
```

- npm
```
TODO
```

- yarn
```
brew upgrade yarn
```
or
```
curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
```

## Setting up MongoDB

### Install with Homebrew (MacOSx)
If you haven't previously installed mongodb:
```
$ brew tap mongodb/brew
$ brew install mongodb-community
$ brew services start mongodb-community
```

If you have a previous version of mongodb
```
$ brew services stop mongodb
$ brew uninstall mongodb

$ brew tap mongodb/brew
$ brew install mongodb-community
$ brew services start mongodb-community
```

Create directory for storing data:
```
$ mkdir -p /data/db
```

Execute MongoDB as service:
```
$ brew services start mongodb
// this may not still be relevant?
```

Create and name database:
```
$ mongo
> use items
```
_(In this case, `items` is the name of the database that we will be creating and using for this app.)_

## Starting the Node Server
In new tab/window:
```
$ cd server/
```
then run either:
```
$ yarn server
```
_(Note: this is running the `server` command defined in `server/package.json`.)_

## References
- [How to create your first MERN (MongoDB, Express JS, React JS and Node JS) Stack](https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66)


# --- From "Create React App" README ---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deploying Your App

### Client (Frontend)
Please see [Amplify Deployment Documentation](docs/amplify/README.md)

### API (Backend)
Please see [AWS Beanstalk and DynamoDB Deployment Documentation](docs/beanstalk/README.md)


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
