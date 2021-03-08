const checkFields = require('../utilities/checkFields');
const bcrypt = require('bcryptjs');
const db = require('../models');
const register = async (req,res) => {
    const { email, password } = req.body;
    const checkEmptyField = checkFields(email,password);
    if(!checkEmptyField){
        return res.status(403).json({notice:'Inputs do not empty or null', status:'NO'});
    }
    const checkEmail = await db.users.findOne({raw:true},{where:{email}});
    console.log(checkEmail, email)
    if(checkEmail){
        return res.status(403).json({notice:'This email already use', status:'NO'});
    }
    const saltPassword = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password,saltPassword);
    const potantialUser = {
        email,
        password:hashPassword
    }
    try {
        await db.users.create(potantialUser);
        const token = jwt.sign({email},process.env.SECRET_KEY_FOR_USER);
        return res.status(200).json({notice:'Successy', status:'OK', token});
    } catch (e) {
        return res.status(403).json({notice:'Error' + e, status:'NO'});
    }
}

module.exports = {
    register
}
