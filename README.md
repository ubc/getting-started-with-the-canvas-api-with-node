# Getting Started with the Canvas API with Node.js

This script will get you started with interfacing with the Canvas API using JavaScript/Node.js

## Getting Started
These instructions will get you a copy of the script up and running on your local machine for use with Canvas and your own API tokens. This script makes a request to the Canvas API that displays basic information about your user profile.

### Prerequisites

1. **Install [Node 8.0.0 or greater](https://nodejs.org)**.
2. **Install [Git](https://git-scm.com/downloads)**.

### Installation and execution

*Not sure how to clone a repo? Check out this [helpful guide first!](https://codeburst.io/git-and-github-in-a-nutshell-b0a3cc06458f)*

1. Open command prompt on Mac or command line on Windows.
1. Clone this repo. `git clone https://github.com/ubccapico/getting-started-with-the-canvas-api-with-node.git`
1. Then cd into the repo. `cd getting-started-with-the-canvas-api-with-node`
1. Run the installation script. `npm install` (If you see `babel-node: command not found`, you've missed this step.)
1. Generate Canvas API token and copy it to clipboard.
1. Rename the `sample.env` file to `.env`, and add your API token to `CANVAS_API_TOKEN={ADD TOKEN HERE}`.
1. Run the script. `node index.js`. This should log your Canvas info.

### What to do from here

Try running some other scripts from [Capico](https://github.com/ubccapico). [This script](https://github.com/ubccapico/canvas-discussion), for example, allows you to download all of the Canvas discussions from your course.

You can also write your own code and run it! Be mindful that the API is running on the production Canvas instance - if you want to run against the Beta or Test instance, change the URL in `.env` to `https://ubc.test.instructure.com/api/v1` or `http://ubc.beta.instructure.com/api/v1` and regenerate your token(s) from the Beta/Test site. *Students do not have access to Beta or Test, sorry!*

## Authors

* [justin0022](https://github.com/justin0022) -
**Justin Lee** &lt;justin.lee@ubc.ca&gt;

## License

This project is licensed under the GPL 3 License.
