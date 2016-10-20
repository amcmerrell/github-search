# _GitHub Search_

#### _10/14/2016_

#### By _**Andrew Merrell**_

## Description

_JavaScript application, using GitHub API to display data based on user input._

## Specifications

| Behavior         | Input         | Output         |
|------------------|---------------|----------------|
| Visitor performs search user function.| "amcmerrell"  | List of titles and descriptions for repositories. |
| Visitor inputs user that does not exist | "afsoih"  | User: Not found. |
| Visitor clicks find repos.   | Click find repos with current user inputted. | Display all repositories for selected user. |

## Setup/Installation Requirements

#### Initial Setup

_Open your terminal application and run the commands below._

`git clone https://github.com/amcmerrell/github-search`

#### API Setup

_Request a Personal Access Token from GitHub by logging in, going to Settings, and clicking 'Personal access tokens'._

_In your terminal, run `touch .env`, then `atom .env`._

_Add exports.apiKey = "YOUR PERSONAL ACCESS TOKEN"; to the top of the .env file and paste the Personal Access Token you received from GitHub._

#### NPM & Bower Setup

`npm install -1`

`bower install`

#### Run Local Server

`gulp build`

`gulp serve`

## Known Bugs
_There are currently no known bugs for this project. If you discover any issues, you can reach me via the contact details below._

## Support and contact details
_If you have any questions about this project, please contact Andrew at andrew.m.merrell@gmail.com_

## Technologies Used
* _JavaScript_
* _Node.js_
* _Sass_
* _HTML_
* _CSS_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2016 **_Andrew Merrell_**
