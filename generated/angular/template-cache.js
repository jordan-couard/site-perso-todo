angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<img id=\"banner\" src=\"http://archive.is/kzxNU/0e923c62c9950d267ce8fc4c465057b3688e2e45.jpg\" alt=\"\">\n" +
    "<h2>Bienvenue sur mon Site Web</h2>\n" +
    "\n" +
    "\n" +
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "        <div id=\"colLiens\" class=\"col-xs-2\">\n" +
    "            <ul class=\"list-group\">\n" +
    "                <h3>Liste de liens</h3>\n" +
    "                <li class=\"list-group-item\"><a href=\"https://leekwars.com/\" target=\"_blank\">LeekWars</a></li>\n" +
    "                <li class=\"list-group-item\"><a href=\"https://www.youtube.com/\" target=\"_blank\">YouTube</a></li>\n" +
    "                <li class=\"list-group-item\"><a href=\"https://www.youtube.com/user/grafikarttv\" target=\"_blank\">Grafikart</a></li>\n" +
    "                <li class=\"list-group-item\"><a href=\"https://angularjs.org/\" target=\"_blank\">AngularJS</a></li>\n" +
    "                <li class=\"list-group-item\"><a href=\"https://developer.mozilla.org/fr/\" target=\"_blank\">MDN</a></li>\n" +
    "                <li class=\"list-group-item\"><a href=\"https://www.codewars.com/\" target=\"_blank\">CodeWars</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <div id=\"content\" class=\"col-offset-1 col-xs-9\">\n" +
    "            <p>\n" +
    "                Dans ce site, je vais vous présenter le déroulement de ma formation. Vous pourrais suivre mon avancé suite à un blog que je créer pour ce fait!\n" +
    "            </p>\n" +
    "            <div class=\"container\">\n" +
    "                <form>\n" +
    "                    <textarea ng-model=\"comment\" rows=\"8\" cols=\"80\" placeholder=\"Ajouter votre commentaire!\"></textarea><br>\n" +
    "                    <input placeholder=\"Auteur\" ng-model=\"user\"><br>\n" +
    "                    <input ng-model=\"sujet\" placeholder=\"Sujet\">\n" +
    "                    <button type=\"submit\" ng-click=\"addCommentaire()\">Add</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-xs-3\" ng-repeat=\"commentaire in commentaires track by $index\">\n" +
    "                <div class=\"auteur\">\n" +
    "                    <h4>Poster par: {{ commentaire.user }}</h4>\n" +
    "                </div>\n" +
    "                <div class=\"sujet\">\n" +
    "                    <h4>Sujet: {{ commentaire.sujet }}</h4>\n" +
    "                </div>\n" +
    "                <div class=\"contenu\">\n" +
    "                    {{ commentaire.comment }}\n" +
    "                </div>\n" +
    "                <div class=\"date\">\n" +
    "                    {{ commentaire.date | date:\"dd/MM/yyyy 'at' h:mma\" }}\n" +
    "                </div>\n" +
    "                <button ng-click=\"delete($index, commentaire)\">Delete</button><button ng-click=\"edit($index, comment)\">Edit <input></button>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-inverse\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a id=\"btnHome\" ui-sref=\"anon.home\"><span class=\"glyphicon glyphicon-home\"></span></a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.login\" ng-show=\"auth.isAuthenticated()\" ><span class=\"glyphicon glyphicon-log-out\" style=\"color:#F123B3\"></span>Login</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\" ng-show=\"auth.isAuthenticated()\"  ><span class=\"glyphicon glyphicon-time\" style=\"color:#F123B3\"></span>Register</a></li>\n" +
    "            </ul>\n" +
    "            <h1 id=\"navB\">Suivi de Formation</h1>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
