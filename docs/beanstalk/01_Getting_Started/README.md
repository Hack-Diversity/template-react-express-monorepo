# Getting Started

Before you can create resources in AWS you will first need to configure your local environment. 

Note that the EB CLI requires Python to be installed on your system.

### AWS Authentication Keys

1) Login into your AWS Educate account and select "AWS Account" on the top right


2) Select "AWS Educate Starter Account" which should open a new tab

![AWS Educate account details selection](./images/1_Account_Details.png)


3) Select the "Account Details" button and you will be presented with 

![AWS Educate account details window](./images/2_AWS_API_Creds.png)


4) Using your favorite editor copy the entire contents of the "AWS CLI" section to the `~/.aws/credentials` file on Mac/Linux and `%UserProfile%\.aws\credentials` on Windows.
More information can be found in the [CLI Configuration Docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

<br>
<br>
Now that your API credentials are saved, you will be able to authenticate against your AWS account using CLI tools as well as programs that use the AWS SDK. Note that AWS Educate tokens expire after 3 hours, so please repeat these steps if you receive an expired session error.
<br>
<br>

### Install and Configure the EB CLI
EB ClI - See installation [instructions](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install-advanced.html) for your OS

Once installed check that the CLI is installed by running:

```
eb --version
EB CLI 3.19.3 (Python 3.8.5)
```
<br>
<br>

### Creating an SSH KeyPair

If you ever need to connect to your server for administration purposes, you will need an SSH key to do so. We will go over how to connect in the [Wrapping Up Section](../05_Wrapping_Up/README.md).

1) In the AWS console, search for "Key Pairs"

![Searching for "Key Pairs"](./images/KeyPair/1_KeyPair_menu_selection.png)


<br>
2) Click "Create key pair"

![Clicking the "Create key pair" button](./images/KeyPair/2_KeyPair_dashboard.png)


<br>
3) Name your key pair "cscl" and select "PEM' for the file format. Then click "Create key pair". It's important to name the key pair as "cscl" as it will be referenced in the download.

![Filling out Key pair form and selecting type](./images/KeyPair/3_KeyPair_naming_and_submitting.png)


<br>
4) You will be prompted to save the keypair. Make sure to download.

![Download prompt presented after creating key pair](./images/KeyPair/4_KeyPair_download_cscl.png)


<br>

5.a.1) **(For MAC & LINUX)** Change the permissions of the "cscl.pem" file to read-only. On Mac and Linux this can be accomplished using chmod.

![Using chmod to update file permissions for cscl.pem](./images/KeyPair/5_a_1_KeyPair_chmod_cscl.png)


<br>

5.a.2) **(For MAC & Linux)** Move the "cscl.pem" file to `~/.ssh/`.

![Using the mv command, move the file to ~/.ssh/](./images/KeyPair/5_a_2_KeyPair_mv_cscl.png)

5.b.1) **(For Windows)** Using the .pem file with Putty. Make sure to follow the [instructions](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html) from AWS Docs.

5.b.2) **(For Windows)** Copying the files to the Windows Linux Subsytem (WSL). Please follow the [instructions](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/WSL.html) from AWS Docs.