const cafename = require("../cafesdata.json"); 
const cafeplace = require("../placesdata.json");
const cafenamelength = Object.keys(cafename).length
const cafeplacelength = Object.keys(cafeplace).length
let x,y

exports.renderHomePage = (req,res) =>{
    res.render("layout")
}

exports.getCafe = (req,res) => {
    const cafe = req.body.cafe
        for(x=0;x<cafename.length;x++){
            let searchedcafe = cafename[x].name
            if(cafe === searchedcafe){
                for(y=0;y<cafeplacelength;y++){
                    if(cafename[x].place_id === cafeplace[y].id){
                        cafeplace[y].id = cafename[x].name
                        console.log(cafeplace[y])
                        res.send(cafeplace[y])
                    }
                }
            } 
        }
}