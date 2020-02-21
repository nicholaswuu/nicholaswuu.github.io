list = ["cat", "dog", "fish", "monkey", "cattle", "cat"]

value = "cat"

flag = false

for (i = 0; i < list.length; i++){
	if (list[i] == value){
		flag = true;
		break
	}
}

if (flag == true){
	console.log("Yes")
}

else {
	console.log("No")
}
