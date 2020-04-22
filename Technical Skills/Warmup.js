list = [4,7,9,10,11];

/*Part A*/

sum = 0

for(i=0; i<list.length; i++){
	sum = sum + list[i]
}

console.log(sum)

/*Part B*/

list = [4,7,9,10,11];

sumeven = 0

for(i=0; i<list.length; i++){
	if(list[i]%2 === 0){
		sumeven = sumeven + list[i]
	}
}
console.log(sumeven)

/*Part C*/

list = [4,7,9,10,11];

sumgreater = 0

for(i=0; i<list.length; i++){
	if(list[i]>5){
		sumgreater = sumgreater + list[i]
	}
}
console.log(sumgreater)

/*Part D*/

list = [4,7,9,10,11];

sumdigits = 0

for(i=0; i<list.length; i++){
	for(j=0; j<list[i].length; j++){
		sumdigits = sumdigits + list[i][j]
	}
}

console.log(sumdigits)
