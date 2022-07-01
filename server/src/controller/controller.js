const Productdata =require("../models/products")

const addproduct = () => {
    try {
        console.log(req.body)
        const productplandata = Productdata(req.body)
        productplandata.save().then((response) => {
            res.status(200).json({ msg: "product added", details: response })
        }).catch((err) => {
            console.error(err);
            res.json({ msg: `error : product not added !! ${err}`, })
        })
    } catch (err) {
        res.send(err)
    }

}

const viewproduct = () => {
    try {
        const login_id = req.body.login_id //vendor id
        Productdata.find({ login_id: login_id })
            .then((response) => {
                res.status(200).json({ msg: "success", details: response })
            }).catch((err) => {
                console.error(err);
                res.json({ msg: `error : products not found !! ${err}`, })
            })
    } catch (err) {
        res.send(err)
    }

}

const viewsingleproduct = () => {
    try {
        const id= req.params.id; //product id
        Productdata.findOne({_id:id})
            .then((response) => {
                res.status(200).json({ msg: "success", details: response })
            }).catch((err) => {
                console.error(err);
                res.json({ msg: `error : products not found !! ${err}`, })
            })
    } catch (err) {
        res.send(err)
    }

}
const viewCategoryproduct = () => {
    try {
        const category= req.params.productcategory; //product id
        Productdata.findOne({productcategory:category})
            .then((response) => {
                res.status(200).json({ msg: "success", details: response })
            }).catch((err) => {
                console.error(err);
                res.json({ msg: `error : products not found !! ${err}`, })
            })
    } catch (err) {
        res.send(err)
    }

}

module.exports = {
    addproduct,
    viewproduct,
    viewsingleproduct,
    viewCategoryproduct
}