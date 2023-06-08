import inquirer from 'inquirer';

const questions = [
    {
        type: 'input',
        name: 'gasto',
        message: '¿En que gastaste?',
    },
    {
        type: 'number',
        name: 'total',
        message: '¿Cuanto gastaste?',
        validate: (value) => isNaN(value) ? 'Ingresá un número' : true
    }
];

export const promptData = async () => {
    try {
        return await inquirer.prompt(questions)
    } catch (error) {
        console.log('Hubo un error: '. error)
    }
};