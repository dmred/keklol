//const carbonCli = require("carbon-now-cli");
const exec = require("child_process").exec;
const createTempFile = require("fs").writeFileSync;
const removeTempFile = require("fs").unlinkSync;

const code = "const kek = { one: 1, two: 2, three: 3, four: 4, five: 5}";
const tempFile = "temp.js";

createTempFile(tempFile, code, function(err) {
  if (err) throw err;
  console.log("File is created successfully.");
});

exec(
  `node ./node-modules/carbon-now-cli/cli.js ${tempFile}`,
  (error, stdout, stderr) => {
   // console.log(error, stdout, stderr);
  }
);

removeTempFile(tempFile, code, function(err) {
  if (err) throw err;
  console.log("File is removed successfully.");
});
