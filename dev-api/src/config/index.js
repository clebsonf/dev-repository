module.exports = {
    secret: process.env.NODE_ENV === "production" ?  process.env.NODE_SECRET: "AQWTUIEOPQWQPKASAHGDADAHJHJSAHDA",
    api_url: process.env.NODE_ENV === "production" ? process.env.API_URL : "http://localhost",
    front_url: process.env.NODE_ENV === "production" ? process.env.FRONT_URL : "http://localhost"
}