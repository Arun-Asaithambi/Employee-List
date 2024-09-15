const Detail = require('../models/schema');

exports.getDetails = async(req, res) =>{
    try{
        const detail = await Detail.find();
        res.status(200).json(detail)
    } catch(e) {
        console.log(e.message)
    }
}

exports.getSingleDetail = async(req, res) =>{
    try{
        const {id} = req.params;
        const detail = await Detail.findById(id);
        res.status(200).json(detail)
    } catch(e) {
        console.log(e.message)
    }
}

exports.createDetail = async(req, res) =>{
    try{
        const detail = await Detail.create(req.body);
        res.status(200).json(detail)
    }catch (e){
        console.log(e.message)
    }
}

exports.updateDetail = async(req, res) => {
    try{
        const detail = await Detail.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(detail)
    }catch (e){
        console.log(e.message)
    }
}

exports.deleteDetail = async(req, res) => {
    try{
        const detail = await Detail.findByIdAndDelete(req.params.id);
        res.status(200).json(detail)
    }catch (e){
        console.log(e.message)
    }
}
