const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generatePage = require('./src/generatePage')

// the questionHanlder object controls all of the inquirer logic; it stores the questions as properties, the prompts as methods,
// and the answers as properties
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
                    console.log('\n\nPlease enter a username.\n');
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
                    console.log("\n\nPlease enter the school's name\n")
                    return false
                }
            }
        }
    ],
    newProfile: {
        type: 'list',
        name: 'newProfile',
        message: 'Would you like to add a profile for another employee?',
        choices: ['Yes, an engineer','Yes, an intern',"No, I'm finished."]
    },
    // the fooCard properties hold the user's answers to the prompted Inquirer questions. They're initialized as empty
    // strings and built out with string concantenation
    managerCard: '',
    engineerCards: '',
    internCards: '',
    // the askFoo methods gather information from the user, then use the corresponding constructor class to make an object
    // to hold that information, then use the makeCard method to format an HTML string which is then stored, to be passed to the 
    // generatePage function later. Each function ends by using the askNewProfile method to ask the user if they'd like to keep adding
    // cards
    askManager() {
        return inquirer.prompt(this.managerQuestions)
        .then(response => {
            this.managerCard += (new Manager(response.name,response.employeeID,response.email,response.officeNumber)).makeCard()
            return this.askNewProfile()
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
    },
    // askNewProfile asks the user if they'd like to keep adding cards and ends the method loop if they don't
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
    }
};
// these are validation functions to be used in the Inquirer questions
function validateName(input) {
    if (input) {
        return true;
    } 
    else {
        console.log('\n\nPlease enter a name.\n');
        return false;
    }
}; 
function validateNumber(input) {
    if (parseInt(input)) {
        return true;
    } 
    else {
        console.log('\n\nPlease enter a number.\n');
        return false;
    }
};
function validateEmail(input) {
    if (input.includes('@')) {
        return true;
    } 
    else {
        console.log('\n\nPlease enter a email address.\n');
        return false;
    }
};
function init() {
    // askManager will chain into the other ask methods
    questionHanlder.askManager()
    .then( () => {
        // the users answers, already formatted into HTML, are passed into the generatePage function
        const page = generatePage(questionHanlder.managerCard,questionHanlder.engineerCards,questionHanlder.internCards)
        // the page is generated as an HTML file, the user is singalled with a success or failure message
        fs.writeFile('./dist/index.html',page, err => (err) ? console.log(err) : console.log("The page is complete, find it in the /dist folder!"))
    })
}

init()