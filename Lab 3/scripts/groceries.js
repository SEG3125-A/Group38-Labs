var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
        isOrganic: false
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
        isOrganic: false
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
        isOrganic: false
	},
    {
        name: "organic salmon",
        vegetarian: false,
        glutenFree: true,
        price: 15.00,
        isOrganic: true
    },
    {
        name: "eggs",
        vegetarian: false,
        glutenFree: true,
        price: 4.00,
        isOrganic: false
    },
    {
        name: "free range eggs",
        vegetarian: false,
        glutenFree: true,
        price: 5.00,
        isOrganic: true   
    },
    {
        name: "2% milk",
        vegetarian: true,
        glutenFree: true,
        price: 6.00,
        isOrganic: false
    },
    {
        name: "2% lactose free milk",
        vegetarian: true,
        glutenFree: true,
        price: 6.50,
        isOrganic: false
    },
    {
        name: "Freshly-baked muffins",
        vegetarian: true,
        glutenFree: false,
        price: 3.00,
        isOrganic: true
    },
    {
        name: "Grass-fed beef",
        vegetarian: false,
        glutenFree: true,
        price: 6.50,
        isOrganic: true
    },
    {
        name: "Tofu sticks",
        vegetarian: true,
        glutenFree: true,
        price: 5.25,
        isOrganic: false
    }

];
	

function actualFilterProds(){
    
}

function restrictListProducts(prods, restriction, isorganic) {
	let product_names = [];

   
	for (let i=0; i<prods.length; i+=1) {
        if (isorganic == "yes" && prods[i].isOrganic == true){
            if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
                product_names.push(prods[i]);
            }
            else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
                product_names.push(prods[i]);
            }
            else if (restriction == "None"){
                product_names.push(prods[i]);
            }
            else if ((restriction == "GlutenFree" && restriction == "Vegetarian") && (prods[i].glutenFree == true && prods[i].glutenFree == true)){
                product_names.push(prods[i])
            }
        }else {
            if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
                product_names.push(prods[i]);
            }
            else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
                product_names.push(prods[i]);
            }
            else if (restriction == "None"){
                product_names.push(prods[i]);
            }
            else if ((restriction == "GlutenFree" && restriction == "Vegetarian") && (prods[i].glutenFree == true && prods[i].glutenFree == true)){
                product_names.push(prods[i])
            }
        }
        
    
	}
    //let sortedprods = sortProductList(product_names);
    product_names.sort((a,b) => {
       return a.price - b.price}
        )
    /*
    
    */
    var newprods = []
    for (var i = 0; i < product_names.length; i++){
        newprods[i] = product_names[i].name + " - $" + product_names[i].price
    }
    return newprods
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(productPrices) {
	totalPrice = 0;
	
    for (let i = 0; i < productPrices.length; i++){
        totalPrice = totalPrice + productPrices[i]
    }

    return totalPrice
}