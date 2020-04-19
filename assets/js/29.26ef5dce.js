(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{349:function(t,s,e){"use strict";e.r(s);var a=e(33),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"пошаговое-руководство-по-установке-на-ubuntu-сервер"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#пошаговое-руководство-по-установке-на-ubuntu-сервер"}},[t._v("#")]),t._v(" Пошаговое руководство по установке на Ubuntu сервер")]),t._v(" "),e("h2",{attrs:{id:"устанавnиваем-asp-net-core-runtime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#устанавnиваем-asp-net-core-runtime"}},[t._v("#")]),t._v(" Устанавливаем Asp.Net Core Runtime")]),t._v(" "),e("p",[t._v("Ссылка на инструкцию.")]),t._v(" "),e("h3",{attrs:{id:"добавnяем-репозиторий"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#добавnяем-репозиторий"}},[t._v("#")]),t._v(" Добавляем репозиторий")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb\n\nsudo dpkg -i packages-microsoft-prod.deb\n")])])]),e("h3",{attrs:{id:"устанавnиваем"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#устанавnиваем"}},[t._v("#")]),t._v(" Устанавливаем")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo add-apt-repository universe\nsudo apt-get update\nsudo apt-get install apt-transport-https\nsudo apt-get update\nsudo apt-get install aspnetcore-runtime-3.1\n")])])]),e("h2",{attrs:{id:"устанавnиваем-postgresql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#устанавnиваем-postgresql"}},[t._v("#")]),t._v(" Устанавливаем PostgreSql")]),t._v(" "),e("p",[t._v("Ссылка на инструкцию.")]),t._v(" "),e("h3",{attrs:{id:"устанавnиваем-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#устанавnиваем-2"}},[t._v("#")]),t._v(" Устанавливаем")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo apt-get install postgresql-11\n")])])]),e("h3",{attrs:{id:"устанавnиваем-пароnь-дnя-поnьзоватеnя-postgres"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#устанавnиваем-пароnь-дnя-поnьзоватеnя-postgres"}},[t._v("#")]),t._v(" Устанавливаем пароль для пользователя postgres")]),t._v(" "),e("h4",{attrs:{id:"открывается-консоnь-postgres"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#открывается-консоnь-postgres"}},[t._v("#")]),t._v(" Открывается консоль "),e("code",[t._v("postgres")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo -u postgres psql\n")])])]),e("h4",{attrs:{id:"задаём-пароnь-поnьзоватеn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#задаём-пароnь-поnьзоватеn"}},[t._v("#")]),t._v(" Задаём пароль пользовател")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ALTER USER postgres PASSWORD 'postgres_user_password';\n")])])]),e("p",[t._v("Вместо "),e("code",[t._v("postgres_user_password")]),t._v(" необходимо задать пароль")]),t._v(" "),e("h3",{attrs:{id:"cоздаём-базу-данных"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cоздаём-базу-данных"}},[t._v("#")]),t._v(" Cоздаём базу данных")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("CREATE DATABASE my_site.com;\n")])])]),e("p",[e("code",[t._v("my_site.com")]),t._v(" - имя базы")]),t._v(" "),e("h2",{attrs:{id:"собираем-проект-nокаnьно-и-записываем-на-сервер"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#собираем-проект-nокаnьно-и-записываем-на-сервер"}},[t._v("#")]),t._v(" Собираем проект локально и записываем на сервер")]),t._v(" "),e("p",[t._v("Скачиваем с репозитория код "),e("code",[t._v("SunEngine")]),t._v(" на локальный компьютер.")]),t._v(" "),e("p",[t._v("Все скрипты сборки и публикации находятся в директории "),e("code",[t._v("Scripts/")])]),t._v(" "),e("p",[t._v("В директории "),e("code",[t._v("Scripts/")]),t._v(" копируем файл "),e("code",[t._v("PUBLISH.template")]),t._v(" в "),e("code",[t._v("PUBLISH")]),t._v(" и редактируем его, настраивая все параметры")]),t._v(" "),e("p",[t._v("Собираем проект выполнив скрипт - "),e("code",[t._v("build.sh")]),t._v(" (появится папка "),e("code",[t._v("build")]),t._v(" в корневом каталоге проекта)")]),t._v(" "),e("p",[t._v("Создаём на сервере папку "),e("code",[t._v("/site/my_site.com")]),t._v(". Путь может быть любым.")]),t._v(" "),e("p",[t._v("Выкладываем "),e("code",[t._v("build")]),t._v(" на сервер, запуская скрипт "),e("code",[t._v("publi.sh")])]),t._v(" "),e("p",[t._v("На сервере редактируем файлы настроек в директории  "),e("code",[t._v("/site/my_site.com/Config")])]),t._v(" "),e("h2",{attrs:{id:"настройки-подкnючения-в-databaseconnection-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#настройки-подкnючения-в-databaseconnection-json"}},[t._v("#")]),t._v(" Настройки подключения в "),e("code",[t._v("DataBaseConnection.json")])]),t._v(" "),e("p",[t._v("В файле "),e("code",[t._v("/Config/DataBaseConnection.json")]),t._v(" необходимо указать имя базы данных, пользователя postgres и пароль.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n "DataBaseConnection": {   \n    "Linq2dbProvider": "PostgreSQL.9.5",\n    "FluentMigratorProvider": "Postgres",\n    "ConnectionString": "Host=localhost;Database=my_site.com;Username=postgres;Password=postgres_user_password"\n  }\n}\n')])])]),e("h2",{attrs:{id:"запоnняем-базу-данных-начаnьными-данными"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#запоnняем-базу-данных-начаnьными-данными"}},[t._v("#")]),t._v(" Заполняем базу данных начальными данными")]),t._v(" "),e("p",[t._v("В папке "),e("code",[t._v("/site/my_site.com/Server")]),t._v(" запускаем")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dotnet SunEngine.dll init migrate\n")])])]),e("p",[t._v("Эта команда создаёт таблицы и другие структуры в базе данных и заполняет начальными данными.")]),t._v(" "),e("p",[t._v("Подробнее о командах "),e("code",[t._v("dotnet SunEngine.dll")]),t._v(" в статье.")]),t._v(" "),e("h2",{attrs:{id:"создаём-kestrel-сервис-на-systemd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#создаём-kestrel-сервис-на-systemd"}},[t._v("#")]),t._v(" Создаём kestrel сервис на systemd")]),t._v(" "),e("p",[t._v("Ссылка на инструкцию.")]),t._v(" "),e("p",[e("code",[t._v("systemd")]),t._v(" позволяет после старта сервера постоянно держать необходимые процессы запущенными, и перезапускать, если они вынужденно выключаются.")]),t._v(" "),e("p",[t._v("Создаём файл "),e("code",[t._v("my_site.com.service")]),t._v(" в папке "),e("code",[t._v("/etc/systemd/system")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  [Unit]\n  Description=SunEngine my_site.com\n\n  [Service]\n  WorkingDirectory=/site/my_site.com\n  ExecStart=/usr/bin/dotnet /site/my_site.com/Server/SunEngine.dll server\n  SyslogIdentifier=my_site.com\n  User=www-data\n  Restart=always\n  RestartSec=10\n  KillSignal=SIGINT\n  Environment=ASPNETCORE_ENVIRONMENT=Production\n\n  [Install]\n  WantedBy=multi-user.target\n")])])]),e("h3",{attrs:{id:"вкnючаем-systemd-сервис"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#вкnючаем-systemd-сервис"}},[t._v("#")]),t._v(" Включаем systemd сервис")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("systemctl enable my_site.com\n")])])]),e("h3",{attrs:{id:"команды-которые-могут-пригодиться"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#команды-которые-могут-пригодиться"}},[t._v("#")]),t._v(" Команды которые могут пригодиться")]),t._v(" "),e("h4",{attrs:{id:"посмотреть-nоги-systemd-процессв"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#посмотреть-nоги-systemd-процессв"}},[t._v("#")]),t._v(" Посмотреть логи systemd процессв")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("journalctl -fxeu my_site.com\n")])])]),e("h4",{attrs:{id:"перезапуск-процесса-systemd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#перезапуск-процесса-systemd"}},[t._v("#")]),t._v(" Перезапуск процесса systemd")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("systemctl restart my_site.com\n")])])]),e("h2",{attrs:{id:"конфигурация-nginx-веб-сервера"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#конфигурация-nginx-веб-сервера"}},[t._v("#")]),t._v(" Конфигурация Nginx веб сервера")]),t._v(" "),e("p",[t._v("Ссылка на инструкцию.")]),t._v(" "),e("h3",{attrs:{id:"устанавnиваем-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#устанавnиваем-nginx"}},[t._v("#")]),t._v(" Устанавливаем "),e("code",[t._v("Nginx")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo apt-get update\nsudo apt-get install nginx\n")])])]),e("h3",{attrs:{id:"создание-nginx-конфигурации"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#создание-nginx-конфигурации"}},[t._v("#")]),t._v(" Создание "),e("code",[t._v("Nginx")]),t._v(" конфигурации")]),t._v(" "),e("p",[t._v("Создаём файл "),e("code",[t._v("/etc/nginx/sites-available/my_site.com")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('server {\n    listen 443 http2; # https port\n    listen [::]:443 http2; # IP v6\n\n    server_name my_site.site; # домен\n\n    charset utf-8;\n\n    ssl on; # включаем ssl\n    ssl_certificate /etc/ssl/mysite.site/my_site.com.crt; # Путь к ssl сертификату\n    ssl_certificate_key /etc/ssl/mysite.site/my_site.com.key; # Путь к ключу сертификата\n\n    gzip on; # включаем gzip архивацию потока данных\n    gzip_buffers 16 8k;\n    gzip_comp_level 6;\n    gzip_http_version 1.1;\n    gzip_min_length 256;\n    gzip_proxied any;\n    gzip_vary on;\n    gzip_types text/xml application/atom+xml application/rss+xml application/xhtml+xml text/javascript application/javascript\n        application/x-javascript text/x-json application/json application/x-web-app-manifest+json text/css text/plain\n        text/html font/opentype application/x-font-ttf image/x-icon image/svg+xml;\n    gzip_disable "msie6";\n\n    add_header X-Frame-Options "SAMEORIGIN";\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Content-Type-Options "nosniff";\n\n    location / { # Endpoint для клиентской части\n        root /site/my_site.com/wwwroot;\n        try_files $uri $uri/ /index.html; # если файл не найден - возвращаем index.html\n\n        open_file_cache max=1000 inactive=20s; # кеширование файлов клиента на сервере\n        open_file_cache_valid 30s;\n        open_file_cache_min_uses 2;\n        open_file_cache_errors on;\n    }\n\n    location ~ \\.(js|json|css|svg|svgz|eot|otf|woff|woff2|ttf|rss|atom|ico|jpg|jpeg|gif|png)$ {     # кеширование в браузере\n        expires 14d; # хранить кеш 14 дней\n    }\n\n    location /api/ { # Endpoint для серверной части. Работает как reverse proxy отправляя запросы в Kestrel работающим отдельным процессом.\n        proxy_pass http://localhost:5000/; # Порт должен соответствовать настройкам kestrel в "Config/SunEngine.json"\n        client_max_body_size 11M; # максимальный размер тела запроса, который допускает Nginx ~= максимальный размер для upload файла\n    }\n}\n\nserver { # редирект в случае входа через http\n    listen 80;\n    listen [::]:80;\n    server_name mysite.site;\n    return 301 https://$host$request_uri;\n}\n')])])]),e("h3",{attrs:{id:"активизируем-настройки-my-site-com"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#активизируем-настройки-my-site-com"}},[t._v("#")]),t._v(" Активизируем настройки my_site.com")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo ln -s /etc/nginx/sites-available/my_site.com /etc/nginx/sites-enabled/my_site.com\n")])])]),e("h3",{attrs:{id:"перезагружаем-настройки-nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#перезагружаем-настройки-nginx"}},[t._v("#")]),t._v(" Перезагружаем настройки Nginx")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo systemctl reload nginx\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);