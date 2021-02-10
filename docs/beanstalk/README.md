# Deploying The Client Using AWS Elastic Beanstalk
Elastic Beanstalk is an Amazon service which gives Developers the ability to quickly deploy an application to the cloud without having worry about complex configuration and the management of cloud resources. For the API Server (Backend) and database, this will involve using the EB CLI tool to trigger an automated deployment to create a single API server, and a Mongo database server, along with the necessary resources to get your environment up and running.

You can find more information at the [Elastic Beanstalk Product Page](https://aws.amazon.com/elasticbeanstalk/).

## Getting Started
1) Set up your AWS account. You should have received that information from a member of the Hack team.

2) Set up your GitHub account. If you're reading this, there is a good chance that you have already done that. 

3) Fork this repository under your team or personal account.

## Preparing For the Deployment
A deployment is pushing a version of your code to an environment (developmernt, production, etc...). This version of your application is usually available to your end users, in this case it will be publicly available on the internet.  By following the steps below, your code will be packaged and automatically deployed to AWS Elastic Beanstalk. There will be some manual steps for the initial deployment, but all subsequent deployments will only update your code..

Please follow the instructions in the linked sections below to deploy your API to AWS:

1) [Setup](./01_Getting_Started/README.md)

2) [Creating Your Elastic Beanstalk Environment](./02_Creating_EB_Environment/README.md)

3) [Setting Up Mongo](./03_Setting_Up_Mongo/README.md)

4) [Connecting Backend to Mongo](./04_Connecting_Backend_To_Mongo/README.md)

5) [Wrapping Up](./05_Wrapping_Up/README.md)


### Conclusion
Now that your app has been deployed to AWS Elastic Beanstalk, you will be able to retrieve, edit, and create data through your API over the internet. Please explore the Elastic Beanstalk dashboard for other neat features. Also, do remember to open an issue on this repository if you find any mistakes with these instructions.
