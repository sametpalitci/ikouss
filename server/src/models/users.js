module.exports = (sequelize,DataTypes) => {
    return sequelize.define('users',{
       admin:{
           type:DataTypes.INTEGER,
           defaultValue:0
       },
       email:{
           type:DataTypes.STRING,
           require:true,
           unique:true
       },
       password:{
            type:DataTypes.STRING,
            require:true
       }
    });
};
