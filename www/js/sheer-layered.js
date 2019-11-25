(function(window) {
    'use strict';

    var SwatchData = [
        /* Missing
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane, 3\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Glacial",
            "colorNumber": "5100, 6100",
            "thumbSource": "C_18_5100.jpg",
            "imageSource": "600x600/C_18_5100.jpg",
            "colorNumberList": "2\" Vane 5100, 3\" Vane 6100"
        },*/
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Portico",
            "colorNumber": "5101",
            "thumbSource": "C_18_5101.jpg",
            "imageSource": "600x600/C_18_5101.jpg",
            "colorNumberList": "2\" Vane 5101, 3\" Vane 6101"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Merlot",
            "colorNumber": "5102",
            "thumbSource": "C_18_5102.jpg",
            "imageSource": "600x600/C_18_5102.jpg",
            "colorNumberList": "2\" Vane 5102, 3\" Vane 6102"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Sable",
            "colorNumber": "5103",
            "thumbSource": "C_18_5103.jpg",
            "imageSource": "600x600/C_18_5103.jpg",
            "colorNumberList": "2\" Vane 5103, 3\" Vane 6103"
        },
        /* Missing
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Apple Blossom",
            "colorNumber": "5108",
            "thumbSource": "C_18_5108.jpg",
            "imageSource": "600x600/C_18_5108.jpg",
            "colorNumberList": "2\" Vane 5108, 3\" Vane 6108"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Limestone",
            "colorNumber": "5111",
            "thumbSource": "C_18_5111.jpg",
            "imageSource": "600x600/C_18_5111.jpg",
            "colorNumberList": "2\" Vane 5111, 3\" Vane 6111"
        },*/
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Macchiato",
            "colorNumber": "5112",
            "thumbSource": "C_18_5112.jpg",
            "imageSource": "600x600/C_18_5112.jpg",
            "colorNumberList": "2\" Vane 5112, 3\" Vane 6112"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Lemongrass",
            "colorNumber": "5116",
            "thumbSource": "C_18_5116.jpg",
            "imageSource": "600x600/C_18_5116.jpg",
            "colorNumberList": "2\" Vane 5116, 3\" Vane 6116"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Cavalry",
            "colorNumber": "5117",
            "thumbSource": "C_18_5117.jpg",
            "imageSource": "600x600/C_18_5117.jpg",
            "colorNumberList": "2\" Vane 5117, 3\" Vane 6117"
        },
        /* Reshoot
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Rodeo Drive",
            "colorNumber": "5118",
            "thumbSource": "C_18_5118.jpg",
            "imageSource": "600x600/C_18_5118.jpg",
            "colorNumberList": "2\" Vane 5118, 3\" Vane 6118"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Sandstone",
            "colorNumber": "5121",
            "thumbSource": "C_18_5121.jpg",
            "imageSource": "600x600/C_18_5121.jpg",
            "colorNumberList": "2\" Vane 5121, 3\" Vane 6121"
        },*/
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Vellum",
            "colorNumber": "5122",
            "thumbSource": "C_18_5122.jpg",
            "imageSource": "600x600/C_18_5122.jpg",
            "colorNumberList": "2\" Vane 5122, 3\" Vane 6122"
        },
        /* Reshoot
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Bechamel",
            "colorNumber": "5123",
            "thumbSource": "C_18_5123.jpg",
            "imageSource": "600x600/C_18_5123.jpg",
            "colorNumberList": "2\" Vane 5123, 3\" Vane 6123"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Downtown",
            "colorNumber": "5124",
            "thumbSource": "C_18_5124.jpg",
            "imageSource": "600x600/C_18_5124.jpg",
            "colorNumberList": "2\" Vane 5124, 3\" Vane 6124"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Stationery",
            "colorNumber": "5125",
            "thumbSource": "C_18_5125.jpg",
            "imageSource": "600x600/C_18_5125.jpg",
            "colorNumberList": "2\" Vane 5125, 3\" Vane 6125"
        },*/
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner Sheen",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Bubbly",
            "colorNumber": "5161",
            "thumbSource": "C_18_5161.jpg",
            "imageSource": "600x600/C_18_5161.jpg",
            "colorNumberList": "2\" Vane 5161, 3\" Vane 6161"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner Sheen",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Limousine",
            "colorNumber": "5162",
            "thumbSource": "C_18_5162.jpg",
            "imageSource": "600x600/C_18_5162.jpg",
            "colorNumberList": "2\" Vane 5162, 3\" Vane 6162"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner Sheen",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Soiree",
            "colorNumber": "5163",
            "thumbSource": "C_18_5163.jpg",
            "imageSource": "600x600/C_18_5163.jpg",
            "colorNumberList": "2\" Vane 5163, 3\" Vane 6163"
        },
        /* Reshoot
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner Woven",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Bamboo",
            "colorNumber": "5181",
            "thumbSource": "C_18_5181.jpg",
            "imageSource": "600x600/C_18_5181.jpg",
            "colorNumberList": "2\" Vane 5181, 3\" Vane 6181"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner Woven",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Silver Mine",
            "colorNumber": "5182",
            "thumbSource": "C_18_5182.jpg",
            "imageSource": "600x600/C_18_5182.jpg",
            "colorNumberList": "2\" Vane 5182, 3\" Vane 6182"
        },*/
        {
            "productLine": "Sheer Shades",
            "collectionName": "Glessner Woven",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Champagne",
            "colorNumber": "5183",
            "thumbSource": "C_18_5183.jpg",
            "imageSource": "600x600/C_18_5183.jpg",
            "colorNumberList": "2\" Vane 5183, 3\" Vane 6183"
        },
        /* Missing
        {
            "productLine": "Sheer Shades",
            "collectionName": "Marisco",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Bechamel",
            "colorNumber": "6200",
            "thumbSource": "C_18_6200.jpg",
            "imageSource": "600x600/C_18_6200.jpg",
            "colorNumberList": "2\" Vane 6200, 2 3/4\" Vane 7200"
        },*/
        {
            "productLine": "Sheer Shades",
            "collectionName": "Marisco",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Stationery",
            "colorNumber": "6201",
            "thumbSource": "C_18_6201.jpg",
            "imageSource": "600x600/C_18_6201.jpg",
            "colorNumberList": "2\" Vane 6201, 2 3/4\" Vane 7201"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "San Simeon",
            "vaneStyle": "3\" Vane",
            "lightControl": "Room Darkening",
            "colorName": "Everglades",
            "colorNumber": "7220",
            "thumbSource": "C_18_7220.jpg",
            "imageSource": "600x600/C_18_7220.jpg",
            "colorNumberList": "3\" Vane 7220"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "San Simeon",
            "vaneStyle": "3\" Vane",
            "lightControl": "Room Darkening",
            "colorName": "Sandstone",
            "colorNumber": "7221",
            "thumbSource": "C_18_7221.jpg",
            "imageSource": "600x600/C_18_7221.jpg",
            "colorNumberList": "3\" Vane 7221"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "San Simeon",
            "vaneStyle": "3\" Vane",
            "lightControl": "Room Darkening",
            "colorName": "Vellum",
            "colorNumber": "7222",
            "thumbSource": "C_18_7222.jpg",
            "imageSource": "600x600/C_18_7222.jpg",
            "colorNumberList": "3\" Vane 7222"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "San Simeon",
            "vaneStyle": "3\" Vane",
            "lightControl": "Room Darkening",
            "colorName": "Silver Mine",
            "colorNumber": "7223",
            "thumbSource": "C_18_7223.jpg",
            "imageSource": "600x600/C_18_7223.jpg",
            "colorNumberList": "3\" Vane 7223"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "San Simeon",
            "vaneStyle": "3\" Vane",
            "lightControl": "Room Darkening",
            "colorName": "Adirondack",
            "colorNumber": "7224",
            "thumbSource": "C_18_7224.jpg",
            "imageSource": "600x600/C_18_7224.jpg",
            "colorNumberList": "3\" Vane 7224"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "San Simeon",
            "vaneStyle": "3\" Vane",
            "lightControl": "Room Darkening",
            "colorName": "Stationery",
            "colorNumber": "7225",
            "thumbSource": "C_18_7225.jpg",
            "imageSource": "600x600/C_18_7225.jpg",
            "colorNumberList": "3\" Vane 7225"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Roslin",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Sandstone",
            "colorNumber": "7245",
            "thumbSource": "C_18_7245.jpg",
            "imageSource": "600x600/C_18_7245.jpg",
            "colorNumberList": "2\" Vane with 1\" View 7245"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Roslin",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Bechamel",
            "colorNumber": "7246",
            "thumbSource": "C_18_7246.jpg",
            "imageSource": "600x600/C_18_7246.jpg",
            "colorNumberList": "2\" Vane with 1\" View 7246"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Roslin",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Stationery",
            "colorNumber": "7247",
            "thumbSource": "C_18_7247.jpg",
            "imageSource": "600x600/C_18_7247.jpg",
            "colorNumberList": "2\" Vane with 1\" View 7247"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Winchester",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Stationery",
            "colorNumber": "7260",
            "thumbSource": "C_18_7260.jpg",
            "imageSource": "600x600/C_18_7260.jpg",
            "colorNumberList": "2\" Vane with 1\" View 7260"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Winchester",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Bechamel",
            "colorNumber": "7261",
            "thumbSource": "C_18_7261.jpg",
            "imageSource": "600x600/C_18_7261.jpg",
            "colorNumberList": "2\" Vane with 1\" View 7261"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Winchester",
            "vaneStyle": "2\" Vane",
            "lightControl": "Light Filtering",
            "colorName": "Rodeo Drive",
            "colorNumber": "7262",
            "thumbSource": "C_18_7262.jpg",
            "imageSource": "600x600/C_18_7262.jpg",
            "colorNumberList": "2\" Vane with 1\" View 7262"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Winchester Woven",
            "vaneStyle": "2\" Vane with 1\" View",
            "lightControl": "Light Filtering",
            "colorName": "Champagne",
            "colorNumber": "7264",
            "thumbSource": "C_18_7264.jpg",
            "imageSource": "600x600/C_18_7264.jpg",
            "colorNumberList": "2\" Vane with 1\" View 7264"
        },
        /* Reshoot
        {
            "productLine": "Sheer Shades",
            "collectionName": "Winchester Woven",
            "vaneStyle": "2\" Vane with 1\" View",
            "lightControl": "Light Filtering",
            "colorName": "Silver Mine",
            "colorNumber": "7265",
            "thumbSource": "C_18_7265.jpg",
            "imageSource": "600x600/C_18_7265.jpg",
            "colorNumberList": "2\" Vane with 1\" View 7265"
        },*/
        {
            "productLine": "Sheer Shades",
            "collectionName": "Winchester Woven",
            "vaneStyle": "2\" Vane with 1\" View",
            "lightControl": "Light Filtering",
            "colorName": "Everglades",
            "colorNumber": "7266",
            "thumbSource": "C_18_7266.jpg",
            "imageSource": "600x600/C_18_7266.jpg",
            "colorNumberList": "2\" Vane with 1\" View 7266"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Winchester Sheen",
            "vaneStyle": "2\" Vane with 1\" View",
            "lightControl": "Light Filtering",
            "colorName": "Sunset Strip",
            "colorNumber": "7300",
            "thumbSource": "C_18_7300.jpg",
            "imageSource": "600x600/C_18_7300.jpg",
            "colorNumberList": "2\" Vane with 1\" View 7300"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Winchester Sheen",
            "vaneStyle": "2\" Vane with 1\" View",
            "lightControl": "Light Filtering",
            "colorName": "Limousine",
            "colorNumber": "7301",
            "thumbSource": "C_18_7301.jpg",
            "imageSource": "600x600/C_18_7301.jpg",
            "colorNumberList": "2\" Vane with 1\" View 7301"
        },
        {
            "productLine": "Sheer Shades",
            "collectionName": "Winchester Sheen",
            "vaneStyle": "2\" Vane with 1\" View",
            "lightControl": "Light Filtering",
            "colorName": "Soiree",
            "colorNumber": "7302",
            "thumbSource": "C_18_7302.jpg",
            "imageSource": "600x600/C_18_7302.jpg",
            "colorNumberList": "2\" Vane with 1\" View 7302"
        },

        // Layered Shades =========================================
        {
            "productLine": "Layered Shades",
            "collectionName": "Glorieta",
            "lightControl": "Sheer",
            "colorName": "Ivory",
            "colorNumber": "4540",
            "thumbSource": "C_18_4540.jpg",
            "imageSource": "600x600/C_18_4540.jpg",
            "colorNumberList": "4540"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Glorieta",
            "lightControl": "Sheer",
            "colorName": "Noir",
            "colorNumber": "4541",
            "thumbSource": "C_18_4541.jpg",
            "imageSource": "600x600/C_18_4541.jpg",
            "colorNumberList": "4541"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Glorieta",
            "lightControl": "Sheer",
            "colorName": "Cityscape",
            "colorNumber": "4542",
            "thumbSource": "C_18_4542.jpg",
            "imageSource": "600x600/C_18_4542.jpg",
            "colorNumberList": "4542"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Glorieta",
            "lightControl": "Sheer",
            "colorName": "Chocolate",
            "colorNumber": "4543",
            "thumbSource": "C_18_4543.jpg",
            "imageSource": "600x600/C_18_4543.jpg",
            "colorNumberList": "4543"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Glorieta",
            "lightControl": "Sheer",
            "colorName": "Icicle",
            "colorNumber": "4544",
            "thumbSource": "C_18_4544.jpg",
            "imageSource": "600x600/C_18_4544.jpg",
            "colorNumberList": "4544"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Glorieta",
            "lightControl": "Sheer",
            "colorName": "Burnished Caramel",
            "colorNumber": "4545",
            "thumbSource": "C_18_4545.jpg",
            "imageSource": "600x600/C_18_4545.jpg",
            "colorNumberList": "4545"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Glorieta Sheen",
            "lightControl": "Sheer",
            "colorName": "Zinc",
            "colorNumber": "4560",
            "thumbSource": "C_18_4560.jpg",
            "imageSource": "600x600/C_18_4560.jpg",
            "colorNumberList": "4560"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Glorieta Sheen",
            "lightControl": "Sheer",
            "colorName": "Glisten",
            "colorNumber": "4563",
            "thumbSource": "C_18_4563.jpg",
            "imageSource": "600x600/C_18_4563.jpg",
            "colorNumberList": "4563"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Aravalli",
            "lightControl": "Room Darkening",
            "colorName": "Sand",
            "colorNumber": "4580",
            "thumbSource": "C_18_4580.jpg",
            "imageSource": "600x600/C_18_4580.jpg",
            "colorNumberList": "4580"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Aravalli",
            "lightControl": "Room Darkening",
            "colorName": "Bronze",
            "colorNumber": "4582",
            "thumbSource": "C_18_4582.jpg",
            "imageSource": "600x600/C_18_4582.jpg",
            "colorNumberList": "4582"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Aravalli",
            "lightControl": "Room Darkening",
            "colorName": "Crystal",
            "colorNumber": "4583",
            "thumbSource": "C_18_4583.jpg",
            "imageSource": "600x600/C_18_4583.jpg",
            "colorNumberList": "4583"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Bernina",
            "lightControl": "Light Filtering",
            "colorName": "Birch Bark",
            "colorNumber": "4600",
            "thumbSource": "C_18_4600.jpg",
            "imageSource": "600x600/C_18_4600.jpg",
            "colorNumberList": "4600"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Bernina",
            "lightControl": "Light Filtering",
            "colorName": "Mussel Shell",
            "colorNumber": "4601",
            "thumbSource": "C_18_4601.jpg",
            "imageSource": "600x600/C_18_4601.jpg",
            "colorNumberList": "4601"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Bernina",
            "lightControl": "Light Filtering",
            "colorName": "Shale",
            "colorNumber": "4602",
            "thumbSource": "C_18_4602.jpg",
            "imageSource": "600x600/C_18_4602.jpg",
            "colorNumberList": "4602"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Bernina",
            "lightControl": "Light Filtering",
            "colorName": "Tuxedo",
            "colorNumber": "4603",
            "thumbSource": "C_18_4603.jpg",
            "imageSource": "600x600/C_18_4603.jpg",
            "colorNumberList": "4603"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Venado",
            "lightControl": "Light Filtering",
            "colorName": "Lily White",
            "colorNumber": "4640",
            "thumbSource": "C_18_4640.jpg",
            "imageSource": "600x600/C_18_4640.jpg",
            "colorNumberList": "4640"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Venado",
            "lightControl": "Light Filtering",
            "colorName": "Bisque",
            "colorNumber": "4642",
            "thumbSource": "C_18_4642.jpg",
            "imageSource": "600x600/C_18_4642.jpg",
            "colorNumberList": "4642"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Venado",
            "lightControl": "Light Filtering",
            "colorName": "Mauve",
            "colorNumber": "4643",
            "thumbSource": "C_18_4643.jpg",
            "imageSource": "600x600/C_18_4643.jpg",
            "colorNumberList": "4643"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Venado",
            "lightControl": "Light Filtering",
            "colorName": "Dusky Mauve",
            "colorNumber": "4644",
            "thumbSource": "C_18_4644.jpg",
            "imageSource": "600x600/C_18_4644.jpg",
            "colorNumberList": "4644"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Venado",
            "lightControl": "Light Filtering",
            "colorName": "Regiment",
            "colorNumber": "4645",
            "thumbSource": "C_18_4645.jpg",
            "imageSource": "600x600/C_18_4645.jpg",
            "colorNumberList": "4645"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Venado",
            "lightControl": "Light Filtering",
            "colorName": "Charcoal",
            "colorNumber": "4646",
            "thumbSource": "C_18_4646.jpg",
            "imageSource": "600x600/C_18_4646.jpg",
            "colorNumberList": "4646"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Venado",
            "lightControl": "Light Filtering",
            "colorName": "Raven",
            "colorNumber": "4648",
            "thumbSource": "C_18_4648.jpg",
            "imageSource": "600x600/C_18_4648.jpg",
            "colorNumberList": "4648"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Venado",
            "lightControl": "Light Filtering",
            "colorName": "Icicle",
            "colorNumber": "4649",
            "thumbSource": "C_18_4649.jpg",
            "imageSource": "600x600/C_18_4649.jpg",
            "colorNumberList": "4649"
        },
        /* Missing
        {
            "productLine": "Layered Shades",
            "collectionName": "Vanoise",
            "lightControl": "Light Filtering",
            "colorName": "Polar",
            "colorNumber": "4660",
            "thumbSource": "C_18_4660.jpg",
            "imageSource": "600x600/C_18_4660.jpg",
            "colorNumberList": "4660"
        },*/
        {
            "productLine": "Layered Shades",
            "collectionName": "Vanoise",
            "lightControl": "Light Filtering",
            "colorName": "Tusk",
            "colorNumber": "4661",
            "thumbSource": "C_18_4661.jpg",
            "imageSource": "600x600/C_18_4661.jpg",
            "colorNumberList": "4661"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Vanoise",
            "lightControl": "Light Filtering",
            "colorName": "Arctic Fox",
            "colorNumber": "4662",
            "thumbSource": "C_18_4662.jpg",
            "imageSource": "600x600/C_18_4662.jpg",
            "colorNumberList": "4662"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Vanoise",
            "lightControl": "Light Filtering",
            "colorName": "Kodiak",
            "colorNumber": "4663",
            "thumbSource": "C_18_4663.jpg",
            "imageSource": "600x600/C_18_4663.jpg",
            "colorNumberList": "4663"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Crestones",
            "lightControl": "Light Filtering",
            "colorName": "Midnight",
            "colorNumber": "4680",
            "thumbSource": "C_18_4680.jpg",
            "imageSource": "600x600/C_18_4680.jpg",
            "colorNumberList": "4680"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Crestones",
            "lightControl": "Light Filtering",
            "colorName": "Silversmith",
            "colorNumber": "4681",
            "thumbSource": "C_18_4681.jpg",
            "imageSource": "600x600/C_18_4681.jpg",
            "colorNumberList": "4681"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Crestones",
            "lightControl": "Light Filtering",
            "colorName": "Copper",
            "colorNumber": "4682",
            "thumbSource": "C_18_4682.jpg",
            "imageSource": "600x600/C_18_4682.jpg",
            "colorNumberList": "4682"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Crestones",
            "lightControl": "Light Filtering",
            "colorName": "Lace",
            "colorNumber": "4683",
            "thumbSource": "C_18_4683.jpg",
            "imageSource": "600x600/C_18_4683.jpg",
            "colorNumberList": "4683"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Crestones",
            "lightControl": "Light Filtering",
            "colorName": "Buff",
            "colorNumber": "4684",
            "thumbSource": "C_18_4684.jpg",
            "imageSource": "600x600/C_18_4684.jpg",
            "colorNumberList": "4684"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Crestones",
            "lightControl": "Light Filtering",
            "colorName": "Essential White",
            "colorNumber": "4685",
            "thumbSource": "C_18_4685.jpg",
            "imageSource": "600x600/C_18_4685.jpg",
            "colorNumberList": "4685"
        },
        /* Missing
        {
            "productLine": "Layered Shades",
            "collectionName": "Herard",
            "lightControl": "Light Filtering",
            "colorName": "Mercury",
            "colorNumber": "4700",
            "thumbSource": "C_18_4700.jpg",
            "imageSource": "600x600/C_18_4700.jpg",
            "colorNumberList": "4700"
        },*/
        {
            "productLine": "Layered Shades",
            "collectionName": "Herard",
            "lightControl": "Light Filtering",
            "colorName": "Silversmith",
            "colorNumber": "4701",
            "thumbSource": "C_18_4701.jpg",
            "imageSource": "600x600/C_18_4701.jpg",
            "colorNumberList": "4701"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Herard",
            "lightControl": "Light Filtering",
            "colorName": "Copper",
            "colorNumber": "4702",
            "thumbSource": "C_18_4702.jpg",
            "imageSource": "600x600/C_18_4702.jpg",
            "colorNumberList": "4702"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Herard",
            "lightControl": "Light Filtering",
            "colorName": "Lace",
            "colorNumber": "4704",
            "thumbSource": "C_18_4704.jpg",
            "imageSource": "600x600/C_18_4704.jpg",
            "colorNumberList": "4704"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Herard",
            "lightControl": "Light Filtering",
            "colorName": "Essential White",
            "colorNumber": "4705",
            "thumbSource": "C_18_4705.jpg",
            "imageSource": "600x600/C_18_4705.jpg",
            "colorNumberList": "4705"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Cordillera",
            "lightControl": "Light Filtering",
            "colorName": "Flax",
            "colorNumber": "4720",
            "thumbSource": "C_18_4720.jpg",
            "imageSource": "600x600/C_18_4720.jpg",
            "colorNumberList": "4720"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Cordillera",
            "lightControl": "Light Filtering",
            "colorName": "Sand Dune",
            "colorNumber": "4721",
            "thumbSource": "C_18_4721.jpg",
            "imageSource": "600x600/C_18_4721.jpg",
            "colorNumberList": "4721"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Cordillera",
            "lightControl": "Light Filtering",
            "colorName": "Acorn",
            "colorNumber": "4722",
            "thumbSource": "C_18_4722.jpg",
            "imageSource": "600x600/C_18_4722.jpg",
            "colorNumberList": "4722"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Cordillera",
            "lightControl": "Light Filtering",
            "colorName": "Rushes",
            "colorNumber": "4723",
            "thumbSource": "C_18_4723.jpg",
            "imageSource": "600x600/C_18_4723.jpg",
            "colorNumberList": "4723"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Cordillera",
            "lightControl": "Light Filtering",
            "colorName": "Coffee Bean",
            "colorNumber": "4724",
            "thumbSource": "C_18_4724.jpg",
            "imageSource": "600x600/C_18_4724.jpg",
            "colorNumberList": "4724"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Cordillera",
            "lightControl": "Light Filtering",
            "colorName": "Lily White",
            "colorNumber": "4725",
            "thumbSource": "C_18_4725.jpg",
            "imageSource": "600x600/C_18_4725.jpg",
            "colorNumberList": "4725"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Culebra",
            "lightControl": "Light Filtering",
            "colorName": "Lotus",
            "colorNumber": "4740",
            "thumbSource": "C_18_4740.jpg",
            "imageSource": "600x600/C_18_4740.jpg",
            "colorNumberList": "4740"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Culebra",
            "lightControl": "Light Filtering",
            "colorName": "Proclamation",
            "colorNumber": "4741",
            "thumbSource": "C_18_4741.jpg",
            "imageSource": "600x600/C_18_4741.jpg",
            "colorNumberList": "4741"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Culebra",
            "lightControl": "Light Filtering",
            "colorName": "Wren",
            "colorNumber": "4742",
            "thumbSource": "C_18_4742.jpg",
            "imageSource": "600x600/C_18_4742.jpg",
            "colorNumberList": "4742"
        },
        {
            "productLine": "Layered Shades",
            "collectionName": "Culebra",
            "lightControl": "Light Filtering",
            "colorName": "Obsidian",
            "colorNumber": "4743",
            "thumbSource": "C_18_4743.jpg",
            "imageSource": "600x600/C_18_4743.jpg",
            "colorNumberList": "4743"
        }
    ]

    window.SwatchData = SwatchData;

})(window);
