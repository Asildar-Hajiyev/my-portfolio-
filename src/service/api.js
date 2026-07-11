import axios from "axios"

async function getData(){
const res = await axios.get("https://portfolio-api-azure-theta.vercel.app/api/data")
// const res = await axios.get("http://localhost:3000/api/data")
return res.data

}
export  {getData}

