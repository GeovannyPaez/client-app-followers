import { keySeccionToken } from "../hooks/useAuth";

const URL_API = 'http://localhost:3000/app/'

export const loginUser = async(email,password)=>{
    const body = JSON.stringify({
        email,password
    })
    const res = await fetch(`${URL_API}auth/login`,{
        headers:{
            'Content-Type':'application/json'
        },
        method:'POST',
        body,
    });
    const token =await res.json();
    return token
}

export const  getInfoUser = async(token)=>{
    // console.log(token)
    const res = await fetch(`${URL_API}user/followers`,{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`
        }
    });
    // console.log(token)
    
    const data = await res.json()
    return data;
    
    // return ''

}

export const searchUser =async(username)=>{
    const token = sessionStorage.getItem(keySeccionToken);
    const res = await  fetch(`${URL_API}user?search=${username}`,{
        method:'GET',
        headers:{
        'Authorization':'Bearer '+token,

        }
    });
    return await res.json();
}
export const getInfoUserById = async (userId)=>{
    const res = await fetch(`${URL_API}user/one/${userId}`);
    const data =await res.json();
    return data;

}

export const registerFollower = async(token,infoFollower)=>{
    const body = JSON.stringify(infoFollower)
    const res = await fetch(`${URL_API}user/register-follower`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+token
        },
        body
    }) ;
    const data = await res.json();
    return data;
}

export const followUser= async (token,userId)=>{
    const res = await fetch(`${URL_API}user/follow/${userId}`,{
        method:'POST',
        headers:{
            'Authorization':'Bearer '+token
        }
    });
    const data =await res.json();
    return data ;
}
export const getAllUsers = async ()=>{
    const res = await fetch(`${URL_API}user`);
    const data = await res.json();

    return data;
}