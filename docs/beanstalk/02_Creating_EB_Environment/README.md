# Creating Your Elastic Beanstalk Environment

Now that you have the EB CLI  installed, you will be able to push your Backend (Server) code to Elastic Beanstalk in your AWS account. 

Note that all of the following will take place withing the "server" directory.

## Initializing Your Elastic Beanstalk Project

Initializing your Elastic Beanstalk project will create a `.elasticbeanstalk` folder which will contain a configuration file with information about your EB deployment.


<br>
1) Run the "eb init" command which will prompt you for a few questions. You make your selection by typing the matching number or character and pressing "Enter".  
 Make sure to select the "US East (N. Virginia)" option which should be #1.

![Running "eb init" command and selecting Option 1 <US East N. Virginia>)](./images/EB_CLI_INIT_1_Select_Region.png)


<br>
2) You will now be prompted to either create an application or select an existing on. Enter the number for "Create a new Application"

![Selecting "Create a new Application" option](./images/EB_CLI_INIT_2_Create_New_App.png)


<br>
3) Next you will be prompted to enter the name of your project. In this example "CSCL" was used. Feel free to use a different name.

![Entering the name for our EB application](./images/EB_CLI_INIT_3_Set_Name.png)


<br>
4) Now you will be asked if you are "using Node.js", enter 'y` for "yes". Next, choose the "Node.js 12" option which should be #1.

![Enter "y" to confirm that you are using "Node.js" and select "Node.js 12"](./images/EB_CLI_INIT_4_Configure_Platform.png)


<br>
5)  You will be prompted to create an "SSH key pair". Enter 'y' to accept. For the name enter "cscl", it must be that name as it will be referenced during the deployment.
You can ignore the warning about 

![Enter 'y' to create an SSH key pair and enter the name "cscl"](./images/EB_CLI_INIT_5_SSH_Key_Setup.png)


<br>
6) You will be prompted to enter a passphrase. Press `Enter` two times to enter a <Blank> passphrase if you don't wish to use one. Setting a passphrase will require you to enter it whenever you attempt to connect to your server using SSH.


![Entering SSH passphrase. Setting it to <Blank> by pressing Enter twice.](./images/EB_CLI_INIT_6_SSH_Key_Passphrase.png)


<br>
7) Congrats! Your EB environment has been initialized locally. You will notice a new folder called `elasticbeanstalk` which will contain your configuration file.

![SSH key generated output showing that the initialization is complete](./images/EB_CLI_INIT_7_Finish.png)


## Creating your EB environment in AWS

Now that your configuration has been initialized. The EB CLI will use your config in `.elasticbeanstalk` and the deployment configs in `.ebextensions` to create your environment.

<br>
Making sure that you are still in the `server` directory. Run the `eb crreate` command followed by the name of the environment you are creating. You will be able to create multiple environments and also delete it later. So don't worry if you need to change the name.

![Running the "eb create production" command to create our EB environment](./images/EB_CLI_Create_1_CSCL.png)

Once you kick off the deployment, EB CLI will display the log events on your console. This can take a few minutes, so feel free to check back later.

Once finished you will be presented with the output.

![Output of entire EB deployment and successful message](./images/EB_CLI_Create_2_CSCL_Finished.png)
<br>
<br>
This deployment create the following resources:

- API Gateway: Used to proxy (pass along) your HTTP requests to your Beanstalk server. This allows you to connect using HTTPS which will allow your Frontend to call your Backend server without generating any security errors.

- EC2 Instance running MongoDB: This server is using a Bitnami Image containing MongoDB. This is where your database will live.

- Elastic Beanstalk deployment: This represents a number of resources which include an EC2 instance where your code will be running.


## Updating the Code

Whenever you are ready to update your code on AWS. Run the `eb deploy` command. You can provide an environment name if you have more than one using `eb deploy <environment name>`.

---

Next:  [Setting Up Mongo](../03_Setting_Up_Mongo/README.md)
