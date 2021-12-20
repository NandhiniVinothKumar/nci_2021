

# Pre-requistis #
   Create a Account  in Ropsten Test Network using MetaMask

   Deploy the ERC20 1 million fixed supply token and import into your account created in MetaMask

   Create an account in infura using the https://infura.io/.   Then create a project, the project give us the endpoint which help us to route request for our etherum blockchain transactios.Open infura project, under general tab you will find the endpoints section, choose Ropsten netwrok which synchronizes with all our transcations

# Readme #

This is the readme for this project.  It will include any useful links and commands to run.

## Install Visual Studio Code ##


```https://code.visualstudio.com/Download```

## Install Git ##

1. get a github account at github.com

2. install git locally

```https://github.com/git-guides/install-git```

## Install NodeJs ##

Install following the instructions at the following web page:

```https://nodejs.org/en/download/```

## Cloning a Repository ##

Create a folder for in your system ,
Then open GIT Bash, and navigate to the local folder then clone git repository using below cmd

```git clone https://github.com/NandhiniVinothKumar/nci_2021.git```

## Updating Code in Repo from Github ##

From the terminal in Visual Studio Code (or from the command line - as long as you are in the folder), run the following command:

```git pull origin main```


## Validation Steps ##

by running below cmd, we can chjeck whether git is installed or not.

```$git version```

How to tell you have node installed:

```$node -v```

## Use following commands to push the code from visual studio terminal to the  repo ##

```$git add <your updated files>```

```$git commit -m "<your commit message>"```

```$git push origin main```

## Executing a .JS file ##

To execute a javascript file using node.js, run the following command:

```$node <file name>```


## Dependencies and NPM ##

We want to use large chunks of code that others have written to interact with Ethereum, like the web3 package.  Do this, we need to set up the Node Package Manager (npm).

From inside your folder, to create your own package.json:

```$npm init```


## CURL accessing of handlers"

To POST to a route, execute the following CURL command:

```curl -XPOST http://localhost:8080/transfer -H 'content-type: application/json' -d '{"account_to": "0x4d60E7f9d4901816981a0E4c6D95F394159C6371", "amount": "123000"}'```


## Docker ##

### View running docker containers ###

```docker ps```

### build a docker container ###

``` docker build  . -t <dockeruserid>/<image-name>: <tag-name>```

### run the image ###

```docker run -p 8090:8080 –name <alias-name> -d <dockeruserid>/<image-name>: <tag-name>```

### kill a running container ###
```docker kill [name]```

### start/stop a container ###
```docker start/stop [name]```

### view logs ###
```docker logs [name]```

### view logs inside a container ###
```docker logs -f [name]```
