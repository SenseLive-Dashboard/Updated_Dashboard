const connection = require('./database')

let model = {
   registerCompany: (input, cb) => {

         let data = {
            CompanyName: input.CompanyName,
            Name: input.Name,
            Designation: input.Designation,
            Email: input.Email,
            MobileNo: input.MobileNo,
            Address: input.Address,
            ColdStorage: input.ColdStorage,
            Energy: input.Energy,
            Password: input.Password        
            };
      
        return connection.query("INSERT INTO temporycompanylogin SET ?", [data], cb)
        
    }
    // forgotPassword: (input,cb) => {
    //     let data = {
    //         CompanyName: input.CompanyName,
            
    //         Email: input.Email      
    //         };
    //     return connection.query("SELECT * FROM temporycompanylogin WHERE Email=? AND CompanyName=?", [data], cb)
    // }
}

module.exports = model;
