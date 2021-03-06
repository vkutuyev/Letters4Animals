var models = require('../models');

module.exports = (function(){

	return {

		getAllPendingcauses: function(req, res) {
			models.sequelize.query('SELECT "Pendingcauses".*, "Users".first_name, "Users".last_name,"Users".email FROM "Pendingcauses" LEFT JOIN "Users" ON "Users".id = "Pendingcauses".user_id;', { type: models.sequelize.QueryTypes.SELECT})
            .then(function(pendingcauses){
                res.json(pendingcauses);
            })
        },
		
        addPendingCause: function(req, res) {
            if (req.body) {
                var pendingcause = req.body;
                models.Pendingcause.create({
                    name: pendingcause.name,
                    description: pendingcause.description,
                    user_id: pendingcause.user_id,
                    rep_level: pendingcause.rep_level,
                    letter_body: pendingcause.letter_body,
                    letter_footnote: pendingcause.letter_footnote,
                    enabled: false,
                    fixed: pendingcause.fixed,
                    fixed_name: pendingcause.fixed_name,
                    fixed_address: pendingcause.fixed_address,
                    fixed_city: pendingcause.fixed_city,
                    fixed_state: pendingcause.fixed_state,
                    fixed_zipcode: pendingcause.fixed_zipcode
                }).then(function(pendingcause) {
                    res.json({success: true, data: pendingcause})
                }).catch(function(err) {
                    res.json({success: false, errors: err})
                })
            } else {
                console.log('Missing Pendingcause');
            }
        },

		getPendingCause: function(req,res){
				var id = req.params.id;
				models.sequelize.query('SELECT "Pendingcauses".* FROM "Pendingcauses" WHERE "Pendingcauses".id = ?;', { replacements: [id],type: models.sequelize.QueryTypes.SELECT})
				.then(function(pendingcauses){
						res.json(pendingcauses);
				})
		},

		deletePendCause: function(req,res){
			models.Pendingcause.destroy({where: ['id = ?', req.body.id]})
				.then(function(pendingcauses){
					models.sequelize.query('SELECT "Pendingcauses".* FROM "Pendingcauses";', { type: models.sequelize.QueryTypes.SELECT})
					.then(function(pendingcauses){
							res.json(pendingcauses);
					}).catch(function(err){
						console.log(err)
					})
				})
		}

	} // closes return

})();
