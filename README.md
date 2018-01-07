# Dynamic Form Builder
This is a Dynamic Form Builder

### Requires
* node
* npm

### Testing
* Have Node/NPM with Mocha installed then clone this repo and cd into it.
* Run npm i to install dependencies.
* Make sure to have a code editor like Atom or sublime text and add this linter-eslint package using this in terminal:
```
apm install linter-eslint
```
* Test that it works by removing a semicolon or by making other changes to your code.
* Before pushing your code up run mocha in terminal to run the test.
* Submit a pull request and show what you changed.

### How to Install
1: Clone this repository
```
git clone https://github.com/BHess2653/dynamic-form-builder.git

```
2: Install repo dependencies
```
npm install

```
3: Test the Example to ensure correct installation
```
cd src
node main.js

```
4: Output example
```
<form method="post"><label id="email" for="email" >E-mail</label><input type="text" id="email" placeholder="E-mail address..." required/><label id="password" for="password" >Password</label><input type="password" id="password" placeholder="Password..." required/><input type="submit" id="submit" name="submit" value="Submit" ></input></form>

```
