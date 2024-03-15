"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{9348:function(e,t,n){var l=n(7437),s=n(4033),r=n(2265),a=n(6691),c=n.n(a),i=n(9874),o=n(6689),x=n(1396),d=n.n(x),m=n(2601);t.Z=e=>{let t=(0,s.usePathname)();m.env.NEXT_PUBLIC_REACT_APP_BACKEND;let[n,a]=(0,r.useState)([]),[x,h]=(0,r.useState)(!1);async function update(){let e=await fetch("pages.json"),t=await e.json(),n=[];for(let e of t.data)n.push(e);a(n)}return(0,r.useEffect)(()=>{update()},[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"navbar bg-".concat(e.bgColor),children:[(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsx)(c(),{className:"mx-2 lg:mx-10 w-[69px]",width:100,height:100,src:"/images/ffp-logo-12.png",alt:"FFP logo"})}),(0,l.jsx)("div",{className:"flex lg:hidden",children:(0,l.jsxs)("button",{type:"button",className:"mx-2 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:()=>h(!0),children:[(0,l.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,l.jsx)(i.Z,{className:"h-6 w-6 text-".concat(e.textColor),"aria-hidden":"true"})]})}),(0,l.jsx)("div",{className:"hidden lg:flex lg:flex-none lg:text-".concat(e.textColor),children:(0,l.jsx)("ul",{className:"menu menu-horizontal px-1",children:n.map((e,n)=>(0,l.jsx)(d(),{className:t==e.attributes.pageRoute?"activelink mx-3 text-[21px] text-primary hover:text-secondary hover:underline":"mx-3 text-[21px] text-primary hover:text-secondary hover:underline",href:e.attributes.pageRoute,children:e.attributes.pageTitle},n))})}),x&&(0,l.jsxs)("div",{className:"lg:hidden",onClick:()=>h(!1),children:[(0,l.jsx)("div",{className:"fixed inset-0 z-10"}),(0,l.jsxs)("div",{className:"absolute font-inter inset-y-0 right-0 z-10 w-full overflow-y-clip bg-".concat(e.bgColor," px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border-l-8 border-").concat(e.bgColor),children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("a",{href:"/",className:"-m-1.5 p-1.5",children:[(0,l.jsx)("span",{className:"sr-only",children:"FactsFindersPro"}),(0,l.jsx)(c(),{src:"/images/ffp-logo-12.png",className:"h-14 md:h-12 lg:h-16",width:100,height:100,alt:"FFP Logo"})]}),(0,l.jsxs)("button",{type:"button",className:"-m-2.5 rounded-md p-2.5 pt-0 text-gray-700",onClick:()=>h(!1),children:[(0,l.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,l.jsx)(o.Z,{className:"h-6 w-6 text-".concat(e.textColor),"aria-hidden":"true"})]})]}),(0,l.jsx)("div",{className:"mt-6 flow-root",children:(0,l.jsx)("div",{className:"-my-6 divide-y divide-stone-100/20",children:(0,l.jsx)("ul",{className:"menu menu-vertical py-1 gap-2 pl-1 lg:menu-horizontal lg:px-1",children:n.map((e,t)=>(0,l.jsx)(d(),{className:"mx-3 text-primary hover:text-secondary hover:underline",href:e.attributes.pageRoute,children:e.attributes.pageTitle},t))})})})]})]})]})})}},623:function(e,t,n){n.d(t,{E:function(){return PageDisplay}});var l=n(7437),s=n(2265);function getWindowDimensions(){let{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}}var r=n(3853),a=n(1396),c=n.n(a);let HeroPage=e=>{var t;let[n,a]=(0,s.useState)({width:980,height:551.25}),{height:i,width:o}=function(){let[e,t]=(0,s.useState)(getWindowDimensions());return(0,s.useEffect)(()=>{function handleResize(){t(getWindowDimensions())}return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]),e}(),x={height:"".concat(n.height),width:"".concat(n.width)},d=o<=640?"pt-52":"pt-[27rem]",m=(0,s.useCallback)(()=>{o<=640?a({width:350,height:197}):o<=768?a({width:550,height:309}):o<=1024?a({width:750,height:422}):o<=1280&&a({width:850,height:478})},[o]);return(0,s.useEffect)(()=>{m()},[o,m]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"grid w-screen grid-rows-1 lg:grid-rows-2",children:[(0,l.jsx)("div",{className:"inline-block lg:min-h-[10rem] bg-neutral"}),(0,l.jsxs)("div",{className:"".concat(d," lg:pt-52 xl:pt-52 2xl:pt-72 3xl:pt-[379px] 4xl:pt-[405px] 5xl:pt-[590px] pb-8 inline-block min-h-[20rem] bg-primary text-center items-center"),children:[(0,l.jsx)("h1",{className:"text-white text-2xl font-bold pt-8 2xl:pt-0 ",children:e.content.title}),(0,l.jsx)("h2",{className:"text-white text-xl font-black",children:e.content.subTitle}),(0,l.jsx)("p",{className:" text-white home_page_text",children:e.content.content}),e.content.buttonName1?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary bg-error text-white hover:bg-[#088395]",children:(0,l.jsx)(c(),{href:null!==(t=e.content.buttonLinkUrl1)&&void 0!==t?t:"",rel:"noopener noreferrer",target:"_blank",children:e.content.buttonName1})}):null]})]}),e.content.youTubeVideoId&&null!=e.content.youTubeVideoId?(0,l.jsx)("div",{className:"absolute h-min lg:h-0 inset-20 flex justify-center text-center lg:items-center z-0",children:(0,l.jsx)("div",{className:"w-fit h-min lg:h-0",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"relative lg:pt-10",children:(0,l.jsx)(r.Z,{videoId:e.content.youTubeVideoId,opts:x})}),(0,l.jsx)("br",{})]})})}):null]})})})};var i=n(1104),o=n(5082),x=n(8809);let ListPage=e=>{var t;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{children:["list"==e.content.contentType?(0,l.jsxs)("div",{className:"bg-neutral min-h-screen min-w-full flex-col lg:flex-row-reverse",children:[(0,l.jsx)("h1",{className:"mb-10 text-center mt-2 text-4xl font-bold leading-none tracking-tight text-primary",children:null!==(t=e.pageTitle)&&void 0!==t?t:""}),e.content.listContent.map((e,t)=>(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"text-center mt-2 mb-4 text-lg font-bold leading-none tracking-tight text-primary",children:e.title}),(0,l.jsx)("h2",{className:"text-center mb-4 text-md leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl",children:e.subTitle}),(0,l.jsx)(i.U,{className:"text-center min-w-full text-normal lg:text-xl sm:px-16 xl:px-48 text-black prose",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content}),(0,l.jsx)("br",{})]},t))]}):null,"steps"==e.content.contentType?(0,l.jsx)("div",{className:"px-4 lg:px-20 pb-20 bg-white flex justify-center flex-grow",children:(0,l.jsx)("ul",{className:"pb-1 lg:pb-0 steps steps-vertical",children:e.content.listContent.map((e,t)=>(0,l.jsxs)("li",{"data-content":"",className:"step data- step-".concat(0==t?"warning":1==t?"accent":"secondary"),children:[" ",(0,l.jsxs)("div",{className:"text-left pt-16",children:[(0,l.jsx)("h1",{className:"text-[40px] font-bold leading-none text-primary xl:pl-16 xl:pr-0",children:e.title}),(0,l.jsx)(i.U,{className:"text-xl text-normal p-5 leading-none lg:text-xl sm:px-16 xl:pl-16 xl:pr-0 text-primary prose h-44",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content})]})]},t))})}):null]})})},d={title:"",subTitle:null,content:null,backgroundImageUrl:null,imageUrl1:null,imageUrl2:null,imageUrl3:null,buttonName1:null,buttonName2:null,buttonLinkUrl1:null,contentType:"",youTubeVideoId:null,splitContents:[],cardContents:[],listContent:[],socialMedia:[],subContent1:null,showTitle:!1,textCenter:!1,bgColor:null,textColor:null,buttonColor:null,buttonTextColor:null,cardHeight:null,cardWidth:null,border:null,borderColor:null,name:null,intro:null,linkedIn:null},SocialMedia=e=>{var t,n,r,a;let c={displayName:null,url:null,type:null},[i,o]=(0,s.useState)(c),[x,d]=(0,s.useState)(c),[m,h]=(0,s.useState)(c),[u,p]=(0,s.useState)(c);return(0,s.useEffect)(()=>{e.data.map((e,t)=>{switch(e.type){case"twitter":d(e);break;case"linkedIn":p(e);break;case"instagram":h(e);break;case"facebook":o(e)}})},[e.data]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("ul",{className:"menu menu-horizontal flex items-center",children:[e.data&&i&&i.type?(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"mx-2 px-0",href:null!==(t=i.url)&&void 0!==t?t:"",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})})})}):"",e.data&&x&&x.type?(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"mx-2 px-0",href:null!==(n=x.url)&&void 0!==n?n:"",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"25",height:"25",viewBox:"0 0 30 30",children:(0,l.jsx)("path",{d:"M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"})})})}):"",e.data&&m&&m.type?(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"mx-2 px-0",href:null!==(r=m.url)&&void 0!==r?r:"",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})}):"",e.data&&u&&u.type?(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"mx-2 px-0",href:null!==(a=u.url)&&void 0!==a?a:"",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})})})}):""]})})},SplitPage=e=>{var t,n;let[r,a]=(0,s.useState)(d),[m,h]=(0,s.useState)(d);return(0,s.useEffect)(()=>{e.content.splitContents&&(a(e.content.splitContents[0]),h(e.content.splitContents[1]))},[e.content]),(0,l.jsx)(l.Fragment,{children:e.content?(0,l.jsxs)("div",{className:"flex w-full min-h-screen",children:[(0,l.jsxs)("div",{className:"p-10 grid flex-grow bg-neutral text-primary place-items-center",children:[(0,l.jsx)("h1",{className:"text-5xl font-bold text-primary",children:r.title}),(0,l.jsx)(i.U,{className:"prose",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:r.content}),r.buttonName1?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary bg-primary text-white",children:(0,l.jsx)(c(),{href:null!==(t=r.buttonLinkUrl1)&&void 0!==t?t:"",children:r.buttonName1})}):(0,l.jsx)("p",{})]}),(0,l.jsxs)("div",{className:"p-10 grid min-h-full flex-grow place-items-center bg-primary text-white",children:[(0,l.jsx)("h1",{className:"text-5xl font-bold",children:m.title}),(0,l.jsx)(i.U,{className:"prose py-6 text-white",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:m.content}),m.buttonName1?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary bg-white ",children:(0,l.jsx)(c(),{href:null!==(n=m.buttonLinkUrl1)&&void 0!==n?n:"",children:m.buttonName1})}):(0,l.jsx)("p",{}),(0,l.jsx)(SocialMedia,{data:e.content.socialMedia})]})]}):null})},CardsPage=e=>((0,s.useEffect)(()=>{},[e.content]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"bg-white px-4 lg:px-24 margin-top-title",children:[(0,l.jsxs)("div",{children:[e.content.title?(0,l.jsx)("h1",{className:"mx-4 lg:mx-8 mt-10 text-key-features font-bold leading-none text-primary",children:e.content.title}):null,e.content.content?(0,l.jsx)(i.U,{className:"pb-10 lg:pb-0 ml-4 lg:ml-8 mt-5 first-line:prose text-normal text-primary",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content.content}):null]}),(0,l.jsx)("div",{className:"px-0 lg:px-20 w-full bg-white pt-10 ".concat(e.content.cardWidth?"grid grid-col-2 lg:grid-cols-3 gap-4 text-center":"flex flex-col lg:flex-row"),children:e.content?e.content.cardContents.map((e,t)=>{var n;return(0,l.jsxs)("div",{className:"mx-0 my-2 lg:m-2 card-padding rounded-none card ".concat(e.cardHeight?"flex-wrap":"flex-grow"," ").concat(e.cardWidth?"w-"+e.cardWidth:"lg:w-[289px] w-full"," ").concat(e.buttonName1?"text-center items-center justify-center bg-[#F5F5F5]":e.imageUrl1?"text-center items-center justify-center bg-[#F5F5F5]":"text-left items-start justify-start"," ").concat(e.border?"".concat(e.border," border-secondary"):"","\n                  flex h-[311px]"),children:[e.title?(0,l.jsx)("h1",{className:"text-4xl font-bold leading-none text-primary",children:e.title}):null,e.imageUrl1?(0,l.jsx)("img",{src:"/images/".concat(e.imageUrl1)}):null,(0,l.jsx)(i.U,{className:"first-line:prose text-normal text-primary text-lg\n                      ".concat(e.buttonName1?"m-5":e.imageUrl1?"m-2":"ml-0 mt-4"," \n                    "),remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content}),e.buttonName1?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary bg-secondary text-white text-lg",children:(0,l.jsx)(c(),{href:null!==(n=e.buttonLinkUrl1)&&void 0!==n?n:"",rel:"noopener noreferrer",target:"_blank",children:e.buttonName1})}):null]},t)}):null})]})})),FooterPage=e=>{let[t,n]=(0,s.useState)([]);return(0,s.useEffect)(()=>{let t=[],s=[];e.data.links.map((e,n)=>{0!=n&&n%2==0?(s.push((0,l.jsx)("li",{children:(0,l.jsx)("a",{href:e.url,className:"pl-0",children:e.displayName})})),t.push((0,l.jsx)("div",{className:"flex-wrap",children:(0,l.jsx)("ul",{className:"menu w-56",children:s})})),s=[]):s.push((0,l.jsx)("li",{children:(0,l.jsx)("a",{href:e.url,className:"lg:pl-0",children:e.displayName})}))}),s.length>0&&(t.push((0,l.jsx)("ul",{className:"flex justify-between menu menu-horizontal text-center lg:menu-vertical w-56",children:s})),s=[]),n(t)},[e.data]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"footer-container-bottom-text",children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{children:(0,l.jsx)(SocialMedia,{data:e.data.socialMedia})})]})})};var m=n(4033);let ContentOnlyPage=e=>{var t,n;return console.log(e.content.content),(0,m.usePathname)(),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row w-full gap-10 lg:gap-24 pt-4 items-center",children:[(0,l.jsxs)("div",{className:"".concat(e.content.showTitle?"text-start":"text-center"," lg:screen pl-5 lg:pl-10 lg:pl-20 pr-5 py-10 grid flex-grow bg-").concat(e.content.bgColor," place-items-center"),children:[e.content.showTitle?(0,l.jsx)("p",{className:"text-".concat(e.content.textColor," text-2xl font-bold product-vision-page-title"),children:e.content.title}):null,(0,l.jsx)(i.U,{className:"my-5 ".concat(e.content.textCenter?"text-center":""," text-").concat(e.content.textColor," text-normal prose"),remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content.content+(e.content.subContent1?"<br/><br/>"+e.content.subContent1:"")}),e.content.buttonName1?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary button-width-product-vision bg-".concat(e.content.buttonColor," text-").concat(e.content.buttonTextColor," hover:bg-[#088395]"),children:(0,l.jsx)(c(),{href:null!==(t=e.content.buttonLinkUrl1)&&void 0!==t?t:"",rel:"noopener noreferrer",target:"_blank",children:e.content.buttonName1})}):null,e.content.buttonName2?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary bg-".concat(e.content.buttonColor," text-").concat(e.content.buttonTextColor," hover:bg-error"),children:(0,l.jsx)(c(),{href:null!==(n=e.content.buttonLinkUrl1)&&void 0!==n?n:"",rel:"noopener noreferrer",target:"_blank",children:e.content.buttonName2})}):null,(0,l.jsx)(SocialMedia,{data:e.content.socialMedia})]}),e.content.imageUrl1?(0,l.jsx)("div",{className:" grid py-30 lg:pr-20 bg-".concat(e.content.bgColor,' text-center place-items-center"'),children:(0,l.jsx)("img",{src:"/images/".concat(e.content.imageUrl1)})}):null]})})},JoinOurTeamPage=e=>{var t;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex bg-white flex-col items-center gap-2 lg:flex-row f-white underlined".concat((e.content.showTitle,"")),children:[e.content.imageUrl1?(0,l.jsx)("div",{className:" basis-1/2 px-5 lg:pl-5 lg:pr-3 lg:py-5 min-h-full grid flex-grow text-center lg:place-items-center",children:(0,l.jsx)("img",{className:" object-contain h-96 w-auto ",src:"/images/".concat(e.content.imageUrl1)})}):null,(0,l.jsx)("div",{className:"flex flex-col items-center text-center px-5 lg:text-left lg:basis-1/2",children:(0,l.jsxs)("div",{children:[e.content.showTitle?(0,l.jsx)("p",{className:"lg:pt-20 text-".concat(e.content.textColor," text-3xl font-bold"),children:e.content.title}):null,(0,l.jsx)(i.U,{className:"py-3 text-".concat(e.content.textColor," text-normal prose"),remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content.content+(e.content.subContent1?"<br/><br/>"+e.content.subContent1:"")}),e.content.buttonName1?(0,l.jsx)("button",{className:"px-5 py-1 btn-primary bg-".concat(e.content.buttonColor," text-").concat(e.content.buttonTextColor),children:(0,l.jsx)(c(),{href:null!==(t=e.content.buttonLinkUrl1)&&void 0!==t?t:"",rel:"noopener noreferrer",target:"_blank",children:e.content.buttonName1})}):null,(0,l.jsx)(SocialMedia,{data:e.content.socialMedia})]})})]})})},TeamMemberPage=e=>{var t;return(0,l.jsxs)("div",{className:"px-5 lg:pl-20 lg:pr-20 my-10",children:[e.content.showTitle?(0,l.jsx)("p",{className:"my-5 text-".concat(e.content.textColor," text-3xl font-bold"),children:e.content.title}):null,(0,l.jsxs)("div",{className:"background-color-modified",children:[(0,l.jsxs)("div",{className:"my-10 flex flex-col lg:flex-row",children:[e.content.imageUrl1?(0,l.jsx)("div",{className:" pl-10 pr-10",children:(0,l.jsx)("img",{className:" object-contain h-48 w-auto ",src:"/images/".concat(e.content.imageUrl1)})}):null,(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(i.U,{className:"text-".concat(e.content.textColor," text-xl prose font-bold"),remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content.name}),(0,l.jsx)("a",{className:"mx-5 mt-2",href:null!==(t=e.content.linkedIn)&&void 0!==t?t:"",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})]}),(0,l.jsx)(i.U,{className:"prose text-sm text-primary",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content.intro?e.content.intro:""})]})]}),(0,l.jsx)("div",{children:e.content.content?(0,l.jsx)(i.U,{className:"px-10 text-sm text-primary",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content.content}):null}),(0,l.jsxs)("div",{children:[e.content.cardContents?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("hr",{className:"px-10 my-5"}),(0,l.jsx)(i.U,{className:"my-5 px-10 text-".concat(e.content.textColor," text-xl prose font-bold"),remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:"Open Roles"}),(0,l.jsx)("div",{className:"px-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-4 text-center",children:e.content?e.content.cardContents.map((e,t)=>(0,l.jsx)("div",{className:"m-0.1 p-2 card bg-neutral-200 justify-center place-items-center",children:e.title?(0,l.jsx)("h1",{className:"text-normal font-bold text-primary",children:e.title}):null},t)):null})]}):null,(0,l.jsx)("hr",{className:"px-10 my-5 bg-white "})]})]})]})},WhyJoinPage=e=>(console.log(e.content.bgColor),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"bg-".concat(e.content.bgColor," px-10"),children:e.content.cardContents?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"width-m",children:(0,l.jsx)(i.U,{className:"pt-20 pb-10 text-primary text-3xl  font-bold text-center underlined",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:"Why Join Our Startup"})}),(0,l.jsx)("div",{className:"px-5 pb-20 w-full grid grid-cols-1 lg:grid-cols-4 gap-1 text-center",children:e.content?e.content.cardContents.map((e,t)=>(0,l.jsxs)("div",{className:"m-0.1 p-2 card   place-items-center",children:[e.title?(0,l.jsx)("h1",{className:"text-sm font-bold text-primary",children:e.title}):null,e.imageUrl1?(0,l.jsx)("img",{src:"/images/".concat(e.imageUrl1)}):null,(0,l.jsx)(i.U,{className:"m-2 first-line:prose text-sm text-primary",remarkPlugins:[x.Z],rehypePlugins:[o.Z],children:e.content})]},t)):null})]}):null})})),PageDisplay=e=>{let[t,n]=(0,s.useState)([]);(0,s.useEffect)(()=>{update()},[e.data]);let update=()=>{let t=[];e.data&&e.data.attributes.content.map((n,s)=>{"hero"==n.contentType&&t.push((0,l.jsx)(HeroPage,{content:n},s)),["list","steps"].includes(n.contentType)&&t.push((0,l.jsx)(ListPage,{content:n,pageTitle:e.data.attributes.pageTitle},s)),"split"==n.contentType&&t.push((0,l.jsx)(SplitPage,{content:n},s)),"cards"==n.contentType&&t.push((0,l.jsx)(CardsPage,{content:n},s)),"content-only"==n.contentType&&t.push((0,l.jsx)(ContentOnlyPage,{content:n,showTitle:!0},s)),"join-our-team"==n.contentType&&t.push((0,l.jsx)(JoinOurTeamPage,{content:n,showTitle:!0},s)),"team-member"==n.contentType&&t.push((0,l.jsx)(TeamMemberPage,{content:n,showTitle:!0},s)),"why-join"==n.contentType&&t.push((0,l.jsx)(WhyJoinPage,{content:n,showTitle:!0},s))}),e.data&&e.data.attributes.footer&&t.push((0,l.jsx)(FooterPage,{data:e.data.attributes.footer})),n(t)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{children:t})})}}}]);