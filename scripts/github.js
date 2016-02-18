var GitHubApi = require("github");

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    debug: true,
});

// github.user.getFollowingFromUser({
//     // optional:
//     // headers: {
//     //     "cookie": "blahblah"
//     // },
//     user: "syundo0730"
// }, function(err, res) {
//     console.log(res);//JSON.stringify(res));
// });

github.pullRequests.getAll({
	user: 'github-book',
	repo: 'first-pr'
}, function(err, res) {
	console.log(res);
});
