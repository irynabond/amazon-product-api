
 
var aws = require("../AmazonLib/lib/aws");

prodAdv = aws.createProdAdvClient("YOUR_ACCESS_KEY", "YOUR_SECRET_ACCESS_KRY", "YOUR_AFFILIATE_TRACKING_ID");


//returns thousands of items (uncomment the code below)

/*prodAdv.call("ItemSearch", {SearchIndex: "FashionMen", Keywords: "shoe", Sort: "popularity-rank"}, function(err, result) {
  console.log(JSON.stringify(result));
})
*/

// Response group: TopSellers: returns 10 items

prodAdv.call("BrowseNodeLookup", {BrowseNodeId: "7147441011", Keywords: "shoe", Availability: "Available", Sort: "launch-date", ResponseGroup:"TopSellers"}, function(err, result) {
  console.log(JSON.stringify(result));
})

