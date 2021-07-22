import mongoose from 'mongoose';
import postMessage from "../models/postMessage.js";

export const getMessage = async (req,res) => {
  try {
      const getMess = await postMessage.find();
      console.log(getMess);
      res.status(200).json(getMess);
  } catch (error) {
    res.status(404).json({message:error.message});
  }
}

export const createMessage = async (req,res) => {
    const post = req.body;

    const newPostMessage = new postMessage(post);
    res.status(201).json(newPostMessage);
    try {
       await newPostMessage.save();
    } catch (error) {
        res.status(409).json({message:error.message});
    }

}

export const updateMessage = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
}

export const deleteMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await postMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
}

export const likeMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  
  const post = await postMessage.findById(id);

  const updatedPost = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
  
  res.json(updatedPost);
}