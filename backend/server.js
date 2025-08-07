express = require('express')
app = express();

app.listen("5151", () => {
    console.log("server running.....")
})

cors = require('cors')
app.use(cors());


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


//schema----------------------

let Users = require('./model/Users')

let Addproduct = require('./model/Addproduct');


const Addtocart = require('./model/Cart');

const Addwishlist = require('./model/Wishlist');

//mongoose--------------------

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sachin:ZMJDO5k2PC6yVyi9@cluster0.aaawank.mongodb.net/freshcart").then((res) => {
    console.log("mongodb connected")
}).catch((err) => {
    console.log(err)
})


app.post("/addproducts", async (req, res) => {
    try {
        let a = req.body;

        let pdata = new Addproduct({
            Productname: a.Productname,
            units: a.units,
            Category: a.Category,
            image: a.image,
            Description: a.Description,
            price: a.price,
            sellprice: a.sellprice
        });
        let result = await pdata.save();

        if (result) {
            res.json({
                status: true,
                msg: "add product success"
            });
        } else {
            res.json({
                status: false,
                msg: "failed to add product"
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, msg: "server error" });
    }
});



app.post("/signup", async (req, res) => {
    try {
        let a = req.body.Sinupdata;

        let userdata = new Users({
            name: a.name,
            email: a.email,
            password: a.password
        });

        let result = await userdata.save();

        if (result) {
            res.json({
                status: true,
                msg: "signup success"
            });
        } else {
            res.json({
                status: false,
                msg: "failed to signup"
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, msg: "server error" });
    }
})




// allusers-------------

app.get("/allusers", async (req, res) => {
    let allusers = await Users.find({})

    if (allusers) {
        res.json({
            status: true,
            ouruser: allusers
        })
    }
    else {
        res.json({
            status: false

        })
    }
});




app.post("/addtocart", async (req, res) => {
    try {
        const data = req.body;
        // console.log(data)
        const cartItem = new Addtocart({
            Productname: data.Productname,
            Category: data.Category,
            image: data.image,
            sellprice: data.sellprice,
            quantity: data.quantity
        });

        const savedItem = await cartItem.save();

        if (savedItem) {
            res.json({ status: true, msg: "Item added to cart" });
        } else {
            res.json({ status: false, msg: "Failed to add item to cart" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, msg: "Server error" });
    }
});

app.post("/addwishlist", async (req, res) => {
    try {
        const w = req.body;
        console.log(w);
        const wishlistitem = new Addwishlist({
            Productname: w.Productname,
            Category: w.Category,
            image: w.image,
            sellprice: w.sellprice,
            quantity: w.quantity
        });

        const savedItem = await wishlistitem.save();

        if (savedItem) {
            res.json({ status: true, msg: "Item added to wishlist" });
        } else {
            res.json({ status: false, msg: "Failed to add item to wishlist" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, msg: "Server error" });
    }
});





app.get("/allproduct", async (req, res) => {
    let allproduct = await Addproduct.find({})

    if (allproduct) {
        res.json({
            status: true,
            ourproduct: allproduct
        })
    }
    else {
        res.json({
            status: false

        })
    }
})



app.get("/addtocart", async (req, res) => {
    try {
        let cartproduct = await Addtocart.find({});

        if (cartproduct) {
            res.json({
                status: true,
                cartdata: cartproduct
            });
        } else {
            res.json({
                status: false,
                msg: "No cart data found"
            });
        }
    } catch (err) {
        console.log("GET /addtocart error", err);
        res.status(500).json({ status: false, msg: "Server error" });
    }
});


app.get("/addwishlist", async (req, res) => {
    try {
        let wishlistproduct = await Addwishlist.find({});

        if (wishlistproduct) {
            res.json({
                status: true,
                wishlistdatas: wishlistproduct
            });
        } else {
            res.json({
                status: false,
                msg: "No cart data found"
            });
        }
    } catch (err) {
        console.log("GET /addtocart error", err);
        res.status(500).json({ status: false, msg: "Server error" });
    }
});





// removeitem --------------------------
app.post("/removeitem", async (req, res) => {
    let removeproduct = await Addtocart.findOneAndDelete({ "_id": req.body._id });

    if (removeproduct) {
        res.json({
            status: true,
            "msg": "remove item"
        })
    }

    else {
        res.json({
            status: false
        })
    }
})





// updatequantity -----------------
app.post("/updatequantity", async (req, res) => {

    let updatequantity = await Addtocart.findOneAndUpdate({ "_id": req.body.mydata._id }, { $set: { "quantity": req.body.Quantity } });




})
app.get("/", (req, res) => {
    res.send('hello')
})

