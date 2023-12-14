import axios from "axios";
import { useNavigate } from "react-router-dom";

export const fetchBlogs = async ()=>{
    try{
      const response= await fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=2d150873bef84605bfa29cbe9f751bbc");
      if(!response.ok){
        throw new Error(`Failed to fetch blogs. Status code: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.articles);
      return data.articles;
    }
    catch(error){
      console.log(error);
    }
  };

  export const useVaccine = async ()=>{
    let data = JSON.stringify({
        "name": "TT-1",
        "when_to_give": "Early in pregnancy",
        "dose": "0.5 ml",
        "route": "Intra-muscular",
        "site": "Upper Arm",
        "description": "TT-1, or Tetanus Toxoid 1, is administered early in pregnancy to provide protection against tetanus. This vaccine helps prevent tetanus-related complications during pregnancy and childbirth."
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://evacc-backend45.onrender.com/Vaccine/addVaccine',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

 export const getAllVaccine=async ()=>{
    const res = await axios.get("https://evacc-backend45.onrender.com/Vaccine/").catch((err) => console.log(err));

    if (res.status !== 200) {
      return console.log("No Data");
    }
  
    const data = await res.data;
    return data;

}

export const getVaccineDetails= async ({id})=>{
    const res = await axios.get(`https://evacc-backend45.onrender.com/Vaccine/${id}`).catch((err) => console.log(err));
    // console.log(res);
    if (res.status !== 200) {
      return console.log("No Data");
    }
  
    const data = await res.data;
    return data;
};

export const newBooking = async (data) => {
  console.log({
    vaccine: data.vaccine,
    date: data.date,
    user: localStorage.getItem("userId"),
  });
  const user = localStorage.getItem("userId");
  // navigate = useNavigate();
  if(user==null || user==undefined){
    return null;
  }
  const res = await axios
    .post("https://evacc-backend45.onrender.com/Booking/", {
      vaccine: data.vaccine,
      date: data.date,
      user: localStorage.getItem("userId"),
    })
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
};

export const getAllUsers= async () => {
  const res = await axios.get("https://evacc-backend45.onrender.com/user").catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("No Data");
  }

  const data = await res.data;
  return data;
};

export const onAddVaccine= async(data) =>{
    // const res=
    const res = await axios
    .post("https://evacc-backend45.onrender.com/Vaccine/addVaccine", {
      name:data.name,
      when_to_give:data.when_to_give,
      dose:data.dose,
      description:data.description,
      route:data.route,
      site:data.site,
    })
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
};

export const getUserById = async ()=>{
  const user= localStorage.getItem("userId");
  const res = await axios
    .get( `https://evacc-backend45.onrender.com/user/:${user}`, {
    })
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
}