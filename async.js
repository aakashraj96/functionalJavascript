// function loadUsers(userIds, load, done) {
// 	var users = [];
// 	for (var i = 0; i < userIds.length; i++) {
// 		users.push(load(userIds[i]));
// 	}
// 	return users;
// }
//
// let obj = {1:'aakash',2:'abcd',3:'bnmhjk'};
// function load(k)
// {
// 	sleep(500000).then(() => {
//   	return Object.values(obj)[k-1];
// 	});
//
//
// }
//
//
// function sleep (time) {
// 	return new Promise((resolve) => setTimeout(resolve, time));
// }
//
// console.log(loadUsers([2,3,1],load));
// module.exports = loadUsers;

// function loadUsers(userIds, load, done) {
// 	var users = [];
// 	for (var i = 0; i < userIds.length; i++) {
// 		users.push(setTimeout(function (){return 1;}));
// 	}
// 	return users;
// }
//
//
// module.exports = loadUsers;

function bingo(){
	let users = [];
	for(let i=0; i< 5; i++){
		users.push(setTimeout(function(){
			users.pop();
			// users.push(1);
			setTimeout(function(){
				users.push(1);
				if(users.length === 5)
				{
					console.clear();
					console.log(users);
				}

			});

		}));
	}
	return users;
}

console.log(bingo());
