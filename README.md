1)npm is package installer there is no abrivation for npm
2)package.json is configuration file for npm , here all the dependecy will added that are required by project.
3)for installing any dependecny or packages required by project need to use following cmd "npm install  -D pak_name",here "-D" means developemnt dependency (if we put -D means it will add only dev dependncy added in package.json 
"devDependencies": 
{
    "parcel": "^2.12.0"
}
  2.12.0 means vesrion but what is "^"(caret) this will update if any new  minor version comes ,"~"(tilde) this will update major version ,but always prefer "^",becoz minior version 
  will not effcet our app ,but major will cause issue so need to take care
4)we have so many(webpack,vite ,etc..) we will use bundlers one of them is "parcel", this bundler do minifie and optmize the code for production (in this  process development specific code will be removed and optimized to only required to production code me retained and bunddled)
5)When we install any package using npm,"package-lock.json" will be genrated, this file will maintain excat version of every dependency and here hash value will be there (some time in our local machine code is working fine but production not working these might be bcoz this hash value diffenrec need to check this hash value in both env should be same)
6)When you install any package "node_moudle" will be created
7)Transitive dependency(means A depedncy B again B is depend on C etc)
8)Not required to push node_moudles into git bcoz its to big , but if have package.json and package-lock.js should be push into git why bcoz using these two file we can genarate all node 
9)moudles (just goto terminal "npm install " this cmd will geneate all req moudles again)
10)We can get React into our code one way using CDN links , but its not good way , another way we can use "npm" ( cmd is "npm install react") for react-dom(cmd "npm install react-dom") 
11)"npx parcel index.html" This command "npx" means excecute "parcel" is bunddler means prepare the final excutable "index.html" is source this index.html will have which js file to 
redirect,this parcel is one best bundler ,Parcel has follwing features
        ->it will do Dev Build
        ->it will create local server and host dev build (npx parcel file.html)
        ->it will do HMR-Hot moudle Refresh - means when you have done any changes in source file immediatly it will reflect in browser
        ->File watching alg - this alg for check did any files are modifed take file build and refresh its done by c++
        ->caching -> faster the build
        ->image optimazation
        ->bundlling
        ->compress fie
        ->consistent hasing
        ->code spilting- it will split files
        ->Differentail bundling -  app can be opened chrome,IE ,Firefox means Parcel can create code for different type older browser or diff apps
        -> it will do Diagnostics
        ->Error handling
        ->it will support HTTPS also ->(cmd : npx parcel index.html --https)
        ->Tree shaking - this will help to remove unused code (example if you have written 10 function but u are using 2 function reaming 8 function will remove and bundle)
        -> create for Dev build and Prod buid(cmd : npx parcel build index.html but this will give error bcoz in package.json has "main:App.js" this will tell starting point we need to remove in case of prod build) all files will go under "dist" folder
12) Browserlist this will tell which version of browsers should support , this can be added into package.json
    "broswerlist:"
    {
    last 2 vesrion chrome
    }
        above cmd will tel support latest 2 version of chrome  and remaing IE ,firefoxx also will support but no version restict
13) for running and to start our application we have to use below command
    cmd: npx parcel index.html
        
===============================================================================================================================================
14) for every time we cann't run above command , so to avoid that command we can write scripts, these scripts should be in package.json
"scripts": {
    "start":"parcel index.html",
    "build":"parel build index.html"
  }
Above script is written in package.json now no need to execute above command now we can use following command
cmd:npm run start --> means it will do same as "npx parcel index.html"
short cut npm run start same as npm start 

Fundamentals:
============
1)For creating element in react we need to follow the below syntax
    const var = React.createElement("h1",{id:"heading","xyz":"work"},"Hello world"}
    in above h1--> tag to create
            {id:"heading","xyz:"work"--> }--> attributes of tag
            "Hello world"-->childern (for display)
But for creating one tag if we want follow above syntax, its very diffcult ryt. so they introduced new thinkg called "JSX".
2) JSX and React are not same , they both are different
3)JSX and HTML are not same but JSX syntax looks like same HTML or XML
4)JSX is different synatx but looks like HTML/XML
5)























