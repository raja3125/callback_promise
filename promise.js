const p1 =new promise((reslove,reject)=>{
		    setTimeout(()=>{
			    reslove("success")
			},1000);
		})
		
		/*const p2 =new promise((reslove,reject)=>{
		    setTimeout(()=>{
			    reject("failure")
			},1000);
		})*/
		
		p1.then(console.log)