
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]


  function superbowlWin(record) {
      let theYear = record.find(findTheYear);
      //console.log(theYear);
      if (theYear === undefined) { return undefined; }
      else { return theYear.year; }

  }


function findTheYear(year) {
    if (year.result === "W") { return true; }
}
  

//console.log(superbowlWin(record));