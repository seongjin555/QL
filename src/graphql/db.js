import connection from "../index.js";

export const GETcar_table = async col => {
  console.log('hi');
  let myPromise = new Promise(function(myResolve,myReject){
    let qry = 'Select * from car_table';
    connection.query(qry,function(err,results,fields){
      if(err) throw err;
      console.table(results);
      myResolve(results);      
    });    
  })
  return await myPromise;
};


