import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-B8rYRX2K.js";import{M as i}from"./index-anyjW_jC.js";import"./index-D4lIrffr.js";import"./Button-n9EotAj1.js";import"./iframe-C2UyEiWi.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting started"}),`
`,e.jsx(r.h1,{id:"getting-started",children:"Getting started"}),`
`,e.jsxs(r.p,{children:["This library was built using ",e.jsx("a",{href:"https://styled-components.com/",target:"_blank",rel:"noreferrer noopener",children:e.jsx(r.code,{children:"styled-components"})})," and ",e.jsx("a",{href:"https://reactrouter.com/",target:"_blank",rel:"noreferrer noopener",children:e.jsx(r.code,{children:"react-router"})}),". Unfortunately some components will not work on projects not using ",e.jsx(r.code,{children:"react-router-dom"}),", so this works only on projects using ",e.jsx("a",{href:"https://vite.dev/",target:"_blank",rel:"noreferrer noopener",children:e.jsx(r.code,{children:"Vite"})}),". See the section ",e.jsx(r.a,{href:"/docs/cli-and-boilerplates--docs",children:e.jsx(r.code,{children:"CLI and Boilerplates"})})," to generate a boilerplate using this library."]}),`
`,e.jsx(r.h2,{id:"install-in-your-project",children:"Install in your project"}),`
`,e.jsx(r.p,{children:"Open your app in a terminal and run:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-shell",children:`$ npm i tsx-library-julseb
`})}),`
`,e.jsxs(r.p,{children:["Then, open your ",e.jsx(r.code,{children:"main.tsx"})," file and add this line:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-javascript",children:`import "tsx-library-julseb/index.css"
`})}),`
`,e.jsx(r.h2,{id:"overrides",children:"Overrides"}),`
`,e.jsxs(r.p,{children:["To override a variable, you can create a ",e.jsx(r.code,{children:".css"})," file and import it in your ",e.jsx(r.code,{children:"main.tsx"})," after the library's CSS:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-javascript",children:`import "tsx-library-julseb/index.css"
import "./styles/<your-file>.css"
`})}),`
`,e.jsxs(r.p,{children:["Then, in your new ",e.jsx(r.code,{children:".css"})," file, create a ",e.jsx(r.code,{children:":root"})," element and change the variables:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root {
	--color-light-primary-500: #445BE4;
}
`})}),`
`,e.jsx(r.h2,{id:"typescript",children:"TypeScript"}),`
`,e.jsx(r.p,{children:"For TypeScript users, you can import types in needed components with this file:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-javascript",children:`import type { <Type> } from "tsx-library-julseb/types"
`})}),`
`,e.jsx(r.p,{children:"If you want to use the components' types, you can import them like this:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-javascript",children:`import type { <Type> } from "tsx-library-julseb/component-props"
`})})]})}function m(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{m as default};
