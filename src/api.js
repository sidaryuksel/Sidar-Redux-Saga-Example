export const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:4000/interviewees");
        const data = await response.json();
        console.log("data: ",data);
        return data;
    } catch (e){
        console.log(e);
    }
};