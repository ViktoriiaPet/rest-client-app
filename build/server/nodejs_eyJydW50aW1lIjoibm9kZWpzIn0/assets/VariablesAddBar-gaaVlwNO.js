import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { B as Button } from "./server-build-CEPa8WgQ.js";
import "node:stream";
import "@react-router/node";
import "react-router";
import "isbot";
import "react-dom/server";
import "react-redux";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "i18next";
import "i18next-browser-languagedetector";
import "@radix-ui/react-switch";
import "clsx";
import "tailwind-merge";
import "@reduxjs/toolkit";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-avatar";
import "react-icons/fa";
import "zod";
import "@radix-ui/react-dialog";
import "lucide-react";
import "react-router-dom";
import "cookie";
const VariablesAddBar = ({ onAdd }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const handleAdd = () => {
    if (!name.trim() || !value.trim()) return;
    onAdd(name, value);
    setName("");
    setValue("");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        name: "variableName",
        type: "text",
        placeholder: t("variables.variableName"),
        value: name,
        onChange: (e) => {
          setName(e.target.value);
        },
        className: "pl-10 pr-2 w-full bg-pink-100 border border-purple-400 text-purple-500 placeholder-purple-300 rounded-lg focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap"
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        name: "variableValue",
        type: "text",
        placeholder: t("variables.variableValue"),
        value,
        onChange: (e) => {
          setValue(e.target.value);
        },
        className: "pl-10 pr-2 w-full bg-pink-100 border border-purple-400 text-purple-500 placeholder-purple-300 rounded-lg focus:outline-none focus:border-purple-600 font-inter text-xl overflow-x-auto whitespace-nowrap"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: " flex justify-center items-center", children: /* @__PURE__ */ jsx(Button, { variant: "custom", type: "submit", onClick: handleAdd, children: t("variables.addButton") }) })
  ] });
};
export {
  VariablesAddBar as default
};
