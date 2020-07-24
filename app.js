const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generatePage = require('./src/generatePage')

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the name of the team's manager?",
        validate: input => {
            if (input) {
                return true;
            } 
            else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },    
    {
        type: 'input',
        name: 'employeeID',
        message: "What is the team manager's employee ID number?",
        validate: input => {
            if (typeof input === 'number') {
                return true;
            } 
            else {
                console.log('Please enter a number.');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address?",
        validate: input => {
            if (input.includes('@')) {
                return true;
            } 
            else {
                console.log('Please enter a email address.');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
        validate: input => {
            if (typeof input === 'number') {
                return true;
            } 
            else {
                console.log('Please enter a number.');
                return false;
            }
        }
    } 
]
const newProfile = {
    type: 'list',
    name: 'newProfile',
    message: 'Would you like to add a profile for another employee?',
    choices: ['Yes, an engineer','Yes, an intern','No Thanks']
}

init = () => {
    inquirer.prompt(newProfile)
    .then(answer => console.log(answer.newProfile))
}

init()