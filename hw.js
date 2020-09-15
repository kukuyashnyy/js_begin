function array_clone(arr) {
	let t_arr = [];
	for (let i = 0; i < arr.length; i++) {
		if ((typeof arr[i]) == "object") {
			t_arr[i] = array_clone(arr[i]);
		} else {
			t_arr[i] = arr[i];
		}
	}
	return t_arr;
}

function summ_kv() {
	let sum = 0;
	for (let argument of arguments) {
		sum += Math.pow(argument, 2);
	}
	return sum;
}

function array_shuffle(arr) {
	for (let i = 0; i < arr.length * 10; i++) {
		arr.sort(() => Math.random() - 0.5)
	}
	return arr;
}

function unique(arr) {
	let repeat = 0;
	let t_arr = [];
	let j = 0;
	for (let arrElement of arr) {
		repeat = 0;
		for (let arrElement2 of arr) {
			if (arrElement2 == arrElement) {
				repeat++;
			}
		}
		if (repeat == 1) {
			t_arr[j] = arrElement;
			j++;
		}
	}
	return t_arr;
}
