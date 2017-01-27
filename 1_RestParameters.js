

let getArraylength = (...arr)=>{
		return arr.length;
	}


let sortRestArgs = (...arr)=>{
		return arr.sort((a, b)=>{
			return a-b}
			);
	}

let multiplyByTwo = (...arr)=>{
	let newarr=[];
	 arr.reduce((tot,num)=>{
	 	newarr.push(num*2)
	 },0)
return newarr;
}



let mainArrayFunc  =  (...arr)=>{
	 let arrayLength = getArraylength(...arr);
	 let doubledArray = multiplyByTwo(...arr);
	 let sortedargs = sortRestArgs(...arr);

	 console.log(`Length of Array passed as Rest parameter ${arrayLength}\n
	 	    Each element of Array passed as Rest parameter multiplied by two ${doubledArray}\n
	 	    Sorted Array passed as Rest parameter ${sortedargs}`)

}

let numarr = [54,1,2,67,3];

mainArrayFunc(...numarr)

