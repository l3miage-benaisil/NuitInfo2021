var modelsSauveteur = require('../models/modelsSauveteur');
module.exports = {
    afficher_ajouterSauveteur: function (req, res) {
        res.render('./ajouterSauveteur')
    },
    afficher_modifierSauveteur: function (req, res) {
        res.render('./modifierSauveteur')
    },
    
    executer_sauveteur: function (req, res) {
        let nom = req.body.inputNom;
        let prenom = req.body.inputPrenom;

    
        modelSauveuteur.creerSauveteur(nom,prenom, function (data) {
    
        });
        res.redirect("./liste_sauveteurs");
      },
    
    
    afficher_listeSauveteurs:function (req,res) {
        res.render('./liste_sauveteurs')
    }
}