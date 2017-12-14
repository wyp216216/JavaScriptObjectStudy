$(function(){
	var x = [3,1,2];
	var b = ['a','b','c','e','a','b'];
	var c = [];
//	Array属性

	//constructor属性
	var constructor = x.constructor;
	
	//length属性
	var length = x.length;
	
	//prototype属性
	Array.prototype.demo=function(){
		return this;
	}
	
	console.log('constructor属性：'+constructor);
	console.log('length属性：'+length);
	console.log('Array.prototype属性：'+x.demo());
	
//	Array方法；

	//concat()方法——拼接字符串；
	var concat = c.concat(x,b);
	
	//copyWithin()方法，将数组内某一位置某一区间的数值复制到另一区间；
	var copyWithin = x.copyWithin(2,0,2);
	
	//every()检测数组中所有元素是否都符合指定条件；
	var every = x.every(demo, [4,5,6]);
	function demo(){
		return this>0;
	};
	
	//every()功能开发；
	/*var every = x.every(function (){
		console.log(x);
		for(var i = 0;i<this;i++){
			console.log(i);
		}
		return this>0;
	}, 3);*/
	
	//fill()方法，将用一个固定的值替换数组的元素；
	var fill = x.fill(5,0,1);
	
	//filter()方法，检测指定数组并将满足条件的值添加到新数组；
	var filter = x.filter(demo1);
	function demo1(a){
		return a>2;
	}
	
	//find()方法返回满足条件的第一个元素；
	var find=x.find(demo2);

	//findIndex()方法返回满足条件的第一个元素的索引；
	var findIndex = x.findIndex(demo2);
	
	function demo2(a){
		return a>2;
	}
	
	//forEach()方法用于调用数组的每个元素，并将元素传给回调函数；
	var forEach = [];
	x.forEach(demo3);
	function demo3(item,index){
		console.log(''+item+index);
		forEach.push(item);
		forEach.push(index);
		forEach.push('forEact动态push数组');
	};
	
	//includes()方法用于检测数组中是否包含一个指定的值，如果包含则返回true否则返回false;
	var includes = x.includes(3);
	
	//indexOf()方法返回某个字符串在数组中的索引值；
	var indexOf = x.indexOf(1);
	
	//join()方法用于将数组中的所有元素放入到一个字符串；
	var join = x.join('-');
	
	//lastIndexOf()方法返回某个字符串在数组中最后出现的索引值；
	var lastIndexOf = b.lastIndexOf('a',2);
	
	//map()方法，返回一个数组，数组中的元素是原始元素值函数后处理的值；
	var map = x.map(demo4);
	function demo4(item){
		return item+1;
	}
	
	//pop()方法，删除数组的最后一个元素并返回删除的元素 ；
	var pop = x.pop();
	
	//push()方法，向数组尾部添加一个元素并返回新的长度length；
	var push = x.push(7);
	
	//reduce()方法，接收一个函数做完累加器，然后数组中的值慢慢缩减，最终计算为一个值(从左向右)；
	var reduce = x.reduce(demo5);
	
	//reduceRight()方法，接收一个函数做完累加器，然后数组中的值慢慢缩减，最终计算为一个值(从右向左)；
	var reduceRight = x.reduceRight(demo5);
	
	function demo5(total,item){
		return total+'-'+item;
	}
	
	//reverse()方法，用于颠倒数组中元素的顺序；
	var reverse = x.reverse();
	
	//shift()方法，用于将数组第一个元素删除并返回被删除的元素；
	var shift = x.shift();
	
	//slice()方法，选取数组中的一部分并返回一个新的数组；
	var slice = b.slice(1,5);
	
	//some()方法，检测数组中是否有元素符合指定条件；
	var some = b.some(demo6);
	function demo6(a){
		return a=='c';
	};
	
	//sort()方法，对数组进行排序;
	var sort = b.sort(demo7);
	function demo7(a,b){
		return a-b;
	}
	
	//splice()方法，在数组中添加、删除或替换元素,并返回被删除的元素；
	var splice = b.splice(1,3,'g','c','o','p');
	
	//toString()方法，将数组转化为字符串；
	var toString = x.toString();
	
	//unshift()方法，向数组首部添加一个或更多元素并返回新的长度；
	var unshift = x.unshift(9,10,11);
	
	//valueOf()方法，返回原数组的值；
	var valueOf = x.valueOf();
	
	console.log('concat()方法：'+'-'+typeof(concat)+'-'+concat);
	console.log('copyWithin()方法：'+'-'+typeof(copyWithin)+'-'+copyWithin);
	console.log('every()方法：'+'-'+typeof(every)+'-'+every);//true
	console.log('fill()方法：'+'-'+typeof(fill)+'-'+fill);
	console.log('filter()方法：'+'-'+typeof(filter)+'-'+filter);
	console.log('find()方法：'+'-'+typeof(find)+'-'+find);
	console.log('findIndex()方法 ：'+'-'+typeof(findIndex)+'-'+findIndex);
	console.log('forEach()方法：'+'-'+typeof(forEach)+'-'+forEach);
	console.log('includes()方法：'+'-'+typeof(includes)+'-'+includes);
	console.log('indexOf()方法：'+'-'+typeof(indexOf)+'-'+indexOf);
	console.log('join()方法：'+'-'+typeof(join)+'-'+join);
	console.log('lastIndexOf()方法：'+'-'+typeof(lastIndexOf)+'-'+lastIndexOf);
	console.log('map()方法：'+'-'+typeof(map)+'-'+map);
	console.log('pop()方法：'+'-'+typeof(pop)+'-'+pop);
	console.log('push()方法：'+'-'+typeof(push)+'-'+push);
	console.log('reduce()方法：'+'-'+typeof(reduce)+'-'+reduce);
	console.log('reduceRight()方法：'+'-'+typeof(reduceRight)+'-'+reduceRight);
	console.log('reverse()方法：'+'-'+typeof(reverse)+'-'+reverse);
	console.log('shift()方法：'+'-'+typeof(shift)+'-'+shift);
	console.log('slice()方法：'+'-'+typeof(slice)+'-'+slice);
	console.log('some()方法：'+'-'+typeof(some)+'-'+some);
	console.log('sort()方法：'+'-'+typeof(sort)+'-'+sort);
	console.log('splice()方法：'+'-'+typeof(splice)+'-'+splice);
	console.log('toString()方法：'+'-'+typeof(toString)+'-'+toString);
	console.log('unshift()方法：'+'-'+typeof(unshift)+'-'+unshift);
	console.log('ValueOf()方法：'+'-'+typeof(valueOf)+'-'+valueOf);
})
