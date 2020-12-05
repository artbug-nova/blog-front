import {host} from '../config/env'

export default class PostService{
    getPost = async()=> {
        const res = await this.getResource(`${host}/api/post/getAll`);
        return res;
    }


    getResource = async(url) =>{
        const res = await fetch(url);

        if(!res.ok){
            throw new Error('Not found');
        }

        return await res.json();
    }
}