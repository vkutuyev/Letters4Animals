var models = require('../server/models');
models.sequelize.sync()

// models.User.findAll({}).then(function(data){
// 	if(data){
// 		for (var i = 0; i < data.length; i++) {
// 			console.log(i+" index of data array", data[i].dataValues);
// 		}
// 		// console.log(data[0]);
// 	}
// 	else{
// 		console.log("error finding all users");
// 	}
// })
models.User.findAll().then(function(data) {
	for (user of data) {
		console.log('null');
		user.update({reset_pw_url_created_at: null});
	}
})

//Get all emails where email notification is enabled
// models.User.findAll({attributes: ['email'], where: ["email_notification = ?", true]})
// .then(function(data){
// 	if(data){
// 		var emailArray = []
// 		for (var i = 0; i < data.length; i++) {
// 			console.log(i+" index of data array", data[i].dataValues);
// 			emailArray.push(data[i].dataValues.email);
// 		}
// 		console.log(emailArray);
// 		// console.log(data.dataValues);
// 	}
// 	else{
// 		console.log("error finding all users with email notification enabled");
// 	}
// })

//Get all phone numbers where phone notification is enabled AND phone_number.length == 10
// models.User.findAll({attributes: ['phone_number'], where: ["phone_notification = ?", true]})
// .then(function(data){
// 	if(data){
// 		var phoneArray = []
// 		for (var i = 0; i < data.length; i++) {
// 			console.log(i+" index of data array", data[i].dataValues);
// 			if (data[i].dataValues.phone_number.length === 10) {
// 				phoneArray.push(data[i].dataValues.phone_number);
// 			}
// 		}
// 		console.log(phoneArray);
// 		// console.log(data.dataValues);
// 	}
// 	else{
// 		console.log("error finding all users with phone notification enabled");
// 	}
// })
