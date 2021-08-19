## Running it easily on your computer
I'm planning on building an npm package that works like 'create-react-app', but in the in the meantime you can create a script with the following commands:

```bash
git clone git@github.com:eliasvelardezft/react-tailwind-template.git
cd react-tailwind-template
rm -rf .git
npm install
mv ./* ./.* ..
cd ..
rm -rf react-tailwind-template
```
You create a folder, cd to that folder and just call the script.


## tailwind.config.js

Here you can modify or extend Tailwind functionalitites

## webpack.config.js
Here I've added html-webpack-plugin which automatically generates the *dist/index.html* taking *src/index.html* as a template. 
Also we tell webpack to use postcss, which will then use tailwind (this is specified in *postcss.config.js*)

## package.json
Here I added two scripts

 + **start**: uses webpack-dev-server to open your project in a local server and see the changes you make with react/tailwind
 + **build**: this creates the dist folder containing the javascript bundle and an *index.html* which has a script tag pointing to the bundle.
