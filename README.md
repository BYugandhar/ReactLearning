1)npm is package installer there is no abrivation for npm
2)package.json is configuration file for npm , here all the dependecy will added that are required by project.
3)for installing any dependecny or packages required by project need to use following cmd "npm install  -D pak_name",here "-D" means developemnt dependency (if we put -D means it will add only dev dependncy added in package.json 
"devDependencies": 
{
    "parcel": "^2.12.0"
}
  2.12.0 means vesrion but what is "^"(caret) this will update if any new  minor version comes ,"~"(tilde) this will update major version ,but always prefer "^",becoz minior version 
  will not effcet our app ,but major will cause issue so need to take care
4)we have three bundlers one of them is "parcel", this bundler do minifie and optmize the code for production (in this  process development specific code will be removed and optimized 
to only required to production code me retained and bunddled)
5)When we install any package using npm,"package-lock.json" will be genrated, this file will maintain excat version of every dependency and here hash value will be there (some time in our local machine code is working fine but production not working these might be bcoz this hash value diffenrec need to check this hash value in both env should be same)
6)When you install any package "node_moudle" will be created
7)Transitive dependency(means A depedncy B again B is depend on C etc)
8)Not required to push node_moudles into git bcoz its to big , but if have package.json and package-lock.js should be push into git why bcoz using these two file we can genarate all node 
9)moudles (just goto terminal "npm install " this cmd will geneate all req moudles again)
10)We can get React into our code one way using CDN links , but its not good way , another way we can use "npm" ( cmd is "npm install react") for react-dom(cmd "npm install react-dom") 
11)"npx parcel index.html" This command "npx" means excecute "parcel" is bunddler means prepare the final excutable "index.html" is source this index.html will have which js file to 
redirect,this parcel is one best bundler ,Parcel has follwing features
        ->

