"use strict";(self.webpackChunkhaochen_blog=self.webpackChunkhaochen_blog||[]).push([[6103,5509],{8665:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(102),r=a(7294),l=a(6010),i=a(1287),o=a(9960),s="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",v=a(5999);function p(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];var f=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,h),c=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(p,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},a))))}},8561:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(7294),r=a(6010),l=a(3905),i=a(5999),o=a(9960),s=a(4996),c=a(2822),m=a(7707),u=a(6753),d="blogPostTitle_GeHD",g="blogPostData_291c",v="blogPostDetailsFull_3kfx",p=a(62),h="image_1yU8";var f=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:h,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},b="authorCol_1R69";function E(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",b),key:t},n.createElement(f,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,h,f,b=(h=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,s.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,C=e.metadata,P=e.truncated,x=e.isBlogPostPage,L=void 0!==x&&x,T=C.date,w=C.formattedDate,y=C.permalink,I=C.tags,R=C.readingTime,A=C.title,M=C.editUrl,U=C.authors,S=null!=(t=k.image)?t:Z.image,H=!L&&P,B=I.length>0;return n.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(f=L?"h1":"h2",n.createElement("header",null,n.createElement(f,{className:d,itemProp:"headline"},L?A:n.createElement(o.Z,{itemProp:"url",to:y},A)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:T,itemProp:"datePublished"},w),void 0!==R&&n.createElement(n.Fragment,null," \xb7 ",b(R))),n.createElement(E,{authors:U,assets:k}))),S&&n.createElement("meta",{itemProp:"image",content:_(S,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},N)),(B||P)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[v]=L,a))},B&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":H})},n.createElement(p.Z,{tags:I})),L&&M&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:M})),H&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":B})},n.createElement(o.Z,{to:C.permalink,"aria-label":"Read more about "+A},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(1217),l=a(8665),i=a(8561),o=a(5999),s=a(9960);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(2822),u=a(1575);var d=function(e){var t,a=e.content,o=e.sidebar,s=a.frontMatter,d=a.assets,g=a.metadata,v=g.title,p=g.description,h=g.nextItem,f=g.prevItem,b=g.date,E=g.tags,_=g.authors,N=s.hide_table_of_contents,Z=s.keywords,k=s.toc_min_heading_level,C=s.toc_max_heading_level,P=null!=(t=d.image)?t:s.image;return n.createElement(l.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:o,toc:!N&&a.toc&&a.toc.length>0?n.createElement(u.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:C}):void 0},n.createElement(r.Z,{title:v,description:p,keywords:Z,image:P},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),_.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:s,assets:d,metadata:g,isBlogPostPage:!0},n.createElement(a,null)),(h||f)&&n.createElement(c,{nextItem:h,prevItem:f}))}},6753:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(5999),l=a(3117),i=a(102),o=a(6010),s="iconEdit_2_ui",c=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(2822);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1575:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),r=a(102),l=a(7294),i=a(6010),o=a(5002),s="tableOfContents_35-E",c=["className"];var m=function(e){var t=e.className,a=(0,r.Z)(e,c);return l.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},l.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3117),r=a(102),l=a(7294),i=a(2822),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,g=void 0===d?void 0:d,v=e.minHeadingLevel,p=e.maxHeadingLevel,h=(0,r.Z)(e,o),f=(0,i.LU)(),b=null!=v?v:f.tableOfContents.minHeadingLevel,E=null!=p?p:f.tableOfContents.maxHeadingLevel,_=(0,i.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:E}),N=(0,l.useMemo)((function(){if(u&&g)return{linkClassName:u,linkActiveClassName:g,minHeadingLevel:b,maxHeadingLevel:E}}),[u,g,b,E]);return(0,i.Si)(N),l.createElement(s,(0,n.Z)({toc:_,className:c,linkClassName:u},h))}},7774:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),l=a(9960),i="tag_1Okp",o="tagRegular_3MiF",s="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[o]=!m,t[s]=m,t))},c,m&&n.createElement("span",null,m))}},62:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),l=a(5999),i=a(7774),o="tags_2ga9",s="tag_11ep";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{name:t,permalink:a}))}))))}},2058:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(3117),r=a(102),l=a(7294),i=a(3935),o=a(2263),s=a(6775),c=a(4996),m=a(9960),u=a(2859),d=a(6397),g=a(2822),v=a(7052),p=a(4136),h=a(7381),f=a(5999),b="searchBox_1ZXk",E=["contextualSearch","externalUrlRegex"],_=null;function N(e){var t=e.hit,a=e.children;return l.createElement(m.Z,{to:t.url},a)}function Z(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return l.createElement(m.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function k(e){var t,m,d=e.contextualSearch,k=e.externalUrlRegex,C=(0,r.Z)(e,E),P=(0,o.Z)().siteMetadata,x=(0,h.Z)(),L=null!=(t=null==(m=C.searchParameters)?void 0:m.facetFilters)?t:[],T=d?[].concat(x,L):L,w=Object.assign({},C.searchParameters,{facetFilters:T}),y=(0,c.C)().withBaseUrl,I=(0,s.k6)(),R=(0,l.useRef)(null),A=(0,l.useRef)(null),M=(0,l.useState)(!1),U=M[0],S=M[1],H=(0,l.useState)(null),B=H[0],O=H[1],F=(0,l.useCallback)((function(){return _?Promise.resolve():Promise.all([a.e(972).then(a.bind(a,972)),Promise.all([a.e(532),a.e(6945)]).then(a.bind(a,6945)),Promise.all([a.e(532),a.e(9846)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;_=t}))}),[]),D=(0,l.useCallback)((function(){F().then((function(){R.current=document.createElement("div"),document.body.insertBefore(R.current,document.body.firstChild),S(!0)}))}),[F,S]),j=(0,l.useCallback)((function(){S(!1),R.current.remove()}),[S]),q=(0,l.useCallback)((function(e){F().then((function(){S(!0),O(e.key)}))}),[F,S,O]),z=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;(0,g.Fx)(k,t)?window.location.href=t:I.push(t)}}).current,V=(0,l.useRef)((function(e){return e.map((function(e){if((0,g.Fx)(k,e.url))return e;var t=new URL(e.url);return Object.assign({},e,{url:y(""+t.pathname+t.hash)})}))})).current,Y=(0,l.useMemo)((function(){return function(e){return l.createElement(Z,(0,n.Z)({},e,{onClose:j}))}}),[j]),G=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",P.docusaurusVersion),e}),[P.docusaurusVersion]);(0,v.D)({isOpen:U,onOpen:D,onClose:j,onInput:q,searchButtonRef:A});var Q=(0,f.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(u.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+C.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",{className:b},l.createElement(p.a,{onTouchStart:F,onFocus:F,onMouseOver:F,onClick:D,ref:A,translations:{buttonText:Q,buttonAriaLabel:Q}})),U&&(0,i.createPortal)(l.createElement(_,(0,n.Z)({onClose:j,initialScrollY:window.scrollY,initialQuery:B,navigator:z,transformItems:V,hitComponent:N,resultsFooterComponent:Y,transformSearchClient:G},C,{searchParameters:w})),R.current))}var C=function(){var e=(0,o.Z)().siteConfig;return l.createElement(k,e.themeConfig.algolia)}}}]);