var bus  = new Vue();

let brandSelection = Vue.component('brand-selection',{
    template : "#brand-selection",
    data(){
        return {
            carBrandCategory : ["Category", "Tesla", "Porsche", "Toyota", "Honda", "Mazda","Mercedes-Benz","Lexus","Lamborghini", "Audi", "BMW"],
            selectedBrand : null,
        }
    },
    methods: {
        getSelectedBrand(){
            this.selectedBrand = this.carBrandCategory[event.target.value];

            (this.selectedBrand == "Category")? bus.$emit('bus-event0'): bus.$emit('bus-event1', this.selectedBrand);
        }
    }
})

let sortOption = Vue.component('sort-option',{
    template : "#sort-option",
    data(){
        return {
            sortOptions : ["Sort by:", "Price: Low to High", "Price: High to Low", "Newest Arrivals"],
            selectedOption : ""
        }
    },
    methods : {
        sortSignal(event){
            this.selectedOption = event.target.value;
            if(this.selectedOption == "0") bus.$emit('bus-event4');
            else if (this.selectedOption == "1") bus.$emit('bus-event2', true);
            else if(this.selectedOption == "2") bus.$emit('bus-event2', false)
            else bus.$emit('bus-event3');
        }
    }
})

let carInfo = Vue.component('car-information',{
    template : "#car-collection",
    data(){
        return {
            carCollection : [
                {id : 0, name : "Model 3", category : "Tesla", priceString: "$48,490", price : 48490, date : "2020-09-04", imgUrl: "https://media.istockphoto.com/photos/electric-sports-car-the-tesla-model-3-picture-id1277254968?k=6&m=1277254968&s=612x612&w=0&h=4j3WhZQD95BJyqOnML2sDatX9SFQomJclLyd5bbV3FU="},
                {id : 1, name : "Model X", category : "Tesla", priceString : "$89,990", price : 89990, date : "2017-08-08", imgUrl: "https://media.istockphoto.com/photos/tesla-model-x-travelling-on-the-freeway-in-silicon-valley-picture-id1191552504?k=6&m=1191552504&s=612x612&w=0&h=NWHap01jKkYzC5BT-9gaKYr8phGeO1ZUYHnGPLQ5RUM="},
                {id : 2, name : "Model S", category : "Tesla", priceString : "$82,990", price : 82990, date : "2019-04-01", imgUrl: "https://media.istockphoto.com/photos/tesla-model-s-on-the-highway-picture-id582261244?k=6&m=582261244&s=612x612&w=0&h=LwYAD7oI6Xy9gsRM7OZ10Nsq-ehGsSmLcbPwQEmZBpg="},
                {id : 3, name : "Model Y", category : "Tesla", priceString : "$48,190", price : 48190, date : "2020-02-02", imgUrl: "https://media.istockphoto.com/photos/tesla-model-y-in-austin-texas-at-360-bridge-picture-id1272025387?k=6&m=1272025387&s=612x612&w=0&h=o_W18f-pFNdHsSpdaNejXSS7G8XnWfayhinzZVWhQU8="},
                {id : 4, name : "Cayenne", category : "Porsche", priceString : "$67,500", price : 67500, date : "2017-12-20", imgUrl: "https://media.istockphoto.com/photos/porsche-cayenne-picture-id1138819485?k=6&m=1138819485&s=612x612&w=0&h=uSPCZUofVb5ComBHUpH5qZ5QB7B1WWcKFxNzm53W2ME="},
                {id : 5, name : "Macan", category : "Porsche", priceString : "$52,100", price : 52100, date : "2019-07-12", imgUrl: "https://media.istockphoto.com/photos/porsche-macan-gts-crossover-suv-picture-id508107322?k=6&m=508107322&s=612x612&w=0&h=syLuqvZng-mEbqJblhY3q6wWxcUlaijknWO9ea90CJo="},
                {id : 6, name : "Camry", category : "Toyota", priceString : "$24,425", price : 24425, date : "2015-06-29", imgUrl: "https://media.istockphoto.com/photos/toyota-camry-in-motion-picture-id905266220?k=6&m=905266220&s=612x612&w=0&h=8iRQyhjJYVn_ppC6x3LTLGzG0P67NyCvuQqxvO40ryI="},
                {id : 7, name : "Accord", category : "Honda", priceString : "$24,800", price : 24800, date : "2018-10-02", imgUrl: "https://media.istockphoto.com/photos/honda-accord-in-the-city-picture-id649004692?k=6&m=649004692&s=612x612&w=0&h=7WnRBZcLQ6-Y2FrKKVxya3nwJ6U-CLeZUuk-D5RVlu8="},
                {id : 8, name : "Civic", category : "Honda", priceString : "$20,650", price : 20650, date : "2015-04-04", imgUrl: "https://media.istockphoto.com/photos/new-honda-civic-front-picture-id458119929?k=6&m=458119929&s=612x612&w=0&h=h8uh7Bqgw2l1Hhg2TmX05VSBnp2cxrjpTBtvPYpKiD4="},
                {id : 9, name : "CX-5", category : "Mazda", priceString : "$26,940", price : 26940, date : "2012-11-03", imgUrl: "https://media.istockphoto.com/photos/new-2018-mazda-cx5-red-cx5-suv-car-japanese-car-moving-vehicle-picture-id1069236296?k=6&m=1069236296&s=612x612&w=0&h=CO2YJA51esFD2an-sKkhusVifvwTwhBXR3ebxD6h3Fg="},
                {id : 10, name : "GLE Coupe", category : "Mercedes-Benz", priceString : "$76,500", price : 76500, date : "2020-02-05", imgUrl: "https://media.istockphoto.com/photos/mercedesbenz-gle-43-4matic-coupe-picture-id894961460?k=6&m=894961460&s=612x612&w=0&h=aKbMi31eXuJOSVEKlesIzsJlLM6QhUe0k_5V-FJvH0M="},
                {id : 11, name : "CLA", category : "Mercedes-Benz", priceString : "$37,850", price : 37850, date : "2019-06-09", imgUrl: "https://media.istockphoto.com/photos/mercedes-benz-cla-picture-id472122163?k=6&m=472122163&s=612x612&w=0&h=IIRhsoWfMXXy6b_aTMtSA2dgSTPK4pSD-_M5vh8OY6M="},
                {id : 12, name : "GLA 250", category : "Mercedes-Benz", priceString : "$37,280", price : 37280, date : "2017-05-02", imgUrl: "https://media.istockphoto.com/photos/mercedesbenz-gla-2020-test-drive-day-picture-id1297389811?k=6&m=1297389811&s=612x612&w=0&h=NOPBUppwL9aFKKoha3phbhpHUw6hYSdsW5NlFejp4RU="},
                {id : 13, name : "RX 350", category : "Lexus", priceString : "$45,175", price : 45175, date : "2015-01-01", imgUrl: "https://media.istockphoto.com/photos/hybrid-suv-lexus-nx-on-the-road-picture-id657915058?k=6&m=657915058&s=612x612&w=0&h=DGCgfv-pBE75oOUktrX_WpGSadnEmRcm5iPfa49BOQw="},
                {id : 14, name : "NX 300", category : "Lexus", priceString : "$37,510", price : 37510, date : "2018-09-12", imgUrl: "https://media.istockphoto.com/photos/lexus-nx-200t-car-picture-id480681192?k=6&m=480681192&s=612x612&w=0&h=Ne9_r4aioLH_jpiK41fHpTr-ADdKsHcFMOOPXT9DGp8="},
                {id : 15, name : "Urus", category : "Lamborghini", priceString : "$218,000", price : 218000, date : "2021-08-16", imgUrl: "https://media.istockphoto.com/photos/lamborghini-urus-picture-id1184360237?k=6&m=1184360237&s=612x612&w=0&h=cDC3bjJCG9fZC8VpJnuoK73du-hKLnij-14eKHxuLyA="},
                {id : 16, name : "Aventador", category : "Lamborghini", priceString : "$393,695", price : 393695, date : "2020-09-11", imgUrl: "https://media.istockphoto.com/photos/lamborghini-aventador-lp-7504-superveloce-picture-id1083962000?k=6&m=1083962000&s=612x612&w=0&h=VBYRfp0408ZHqDTdJ69pIJP7z_zhj2T7z8OB-28adSU="},
                {id : 17, name : "A3", category : "Audi", priceString : "$33,500", price : 33500, date : "2019-05-08", imgUrl: "https://media.istockphoto.com/photos/audi-a3-sportback-on-a-street-picture-id1255388367?k=6&m=1255388367&s=612x612&w=0&h=nh2TLu9W-68-3_PgN1-0qkXYaw4mfFZviKY1sY_fjJ8="},
                {id : 18, name : "X3", category : "BMW", priceString : "$43,000", price : 43000, date : "2018-03-11", imgUrl: "https://media.istockphoto.com/photos/-picture-id1206921084?k=6&m=1206921084&s=612x612&w=0&h=o8ETeAQHAuzOerMorNWxPnDpyhSyrxiy6vvIQ8TLd4Y="},
                {id : 19, name : "2 Series", category : "BMW", priceString : "$37,500", price : 37500, date : "2019-01-15", imgUrl: "https://media.istockphoto.com/photos/coupe-competition-picture-id1187329409?k=6&m=1187329409&s=612x612&w=0&h=qDHLX8yA8WVGmEwFU8k56z72uobZfcGkHH14zzpLPc4="}
            ],
            copyArray : [
                {id : 1, name : "Model 3", category : "Tesla", priceString: "$48,490", price : 48490, date : "2020-09-04", imgUrl: "https://media.istockphoto.com/photos/electric-sports-car-the-tesla-model-3-picture-id1277254968?k=6&m=1277254968&s=612x612&w=0&h=4j3WhZQD95BJyqOnML2sDatX9SFQomJclLyd5bbV3FU="},
                {id : 2, name : "Model X", category : "Tesla", priceString : "$89,990", price : 89990, date : "2017-08-08", imgUrl: "https://media.istockphoto.com/photos/tesla-model-x-travelling-on-the-freeway-in-silicon-valley-picture-id1191552504?k=6&m=1191552504&s=612x612&w=0&h=NWHap01jKkYzC5BT-9gaKYr8phGeO1ZUYHnGPLQ5RUM="},
                {id : 3, name : "Model S", category : "Tesla", priceString : "$82,990", price : 82990, date : "2019-04-01", imgUrl: "https://media.istockphoto.com/photos/tesla-model-s-on-the-highway-picture-id582261244?k=6&m=582261244&s=612x612&w=0&h=LwYAD7oI6Xy9gsRM7OZ10Nsq-ehGsSmLcbPwQEmZBpg="},
                {id : 4, name : "Model Y", category : "Tesla", priceString : "$48,190", price : 48190, date : "2020-02-02", imgUrl: "https://media.istockphoto.com/photos/tesla-model-y-in-austin-texas-at-360-bridge-picture-id1272025387?k=6&m=1272025387&s=612x612&w=0&h=o_W18f-pFNdHsSpdaNejXSS7G8XnWfayhinzZVWhQU8="},
                {id : 5, name : "Cayenne", category : "Porsche", priceString : "$67,500", price : 67500, date : "2017-12-20", imgUrl: "https://media.istockphoto.com/photos/porsche-cayenne-picture-id1138819485?k=6&m=1138819485&s=612x612&w=0&h=uSPCZUofVb5ComBHUpH5qZ5QB7B1WWcKFxNzm53W2ME="},
                {id: 6, name : "Macan", category : "Porsche", priceString : "$52,100", price : 52100, date : "2019-07-12", imgUrl: "https://media.istockphoto.com/photos/porsche-macan-gts-crossover-suv-picture-id508107322?k=6&m=508107322&s=612x612&w=0&h=syLuqvZng-mEbqJblhY3q6wWxcUlaijknWO9ea90CJo="},
                {id : 7, name : "Camry", category : "Toyota", priceString : "$24,425", price : 24425, date : "2015-06-29", imgUrl: "https://media.istockphoto.com/photos/toyota-camry-in-motion-picture-id905266220?k=6&m=905266220&s=612x612&w=0&h=8iRQyhjJYVn_ppC6x3LTLGzG0P67NyCvuQqxvO40ryI="},
                {id : 8, name : "Accord", category : "Honda", priceString : "$24,800", price : 24800, date : "2018-10-02", imgUrl: "https://media.istockphoto.com/photos/honda-accord-in-the-city-picture-id649004692?k=6&m=649004692&s=612x612&w=0&h=7WnRBZcLQ6-Y2FrKKVxya3nwJ6U-CLeZUuk-D5RVlu8="},
                {id : 9, name : "Civic", category : "Honda", priceString : "$20,650", price : 20650, date : "2015-04-04", imgUrl: "https://media.istockphoto.com/photos/new-honda-civic-front-picture-id458119929?k=6&m=458119929&s=612x612&w=0&h=h8uh7Bqgw2l1Hhg2TmX05VSBnp2cxrjpTBtvPYpKiD4="},
                {id : 10, name : "CX-5", category : "Mazda", priceString : "$26,940", price : 26940, date : "2012-11-03", imgUrl: "https://media.istockphoto.com/photos/new-2018-mazda-cx5-red-cx5-suv-car-japanese-car-moving-vehicle-picture-id1069236296?k=6&m=1069236296&s=612x612&w=0&h=CO2YJA51esFD2an-sKkhusVifvwTwhBXR3ebxD6h3Fg="},
                {id : 11, name : "GLE Coupe", category : "Mercedes-Benz", priceString : "$76,500", price : 76500, date : "2020-02-05", imgUrl: "https://media.istockphoto.com/photos/mercedesbenz-gle-43-4matic-coupe-picture-id894961460?k=6&m=894961460&s=612x612&w=0&h=aKbMi31eXuJOSVEKlesIzsJlLM6QhUe0k_5V-FJvH0M="},
                {id : 11, name : "CLA", category : "Mercedes-Benz", priceString : "$37,850", price : 37850, date : "2019-06-09", imgUrl: "https://media.istockphoto.com/photos/mercedes-benz-cla-picture-id472122163?k=6&m=472122163&s=612x612&w=0&h=IIRhsoWfMXXy6b_aTMtSA2dgSTPK4pSD-_M5vh8OY6M="},
                {id: 12, name : "GLA 250", category : "Mercedes-Benz", priceString : "$37,280", price : 37280, date : "2017-05-02", imgUrl: "https://media.istockphoto.com/photos/mercedesbenz-gla-2020-test-drive-day-picture-id1297389811?k=6&m=1297389811&s=612x612&w=0&h=NOPBUppwL9aFKKoha3phbhpHUw6hYSdsW5NlFejp4RU="},
                {id : 13, name : "RX 350", category : "Lexus", priceString : "$45,175", price : 45175, date : "2015-01-01", imgUrl: "https://media.istockphoto.com/photos/hybrid-suv-lexus-nx-on-the-road-picture-id657915058?k=6&m=657915058&s=612x612&w=0&h=DGCgfv-pBE75oOUktrX_WpGSadnEmRcm5iPfa49BOQw="},
                {id : 14, name : "NX 300", category : "Lexus", priceString : "$37,510", price : 37510, date : "2018-09-12", imgUrl: "https://media.istockphoto.com/photos/lexus-nx-200t-car-picture-id480681192?k=6&m=480681192&s=612x612&w=0&h=Ne9_r4aioLH_jpiK41fHpTr-ADdKsHcFMOOPXT9DGp8="},
                {id : 15, name : "Urus", category : "Lamborghini", priceString : "$218,000", price : 218000, date : "2021-08-16", imgUrl: "https://media.istockphoto.com/photos/lamborghini-urus-picture-id1184360237?k=6&m=1184360237&s=612x612&w=0&h=cDC3bjJCG9fZC8VpJnuoK73du-hKLnij-14eKHxuLyA="},
                {id : 16, name : "Aventador", category : "Lamborghini", priceString : "$393,695", price : 393695, date : "2020-09-11", imgUrl: "https://media.istockphoto.com/photos/lamborghini-aventador-lp-7504-superveloce-picture-id1083962000?k=6&m=1083962000&s=612x612&w=0&h=VBYRfp0408ZHqDTdJ69pIJP7z_zhj2T7z8OB-28adSU="},
                {id : 17, name : "A3", category : "Audi", priceString : "$33,500", price : 33500, date : "2019-05-08", imgUrl: "https://media.istockphoto.com/photos/audi-a3-sportback-on-a-street-picture-id1255388367?k=6&m=1255388367&s=612x612&w=0&h=nh2TLu9W-68-3_PgN1-0qkXYaw4mfFZviKY1sY_fjJ8="},
                {id : 18, name : "X3", category : "BMW", priceString : "$43,000", price : 43000, date : "2018-03-11", imgUrl: "https://media.istockphoto.com/photos/-picture-id1206921084?k=6&m=1206921084&s=612x612&w=0&h=o8ETeAQHAuzOerMorNWxPnDpyhSyrxiy6vvIQ8TLd4Y="},
                {id : 19, name : "2 Series", category : "BMW", priceString : "$37,500", price : 37500, date : "2019-01-15", imgUrl: "https://media.istockphoto.com/photos/coupe-competition-picture-id1187329409?k=6&m=1187329409&s=612x612&w=0&h=qDHLX8yA8WVGmEwFU8k56z72uobZfcGkHH14zzpLPc4="}
            ],
            selectedBrand : "",
            sortedBrand : [],
            priceSortedAlready : false,
            dateSortedAlready : false,
            isLowToHigh : false
        }
    },
    mounted : function(){
        bus.$on('bus-event0', this.displayAll)
        bus.$on('bus-event1', this.sortbyBrandName)
        bus.$on('bus-event2', this.sortbyPrice)
        bus.$on('bus-event3', this.sortbyDate)
        bus.$on('bus-event4', this.sortClear)
    },
    methods : {

        //「Category」が選択されているとき（デフォルト状態）
        //price/dateでソートされた上でCategoryも選択されている場合、それらの状態を保持した上で全て表示する
        //もし全くソートされていない場合はそのまま表示する
        displayAll(){ 

            this.carCollection = this.copyArray;
            this.sortedBrand = [];

            if(this.priceSortedAlready){
                this.sortbyPrice(this.isLowToHigh);
            }
            else if(this.dateSortedAlready){
                this.sortbyDate();
            }
            else this.sortbyId();
        },

        //「sort by:」が選択されているとき（デフォルト状態）
        //もしブランド名でソートされている場合、その状態を保持した上で必要な処理をする
        sortClear(){
            this.priceSortedAlready = false;
            this.dateSortedAlready = false;
            if(this.sortedBrand.length) {
                this.sortbyBrandName(this.selectedBrand);
            }
            else{
                this.displayAll();
            }
        },
        //デフォルトの並べ方
        sortbyId(){
            this.carCollection.sort(function(a,b){
                if(a.id < b.id){
                    return -1;
                }else return 1;
            });
        },
        //ブランド名でソートする
        //ブランド名でソートした上で、price/dateでもソートする必要がある場合はそれを実行する
        sortbyBrandName(brandName){
            this.selectedBrand = brandName;
            this.sortedBrand = [];
            
            for(let i = 0; i < this.copyArray.length;i++){
                if(this.copyArray[i].category == this.selectedBrand){
                    this.sortedBrand.push(this.copyArray[i]);  
                }
            }
            this.carCollection = this.sortedBrand;

            if(this.priceSortedAlready) this.sortbyPrice(this.isLowToHigh);
            else if(this.dateSortedAlready) this.sortbyDate();
            
        },

        //値段でソートする
        //boolean(Is low to high?)を受け取る
        //ブランド名でソートされている場合とそうでない場合、low to highもしくはhigh to lowなどそれぞれの条件に適した処理を実行する
        sortbyPrice(boolean){
            this.isLowToHigh = boolean;
            //low to high (brand not sorted)
            if(!this.sortedBrand.length && this.isLowToHigh){
                this.carCollection.sort(function(a,b){
                    if(a.price < b.price){
                        return -1;
                    }else return 1;
                });
            }
            //high to low (brand not sorted)
            else if(!this.sortedBrand.length && !this.isLowToHigh){
                this.carCollection.sort(function(a,b){
                    if(a.price > b.price){
                        return -1;
                    }else return 1;
                });
            }
            //low to high (brand sorted)
            else if(this.sortedBrand.length && this.isLowToHigh){
                this.sortedBrand.sort(function(a,b){
                    if(a.price < b.price){
                        return -1;
                    }else return 1;
                });
            }
            //hight to low (brand sorted)
            else{
                this.sortedBrand.sort(function(a,b){
                    if(a.price > b.price){
                        return -1;
                    }else return 1;
                });
            }
            this.dateSortedAlready = false;
            this.priceSortedAlready = true;
        },

        //新しい順にソートする
        //ブランド名で既にソートされている場合、その状態を保持したまま必要な処理を行う
        sortbyDate(){
            if(this.sortedBrand.length){
                this.sortedBrand.sort(function(a,b){
                    if(a.date > b.date){
                        return -1;
                    }else return 1;
                });
            }else{
                this.carCollection.sort(function(a,b){
                    if(a.date > b.date){
                        return -1;
                    }else return 1;
                });
            }
            this.priceSortedAlready = false;
            this.dateSortedAlready = true;
        }
    }
})

new Vue({
    el : "#app"
})