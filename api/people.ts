import type {VercelRequest, VercelResponse} from '@vercel/node';

export default async function(req:VercelRequest, res:VercelResponse){
    return res.status(200).send([
        {
            name: "Joe",
            age: 30,
            email: "joe@gmail.com"
        },
        {
            name: "David",
            age: 28,
            email: "david@gmail.com"
        },
        {
            name: "Robin",
            age: 29,
            email: "robin@gmail.com"
        },
        {
            name: "Lana",
            age: 30,
            email: "lana@gmail.com"
        }  
    ]);
}