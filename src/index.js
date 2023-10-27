//DEXI 
//DEV ECS
import fetch from 'node-fetch';


//get the latest news
export const getNewsDefault = () => { 
    //let {lang='en'} = options;
    const api_website_pro = 'https://www.dexi.tools/news';

    return fetch(api_website_pro)
        .then(response => response.json())
        .then((data) => {
            return data;
        });
}

getNewsDefault();