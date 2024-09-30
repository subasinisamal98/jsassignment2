//Q.1
const personAccount = {
    firstName: "google",
    lastName: "search",
    incomes: [
        { description: "Salary", amount: 10000 },
        { description: "part-time", amount: 2000 }
    ],
    expenses: [
        { description: "Rent", amount: 1200 },
        { description: "Groceries", amount: 300 }
    ],
    totalIncome: function() {
        let totalIncome = 0
        for(let i = 0; i <= this.incomes.length; i++){
            totalIncome = totalIncome + incomes[i]
        }
        return totalIncome
    },
    totalExpense: function() {
        let totalExpense = 0
        for(let i in this.expenses){
            totalExpense = totalExpense + i
        }
        return totalExpense
    },
    accountInfo: function() {
        return `Name: ${this.firstName} ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expenses: ${this.totalExpense()}`
    },
    addIncome: function(description, amount) {
        this.incomes.push({ description, amount })
    },
    addExpense: function(description, amount) {
        this.expenses.push({ description, amount })
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense()
    }
};
console.log(personAccount.accountInfo())
personAccount.addIncome("Bonus", 500)
personAccount.addExpense("travel", 1000)
console.log("Total Balance:", personAccount.accountBalance())

//Q.2
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ]
    function signup(username, email){
        let userexists = false
        for(let i = 0; i < users.length; i++){
            if(users[i].username === username || users[i].email === email){
                userexists = true
                break
            }
        }
        if(userexists){
            console.log("user already has an account.")
        } else {
            users.push({username, email})
            console.log("signup successful")
        }
    }
signup("Alex","alex@alex.com")

//Q.3
const products = [
  {
    id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  }]
function rateProduct(productId, rating) {
    if (rating < 1 || rating > 5) {
        console.log("Invalid rating.")
        return
    }
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            products[i].ratings.push(rating)
            console.log(`Product rated successfully: ${products[i].name}, Rating: ${rating}`)
            return
        }
    }
    console.log("Product not found.")
}
rateProduct('eedfcf', 4)

function averageRating(productName) {
   let product
   for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
           product = products[i]
           break
        }
    }
  if (product) {
    let totalRating = 0
    for(let i = 0; i < product.ratings.length; i++){
        totalRating = totalRating + product.ratings[i]
        const average = totalRating / product.ratings.length;
        console.log(`Average rating of ${productName}: ${average}`)
    }
  } else {
    console.log("Product not found.")
  }
}
averageRating("Laptop")

//Q.4
const productList = [
  { name: "Laptop", likes: false },
  { name: "Phone", likes: true },
];

function likeProduct(productName) {
  let product
   for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
           product = products[i]
           break
        }
    }
  if (product) {
      product.likes = !product.likes
      if(product.likes){
        console.log(`${productName} is now liked.`)
      } else { 
        console.log(`${productName} is now not liked.`)
      }
    }
}
likeProduct("Laptop")
likeProduct("Phone")


