import mongoose from 'mongoose'

const ApiModelSchema = new mongoose.Schema({
    api: String,
    endpoint: String,
    method: String,
    createAt: {
        type: Date,
        default: new Date()
    }
})

const ApiModel = mongoose.model('api_endpoints', ApiModelSchema);
export default ApiModel