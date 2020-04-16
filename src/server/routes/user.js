const childProcess = require('child_process');

const authenticate = (username) => {
    console.log('authenticating: ' + username);
    return new Promise((resolve, reject) => {
        childProcess.exec(
            'sfdx force:auth:web:login -d -a DevHub',
            (err, stdout, stderr) => {
                if (err) {
                    reject(stderr);
                }
                resolve(stdout);
            }
        );
    });
};

// TODO: Write another api function to run force:user:display that has one argument: the username
const showUser = (username) => {
    return new Promise((resolve, reject) => {
        console.log('username: ' + username);
        //childProcess.exec('sfdx force:config:list', (err, stdout, stderr) => {
        //childProcess.exec('sfdx force:auth:web:login -d -a DevHub', (err, stdout, stderr) => {
        childProcess.exec(
            'sfdx force:user:display -u ' + username,
            (err, stdout, stderr) => {
                if (err) {
                    reject(stderr);
                }
                resolve(stdout);
            }
        );
    });
};

module.exports = {
    // Export your new function here for the user display
    showUser,
    authenticate
};
