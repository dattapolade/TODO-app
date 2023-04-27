// const express = require("express");
// const router = new express.Router();
// const _ = require("lodash");
// const ejs=require('ejs');
// const { Item,List,defaultItems}=require('../model/item');


// router.get("/", (req, res) =>{
//     Item.find({}, (err, foundItems) =>{

//         if (foundItems.length === 0) {
//             Item.insertMany(defaultItems, (err)=> {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log("Successfully savevd default items to DB.");
//                 }
//             });
//             res.redirect("/");
//         } else {
//             res.render("list", { listTitle: "Today", newListItems: foundItems });
//         }
//     });

// });

// router.get("/:customListName",  (req, res) =>{
//     const customListName = _.capitalize(req.params.customListName);

//     List.findOne({ name: customListName }, function (err, foundList) {
//         if (!err) {
//             if (!foundList) {
//                 //Create a new list
//                 const list = new List({
//                     name: customListName,
//                     items: defaultItems
//                 });
//                 list.save();
//                 res.redirect("/" + customListName);
//             } else {
//                 //Show an existing list

//                 res.render("list", { listTitle: foundList.name, newListItems: foundList.items });
//             }
//         }
//     });



// });

// router.post("/", function (req, res) {

//     const itemName = req.body.newItem;
//     const listName = req.body.list;

//     const item = new Item({
//         name: itemName
//     });

//     if (listName === "Today") {
//         item.save();
//         res.redirect("/");
//     } else {
//         List.findOne({ name: listName }, function (err, foundList) {
//             foundList.items.push(item);
//             foundList.save();
//             res.redirect("/" + listName);
//         });
//     }
// });

// router.post("/delete", function (req, res) {
//     const checkedItemId = req.body.checkbox;
//     const listName = req.body.listName;

//     if (listName === "Today") {
//         Item.findByIdAndRemove(checkedItemId, function (err) {
//             if (!err) {
//                 console.log("Successfully deleted checked item.");
//                 res.redirect("/");
//             }
//         });
//     } else {
//         List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkedItemId } } }, function (err, foundList) {
//             if (!err) {
//                 res.redirect("/" + listName);
//             }
//         });
//     }


// });

// router.get("/about", function (req, res) {
//     res.render("about");
// });


// module.exports = router;