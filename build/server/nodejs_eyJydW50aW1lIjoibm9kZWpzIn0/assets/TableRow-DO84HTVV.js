import { jsxs, jsx } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { B as Button } from "./server-build-CKDFL2Wv.js";
import "node:stream";
import "@react-router/node";
import "react-router";
import "isbot";
import "react-dom/server";
import "react";
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
const TableRow = ({ name, value, onClick }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 items-center w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center font-medium text-purple-600", children: name }),
    /* @__PURE__ */ jsx("div", { className: "text-center font-medium text-purple-600", children: value }),
    /* @__PURE__ */ jsx("div", { className: " flex justify-center items-center", children: /* @__PURE__ */ jsxs(Button, { variant: "custom", type: "submit", onClick, children: [
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
          className: "lucide lucide-trash2 lucide-trash-2 h-4 w-4",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ jsx("path", { d: "M10 11v6" }),
            /* @__PURE__ */ jsx("path", { d: "M14 11v6" }),
            /* @__PURE__ */ jsx("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }),
            /* @__PURE__ */ jsx("path", { d: "M3 6h18" }),
            /* @__PURE__ */ jsx("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })
          ]
        }
      ),
      t("variables.delete")
    ] }) })
  ] });
};
export {
  TableRow as default
};
