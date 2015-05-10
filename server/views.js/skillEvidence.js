Meteor.methods({

    /*
    ===================================================
    =  Server Method addSkillEvidence                 =
    =                                                 =
    =  Arguments: Autoform Doc                        =
    =                                                 =
    =                                                 =
    =                                                 =
    =  Description: Adds skill evidence to the db     =
    =                                                 =
    =  Used By: views/registration/skillEvidence.js   =
    =           views/registration/skillEvidence.html =
    ===================================================
    */

    addSkillEvidence: function(id, skill, img) {

        Meteor.users.update(
        {
            _id: id,
            "profile.skills.name": skill
        }, 
        {
            $push: { "profile.skills.$.evidences": img }
        });

    },

    deleteEvidence: function(id, name, evidence) {

        Meteor.users.update(
        {
            _id: id,
            "profile.skills.name": name
        }, 
        {
            $pull: { "profile.skills.$.evidences": evidence }
        }); 
    }

});

Meteor.startup(function () {
  UploadServer.init({
    tmpDir: process.env.PWD + '/public/.uploads/skill_evidence/tmp',
    uploadDir: process.env.PWD + '/public/.uploads/skill_evidence/',
    checkCreateDirectories: true
  })

});