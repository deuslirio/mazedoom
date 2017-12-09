import {
  Meteor
} from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.methods({
    log(arg1) {
      console.log(arg1);
    },
  });

});
