import { client } from "../../../sanity.config"

export default async function(req,res){
    console.log(req.body)
    let doc={
        _type:'user',
        ...req.body
    }
    let newDoc=await client.create(doc);
    console.log(newDoc)
    return res.json({message:req.body,success:"yes"})
}

