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
// Steady Genes
// function steadyGene(gene) {
// 	// Write your code here
// 	// finds out what were loking to replace
// 	const count = { A: 0, G: 0, C: 0, T: 0 };
// 	for (let i = 0; i < gene.length; i++) {
// 		count[gene[i]]++;
// 	}

// 	const charsToReplace = {};
// 	const currCount = {};
// 	let min = 0;
// 	Object.keys(count).forEach((k) => {
// 		if (count[k] - gene.length / 4 > 0) {
// 			charsToReplace[k] = count[k] - gene.length / 4;
// 			currCount[k] = 0;
// 			min += count[k] - gene.length / 4;
// 		}
// 	});
// 	let l = 0;
// 	let t = 0;
// 	let currMin = Infinity;
// 	while (l < gene.length) {
// 		if (checkIfMaxChars(charsToReplace, currCount)) {
// 			if (currMin > l - t) {
// 				currMin = l - t;
// 				if (currMin === min) return currMin;
// 			}
// 			if (currCount[gene[t]]) {
// 				currCount[gene[t]]--;
// 			}
// 			t++;
// 		} else {
// 			if (currCount[gene[l]] !== undefined) {
// 				currCount[gene[l]]++;
// 			}
// 			l++;
// 		}
// 	}
// 	return currMin;
// }

// function checkIfMaxChars(oldChars, newChars) {
// 	const keys = Object.keys(oldChars);
// 	let allChars = true;
// 	for (let i = 0; i < keys.length; i++) {
// 		if (oldChars[keys[i]] > newChars[keys[i]]) {
// 			allChars = false;
// 		}
// 	}
// 	return allChars;
// }
