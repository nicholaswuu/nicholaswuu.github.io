//Count, check, change
for (i=0; i<10; i++) {
	console.log(i);
}



list = [12,3,34541,6,5247,235,16,425,7425,1,54,6245,82,68346,56,2457,4258,657,35,236,235,3,25,264,6,8,4,4,2,3,8,6,36,36,7,8,8,3,2,2,2,354,73,62]

sum = 0

for (i = 0; i < list.length; i = i + 1) {
	sum = sum + list[i]
}

console.log(sum)

avg = sum/list.length

console.log(avg)