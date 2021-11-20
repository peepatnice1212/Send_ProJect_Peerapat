import React from "react";
import { Chart } from "react-google-charts";
import data from "./csv1.json";
const Filebar = () => {
  //   let String_suc = [];
  //   let mockdata = [1, 1, 1, 2, 3, 4, 5, 6, 20];
  //   for (let i = 0; i < 9; i++) {
  //     String_suc[mockdata[i]] = mockdata[i];
  //     console.log("mock", String_suc[mockdata[i]]);
  //   }
  let result_Pointdata = [];
  let handdlearray = [];
  let emptyarr = [];
  let handleindex = [];
  let countarr = [];
  for (let i = 0; i < 100; i++) {
    countarr.push(0);
  }
  data.map((each) => {
    result_Pointdata.push(parseInt(each.Pointdata.substring(0, 2)));
  });
  // console.log("countbefore", countarr);
  for (let i = 0; i < result_Pointdata.length; i++) {
    countarr[result_Pointdata[i]] = countarr[result_Pointdata[i]] + 1;
    emptyarr[result_Pointdata[i]] = result_Pointdata[i];
    // console.log("count", countarr[result_Pointdata[i]]);
    // console.log("result", result_Pointdata[i]);
  }
  for (let i = 0; i < emptyarr.length; i++) {
    if (emptyarr[i]) {
      handleindex.push(emptyarr[i]);
    }
  }
  for (let i = 0; i < countarr.length; i++) {
    if (countarr[i]) {
      handdlearray.push(countarr[i]);
    }
  }
  let Finalresult = [["score", "count"]];
  for (let i = 0; i < result_Pointdata.length; i++) {
    Finalresult.push([handleindex[i], handdlearray[i]]);

    // console.log("result", result_Pointdata[i]);
    // console.log("count", countarr[result_Pointdata[i]]);
  }
  // console.log("countbefore", countarr);

  // console.log("result", result_Pointdata);
  // console.log("count", count);
  console.log("empty", emptyarr);
  console.log("handleindex", handleindex);
  console.log("count", countarr);
  console.log("handlecount", handdlearray);

  // console.log("sumarr", sumarr);
  console.log("final", Finalresult);
  return (
    <div>
      <Chart
        width={"1500px"}
        height={"700px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={Finalresult}
      />
    </div>
  );
};

export default Filebar;
