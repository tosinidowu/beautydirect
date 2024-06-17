// register a new business
// get all businesses
// get a single business
// get all businesses in a category
// get all businesses in a location
// update a business
// delete a business
export class ServicerController{
    static async registerServicer(req, res){
        try{
            const servicer = new Servicer({
                ...req.body,
                userId: req.user._id
            });
            const savedServicer = await servicer.save();
            res.status(201).json({ servicer: savedServicer });
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }

    static async getAllServicers(req, res){
        try{
            const servicers = await Servicer.find();
            res.status(200).json({ servicers });
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }

    static async getSingleServicer(req, res){
        try{
            const { servicerId } = req.params;
            const servicer = await Servicer.findOne({ _id: servicerId });
            res.status(200).json({ servicer });
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }

    static async getServicersByCategory(req, res){
        try{
            const { category } = req.params;
            const servicers = await Servicer.find({ category });
            res.status(200).json({ servicers });
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }

    static async getServicersByLocation(req, res){
        try{
            const { location } = req.params;
            const servicers = await Servicer.find({ location });
            res.status(200).json({ servicers });
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }

    static async updateServicer(req, res){
        try{
            const { servicerId } = req.params;
            const updatedServicer = await Servicer.findOneAndUpdate(
                { _id: servicerId },
                req.body,
                { new: true }
            );
            res.status(200).json({ servicer: updatedServicer });
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteServicer(req, res){
        try{
            const { servicerId } = req.params;
            const deletedServicer = await Servicer.findOneAndDelete({ _id: servicerId });
            res.status(200).json({ servicer: deletedServicer });
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }
}