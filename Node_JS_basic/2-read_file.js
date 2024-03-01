/* eslint-disable */
// create a function named countStudents that reads a CSV file and computes the number of students in each field
function countStudents(path) {
    const countStudents = require('./2-read_file');
    const data = fs.readFileSync(path, 'utf8');
    console.log(data);
    if (data === undefined) throw new Error('Cannot load the database');
    else {
        const NUMBER_OF_STUDENTS = data.split('\n').length;
        const fields = data.split('\n')[0].split(',');
        const NUMBER_OF_FIELDS = fields.length;
        console.log('Number of students: ' + NUMBER_OF_STUDENTS);
        console.log(`Number of in ${fields}: ${count}. List: ${names.join(', ')}`);
    }
}
module.exports = countStudents;