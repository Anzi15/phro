"use client"; // Make sure to include this for client-side rendering 

import React, { useRef, useState } from "react";
import InputField from "../components/InputField.jsx";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase/config.js";
import Image from "next/image";

const Page = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [city, setCity] = useState("");
  const [qualification, setQualification] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // Honeypot state to catch bots
  const formRef = useRef(null);

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
      setFullName("");
      setEmail("");
      setCnic("");
      setWhatsappNumber("");
      setQualification("");
    }
  };

  const validatePhoneNumber = (number) => {
    if (!number?.length) {
      setError("");
      return true;
    }
    const regex = /^(\+92|0)?3[0-9]{9}$/; // Validation for phone number
    if (regex.test(number)) {
      setError("");
      return true;
    } else {
      setError("Please enter a valid number (e.g., +923XXXXXXXXX)");
      return false;
    }
  };

  const validateCnic = (cnic) => {
    const regex = /^\d{5}-\d{7}-\d{1}$/; // CNIC validation pattern
    return regex.test(cnic);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Honeypot check
    if (honeypot) {
      toast.error("Spam detected!");
      setLoading(false);
      return;
    }

    if (!validatePhoneNumber(whatsappNumber)) {
      toast.error("Kindly enter a valid WhatsApp number");
      setLoading(false);
    } else if (!validateCnic(cnic)) {
      toast.error("Kindly enter a valid CNIC number (e.g., 12345-1234567-1)");
      setLoading(false);
    } else if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      setLoading(false);
    } else if (city.length <= 0){
      toast.error("Please enter your city name");
      setLoading(false);
    }else {
      try {
        const createdAt = new Date();
        const formattedDate = `${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;

        const volunteerDetails = {
          fullName,
          email,
          cnic,
          whatsappNumber,
          qualification,
          createdAt: formattedDate,
          city
        };

        const msgCollection = collection(db, "volunteer-requests");
        await addDoc(msgCollection, volunteerDetails);
        handleReset();
        toast.success("Volunteer details submitted successfully");
      } catch (e) {
        toast.error("Can't connect to the database, try again later.");
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <main className="py-10 pb-[10rem] flex">
      <Image
        src={"https://i.ibb.co/Fxz5fk3/jake-schumacher-FShcc4u-6b-Y-unsplash.jpg"}
        alt="Donations Pakistan"
        className="h-full hidden md:block"
        height={900}
        width={600}
      />
      <form
        className="flex justify-start items-start md:text-left text-center flex-col md:w-1/2 px-8"
        ref={formRef}
        onSubmit={handleSubmission}
      >
        <div className="my-16 flex flex-col gap-3">
          <h1 className="text-5xl items-center text-center">Become a Volunteer</h1>
          <h3 className="text-lg items-center">Be a part of a better world</h3>
        </div>
        <div className="w-full p-4 flex flex-col gap-4">

          {/* Honeypot field */}
          <input
            type="text"
            style={{ display: "none" }} // Hidden field
            tabIndex="-1"
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            placeholder="Do not fill this field"
          />

          <InputField
            inputType="text"
            valueReturner={setFullName}
            inputAutoComplete={"name"}
            inputValue={fullName}
            requiredInput={true}
            inputName="Full Name"
          />
          <InputField
            inputType="email"
            valueReturner={setEmail}
            inputAutoComplete={"email"}
            inputValue={email}
            requiredInput={true}
            inputName="Email Address"
          />
          <InputField
            inputType="text"
            valueReturner={setCnic}
            inputAutoComplete={"cnic"}
            inputValue={cnic}
            requiredInput={true}
            inputName="CNIC Number (e.g., 12345-1234567-1)"
          />
          <InputField
            inputType="tel"
            valueReturner={setWhatsappNumber}
            inputAutoComplete={"tel"}
            inputValue={whatsappNumber}
            errorMsg={error}
            inputName="Your WhatsApp Number"
            requiredInput={true}
          />
          <InputField
            inputType="text"
            valueReturner={setCity}
            inputAutoComplete={"city"}
            inputValue={city}
            errorMsg={error}
            inputName="Your city"
            requiredInput={true}
          />
          <select
            className="p-3 rounded-md"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            required
          >
            <option value="" disabled>Select Qualification</option>
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>
          <Button className="bg-black flex justify-center" loading={loading} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Page;
