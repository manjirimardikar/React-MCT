const usersData = [];
const productsData = [];


const userdetails = async() => {
    const res= await  fetch("https://randomuser.me/api/?results=20")
    console.log(res)
    const data = await res.json()
    console.log(data)
    return usersData.push(...data.results)

	// fetch("https://randomuser.me/api/?results=20")
	// 	.then((e) => e.json())
	// 	.then((res) => usersData.push(...res.results));

        
	// fetch("https://fakestoreapi.com/products")
    // .then((e) => e.json())
    // .then((res) => productsData.push(...res));

	// console.log("usersData", productsData);
};
userdetails();


const productdata = async()=>{
    const res= await  fetch("https://fakestoreapi.com/products")
    console.log(res)
    const data = await res.json()
    console.log(data)
    return productsData.push(...data)

   
   

}
productdata();

const initialState = {
	usersData,
    productsData
};

const reducers = (state = initialState, action) => {
 if (action.type === "USER_DATA"){
    return state
 }
 else{
    return state;
 }
	
	
	
};
export default reducers;