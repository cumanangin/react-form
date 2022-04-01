import React, { useState, useRef } from "react";

const Form = () => {
  const nameRegex = /^[A-Za-z]*$/;
  const emailRegex = /[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]]*$/;
  const phoneRegex = /^ [0-9]*$/;

  const handleChange = e => {
/*     if(data.nama === [e.target.name]){*/      
      setData({
        ...data,
        [e.target.name] : e.target.value,
      })
      console.log(data) 
    //}
    if([e.target.name ] == "nama"){
      if(nameRegex.test(e.target.value)){
        setErrorMassage("");
      } else
      {
        setErrorMassage({nama : "nama lengkap harus berupa huruf"});
      }
      /* e.preventDefault(); */
    }else if([e.target.name ] == "email"){
      if(emailRegex.test(e.target.value)){
        setErrorMassage("");
      } else
      {
        setErrorMassage({email : "email tidak sesuai"});
      }
    }
    else if([e.target.name] == "phone"){
      if(phoneRegex.test(e.target.value)){
        setErrorMassage("");
      } else
      {
        setErrorMassage({phone : "phone tidak sesuai"});
      }
    }
  }

   const handleSubmit = (e) => {
    if(errorMassage !== ""){
      alert("Terdapat data yang tidak sesuai")
    }
    else{
      alert(`Data peserta "${data.nama}" diterima !`)
    }
    e.preventDefault();
  }

  const baseData = {
    nama: "",
    email: "",
    phone: "",
    background: "",
    program: "",
    harapan: "",
  };

  
  const baseError = {
    nama: "",
    email: "",
    phone: "",
  }
  
  const suratKesungguhan = useRef('');
  const [data, setData] = useState(baseData);
  const [errorMassage, setErrorMassage] = useState(baseError); 

  return (
    <div className="bg-pacific-blue-500 my-4 h-full rounded-3xl">
{/*       <button onClick={handleChange}>click me</button>
 */}      <div className="flex justify-center">
        <div className="bg-lochmara2-500 w-1/2 mt-2 rounded-full">
          <h2 className="sm:text-xs md:text-sm font-bold lg:flex justify-center text-lg py-3">
            Pendaftaran Peserta Coding Bootcamp
          </h2>
        </div>
      </div>

      {/* FORM */}
      <div className="pl-7">
        <form onSubmit={handleSubmit}>
          {/* nama */}
          <label>Nama Lengkap <span className="text-red-orange-900">*</span> :
          <br />
            <input
              required
              className="my-2 pl-2 rounded-3xl h-7 sm:w-11/12 md:w-11/12 lg:w-11/12"
              type="text"
              name="nama" 
              value={data.nama}
              onChange={handleChange}
            />
            <br />
          <span>{errorMassage.nama}</span>
          <br />
          </label>
          
          {/* email */}
          <label>
            Email <span className="text-red-orange-900">*</span> :
            <br />
            <input
              required
              className="my-2 pl-2 rounded-3xl h-7  sm:w-11/12 md:w-11/12 lg:w-11/12"
              type="text"
              size={94}
              name="email" 
              value={data.email}
              onChange={handleChange}
            />
            <br />
          </label>
          {/* phone number */}
          <label>No.HP <span className="text-red-orange-900">*</span> :
          <br />
          <input
            required
            className="my-2 pl-2 rounded-3xl h-7  sm:w-1/4 md:w-1/4 lg:w-1/4"
            maxLength={12}
            type="text"
            name="phone" 
            value={data.phone}
            onChange={handleChange}
          />
          <br />
          </label>
          {/* background */}
          <label>Latar Belakang <span className="text-red-orange-900">*</span> :
          <br />
          <input
            required
            className="my-2"
            type="radio"
            name="background" 
            value={"IT"}
            /* onChange={handleChange} */
          />
          <span className="pl-2">IT</span>
          <input
            className="my-2 ml-5"
            type="radio"
            name="background" 
            value={"Non-IT"}
          />
          <span className="pl-2">Non-IT</span>
          <br />
          </label>

          {/* program class */}
          <label>Kelas Coding yang Dipilih <span className="text-red-orange-900">*</span> :
          <br />
          <select
            className="my-2 rounded-3xl h-7 "
            name="program"
            id="program" /*  value={initialValue.program} */
          >
            <option value="default">-- Pilih Salah Satu Program --</option>
            <option value="go">Coding Backend with Golang</option>
            <option value="react">Coding Frontend with ReactJS</option>
            <option value="fullstack">Fullstack Developer</option>
          </select>
          <br />
          </label>

          {/* file */}
          <label>Foto Surat Kesungguhan <span className="text-red-orange-900">*</span> : 
          <br />
          <input className="my-2" 
          type="file"
          refs={suratKesungguhan} />
          <br />
          </label>

          {/* harapan */}
          <label>Harapan Untuk Coding Bootcamp ini :
          <br />
          <textarea
            className="sm:w-11/12 md:w-11/12 my-2 pl-2 rounded-2xl"
            name="harapan"
            id="harapan"
            cols="90"
            rows="5"
          ></textarea>
          <br />
          </label>

          {/* button */}
          <button
            type="submit"
            className="bg-malachite-500 px-5 py-1 mr-3 rounded-3xl"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-vermilion-500 px-5 py-1 rounded-3xl"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
