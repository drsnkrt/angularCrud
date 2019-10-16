app.controller("vendorController", function ($scope) {


    $scope.durum = false;
    $scope.deger = "";

    $scope.dizi = [{"bayiiID": "kurtsoft-1", "bayiiAd": "egembilisim", "email": "egem@em.com"},
        {"bayiiID": "kurtsoft-1", "bayiiAd": "asd", "email": "asd@em.com"},
        {"bayiiID": "kurtsoft-2", "bayiiAd": "asd", "email": "anadolu@em.com"},
        {"bayiiID": "kurtsoft-3", "bayiiAd": "asd", "email": "jade1@em.com"},
        {"bayiiID": "kurtsoft-4", "bayiiAd": "asd", "email": "jade2@em.com"},
        {"bayiiID": "kurtsoft-5", "bayiiAd": "asd", "email": "jade3@em.com"},
        {"bayiiID": "kurtsoft-6", "bayiiAd": "asd", "email": "anadolu2@em.com"},
        {"bayiiID": "kurtsoft-7", "bayiiAd": "asd-koc", "email": "koc@em.com"},
        {"bayiiID": "kurtsoft-8", "bayiiAd": "asd-1", "email": "BMT-1@em.com"},
        {"bayiiID": "kurtsoft-9", "bayiiAd": "asd-2", "email": "BMT-2@em.com"}
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
