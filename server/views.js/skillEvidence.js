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

        console.log(id);
        console.log(skill);
        console.log(img);

        Meteor.users.update(
        {
            _id: id,
            "profile.skills.name": skill
        }, 
        {
            $push: { "profile.skills.$.evidences": img }
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