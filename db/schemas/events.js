import { defineType } from 'sanity';
export default defineType({
    name:"event",
    type:"document",
    title:"event",
    fields:[
        {
            name:"event_name",
            type:"string",
            title:"event_name",
            validation:Rule=>Rule.required()
        },
        {
            name:"location",
            type:"string",
            title:"location",
            validation:Rule=>Rule.required()
        },
        {
            name:"date_time",
            type:"datetime",
            title:"date_time",
            validation:Rule=>Rule.required()
        },
        {
            name:'created_by',
            type:'reference',
            to:[{type:"user"}]
        }
    ] 
});