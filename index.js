import { promptData } from './prompt.js';
import { getData, saveData } from './actions.js';

const file = './data.json'

const main = async() => {
    let data = await promptData()
    const jsonData = await getData('./data.json')
    let newData = [...jsonData, data]
    
    try {
        await saveData(file, newData)
        console.log('Data saved successfully')
      } catch (error) {
        console.error('Error saving data:', error)
      }
}

main()