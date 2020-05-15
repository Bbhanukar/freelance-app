let Users = require('../models/Users');
let  bcrypt = require('bcrypt');


async function userMatch(user, password) {
    let match = 1;
    user_password = user.password;

    if (await bcrypt.compare(user_info.password, password)) {
        match = 2;
        return match;
    }else {
        return match;
    }
    
};



module.exports = {
    userMatch: userMatch
}