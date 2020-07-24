const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generatePage = require('./src/generatePage')

const questionHanlder = {
    managerQuestions: [
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the team's manager?",
            validate: validateName
        },    
        {
            type: 'input',
            name: 'employeeID',
            message: "What is the team manager's employee ID number?",
            validate: validateNumber
        }, 
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
            validate: validateEmail
        }, 
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            validate: validateNumber
        } 
    ],
    newProfile: {
        type: 'list',
        name: 'newProfile',
        message: 'Would you like to add a profile for another employee?',
        choices: ['Yes, an engineer','Yes, an intern','No Thanks']
    },
    engineerQuestions: [
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: validateName
        },    
        {
            type: 'input',
            name: 'employeeID',
            message: "What is the engineer's employee ID number?",
            validate: validateNumber
        }, 
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate: validateEmail
        }, 
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            validate: input => {
                if (input) {
                    return true;
                } 
                else {
                    console.log('Please enter a username.');
                    return false;
                }
            }
        } 
    ],
    internQuestions: [
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: validateName
        },    
        {
            type: 'input',
            name: 'employeeID',
            message: "What is the intern's employee ID number?",
            validate: validateNumber
        }, 
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: validateEmail
        },
        {
            type: 'input',
            name: 'school',
            message: "What is school does the intern attend?",
            validate: input => {
                if (input) {
                    return true
                }
                else {
                    console.log("Please enter the school's name")
                    return false
                }
            }
        }
    ],
    managerCard: '',
    engineerCards: '',
    internCards: '',
    askManager(){
        return inquirer.prompt(this.managerQuestions)
        .then(response => {
            this.managerCard += (new Manager(response.name,response.employeeID,response.email,response.officeNumber)).makeCard()
            return this.askNewProfile()
        })
    },
    askNewProfile() {
        return inquirer.prompt(this.newProfile)
        .then(response => {
            if (response.newProfile === 'Yes, an engineer') {
                return this.askEngineer()
            }
            if (response.newProfile === 'Yes, an intern') {
                return this.askIntern()
            } 
            return
            
        })
    },
    askEngineer(){
        return inquirer.prompt(this.engineerQuestions)
        .then(response => {
            this.engineerCards += (new Engineer(response.name,response.employeeID,response.email,response.github)).makeCard();
            return this.askNewProfile();
        })
    },
    askIntern(){
        return inquirer.prompt(this.internQuestions)
        .then(response => {
            this.internCards += (new Intern(response.name,response.employeeID,response.email,response.school)).makeCard();
            return this.askNewProfile();
        })
    }

};
function validateName(input) {
    if (input) {
        return true;
    } 
    else {
        console.log('Please enter a name.');
        return false;
    }
}; 
function validateNumber(input) {
    if (parseInt(input)) {
        return true;
    } 
    else {
        console.log('Please enter a number.');
        return false;
    }
};
function validateEmail(input) {
    if (input.includes('@')) {
        return true;
    } 
    else {
        console.log('Please enter a email address.');
        return false;
    }
};
function init() {
    questionHanlder.askManager()
    .then( () => console.log(generatePage(questionHanlder.managerCard,questionHanlder.engineerCards,questionHanlder.internCards)))
}

init()