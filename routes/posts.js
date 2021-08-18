const express = require('express');
const { findByIdAndUpdate } = require('../models/posts');
const Posts = require('../models/posts');

const router = express.Router();

//save posts

router.post('/post/save', (req, res)=>{

    let newPost = new Posts(req. body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});

//get posts

router.get('/posts', (req, res) => {
    Posts.find().exec((err, posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get specific post

router.get("/post/:id", (req, res)=>{
    let postId = req.params.id;

    Posts.findById(postId, (err, post)=>{
        if(err){
            return res.status(400).json({
                success:false, err
            });
        }

        return res.status(200).json({
            success:true, post
        });
    });
});



//updating posts

router.put('/post/update/:id', (req, res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, post)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }

            return res.status(200).json({
                success:"Updated succesfully"
            });
        }
    );
});

//delete posts

router.delete('/post/delete/:id', (req, res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err, deletedPost) =>{
        if(err){
            return res.status(400).json({
                message:"Delete error", err
            });
        }

        return res.status(200).json({
            message:"Delete successful", deletedPost
        });
    });
});

module.exports = router;