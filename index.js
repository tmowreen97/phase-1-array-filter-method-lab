// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array, name){
    return array.filter(element => element.toLowerCase() === name.toLowerCase())

}
function fuzzyMatch(array, name){
    return array.filter(driver => driver.startsWith(name))
}
const driverss = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driverss, query){
    const result = driverss.filter(driver => driver.name===query)
    return result

}