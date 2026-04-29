miPRTWebApp.controller("productController", ["$scope", "$http", "businessService", function ($scope, $http, businessService) {
    $scope.init = function () {

        $scope.categories = []; $scope.subCategories = []; $scope.arrCategoryChkBox = [];
        $scope.frmCategoryId = 0;
        $scope.selectedList = {};
        $scope.getCategory(0);

    };

    $scope.detailinit = function () {

        $scope.frmCategoryId = 0;
        var productId = sessionStorage.getItem("ProdId");

        if (productId) {
            $scope.getProduct(productId);

        }
    };



    $scope.getUrlParameter = function (name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    $scope.getCategory = function (refId) {
        businessService.getCategory(refId, function (response) {
            if (response.dbResult.clear) {
                $scope.categories = response.categories;
                if (response.categories.length > 0) {
                    angular.forEach($scope.categories, function (value1, i) {
                    
                       
                        if ($scope.categories[i].name == "Agro Care") {


                            $scope.categories[i].Altimg = "Indiagro Products - Mi Lifestyle";
 
                            $scope.categories[i].BannerText = '<h1  class="Agro-Care-title">Indiagro Products:<br /><span> Each Purchase Improves Your Lifestyle!</span></h1><p>Buy <b>Indiagro Bhuastra and Indiagro Bhuastra Super</b> ,</br> the popular organic fertilizers made from natural ingredients</br> for healthy plant growth at an affordable price.</p>';
                        }
                        else if ($scope.categories[i].name == "Health Care") {
                            $scope.categories[i].Altimg = "Health Care Product - Mi Lifestyle";
                            $scope.categories[i].BannerText = '<h1  class="Agro-Care-title">Invest in Your Health:Shop the </br>Best Health Care Products Today!</h1><p>We offer the best <b>Elements Wellness and On&On Product</b></br>List to meet your various demands, such as herbal </br>supplements, skincare, hair care, and dietary supplements.</p>';

                            
                        }
                        else if ($scope.categories[i].name == "Home Care") {
                            $scope.categories[i].Altimg = "Mi Home Product Range - Mi Lifestyle";
                            $scope.categories[i].BannerText = '<h1  class="Agro-Care-title"> Find the Perfect Mi Home </br>Products for Your Home</h1><p>Explore our <b>Mi Home products</b> today and keep your home looking </br>and feeling its best. Our <b>Mi Home Product Range</b> offers a variety of</br>products designedto keep your home clean and fresh.</p>';

                          
                        }
                        else if ($scope.categories[i].name == "Personal Care") {
                            $scope.categories[i].Altimg = "Personal Care Product - Mi Lifestyle";
                            $scope.categories[i].BannerText = '<h1  class="Agro-Care-title">Shop Personal Care Products</br>for Your Unique Needs</h1><p> Try our <b>Personal Care Products</b> of Elements Wellness, </br> On& On and nesture to experience the benefits of natural care.</p>';
 
                           
                        }
                        else if ($scope.categories[i].name == "Food and Beverages") {
                            $scope.categories[i].BannerText = '<h1  class="Agro-Care-titles">Get the Best Food and</br> Beverages Products Online</h1><p class="foodBev"> Discover a wide range of food and beverage products </br>with Mi Lifestyle. Explore our wide range of quality</br> products and savor delightful flavors that cater</br>to your tastes and preferences.</p>';

                           
                        }
                    });
                  
                    $.each(response.categories, function (el, val) {

                        val["bannerImg"] = val.name.trim().toLowerCase().replace(/ /g, '');
 
                    });
                    //console.log(response.categories);
                    $scope.subCategories = response.categories[0].subCategories;
                    $scope.frmCategoryId = $scope.categories[0].categoryID;
                    //if (refId > 0) {
                    //    $scope.frmCategoryId = refId;
                    //    $scope.subCategories = response.categories[0].subCategories;
                    //} else {
                    //    $scope.frmCategoryId = $scope.categories[0].categoryID;
                    //    $scope.getCategory($scope.frmCategoryId);
                    //}
                }
                $scope.getProduct(0);
            } else {

            }
        });
    };

    $scope.setCheckbox = function () {
        $scope.arrCategoryChkBox = [];
        if (Object.keys($scope.selectedList).length > 0) {
            $.each($scope.selectedList, function (chk, selected) {
                if (selected) {
                    $scope.arrCategoryChkBox.push(chk);
                } else {
                    //$scope.arrCategoryChkBox.splice($scope.arrCategoryChkBox.indexOf(chk), 1);
                }
            });
        }
    }

    $scope.ngCategoryClk = function (category, idx) {

        if ($scope.arrCategoryChkBox.length > 0) {
            $.each($scope.arrCategoryChkBox, function (chk, selected) {
                $scope.selectedList[parseInt(selected)] = false;
            });
        }
        $(".bannerimg").hide();
        $("#banner_" + idx).show();
        $scope.subCategories = []; $scope.arrCategoryChkBox = [];
        $scope.subCategories = category.subCategories;
        //$scope.getCategory(category.categoryID);
        $scope.frmCategoryId = category.categoryID;
        $scope.getProductWthflter();
    }

    $scope.getProduct = function (productId) {

        businessService.getProduct(productId, function (response) {
            //console.log(response);
            if (response.dbResult.clear) {
                $scope.products = response.products;
                if (parseInt(productId) > 0) {
                    $scope.productDetail = response.products[0];
                }
                $scope.getProductWthflter();
            } else {
                console.log(response.dbResult.message);
            }
        });
    }

    $scope.getProductWthflter = function () {
        $scope.filterproducts = $scope.products.filter(function (item) {
            return (item.miCategoryId === $scope.frmCategoryId.toString()); //&& (item.miSubCategoryId=);
        });
    }

    $scope.$on('categoriesRenderFinished', function (ngRepeatFinishedEvent) {
        $("#banner_0").show();
    });

}]);

miPRTWebApp.filter('myfilter', myfilter);

function myfilter() {
    return function (items, filters) {

        if (filters === null || filters.length === 0) {
            return items;
        }

        var filtered = [];
        //Apply filter
        angular.forEach(items, function (item) {
            angular.forEach(filters, function (citem) {
                if (parseInt(item.miSubCategoryId) === parseInt(citem)) {
                    filtered.push(item);
                }
            });
        });

        return filtered;
    };
}