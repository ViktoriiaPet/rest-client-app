import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { B as Button } from "./server-build-CKDFL2Wv.js";
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
        className: "flex bg-transparent py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm h-9 w-full rounded-md border px-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 disabled:cursor-not-allowed disabled:opacity-50 border-pink-300"
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
        className: "flex bg-transparent py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm h-9 w-full rounded-md border px-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 disabled:cursor-not-allowed disabled:opacity-50 border-pink-300"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: " flex justify-center items-center", children: /* @__PURE__ */ jsxs(Button, { variant: "custom", type: "submit", onClick: handleAdd, children: [
      /* @__PURE__ */ jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "lucide lucide-plus mr-2 h-4 w-4",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
            /* @__PURE__ */ jsx("path", { d: "M12 5v14" })
          ]
        }
      ),
      t("variables.addButton")
    ] }) })
  ] });
};
export {
  VariablesAddBar as default
};
