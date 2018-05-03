app.controller("vendorController", function ($scope) {


    $scope.durum = false;
    $scope.deger = "";

    $scope.dizi = [{"bayiiID": "EGEMSOFT-1", "bayiiAd": "egembilisim", "email": "egem@em.com"},
        {"bayiiID": "EGEMSOFT-1", "bayiiAd": "egembilisim", "email": "egem@em.com"},
        {"bayiiID": "EGEMSOFT-2", "bayiiAd": "anadolu", "email": "anadolu@em.com"},
        {"bayiiID": "EGEMSOFT-3", "bayiiAd": "jade1", "email": "jade1@em.com"},
        {"bayiiID": "EGEMSOFT-4", "bayiiAd": "jade2", "email": "jade2@em.com"},
        {"bayiiID": "EGEMSOFT-5", "bayiiAd": "jade3", "email": "jade3@em.com"},
        {"bayiiID": "EGEMSOFT-6", "bayiiAd": "anadolu2", "email": "anadolu2@em.com"},
        {"bayiiID": "EGEMSOFT-7", "bayiiAd": "trabzon-koc", "email": "trabzon-koc@em.com"},
        {"bayiiID": "EGEMSOFT-8", "bayiiAd": "BMT-1", "email": "BMT-1@em.com"},
        {"bayiiID": "EGEMSOFT-9", "bayiiAd": "BMT-2", "email": "BMT-2@em.com"}
    ];

    $scope.saveAndUpdate = function () {
        if ($scope.durum == true) {
            $scope.dizi.splice($scope.deger, 1, {
                    "bayiiID": $scope.vendorID,
                    "bayiiAd": $scope.vendorName,
                    "email": $scope.mail
                }
            );
        } else {
            $scope.dizi.push({
                "bayiiID": $scope.vendorID,
                "bayiiAd": $scope.vendorName,
                "email": $scope.mail
            });
        }
        $scope.vendorID = "";
        $scope.vendorName = "";
        $scope.mail = "";
        $scope.durum = false;
    }
    $scope.set = function (b) {
        $scope.vendorID = $scope.dizi[b].bayiiID;
        $scope.vendorName = $scope.dizi[b].bayiiAd;
        $scope.mail = $scope.dizi[b].email;
        $scope.deger = b;
        $scope.durum = true;
    }
});
