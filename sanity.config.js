import sanityClient from '@sanity/client';

export const client=sanityClient({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATA_SET_NAME,
    useCdn: false, // set to `true` to fetch from edge cache
    apiVersion:process.env.API_VERSION, // use current date (YYYY-MM-DD) to target the latest API version
})
