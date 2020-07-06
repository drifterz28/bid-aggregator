require('dotenv').config();
const env = process.env;

const Mailchimp = require('mailchimp-api-v3');
const mailchimp = new Mailchimp(env.MAILCHIMP);

mailchimp.get({
  path : '/lists/bid-aggregator'
}, function (err, result) {
  console.log(err, result);
})