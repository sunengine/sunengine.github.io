(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{387:function(e,t,n){"use strict";n.r(t);var a=n(43),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"аргументы-запуска-sunengine-dll"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#аргументы-запуска-sunengine-dll"}},[e._v("#")]),e._v(" Аргументы запуска SunEngine.dll")]),e._v(" "),n("h2",{attrs:{id:"команды"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#команды"}},[e._v("#")]),e._v(" Команды")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("server                  запусить серверный API используя kestrel\nconfig:<path>           путь к директории конфигурации, 'Config' по умолчанию. Суффикс '.Config' может быть опущен.\nmigrate                 создание или обновлений всех таблиц базы данных и их структуры\ninit                    заполнить таблицы пользователей, ролей и категории данными из 'Config'\ntest-db-con             проверка работоспособности подключения к базе данных                    \nversion                 показать версию SunEngine\nset-user-pass:<user>:<password>      \n                        установить пароль пользователя\nnologo                  не показывать логотип при старте\nhelp                    показать все команды \n")])])]),n("h2",{attrs:{id:"команды-запоnнения-данными-дnя-тестов"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#команды-запоnнения-данными-дnя-тестов"}},[e._v("#")]),e._v(" Команды заполнения данными для тестов")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("seed:<category>:<materials>:<comments>      \n                        seed category and all subcategories with materials and comments\n                        <category> - category name\n                        <materials> - materials count, default if skipped\n                        <comments> - comments count, default if skipped\n                        example - seed:SomeCategory:20:10\n                        \nappend-cat-name         add category name to material titles on 'seed'\n")])])]),n("h2",{attrs:{id:"примеры"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#примеры"}},[e._v("#")]),e._v(" Примеры")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("dotnet SunEngine.dll server\ndotnet SunEngine.dll server config:local.MySite\ndotnet SunEngine.dll migrate init seed\ndotnet SunEngine.dll migrate init seed config:local.MySite\ndotnet SunEngine.dll seed:Forum:10:10\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);