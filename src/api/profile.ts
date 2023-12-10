import { HttpClient } from '@/helper'

function ProfileService() {
	return {
		profile: () => {
			return HttpClient.get('/profile')
		},
	}
}

export default ProfileService()
