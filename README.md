# amazon-product-api

### You need node.js to be installed prior running this code.

###Download or clone this repo
```html
git clone https://github.com/irynabond/amazon-product-api.git
```
###Open command prompt or terminal in project directory. Run the command
```html
npm install
```
It should install express package

### Open index.js file in js folder
* Get your tracking id: https://affiliate-program.amazon.com
* Get security credentials here (you need to sign up to get them): https://console.aws.amazon.com/iam/home?region=us-west-2#security_credential 

* Put your access key, secret access key and tracking id in appropriate fields inside index.js file.

###Edit code in index.js if you want

####Run the program
Open command prompt or teminal in 'js' directory. Then:
```html
node server.js
```
In command prompt console you are going to see api response which contains the list of items.
