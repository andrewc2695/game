// for practive problems
// function swapNodes(indexes, queries) {
// 	// Write your code here
// 	console.log(queries);
// 	const root = createTree(indexes);
// 	const order = [];
// 	queries.forEach((q) => {
// 		swap(root, 1, q);
// 		order.push(getInOrder(root, []));
// 	});
// 	return order;
// }

// function swap(root, currLevel, target) {
// 	if (!root) return;
// 	if (currLevel % target === 0) {
// 		const temp = root.left;
// 		root.left = root.right;
// 		root.right = temp;
// 	}
// 	swap(root.left, currLevel + 1, target);
// 	swap(root.right, currLevel + 1, target);
// }

// function createTree(indexes) {
// 	const create = (val) => {
// 		return { val, left: null, right: null };
// 	};
// 	const root = create(1);
// 	const q = [root];
// 	indexes.forEach(([x, y]) => {
// 		const temp = q.shift();
// 		if (x !== -1) {
// 			temp.left = create(x);
// 			q.push(temp.left);
// 		}
// 		if (y !== -1) {
// 			temp.right = create(y);
// 			q.push(temp.right);
// 		}
// 	});
// 	return root;
// }

// function getInOrder(root, order) {
// 	if (root.left) {
// 		getInOrder(root.left, order);
// 	}
// 	order.push(root.val);
// 	if (root.right) {
// 		getInOrder(root.right, order);
// 	}
// 	return order;
// }

// function getWays(n, c) {
// 	// Write your code here
// 	// we have to sort the coins
// 	// then we create an array from 0/1 => n
// 	// we take the number and keep adding it to itself until its === to num or greater than num
// 	let count = new Array(n + 1).fill(0);
// 	count[0] = 1;
// 	const sortC = c.sort((a, b) => a - b);
// 	sortC.forEach((coin) => {
// 		for (let i = coin; i <= n; i++) {
// 			const pair = count[i - coin];
// 			count[i] += pair;
// 		}
// 	});
// 	return count[n];
// }

// function birthdayCakeCandles(candles) {
// 	// Write your code here
// 	let max = -Infinity;
// 	let count = 0;
// 	candles.forEach((c) => {
// 		if (c > max) {
// 			max = c;
// 			count = 1;
// 		} else if (c === max) {
// 			count++;
// 		}
// 	});

// 	return count;
// }
