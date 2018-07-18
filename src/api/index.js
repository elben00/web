let PORT = ""
var ENV = process.env.NODE_ENV
export let testPort = "http://localhost:5556"
if (ENV === "production") {
    PORT = "http://localhost:5556"
} else {
    PORT = ""
}
export default PORT