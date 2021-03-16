import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Sl2wRGZ2CjQjATZ5Gjpw9dxpJiTUNAL9Bn_SSsykiHBIRvJBjlqpIXATjFgQqyuOnlG8xpCYQp3tsSwKSL7NZYSdcLdkLiXb17cEpP3IPd3xmGpByS5NIknJletPYHYx'
    }
})