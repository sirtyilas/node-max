const fs = require('fs')
const path = require('path')

const allproducts = [];
const p = path.join(__dirname, '..', 'data', 'products.json');


module.exports = class Product {

    constructor(title){        
        this.title = title;
    }
    save(){

        fs.readFile(p,(err, fileContent )=>{

            let products = []
            if(!err){
                products = JSON.parse(fileContent);
            } 
            products.push(this); 
            fs.writeFile(p, JSON.stringify(products), (error)=>{
                console.log(err);
            })      

        })
       
    }
    static fetchAll(cb) {
        const p = path.join(
          path.dirname(process.mainModule.filename),
          'data',
          'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
          if (err) {
            cb([]);
          }
          cb(JSON.parse(fileContent));
        });
      }
} 