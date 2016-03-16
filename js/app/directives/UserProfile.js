function UserProfile() {
	return {
		template: [
			'<div>',
				'<h3>User Profile</h3>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);