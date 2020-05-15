const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
let userDetails = require('../models/UserDetails');
let bcrypt = require('bcrypt');
let userAuth = require('../Auth/userAuth');

router.get('/getUser', async (req, res) => {
    try {
        const users = req.query.name ? await Users.find({ name: req.query.name }) : await Users.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/registerUser', async (req, res) => {
    console.log(req.body);
    let reqBody = req.body;
    // let reqBody = JSON.parse(JSON.stringify(req.body));
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    let user = new Users({
        name: reqBody.name,
        email: reqBody.email,
        password: hashedPassword
    })

    try {
        const registerUser = await user.save();
        res.json(registerUser)
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/userLogin', async (req, res) => {
    let reqBody = JSON.parse(JSON.stringify(req.body));
    try {
        let email = reqBody.email;
        let password = reqBody.password;

        let data = await Users.find({ email: email });
        // let user = JSON.parse(JSON.stringify(data));
        let match = 0;
        user_password = data[0].password;

        if (await bcrypt.compare(user_password, password)) {
            res.send(user);
        } else {
            res.send("wrong password")
        }
        // if(user_info != null){
        //     match =await userAuth.userMatch(user_info,password);
        // }

        // if(match == 2){
        //     res.json(user_info);
        // }else if(match == 1){
        //     res.json('wrong password');
        // }else{
        //     res.json('user not found');
        // }

    } catch (err) {
        console.log(err);
        res.json({ message: err });
    };
});

router.post('/enterDetails', async(req, res)=>{
    let reqBody = req.body;
    let details = new userDetails({
        email: req.headers,
        current_employer: reqBody.currentEmployer,
        yearsOfExperience: reqBody.yearsOfExperience,
        skills: reqBody.skills,
        university: reqBody.university,
        degree: reqBody.degree,
        graduationYear: reqBody.graduationYear
    });
    try {
        const user_details = await details.save();
        res.json(user_details)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;