(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,o){},QfWi:function(e,t,o){"use strict";o.r(t);o("FWxf"),o("RtS0"),o("Xlt+"),o("zSSO"),o("3dw1"),o("L1EO");var a=[{_id:"5d2ca9e2e03d40b326596aa7",completed:!0,body:"Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",title:"Eu ea incididunt sunt consectetur fugiat non."},{_id:"5d2ca9e29c8a94095c1288e0",completed:!1,body:"Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",title:"Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum."},{_id:"5d2ca9e2e03d40b3232496aa7",completed:!0,body:"Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",title:"Eu ea incididunt sunt consectetur fugiat non."},{_id:"5d2ca9e29c8a94095564788e0",completed:!1,body:"Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",title:"Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum."}],r={default:{"--base-text-color":"#212529","--header-bg":"#007bff","--header-text-color":"#fff","--default-btn-bg":"#007bff","--default-btn-text-color":"#fff","--default-btn-hover-bg":"#0069d9","--default-btn-border-color":"#0069d9","--danger-btn-bg":"#dc3545","--danger-btn-text-color":"#fff","--danger-btn-hover-bg":"#bd2130","--danger-btn-border-color":"#dc3545","--input-border-color":"#ced4da","--input-bg-color":"#fff","--input-text-color":"#495057","--input-focus-bg-color":"#fff","--input-focus-text-color":"#495057","--input-focus-border-color":"#80bdff","--input-focus-box-shadow":"0 0 0 0.2rem rgba(0, 123, 255, 0.25)"},dark:{"--base-text-color":"#212529","--header-bg":"#343a40","--header-text-color":"#fff","--default-btn-bg":"#58616b","--default-btn-text-color":"#fff","--default-btn-hover-bg":"#292d31","--default-btn-border-color":"#343a40","--default-btn-focus-box-shadow":"0 0 0 0.2rem rgba(141, 143, 146, 0.25)","--danger-btn-bg":"#b52d3a","--danger-btn-text-color":"#fff","--danger-btn-hover-bg":"#88222c","--danger-btn-border-color":"#88222c","--input-border-color":"#ced4da","--input-bg-color":"#fff","--input-text-color":"#495057","--input-focus-bg-color":"#fff","--input-focus-text-color":"#495057","--input-focus-border-color":"#78818a","--input-focus-box-shadow":"0 0 0 0.2rem rgba(141, 143, 146, 0.25)"},light:{"--base-text-color":"#212529","--header-bg":"#fff","--header-text-color":"#212529","--default-btn-bg":"#fff","--default-btn-text-color":"#212529","--default-btn-hover-bg":"#e8e7e7","--default-btn-border-color":"#343a40","--default-btn-focus-box-shadow":"0 0 0 0.2rem rgba(141, 143, 146, 0.25)","--danger-btn-bg":"#f1b5bb","--danger-btn-text-color":"#212529","--danger-btn-hover-bg":"#ef808a","--danger-btn-border-color":"#e2818a","--input-border-color":"#ced4da","--input-bg-color":"#fff","--input-text-color":"#495057","--input-focus-bg-color":"#fff","--input-focus-text-color":"#495057","--input-focus-border-color":"#78818a","--input-focus-box-shadow":"0 0 0 0.2rem rgba(141, 143, 146, 0.25)"}},i={listGroup:document.querySelector(".list-group"),form:document.forms.addTask,inputTitle:document.forms.addTask.elements.title,inputBody:document.forms.addTask.elements.body,selectTheme:document.querySelector("#themeSelect")},n=localStorage.getItem("theme")||"default";i.selectTheme.value=n;var u=function(e){return'<li class="list-group-item d-flex align-items-center flex-wrap mt-2" data-key='+e._id+"><span>"+e.title+'</span><button class="btn btn-danger ml-auto delete-btn">Delete</button><p class="mt-2 w-100">'+e.body+"</p></li>"},c=function(e,t){var o={_id:"task-"+Math.random(),completed:!1,body:t,title:e};return a.push(o),o},d=function(e){var t=a.findIndex((function(t){return t._id===e})),o=confirm("Вы уверены?, что хотите удалить задачу "+a[t].title);return o&&(a.splice(t,1),console.log("tasks->",a)),o},l=function(e,t){e&&t.remove()},s=function(e){var t=r[e];Object.entries(t).forEach((function(e){var t=e[0],o=e[1];document.documentElement.style.setProperty(t,o)}))};s(n),i.listGroup.insertAdjacentHTML("beforeend",function(e){var t="";e.forEach((function(e){t+=u(e)}));return t}(a)),i.form.addEventListener("submit",(function(e){e.preventDefault();var t=i.inputTitle.value,o=i.inputBody.value;if(t&&o){var a=c(t,o),r=u(a);i.listGroup.insertAdjacentHTML("afterbegin",r),i.form.reset()}else alert("Заполните, пожалуйста, форму")})),i.listGroup.addEventListener("click",(function(e){if(e.target.classList.contains("delete-btn")){var t=e.target.closest("[data-key]"),o=t.dataset.key;console.log("parent->",t);var a=d(o);l(a,t)}})),i.selectTheme.addEventListener("change",(function(){var e=i.selectTheme.value;n=e,s(e),localStorage.setItem("theme",e)}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.8da09461184e9d9ecd47.js.map