import React, { useState } from "react";

export default function useSignUp() {
  const [nameTyped, setNameTyped] = useState("");

  const storename = (e) => {
    setNameTyped(e.target.value);
  };

  console.log(nameTyped);

  const [surnameTyped, setSurnameTyped] = useState("");
  const storesurname = (e) => {
    setSurnameTyped(e.target.value);
  };
  console.log(surnameTyped);
  const [numberTyped, setnumberTyped] = useState("");
  const storenumber = (e) => {
    setnumberTyped(e.target.value);
  };
  const [emailTyped, setemailTyped] = useState("");
  const storeemail = (e) => {
    setemailTyped(e.target.value);
  };
  console.log(emailTyped);
  const [dateTyped, setdateTyped] = useState("");
  const storedate = (e) => {
    setdateTyped(e.target.value);
  };
  console.log(dateTyped);
  const [languageTyped, setlanguageTyped] = useState("");
  const storelanguage = (e) => {
    setlanguageTyped(e.target.value);
  };
  console.log(languageTyped);

  const [addressTyped, setaddressTyped] = useState("");
  const storeaddress = (e) => {
    setaddressTyped(e.target.value);
  };
  console.log(addressTyped);

  const [postcodeTyped, setPostCodeTyped] = useState("");
  const storepostcode = (e) => {
    setPostCodeTyped(e.target.value);
  };
  console.log(postcodeTyped);





  const [VehicleType, setVehicleType] = useState("");
  const storevehciletype = (e) => {
    setVehicleType(e.target.value);
  };
  console.log(VehicleType);

  const [Vehicleregistration, setVehicleRegistration] = useState("");
  const storeVehicleRegistration = (e) => {
    setVehicleRegistration(e.target.value);
  };
  console.log(Vehicleregistration);

  const [vaninsurancestartdate, setVanInsurance] = useState("");
  const storevaninsurancestartdate = (e) => {
    setVanInsurance(e.target.value);
  };
  console.log(vaninsurancestartdate);

  const [vaninsuranceenddate, setVanInsuranceEndDate] = useState("");
  const storevaninsuranceenddate = (e) => {
    setVanInsuranceEndDate(e.target.value);
  };
  console.log(vaninsuranceenddate);

  const [goodsintransitstartdate, setGoodsInTransitstartdate] = useState("");
  const storeGoodsInTransitDate = (e) => {
    setGoodsInTransitstartdate(e.target.value);
  };
  console.log(goodsintransitstartdate);

  const [goodsintransitenddate, setGoodsInTransitenddate] = useState("");
  const storeGoodsInTransitEndDate = (e) => {
    setGoodsInTransitenddate(e.target.value);
  };
  console.log(goodsintransitenddate);

  const [publicliabilitystartdate, setPublicLiabilityStartDate] = useState("");
  const storePublicLiabilityStartDate = (e) => {
    setPublicLiabilityStartDate(e.target.value);
  };
  console.log(publicliabilitystartdate);
  

  return {
    nameTyped,
    storename,
    surnameTyped,
    storesurname,
    numberTyped,
    storenumber,
    emailTyped,
    storeemail,
    dateTyped,
    storedate,
    languageTyped,
    storelanguage,
    addressTyped,
    storeaddress,
    postcodeTyped,
    storepostcode,
    VehicleType,
    storevehciletype,
    Vehicleregistration,
    storeVehicleRegistration,
    vaninsurancestartdate,
    storevaninsurancestartdate,
    vaninsuranceenddate,
    storevaninsuranceenddate,
    goodsintransitstartdate,
    storeGoodsInTransitDate,
    goodsintransitenddate,
    storeGoodsInTransitEndDate,
    publicliabilitystartdate,
    storePublicLiabilityStartDate,
  };
}
