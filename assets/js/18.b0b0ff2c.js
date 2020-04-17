(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{338:function(t,e,s){"use strict";s.r(e);var _=s(33),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"организация-сервиса-systemd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#организация-сервиса-systemd"}},[t._v("#")]),t._v(" Организация сервиса systemd")]),t._v(" "),s("p",[t._v("Сервис "),s("code",[t._v("systemd")]),t._v(" в Linux позволяет постоянно держать необходимые процессы запущенными, и перезапускать, если они аварийно выключаются.")]),t._v(" "),s("h2",{attrs:{id:"создание-конфигурационного-файnа-дnя-my-site-com-в-systemd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#создание-конфигурационного-файnа-дnя-my-site-com-в-systemd"}},[t._v("#")]),t._v(" Создание конфигурационного файла для my_site.com в systemd")]),t._v(" "),s("p",[t._v("Настройка начинается с создания файла "),s("code",[t._v("my_site.com.service")]),t._v(" в директории "),s("code",[t._v("/etc/systemd/system")]),t._v(" и внесением в него такого контента скорректорованного под вашу ситуацию:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  [Unit]\n  Description=SunEngine my_site.com\n  [Service]\n  WorkingDirectory=/site/my_site.com\n  ExecStart=/usr/bin/dotnet /site/my_site.com/Server/SunEngine.dll server\n  SyslogIdentifier=my_site.com\n  User=www-data\n  Restart=always\n  RestartSec=10\n  KillSignal=SIGINT\n  Environment=ASPNETCORE_ENVIRONMENT=Production\n  [Install]\n  WantedBy=multi-user.target\n")])])]),s("h2",{attrs:{id:"вкnючение-и-запуск-сервиса"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#вкnючение-и-запуск-сервиса"}},[t._v("#")]),t._v(" Включение и запуск сервиса")]),t._v(" "),s("p",[t._v("Сервис сначала необходимо проинициализировть в системе:")]),t._v(" "),s("p",[s("code",[t._v("systemctl enable my_site.com")])]),t._v(" "),s("p",[t._v("и следующим шагом - запустить:")]),t._v(" "),s("p",[s("code",[t._v("systemctl start my_site.com")])]),t._v(" "),s("p",[t._v("Теперь "),s("code",[t._v("SunEngine.dll server")]),t._v(" будет работать в постоянном режиме. Если операционная система сервера будет перезагружена, сервис запустится при её новом запуске.")]),t._v(" "),s("h2",{attrs:{id:"существующие-пробnемы"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#существующие-пробnемы"}},[t._v("#")]),t._v(" Существующие проблемы")]),t._v(" "),s("p",[t._v("Перезагрузка сервиса при обновлении.")]),t._v(" "),s("h2",{attrs:{id:"команды-работы-с-systemd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#команды-работы-с-systemd"}},[t._v("#")]),t._v(" Команды работы с systemd")]),t._v(" "),s("p",[t._v("Итак, для работы с сервивом вам достаточно освоить эти команды:")]),t._v(" "),s("p",[t._v("Включение (инициализация) процесса запуска "),s("code",[t._v("my_site.com")]),t._v(" при загрузке операционной системы:")]),t._v(" "),s("p",[s("code",[t._v("systemctl enable my_site.com")])]),t._v(" "),s("p",[t._v("Просмотр логов:")]),t._v(" "),s("p",[s("code",[t._v("journalctl -fxeu my_site.com")])]),t._v(" "),s("p",[t._v("Запуск процесса:")]),t._v(" "),s("p",[s("code",[t._v("systemctl start my_site.com")])]),t._v(" "),s("p",[t._v("Остановка процесса:")]),t._v(" "),s("p",[s("code",[t._v("systemctl stop my_site.com")])]),t._v(" "),s("p",[t._v("Перезапуск процесса:")]),t._v(" "),s("p",[s("code",[t._v("systemctl restart my_site.com")])]),t._v(" "),s("p",[t._v("Отключение запуска "),s("code",[t._v('"my_site.com"')]),t._v(" при загрузке системы:")]),t._v(" "),s("p",[s("code",[t._v("systemctl disable my_site.com")])])])}),[],!1,null,null,null);e.default=v.exports}}]);