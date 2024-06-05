module.exports = (request) => {
    return { body: `Your random number is ${Math.ceil(Math.random() * 100)}.` }
}