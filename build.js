const yaml = require('js-yaml');
const fs = require('fs');
const _ = require('lodash');

// create .eslintrc for loose mode
try {
  var org = yaml.safeLoad(fs.readFileSync('./.eslintrc.yaml', 'utf8'));
  var loose = yaml.safeLoad(fs.readFileSync('./.eslintrc.loose.yaml', 'utf8'));
  var merged = _.assign(org,loose);
  fs.writeFile('./loose/.eslintrc.yaml', yaml.safeDump(merged) , function (err) {
    if(err) throw new Error('err')
    console.log('done');
  });

} catch (e) {
  console.log(e);
}
