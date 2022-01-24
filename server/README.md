# THE SERVER

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
https://bytearcher.com/articles/ways-to-get-the-latest-node.js-version-on-a-mac/
_(We would suggest using nvm, as it's well-supported and makes managing different node versions easy.)_

- npm
https://docs.npmjs.com/try-the-latest-stable-version-of-npm
```
npm install -g npm@latest
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

### Install & Run

#### Platform Agnostic
You can follow the instructions on the MongoDB website here: https://docs.mongodb.com/manual/administration/install-community/

#### Using Homebrew (Mac OSX only!)
If you haven't previously installed mongodb:
```
$ brew tap mongodb/brew
$ brew install mongodb-community
```

If you have a previous version of mongodb
```
$ brew services stop mongodb
$ brew uninstall mongodb

$ brew tap mongodb/brew
$ brew install mongodb-community
```

### After getting the database set up

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
