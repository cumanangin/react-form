import React, { useState, useRef, useEffect } from "react";

const changeNumberToDashCase = (phoneNumber, isZeroStart = false) => {
  let finalVal, firstVal;
  const re = /[^0-9\.]+$/g;
  if (isZeroStart) {
    firstVal = phoneNumber.replace(/\-/g, "");
  } else {
    firstVal = phoneNumber.replace(/\-/g, "").replace(/^0/, "");
  }
  if (!!firstVal) {
    const newVal = firstVal.replace(re, "");
    const splitVal = newVal.match(/.{1,4}/g);
    if (splitVal.length > 0) {
      finalVal = splitVal.join("-");
    }
  } else {
    finalVal = "";
  }
  return finalVal;
};

const Form = () => {
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
  };

  const suratKesungguhan = useRef("");
  const [data, setData] = useState(baseData);
  const [errorMassage, setErrorMassage] = useState(baseError);

  const nameRegex = /^[A-Za-z]*$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneRegex = /^[0-9]{9,14}/;

  // ini bisa dipisah satu", handlePassword, handleName, handleEmail => tujuannya biar readable / clean
  // KISS = keep it simple stupid
  const handleChange = (e) => {
    /*     if(data.nama === [e.target.name]){*/
    // state kalau data banyak, bisa dipisah aja
    // setData => nama, email, phone
    // const [name, setName] = useState("")
    //
    // atau kalau mau pake object, pakai useReducer
    //
    if ([e.target.name] == "phone") {
      setData({
        ...data,
        [e.target.name]: changeNumberToDashCase(e.target.value),
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
    //}
    // setData(
    //   (() => {
    //     if ([e.target.name] == "phone") {
    //       return {
    //         ...data,
    //         [e.target.name]: changeNumberToDashCase(e.target.value),
    //       };
    //     }
    //     return {
    //       ...data,
    //       [e.target.name]: e.target.value,
    //     };
    //   })()
    // );
    // setData({
    //   ...data,
    //   [e.target.name]:
    //     [e.target.name] == "phone"
    //       ? changeNumberToDashCase(e.target.value)
    //       : e.target.value,
    // });

    if ([e.target.name] == "nama") {
      if (nameRegex.test(e.target.value)) {
        setErrorMassage("");
      } else {
        setErrorMassage({ nama: "nama lengkap harus berupa huruf" });
      }
      /* e.preventDefault(); */
    }

    if ([e.target.name] == "email") {
      if (emailRegex.test(e.target.value)) {
        setErrorMassage("");
      } else {
        setErrorMassage({ email: "email tidak sesuai" });
      }
    }

    if ([e.target.name] == "phone") {
      console.log("test");
      console.log(phoneRegex.test(e.target.value));
      if (phoneRegex.test(e.target.value)) {
        console.log("ini sucesss test");
        setErrorMassage("");
      } else {
        setErrorMassage({ phone: "phone tidak sesuai" });
      }
    }
  };

  const handleSubmit = (e) => {
    if (
      errorMassage.nama !== "" &&
      errorMassage.email !== "" &&
      errorMassage !== ""
    ) {
      alert("Terdapat data yang tidak sesuai");
    } else {
      alert(`Data peserta "${data.nama}" diterima !`);
    }
    e.preventDefault();
  };

  const handleReset = () => {
    setData(baseData);
    setErrorMassage("");
  };

  // errorMassage.phone
  // errorMassage["phone"]
  useEffect(() => {
    console.log(errorMassage);
  }, [errorMassage]);

  // buat memantau state / data yg ada di dependency
  // useEffect(() =>{
  //   console.log(data)
  // },[data])

  return (
    <div className="bg-pacific-blue-500 my-4 h-full rounded-3xl">
      <div className="flex justify-center">
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
          <label>
            Nama Lengkap <span className="text-red-orange-900">*</span> :
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
          <div className="flex flex-col gap-y-2">
            <label>
              No.HP <span className="text-red-orange-900">*</span> :
            </label>
            <div className="flex flex-col">
              <input
                required
                className="my-2 pl-2 rounded-3xl h-7  sm:w-1/4 md:w-1/4 lg:w-1/4"
                maxLength={12}
                type="text"
                name="phone"
                value={data.phone}
                onChange={handleChange}
              />
              {!!errorMassage.phone && <span>{errorMassage.phone}</span>}
            </div>
          </div>
          {/* <br />  br itu dipakai di <p>*/}
          {/* background */}
          <label>
            Latar Belakang <span className="text-red-orange-900">*</span> :
            <br />
            <input
              required
              className="my-2"
              type="radio"
              name="background"
              value="IT"
              onChange={handleChange}
            />
            <span className="pl-2">IT</span>
            <input
              className="my-2 ml-5"
              type="radio"
              name="background"
              value="NonIT"
            />
            <span className="pl-2">Non-IT</span>
            <br />
          </label>

          {/* program class */}
          <label>
            Kelas Coding yang Dipilih{" "}
            <span className="text-red-orange-900">*</span> :
            <br />
            <select
              className="my-2 rounded-3xl h-7 "
              name="program"
              id="program"
              value={baseData.program}
              onChange={handleChange}
            >
              <option value="">-- Pilih Salah Satu Program --</option>
              <option value="Coding Backend with Golang">
                Coding Backend with Golang
              </option>
              <option value="Coding Frontend with ReactJS">
                Coding Frontend with ReactJS
              </option>
              <option value="Fullstack Developer">Fullstack Developer</option>
            </select>
            <br />
          </label>

          {/* file */}
          <label>
            Foto Surat Kesungguhan{" "}
            <span className="text-red-orange-900">*</span> :
            <br />
            <input className="my-2" type="file" refs={suratKesungguhan} />
            <br />
          </label>

          {/* harapan */}
          <label>
            Harapan Untuk Coding Bootcamp ini :
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
