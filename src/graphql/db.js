import connection from "../index.js";

export const GETcar_table = async id => {
  let myPromise = new Promise(function(myResolve,myReject){
    connection.query("SELECT * from car_table ORDER BY car_id DESC", (error, results, fields) => {
      if (error) throw error;
      let current_car_number = results[0].car_number
      connection.query("SELECT * from car_table where car_number = \"" + current_car_number + "\"ORDER BY car_id DESC", (error, results, fields) => {
        if (error) throw error;
        myResolve([results[1],results[0]])
      });
    });
  });
  return await myPromise;
};


