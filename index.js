//const carbonCli = require("carbon-now-cli");
const exec = require("child_process").exec;
const createTempFile = require("fs").writeFile;
const removeTempFile = require("fs").unlink;

const code =
  "const kek = { one: 1, two: 2, three: 3, four: 4, five: 5, dasdadasdasdasdasdasdfafssdas:32}";
const tempFile = "temp.js";

createTempFile(tempFile, code, {}, () => {
  console.log("created");
  exec(
    `node ./node_modules/carbon-now-cli/cli.js ${tempFile} -l ./output `,
    (error, stdout, stderr) => {
      removeTempFile(tempFile, () => {
        console.log("removed");
      });
      //console.log(error, stdout, stderr);
    }
  );
});

// const code = "const kek = { one: 1, two: 2, three: 3, four: 4, five: 5}";
// const tempFile = "temp.js";

// createTempFile(tempFile, code, function(err) {
//   if (err) throw err;
//   console.log("File is created successfully.");
// });

// setTimeout(() => {}, 5000);

// removeTempFile(tempFile, function(err) {
//   if (err) throw err;
//   console.log("File is removed successfully.");
// });

// exec(
//   `node ./node-modules/carbon-now-cli/cli.js ${tempFile}`,
//   (error, stdout, stderr) => {
//     console.log(error, stdout, stderr);
//   }
// );

// removeTempFile(tempFile, code, function(err) {
//   if (err) throw err;
//   console.log("File is removed successfully.");
// });
