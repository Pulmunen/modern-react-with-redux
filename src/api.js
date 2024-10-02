import axios from 'axios'

const searchImages = async (term)=>{
	const response = await axios.get('https://api.unsplash.com/search/photos',{
		headers:{
			Authorization: 'Client-ID 3dj5axDaCTUaMcpsEJwKGyn3RXN92dzpE6jmwEm93OE'
		},
		params:{
			query:term
		}
	})
	return response.data.results
}

export default searchImages