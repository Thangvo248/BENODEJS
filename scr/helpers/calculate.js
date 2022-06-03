const INDEX_XXX = 0;
const INDEX_YYY = 1;
const _ = require("lodash");

function calDistance(coordinate1, coordinate2) {
  try {
    const x1 = _.toNumber(coordinate1.split(":")[INDEX_XXX]);
    const y1 = _.toNumber(coordinate1.split(":")[INDEX_YYY]);
    const x2 = _.toNumber(coordinate2.split(":")[INDEX_XXX]);
    const y2 = _.toNumber(coordinate2.split(":")[INDEX_YYY]);
    const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    //console.log(distance);
    return distance;
  } catch (err) {
    console.log("calDistance ERROR: " + err);
    return res
      .status(400)
      .json({ success: false, data: null, errors: "calDistance fail!" });
  }
}

//calDistance("111:222", "222:333");
module.exports = { calDistance };
