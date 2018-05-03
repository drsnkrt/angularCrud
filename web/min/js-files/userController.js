app.controller("userController", function ($scope) {
    $scope.durum = false;
    $scope.deger = "";

    $scope.dizi = [{"email": "ddd@ddd.net", "ad": "Dursun", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "recep", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "murat", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "kamıl", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "ılyas", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "rıza", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "Dursun", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "falan", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "Dursun", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "fılan", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "Dursun", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "kaya", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "Dursun", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "kın", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "lami", "soyad": "kurt", "sifre": 123123},
        {"email": "ddd@ddd.net", "ad": "Dsifo", "soyad": "kurt", "sifre": 123123}
    ];

    $scope.sil = function (a) {
        $scope.dizi.splice(a, 1);
    }
    $scope.saveAndUpdate = function () {
        if ($scope.durum == true) {
            $scope.dizi.splice($scope.deger, 1, {
                "email": $scope.mail,
                "ad": $scope.name,
                "soyad": $scope.sname,
                "sifre": $scope.password
            });
        } else {
            $scope.dizi.push({
                "ad": $scope.name,
                "soyad": $scope.sname,
                "email": $scope.mail,
                "sifre": $scope.password
            });
        }
        $scope.mail = "";
        $scope.name = "";
        $scope.sname = "";
        $scope.password = "";
    }
    $scope.set = function (b) {
        $scope.mail = $scope.dizi[b].email;
        $scope.name = $scope.dizi[b].ad;
        $scope.sname = $scope.dizi[b].soyad;
        $scope.password = $scope.dizi[b].sifre;
        $scope.deger = b;
        $scope.durum = true;
    }
});
