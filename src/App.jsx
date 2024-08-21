// // // App.js

// // import React, { useState } from 'react';

// // const App = () => {
// //   const [inputText, setInputText] = useState('');
// //   const [translatedText, setTranslatedText] = useState('');

// //   const translateText = async () => {
// //     const response = await fetch(`https://api.mymemory.translated.net/get?q=${inputText}&langpair=en|hi`);
// //     const data = await response.json();
// //     setTranslatedText(data.matches[1].translation);
// //     //     setTranslatedText(data.responseData.translatedText);
// //   };

// //   return (
// //     <div className="p-4">
// //       <input
// //         type="text"
// //         value={inputText}
// //         onChange={(e) => setInputText(e.target.value)}
// //         placeholder="Enter text to translate"
// //         className="border border-gray-300 p-2 rounded-md mb-4"
// //       />
// //       <button onClick={translateText} className="bg-blue-500 text-white px-4 py-2 rounded-md">Translate</button>
// //       {translatedText && <p className="mt-4">Translated Text: {translatedText}</p>}
// //     </div>
// //   );
// // };

// // export default App;

import React, { useState, useEffect } from "react";
import ScrollingText from "./ScrollingText";
const App = () => {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [translateFrom, setTranslateFrom] = useState("en-GB");
  const [translateTo, setTranslateTo] = useState("hi-IN");
  const [countries, setCountries] = useState({
    "am-ET": "Amharic",
    // "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    // "bem-ZM": "Bemba",
    // "bi-VU": "Bislama",
    // "bjs-BB": "Bajan",
    // "bn-IN": "Bengali",
    // "bo-CN": "Tibetan",
    // "br-FR": "Breton",
    // "bs-BA": "Bosnian",
    // "ca-ES": "Catalan",
    // "cop-EG": "Coptic",
    // "cs-CZ": "Czech",
    // "cy-GB": "Welsh",
    // "da-DK": "Danish",
    // "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    // "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    // "fi-FI": "Finnish",
    // "fn-FNG": "Fanagalo",
    // "fo-FO": "Faroese",
    "fr-FR": "French",
    // "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    // "ha-NE": "Hausa",
    // "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    // "hr-HR": "Croatian",
    // "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    // "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    // "kk-KZ": "Kazakh",
    // "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    // "ku-TR": "Kurdish",
    // "ky-KG": "Kyrgyz",
    // "la-VA": "Latin",
    // "lo-LA": "Lao",
    // "lv-LV": "Latvian",
    // "men-SL": "Mende",
    // "mg-MG": "Malagasy",
    // "mi-NZ": "Maori",
    // "ms-MY": "Malay",
    // "mt-MT": "Maltese",
    // "my-MM": "Burmese",
    "ne-NP": "Nepali",
    // "niu-NU": "Niuean",
    // "nl-NL": "Dutch",
    // "no-NO": "Norwegian",
    // "ny-MW": "Nyanja",
    // "ur-PK": "Pakistani",
    // "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    // "ps-PK": "Pashto",
    // "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    // "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    // "sg-CF": "Sango",
    // "si-LK": "Sinhala",
    // "sk-SK": "Slovak",
    // "sm-WS": "Samoan",
    // "sn-ZW": "Shona",
    // "so-SO": "Somali",
    // "sq-AL": "Albanian",
    // "sr-RS": "Serbian",
    // "sv-SE": "Swedish",
    // "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    // "tet-TL": "Tetum",
    // "tg-TJ": "Tajik",
    // "th-TH": "Thai",
    // "ti-TI": "Tigrinya",
    // "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    // "tn-BW": "Tswana",
    // "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    // "uz-UZ": "Uzbek",
    // "vi-VN": "Vietnamese",
    // "wo-SN": "Wolof",
    // "xh-ZA": "Xhosa",
    // "yi-YD": "Yiddish",
    // "zu-ZA": "Zulu",
  });

  console.log(fromText);
  console.log(toText);
  useEffect(() => {
    // Fetch translation data here if needed
  }, [translateFrom, translateTo]);

  const handleTranslate = () => {
    if (!fromText) return;
    setToText("Translating...");
    // Make API call to fetch translation data
    // Update the toText state with the translated text
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      fromText
    )}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setToText(data.responseData.translatedText);
      })
      .catch((error) => console.error("Error translating text:", error));
  };
  const handleExchange = () => {
    setFromText(toText);
    setToText(fromText);
    setTranslateFrom(translateTo);
    setTranslateTo(translateFrom);
    handleTranslate();
  };
  const handleChange = (e) => {
    setFromText(e.target.value);
    // handleTranslate();
  };
  // const handleCopyOrSpeak = (text, lang) => {
  //   // Implement copy or speak functionality here
  // };

  const year = new Date().getFullYear(); // Gets the current year


  const [fromtextcopy,setFromtextcopy] = useState("copy")
  const [totextcopy,setTotextcopy] = useState("copy")
  return (
    <>
      <ScrollingText />
      <div className="flex justify-center items-center h-screen">
        <div className="container h-full w-full flex items-center justify-center flex-col mx-4 my-2 ">
          <div className="wrapper flex gap-10 sm:flex-row flex-col-reverse ">
            <div className="text-input relative">
              <textarea
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleTranslate();
                    e.preventDefault();
                  }
                }}
                spellCheck="true"
                className="from-text w-[95%] sm:w-full h-48 text-slate-950 font-semibold outline-none rounded-xl p-5 relative"
                placeholder="Enter text"
                value={fromText}
                // onChange={(e) => setFromText(e.target.value)}
                onChange={handleChange}
              ></textarea>
              {/* translatefrom */}
              <span
                className={`bg-transparent text-xs font-medium text-black text-center p-0.5 leading-none rounded-tr-xl px-3   absolute -translate-y-1/2 translate-x-1/2 left-auto top-2 right-12 sm:right-7 z-40 cursor-pointer ${
                  fromText.length > 0 ? "visible" : "invisible"
                } `}
                readOnly
                onClick={(()=>{
                  navigator.clipboard.writeText(fromText)
                  setFromtextcopy("copied")
                  setTimeout(() => {
                    setFromtextcopy("copy")
                  }, 1250);
                })}
              >
                {fromtextcopy}
              </span>

              <textarea
                spellCheck="true"
                readOnly
                disabled
                className="to-text w-[95%] sm:w-full h-48 text-white font-semibold outline-none rounded-xl p-5 relative"
                placeholder="Translation"
                value={toText}
              ></textarea>
              {/* translateto */}
              <span
                className={`bg-transparent text-xs font-medium text-white text-center p-0.5 leading-none rounded-tr-xl px-3 absolute -translate-y-1/2 translate-x-1/2 left-auto top-[52.5%] right-12 sm:right-7 z-40 cursor-pointer  ${
                  toText.length > 0 ? "visible" : "invisible"
                } `}
                readOnly
                onClick={(()=>{
                  navigator.clipboard.writeText(toText)
                  setTotextcopy("copied")
                  setTimeout(() => {
                    setTotextcopy("copy")
                  }, 1250);
                })}
              >
                {totextcopy}
              </span>
            </div>
            <ul className="controls flex sm:flex-col flex-row gap-4  justify-center items-center">
              <li className="row from text-slate-900 mt-5 text-xl sm:w-10">
                <div className="icons">
                  <i
                    className="fas fa-volume-up"
                    onClick={() => handleCopyOrSpeak(fromText, translateFrom)}
                  ></i>{" "}
                  <i
                    className="fas fa-copy"
                    onClick={() => handleCopyOrSpeak(fromText, translateFrom)}
                  ></i>{" "}
                </div>{" "}
                <select
                  className="px-5 py-3 rounded-[10px] "
                  value={translateFrom}
                  onChange={(e) => setTranslateFrom(e.target.value)}
                >
                  {" "}
                  {/* {Object.keys(countries).map((country_code) => ( */}
                  <option
                    key={"en-GB"}
                    value={"en-GB"}
                    className="text-center font-semibold "
                  >
                    {countries["en-GB"]}
                  </option>
                  {/* ))}{" "} */}
                </select>{" "}
              </li>{" "}
              {/* <li className="exchange" onClick={handleExchange}>
            {" "}
            <i className="fas fa-exchange-alt">g</i>{" "}
          </li>{" "} */}
              <li className="row to text-slate-900 mt-5 text-xl sm:w-10">
                {" "}
                <select
                  className="py-3 rounded-[10px]"
                  value={translateTo}
                  onChange={(e) => setTranslateTo(e.target.value)}
                >
                  {" "}
                  {Object.keys(countries).map((country_code) => (
                    <option
                      key={country_code}
                      value={country_code}
                      className="text-center font-semibold "
                    >
                      {countries[country_code]}
                    </option>
                  ))}{" "}
                </select>{" "}
                {/* <div className="icons">
              {" "}
              <i
                className="fas fa-volume-up"
                onClick={() => handleCopyOrSpeak(toText, translateTo)}
              ></i>{" "}
              <i
                className="fas fa-copy"
                onClick={() => handleCopyOrSpeak(toText, translateTo)}
              ></i>{" "}
            </div>{" "} */}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          {/* <button onClick={handleTranslate}
      className="hover:bg-slate-900 hover:text-white border-2 border-sky-900 px-10 py-4 mt-10 rounded-full transition-all ease-in"
      >Translate Text</button> */}
          <button
            onClick={handleTranslate}
            className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 mt-10 mb-5"
          >
            <span className="relative px-12 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
              Translate Text
            </span>
          </button>{" "}
          <footer className="bg-gray-800 text-white text-center p-4 w-screen fixed bottom-0 mt-16 flex justify-center gap-3 items-center">
            <img src="/video.gif" alt="" className="size-9" />
            <div>
              <p className="text-sm">
                © {year} EchoTranslate. All rights reserved.
              </p>
              <p className="text-sm">Created by Saichandan Gorli</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
export default App;
