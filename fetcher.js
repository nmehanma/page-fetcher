const request = require('request');
const fs = require ('fs');
let argv = process.argv.slice(2)

const URL = argv[0];
const file = argv[1];



request(URL, (error, response, body) => {
  if (error) {
    console.log("error", error);
  }else { 
    write(URL, file);
  };
  
});


const write = function(URL, file) {
  fs.writeFile(file, URL, (error) => {
    if (error) {
      console.log("error");
    }else {
      console.log("Downloaded and saved " + fs.statSync(file).size + " bytes to" + file)
    }
})
};

