# Wrapping UP
Congrats for making it this far, you're almost all set up and ready to fully deploy your app. You will now be retrieving your backend's Gateway URL which will be used in your Frontend environment to fetch, create and update data using your API.

## Getting Your API URL
<br>
1) In the AWS console, search for "API Gateway" and click "API Gateway".

![AWS console search for "API Gateway"](./images/1_API_Gateway_Menu_Selection.png)


<br>
2) You should only see a single API called "CSCL-HTTPS-Proxy". Click the link to view the configuration.

![API Gateway dashboard listing current APIs](./images/2_Select_CSCL_HTTPS_Proxy.png)


<br>
3) On this screen, you will see your API Gateway's URL. This is the URL that will be used to access your API in Elastic Beanstalk.

![CSCL-HTTPS-Proxy API Gateway details page listing the URL](./images/3_Get_API_Gateway_URL.png)

## Testing
Now that you have the URL you can test it by copying it to your browser and pressing enter. You should see the response from the root (`/`) route of your API. 
Also, you can test using Curl or Postman


Curl) 

![Terminal with curl command to API Gateway. Printing "Hello World!"](./images/Testing_1_Curl.png)


Postman)
![Postman window showing successful call to API Gateway. Pringin "Hello World!"](./images/Testing_2_Postman.png)


## What's Next

To delete all resources created by your deployment, run the `eb terminate <environment>` command.

![eb terminate command on terminal](./images/eb_terminate_output.png)

---

Next up is to create your frontend using AWS Amplify. Make sure to note the API Gateway URL because it will be used in the Frontend deployment.

[Amplify Deployment Documentation](../../amplify/README.md)

