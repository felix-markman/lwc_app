const childProcess = require('child_process');

const listOrgs = () => {
    return new Promise((resolve, reject) => {
        childProcess.exec('sfdx force:org:list', (err, stdout, stderr) => {
            if (err) {
                reject(stderr);
            }
            resolve(stdout);
        });
    });
};

// TODO: Write another api function to run force:user:display that has one argument: the username

module.exports = {
    listOrgs
};
