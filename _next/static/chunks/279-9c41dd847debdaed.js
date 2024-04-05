"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{9348:function(e,t,n){var l=n(7437),s=n(4033),r=n(2265),a=n(6691),c=n.n(a),i=n(9874),o=n(6689),x=n(1396),d=n.n(x),m=n(2601);t.Z=e=>{let t=(0,s.usePathname)();m.env.NEXT_PUBLIC_REACT_APP_BACKEND;let[n,a]=(0,r.useState)([]),[x,h]=(0,r.useState)(!1);async function update(){let e=await fetch("pages.json"),t=await e.json(),n=[];for(let e of t.data)n.push(e);a(n)}return(0,r.useEffect)(()=>{update()},[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"navbar bg-".concat(e.bgColor),children:[(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsx)(c(),{className:"mx-2 lg:mx-10 w-[69px]",width:100,height:100,src:"/images/ffp-logo-12.png",alt:"FFP logo"})}),(0,l.jsx)("div",{className:"flex lg:hidden",children:(0,l.jsxs)("button",{type:"button",className:"mx-2 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:()=>h(!0),children:[(0,l.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,l.jsx)(i.Z,{className:"h-6 w-6 text-".concat(e.textColor),"aria-hidden":"true"})]})}),(0,l.jsx)("div",{className:"hidden pr-14 lg:flex lg:flex-none lg:text-".concat(e.textColor),children:(0,l.jsx)("ul",{className:"menu menu-horizontal px-1",children:n.map((e,n)=>(0,l.jsx)(d(),{className:t==e.attributes.pageRoute?"activelink mx-3 text-[19px] text-primary hover:text-secondary hover:underline":"mx-3 text-[19px] text-primary hover:text-secondary hover:underline",href:e.attributes.pageRoute,children:e.attributes.pageTitle},n))})}),x&&(0,l.jsxs)("div",{className:"lg:hidden",onClick:()=>h(!1),children:[(0,l.jsx)("div",{className:"fixed inset-0 z-10"}),(0,l.jsxs)("div",{className:"absolute font-inter inset-y-0 right-0 z-10 w-full overflow-y-clip bg-".concat(e.bgColor," px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border-l-8 border-").concat(e.bgColor),children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("a",{href:"/",className:"-m-1.5 p-1.5",children:[(0,l.jsx)("span",{className:"sr-only",children:"FactsFindersPro"}),(0,l.jsx)(c(),{src:"/images/ffp-logo-12.png",className:"h-14 md:h-12 lg:h-16",width:100,height:100,alt:"FFP Logo"})]}),(0,l.jsxs)("button",{type:"button",className:"-m-2.5 rounded-md p-2.5 pt-0 text-gray-700",onClick:()=>h(!1),children:[(0,l.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,l.jsx)(o.Z,{className:"h-6 w-6 text-".concat(e.textColor),"aria-hidden":"true"})]})]}),(0,l.jsx)("div",{className:"mt-6 flow-root",children:(0,l.jsx)("div",{className:"-my-6 divide-y divide-stone-100/20",children:(0,l.jsx)("ul",{className:"menu menu-vertical py-1 gap-2 pl-1 lg:menu-horizontal lg:px-1",children:n.map((e,t)=>(0,l.jsx)(d(),{className:"mx-3 text-primary hover:text-secondary hover:underline",href:e.attributes.pageRoute,children:e.attributes.pageTitle},t))})})})]})]})]})})}},623:function(e,t,n){n.d(t,{E:function(){return PageDisplay}});var l=n(7437),s=n(2265);function getWindowDimensions(){let{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}}var r=n(3853),a=n(1396),c=n.n(a);let HeroPage=e=>{var t;let[n,a]=(0,s.useState)({width:980,height:551.25}),{height:i,width:o}=function(){let[e,t]=(0,s.useState)(getWindowDimensions());return(0,s.useEffect)(()=>{function handleResize(){t(getWindowDimensions())}return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]),e}(),x={height:"".concat(n.height),width:"".concat(n.width)},d=o<=640?"pt-[100px]":"pt-[110px]",m=(0,s.useCallback)(()=>{o<=640?a({width:350,height:197}):o<=768?a({width:550,height:309}):o<=1024?a({width:750,height:422}):o<=1280&&a({width:850,height:478})},[o]);return(0,s.useEffect)(()=>{m()},[o,m]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"grid w-screen grid-rows-1 lg:grid-rows-2",children:[(0,l.jsx)("div",{className:"inline-block lg:min-h-[10rem] bg-neutral"}),(0,l.jsxs)("div",{className:"".concat(d," sm:pt-[300px] md:pt-[405px] lg:pt-[144px] xl:pt-[180px] 2xl:pt-[210px] pb-8 inline-block min-h-[20rem] bg-primary text-center items-center"),children:[(0,l.jsx)("h1",{className:"text-white text-2xl font-bold pt-8 2xl:pt-0 ",children:e.content.title}),(0,l.jsx)("h2",{className:"text-white text-xl font-black",children:e.content.subTitle}),(0,l.jsx)("p",{className:" text-white home_page_text",children:e.content.content}),e.content.buttonName1?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary bg-error text-white hover:bg-[#088395]",children:(0,l.jsx)(c(),{href:null!==(t=e.content.buttonLinkUrl1)&&void 0!==t?t:"",rel:"noopener noreferrer",target:"_blank",children:e.content.buttonName1})}):null]})]}),e.content.youTubeVideoId&&null!=e.content.youTubeVideoId?(0,l.jsx)("div",{className:"absolute h-min lg:h-0 inset-20 flex justify-center text-center lg:items-center z-0",children:(0,l.jsx)("div",{className:"w-fit h-min lg:h-0",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"relative lg:pt-10",children:(0,l.jsx)(r.Z,{videoId:e.content.youTubeVideoId,opts:x})}),(0,l.jsx)("br",{})]})})}):null]})})})};var i=n(1104),o=n(5082),x=n(8809);let ListPage=e=>{var t;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{children:["list"==e.content.contentType?(0,l.jsxs)("div",{className:"bg-neutral min-h-screen min-w-full flex-col lg:flex-row-reverse",children:[(0,l.jsx)("h1",{className:"mb-10 text-center mt-2 text-4xl font-bold leading-none tracking-tight text-primary",children:null!==(t=e.pageTitle)&&void 0!==t?t:""}),e.content.listContent.map((e,t)=>(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"text-center mt-2 mb-4 text-lg font-bold leading-none tracking-tight text-primary",children:e.title}),(0,l.jsx)("h2",{className:"text-center mb-4 text-md leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl",children:e.subTitle}),(0,l.jsx)(i.U,{className:"text-center min-w-full text-normal lg:text-xl sm:px-16 xl:px-48 text-black prose",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content}),(0,l.jsx)("br",{})]},t))]}):null,"steps"==e.content.contentType?(0,l.jsx)("div",{className:"px-4 pt-10 lg:px-20 bg-white flex justify-center flex-grow",children:(0,l.jsx)("ul",{className:"pb-1 lg:pb-0 steps steps-vertical",children:e.content.listContent.map((e,t)=>(0,l.jsxs)("li",{"data-content":"",className:"step data- step-".concat(0==t?"warning":1==t?"accent":"secondary"),children:[" ",(0,l.jsxs)("div",{className:"text-left pt-6",children:[(0,l.jsx)("h1",{className:"text-[40px] font-bold leading-none text-primary xl:pl-16 xl:pr-0",children:e.title}),(0,l.jsx)(i.U,{className:"text-xl text-normal p-5 leading-none lg:text-xl sm:px-16 xl:pl-16 xl:pr-0 text-primary prose h-44",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content})]})]},t))})}):null]})})},d={title:"",subTitle:null,content:null,backgroundImageUrl:null,imageUrl1:null,imageUrl2:null,imageUrl3:null,buttonName1:null,buttonName2:null,buttonLinkUrl1:null,contentType:"",youTubeVideoId:null,splitContents:[],cardContents:[],listContent:[],socialMedia:[],subContent1:null,showTitle:!1,textCenter:!1,bgColor:null,textColor:null,buttonColor:null,buttonTextColor:null,cardHeight:null,cardWidth:null,border:null,borderColor:null,name:null,intro:null,linkedIn:null},SocialMedia=e=>{var t,n,r,a,c,i,o;let x={displayName:null,url:null,type:null},[d,m]=(0,s.useState)(x),[h,p]=(0,s.useState)(x),[u,g]=(0,s.useState)(x),[j,b]=(0,s.useState)(x),[f,v]=(0,s.useState)(x),[w,N]=(0,s.useState)(x),[y,C]=(0,s.useState)(x);return(0,s.useEffect)(()=>{e.data.map((e,t)=>{switch(e.type){case"twitter":p(e);break;case"linkedIn":b(e);break;case"instagram":g(e);break;case"facebook":m(e);break;case"youtube":v(e);break;case"tiktok":N(e);break;case"reddit":C(e)}})},[e.data]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("ul",{className:"menu menu-horizontal flex items-center pr-14",children:[e.data&&d&&d.type?(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"mx-2 px-0",href:null!==(t=d.url)&&void 0!==t?t:"",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})})})}):"",e.data&&f&&f.type?(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"mx-2 px-0",href:null!==(n=f.url)&&void 0!==n?n:"",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"25",height:"25",viewBox:"0 0 30 30",children:(0,l.jsx)("path",{d:"M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"})})})}):"",e.data&&h&&h.type?(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"mx-2 px-0",href:null!==(r=h.url)&&void 0!==r?r:"",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"25",height:"25",viewBox:"0 0 30 30",children:(0,l.jsx)("path",{d:"M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"})})})}):"",e.data&&u&&u.type?(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"mx-2 px-0",href:null!==(a=u.url)&&void 0!==a?a:"",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})}):"",e.data&&j&&j.type?(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"mx-2 px-0",href:null!==(c=j.url)&&void 0!==c?c:"",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})})})}):"",e.data&&w&&w.type?(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"mx-2 px-0",href:null!==(i=w.url)&&void 0!==i?i:"",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"25",height:"25",viewBox:"0 0 30 30",children:(0,l.jsx)("path",{d:"M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"})})})}):"",e.data&&y&&y.type?(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"mx-2 px-0",href:null!==(o=y.url)&&void 0!==o?o:"",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"25",height:"25",viewBox:"0 0 30 30",children:(0,l.jsx)("path",{d:"M 17.662109 2 C 15.565005 2 14 3.7131367 14 5.6621094 L 14 9.0351562 C 11.24971 9.1810926 8.7344872 9.9143634 6.7265625 11.064453 C 5.9527826 10.321405 4.9166871 9.991448 3.9121094 9.9921875 C 2.8229214 9.9929893 1.7094525 10.370413 0.94140625 11.234375 L 0.92382812 11.253906 L 0.90625 11.273438 C 0.16947928 12.194228 -0.12225605 13.427747 0.07421875 14.652344 C 0.25365009 15.770711 0.90137168 16.893419 2.0273438 17.628906 C 2.0199689 17.753058 2 17.874618 2 18 C 2 22.962 7.832 27 15 27 C 22.168 27 28 22.962 28 18 C 28 17.874618 27.980031 17.753058 27.972656 17.628906 C 29.098628 16.893419 29.74635 15.770711 29.925781 14.652344 C 30.122256 13.427747 29.830521 12.194228 29.09375 11.273438 L 29.076172 11.253906 L 29.058594 11.234375 C 28.290448 10.370294 27.177168 9.9929893 26.087891 9.9921875 C 25.08323 9.991448 24.046988 10.321133 23.273438 11.064453 C 21.265513 9.9143634 18.75029 9.1810926 16 9.0351562 L 16 5.6621094 C 16 4.6830821 16.565214 4 17.662109 4 C 18.182797 4 18.817104 4.2609042 19.810547 4.609375 C 20.650361 4.9039572 21.743308 5.2016984 23.140625 5.2910156 C 23.474875 6.2790874 24.402814 7 25.5 7 C 26.875 7 28 5.875 28 4.5 C 28 3.125 26.875 2 25.5 2 C 24.561213 2 23.747538 2.5304211 23.320312 3.3007812 C 22.125831 3.2346294 21.248238 2.9947078 20.472656 2.7226562 C 19.568849 2.4056271 18.738422 2 17.662109 2 z M 3.9121094 11.992188 C 4.3072494 11.991896 4.6826692 12.095595 4.9921875 12.263672 C 3.8881963 13.18517 3.0505713 14.261821 2.5449219 15.4375 C 2.2764358 15.106087 2.114647 14.734002 2.0507812 14.335938 C 1.9430146 13.664243 2.1440212 12.966045 2.4628906 12.552734 C 2.7642172 12.228395 3.3144613 11.992626 3.9121094 11.992188 z M 26.085938 11.992188 C 26.683756 11.992627 27.235874 12.22849 27.537109 12.552734 C 27.855979 12.966045 28.056985 13.664243 27.949219 14.335938 C 27.885353 14.734002 27.723564 15.106087 27.455078 15.4375 C 26.949429 14.261821 26.111804 13.18517 25.007812 12.263672 C 25.316626 12.095792 25.690955 11.991896 26.085938 11.992188 z M 10 14 C 11.105 14 12 14.895 12 16 C 12 17.105 11.105 18 10 18 C 8.895 18 8 17.105 8 16 C 8 14.895 8.895 14 10 14 z M 20 14 C 21.105 14 22 14.895 22 16 C 22 17.105 21.105 18 20 18 C 18.895 18 18 17.105 18 16 C 18 14.895 18.895 14 20 14 z M 20.238281 19.533203 C 19.599281 21.400203 17.556 23 15 23 C 12.444 23 10.400719 21.400969 9.7617188 19.667969 C 10.911719 20.600969 12.828 21.267578 15 21.267578 C 17.172 21.267578 19.088281 20.600203 20.238281 19.533203 z"})})})}):""]})})},SplitPage=e=>{var t,n;let[r,a]=(0,s.useState)(d),[m,h]=(0,s.useState)(d);return(0,s.useEffect)(()=>{e.content.splitContents&&(a(e.content.splitContents[0]),h(e.content.splitContents[1]))},[e.content]),(0,l.jsx)(l.Fragment,{children:e.content?(0,l.jsxs)("div",{className:"flex w-full min-h-screen",children:[(0,l.jsxs)("div",{className:"p-10 grid flex-grow bg-neutral text-primary place-items-center",children:[(0,l.jsx)("h1",{className:"text-5xl font-bold text-primary",children:r.title}),(0,l.jsx)(i.U,{className:"prose",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:r.content}),r.buttonName1?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary bg-primary text-white",children:(0,l.jsx)(c(),{href:null!==(t=r.buttonLinkUrl1)&&void 0!==t?t:"",children:r.buttonName1})}):(0,l.jsx)("p",{})]}),(0,l.jsxs)("div",{className:"p-10 grid min-h-full flex-grow place-items-center bg-primary text-white",children:[(0,l.jsx)("h1",{className:"text-5xl font-bold",children:m.title}),(0,l.jsx)(i.U,{className:"prose py-6 text-white",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:m.content}),m.buttonName1?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary bg-white ",children:(0,l.jsx)(c(),{href:null!==(n=m.buttonLinkUrl1)&&void 0!==n?n:"",children:m.buttonName1})}):(0,l.jsx)("p",{}),(0,l.jsx)(SocialMedia,{data:e.content.socialMedia})]})]}):null})},CardsPage=e=>((0,s.useEffect)(()=>{},[e.content]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"bg-white px-4 lg:px-24 margin-top-title",children:[(0,l.jsxs)("div",{children:[e.content.title?(0,l.jsx)("h1",{className:"mx-4 lg:mx-8 mt-10 text-key-features font-bold leading-none text-primary",children:e.content.title}):null,e.content.content?(0,l.jsx)(i.U,{className:"pb-10 lg:pb-0 ml-4 lg:ml-8 mt-5 first-line:prose text-normal text-primary",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content.content}):null]}),(0,l.jsx)("div",{className:"px-0 lg:px-20 w-full bg-white pt-10 ".concat(e.content.cardWidth?"grid grid-col-2 lg:grid-cols-3 gap-4 text-center justify-items-center":"flex flex-col lg:flex-row"),children:e.content?e.content.cardContents.map((e,t)=>{var n;return(0,l.jsxs)("div",{className:"mx-0 my-2 lg:m-2 card-padding rounded-none card ".concat(e.cardHeight?"flex-wrap":"flex-grow"," ").concat(e.cardWidth?"w-"+e.cardWidth:"lg:w-[289px] w-full"," ").concat(e.buttonName1?"text-center items-center justify-center bg-[#F5F5F5]":e.imageUrl1?"text-center items-center justify-center bg-[#F5F5F5]":"text-left items-start justify-start"," ").concat(e.border?"".concat(e.border," border-secondary"):"","\n                  flex"),children:[e.title?(0,l.jsx)("h1",{className:"text-4xl font-bold leading-none text-primary",children:e.title}):null,e.imageUrl1?(0,l.jsx)("img",{src:"/images/".concat(e.imageUrl1)}):null,(0,l.jsx)(i.U,{className:"first-line:prose text-normal text-primary text-lg\n                      ".concat(e.buttonName1?"m-5":e.imageUrl1?"m-2":"ml-0 mt-4"," \n                    "),remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content}),e.buttonName1?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary bg-secondary text-white text-lg",children:(0,l.jsx)(c(),{href:null!==(n=e.buttonLinkUrl1)&&void 0!==n?n:"",rel:"noopener noreferrer",target:"_blank",children:e.buttonName1})}):null]},t)}):null})]})})),FooterPage=e=>{let[t,n]=(0,s.useState)([]);return(0,s.useEffect)(()=>{let t=[],s=[];e.data.links.map((e,n)=>{0!=n&&n%2==0?(s.push((0,l.jsx)("li",{children:(0,l.jsx)("a",{href:e.url,className:"pl-0",children:e.displayName})})),t.push((0,l.jsx)("div",{className:"flex-wrap",children:(0,l.jsx)("ul",{className:"menu w-56",children:s})})),s=[]):s.push((0,l.jsx)("li",{children:(0,l.jsx)("a",{href:e.url,className:"lg:pl-0",children:e.displayName})}))}),s.length>0&&(t.push((0,l.jsx)("ul",{className:"flex justify-between menu menu-horizontal text-center lg:menu-vertical w-56",children:s})),s=[]),n(t)},[e.data]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"footer-container-bottom-text",children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{children:(0,l.jsx)(SocialMedia,{data:e.data.socialMedia})})]})})};var m=n(4033);let ContentOnlyPage=e=>{var t,n;console.log(e.content.content);let s=(0,m.usePathname)();return"/crowd-funding"===s?(0,l.jsxs)(l.Fragment,{children:[null!=e.content.title?"":(0,l.jsx)("div",{className:"mt-10",children:" "}),(0,l.jsx)("div",{className:"flex flex-col lg:flex-row w-full items-center ",children:(0,l.jsxs)("div",{className:"".concat(e.content.showTitle?"text-start":"text-left"," lg:screen pl-5 lg:pl-10 xl:pl-20 pr-5 py-10 grid flex-grow  bg-").concat(e.content.bgColor," place-items-center"),children:[e.content.showTitle?(0,l.jsxs)("p",{className:"text-".concat(e.content.textColor," text-2xl font-bold product-vision-page-title"),children:[e.content.title,null!=e.content.title?(0,l.jsx)("div",{className:"mt-10",children:" "}):""]}):null,(0,l.jsx)(i.U,{className:"text-center text-".concat(e.content.textColor," text-normal max-w-4xl prose"),remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content.content})]})})]}):(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row w-full gap-10 lg:gap-24 pt-4 items-center",children:[(0,l.jsxs)("div",{className:"".concat(e.content.showTitle?"text-start":"text-left"," lg:screen pl-5 lg:pl-10 xl:pl-20 pr-5 ").concat("/why-ffp"==s?"":"py-10"," grid flex-grow bg-").concat(e.content.bgColor," place-items-center"),children:[e.content.showTitle?(0,l.jsx)("p",{className:"text-".concat(e.content.textColor," text-2xl font-bold product-vision-page-title"),children:e.content.title}):null,e.content.subTitle?(0,l.jsxs)("p",{className:"text-".concat(e.content.textColor," text-2xl product-vision-page-title"),children:[(0,l.jsx)("br",{}),e.content.subTitle]}):null,(0,l.jsx)(i.U,{className:"my-5 ".concat(e.content.textCenter?"text-center":""," text-").concat(e.content.textColor," text-normal max-w-4xl prose"),remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content.content+(e.content.subContent1?"<br/><br/>"+e.content.subContent1:"")}),e.content.buttonName1?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary button-width-product-vision bg-".concat(e.content.buttonColor," text-").concat(e.content.buttonTextColor," hover:bg-[#088395]"),children:(0,l.jsx)(c(),{href:null!==(t=e.content.buttonLinkUrl1)&&void 0!==t?t:"",rel:"noopener noreferrer",target:"_blank",children:e.content.buttonName1})}):null,e.content.buttonName2?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary bg-".concat(e.content.buttonColor," text-").concat(e.content.buttonTextColor," hover:bg-error"),children:(0,l.jsx)(c(),{href:null!==(n=e.content.buttonLinkUrl1)&&void 0!==n?n:"",rel:"noopener noreferrer",target:"_blank",children:e.content.buttonName2})}):null,(0,l.jsx)(SocialMedia,{data:e.content.socialMedia})]}),e.content.imageUrl1?(0,l.jsx)("div",{className:" grid py-30 lg:pr-20 bg-".concat(e.content.bgColor,' text-center place-items-center"'),children:(0,l.jsx)("img",{src:"/images/".concat(e.content.imageUrl1),width:"".concat("/why-ffp"==s?"700":"")})}):null]})})},JoinOurTeamPage=e=>{var t;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex bg-white flex-col items-center gap-2 lg:flex-row f-white ".concat((e.content.showTitle,"")),children:[e.content.imageUrl1?(0,l.jsx)("div",{className:" basis-1/2 px-5 lg:pl-5 lg:pr-3 lg:py-5 min-h-full grid flex-grow text-center lg:place-items-center",children:(0,l.jsx)("img",{className:" object-contain h-96 w-auto ",src:"/images/".concat(e.content.imageUrl1)})}):null,(0,l.jsx)("div",{className:"flex flex-col text-center px-5 lg:text-left lg:basis-1/2",children:(0,l.jsxs)("div",{children:[e.content.showTitle?(0,l.jsx)("p",{className:"text-".concat(e.content.textColor," text-3xl font-bold"),children:e.content.title}):null,(0,l.jsx)(i.U,{className:"py-3 text-".concat(e.content.textColor," text-normal prose"),remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content.content+(e.content.subContent1?"<br/><br/>"+e.content.subContent1:"")}),e.content.buttonName1?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary bg-".concat(e.content.buttonColor," text-").concat(e.content.buttonTextColor),children:(0,l.jsx)(c(),{href:null!==(t=e.content.buttonLinkUrl1)&&void 0!==t?t:"",rel:"noopener noreferrer",target:"_blank",children:e.content.buttonName1})}):null,(0,l.jsx)(SocialMedia,{data:e.content.socialMedia})]})})]})})},TeamMemberPage=e=>{var t;return(0,l.jsxs)("div",{className:"px-5 lg:pl-20 lg:pr-20 my-10",children:[e.content.showTitle?(0,l.jsx)("p",{className:"my-5 text-".concat(e.content.textColor," text-3xl font-bold"),children:e.content.title}):null,(0,l.jsxs)("div",{className:"background-color-modified",children:[(0,l.jsxs)("div",{className:"my-10 flex flex-col lg:flex-row",children:[e.content.imageUrl1?(0,l.jsx)("div",{className:" pl-10 pr-10",children:(0,l.jsx)("img",{className:" object-contain h-48 w-auto ",src:"/images/".concat(e.content.imageUrl1)})}):null,(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(i.U,{className:"text-".concat(e.content.textColor," text-xl prose font-bold"),remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content.name}),(0,l.jsx)("a",{className:"mx-5 mt-2",href:null!==(t=e.content.linkedIn)&&void 0!==t?t:"",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})]}),(0,l.jsx)(i.U,{className:"prose text-sm text-primary",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content.intro?e.content.intro:""})]})]}),(0,l.jsx)("div",{children:e.content.content?(0,l.jsx)(i.U,{className:"px-10 text-sm text-primary",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content.content}):null}),(0,l.jsxs)("div",{className:"",children:[e.content.cardContents?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("hr",{className:"w-[95%] h-0.5 mx-auto my-8 border-0  bg-[#DFDFDF]"}),(0,l.jsx)(i.U,{className:"my-5 px-10 text-".concat(e.content.textColor," text-xl prose font-bold"),remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:"Open Roles"}),(0,l.jsx)("div",{className:"px-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-4 text-center",children:e.content?e.content.cardContents.map((e,t)=>(0,l.jsx)("div",{className:"m-0.1 p-2 card bg-neutral-200 justify-center place-items-center",children:e.title?(0,l.jsx)("h1",{className:"text-normal font-bold text-primary",children:e.title}):null},t)):null})]}):null,(0,l.jsx)("hr",{className:"px-10 my-10 bg-white "})]})]})]})},WhyJoinPage=e=>(console.log(e.content.bgColor),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"bg-".concat(e.content.bgColor," px-10"),children:e.content.cardContents?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"width-m",children:(0,l.jsx)(i.U,{className:"pt-20 pb-10 text-primary text-3xl  font-bold text-center underlined",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:"Why Join Our Startup"})}),(0,l.jsx)("div",{className:"px-5 pb-20 w-full grid grid-cols-1 lg:grid-cols-4 gap-1 text-center",children:e.content?e.content.cardContents.map((e,t)=>(0,l.jsxs)("div",{className:"m-0.1 p-2 card   place-items-center",children:[e.title?(0,l.jsx)("h1",{className:"text-sm font-bold text-primary",children:e.title}):null,e.imageUrl1?(0,l.jsx)("img",{src:"/images/".concat(e.imageUrl1)}):null,(0,l.jsx)(i.U,{className:"m-2 first-line:prose text-sm text-primary",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content})]},t)):null})]}):null})})),PageDisplay=e=>{let[t,n]=(0,s.useState)([]);(0,s.useEffect)(()=>{update()},[e.data]);let update=()=>{let t=[];e.data&&e.data.attributes.content.map((n,s)=>{"hero"==n.contentType&&t.push((0,l.jsx)(HeroPage,{content:n},s)),["list","steps"].includes(n.contentType)&&t.push((0,l.jsx)(ListPage,{content:n,pageTitle:e.data.attributes.pageTitle},s)),"split"==n.contentType&&t.push((0,l.jsx)(SplitPage,{content:n},s)),"cards"==n.contentType&&t.push((0,l.jsx)(CardsPage,{content:n},s)),"content-only"==n.contentType&&t.push((0,l.jsx)(ContentOnlyPage,{content:n,showTitle:!0},s)),"join-our-team"==n.contentType&&t.push((0,l.jsx)(JoinOurTeamPage,{content:n,showTitle:!0},s)),"team-member"==n.contentType&&t.push((0,l.jsx)(TeamMemberPage,{content:n,showTitle:!0},s)),"why-join"==n.contentType&&t.push((0,l.jsx)(WhyJoinPage,{content:n,showTitle:!0},s))}),e.data&&e.data.attributes.footer&&t.push((0,l.jsx)(FooterPage,{data:e.data.attributes.footer})),n(t)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{children:t})})}}}]);