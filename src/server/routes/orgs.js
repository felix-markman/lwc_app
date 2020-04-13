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

// // TODO: Write another api function to run force:user:display that has one argument: the username
// const showUser = () => {
//     return new Promise((resolve, reject) => {
//         childProcess.exec('force:user:display', (err, stdout, stderr) => {
//             if (err) {
//                 reject(stderr);
//             }
//             resolve(stdout);
//         });
//     });
// };

module.exports = {
    listOrgs
    // Export your new function here for the user display
};
