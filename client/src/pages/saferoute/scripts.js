const url = 'http://localhost:8003/auth/authorize'

export const authorize = async (navigator, pathname)=>{
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
    console.log("status" + response.status)
    if(response.status === 401) {
        if (!pathname.includes('/auth/login')) navigator('/auth/login');
    } else if(response.status === 200){
        if (!pathname.includes('/app')) navigator('/app/dashboard');
    }
}