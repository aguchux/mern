import ApiModel from '../models/ApiModel.js'


export const CreateApi = (req, res) => {
    try {
        const newapi = {
            api: 'List Apis',
            method: 'listapi',
            endpoint: '/api/v1/listapi'
        }
        const create = new ApiModel(newapi)
        create.save();
        res.status(200).json(create)

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}


export const ListApis = async (req, res) => {
    try {
        const apis = await ApiModel.find();
        res.status(200).json(apis)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }

}