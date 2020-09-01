module.exports = {
    date(){
        const today = new Date()
        const year = today.getUTCFullYear()
        const month = `0${today.getUTCMonth() + 1}`.slice(-2)
        const day = `0${today.getUTCDate()}`.slice(-2)
        const hour = today.getHours()
        const minute = today.getMinutes()
        const second = today.getSeconds()
        return `${year}-${month}-${day}T${hour}:${minute}:${second}`
    }
}