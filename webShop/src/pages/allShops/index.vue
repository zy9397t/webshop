<template>
  <div class="main">
    <div class="headcontainer">
      <div class="search">
        <input type="text" v-model="keyWords" placeholder='请输入关键字' @keyup.enter="search"/>
        <div @click="search" class="cup button">搜索</div>
      </div>
    </div>
	<div class="container">
    <div class="bodycontainer">
		<div class="searchshops">
			<ShowCard v-for="(shop,index) in searchShops" :key="index" :shop='shop'></ShowCard>
		</div>
	</div>

	</div>
    <Footer></Footer>
  </div>
</template>

<script>
import ShowCard from "components/ShowCard";
import Footer from "components/Footer"
import {mapState} from 'vuex'
export default {
	mounted(){
		this.keyWords = this.$route.query.keyWords
		this.searchShops = this.searchShopsFunction()
	},
	data(){
		return {
			keyWords:'',
			searchShops:[]
		}
	},
	methods:{
		search(){
			this.searchShops = this.searchShopsFunction()
		},
		searchShopsFunction(){
			let arr = []

			for(let storeInd in this.stores){
				let store = this.stores[storeInd]
				for(let shopInd in store.shops){
					let shop = store.shops[shopInd]
					if(shop.name.indexOf(this.keyWords)+1 || shop.category.indexOf(this.keyWords) + 1){
						
						shop.storeID = store.id
						shop.storeName = store.name 
						shop.phone = store.phone
						
						arr.push(shop)
					}
				}
			}
			return arr
		}
	},
	computed:{
		...mapState({
			stores : state => state.stores
		}),
		
	},
  components:{
    Footer,
	ShowCard
  }
};
</script>
<style scoped>

.main {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.headcontainer {
	background-color: white;
	height: 20vh;
	display: flex;
	justify-content: center;
}

.search {
	display: flex;
	width: 40vw;
	margin-top: 5vh;
	/* height: 40px; */
}

input {
	border: 2px solid #e1251b;
	width: 80%;
	height: 30px;
	box-sizing: border-box;
	padding-left: 10px;
	font-size: 12px;
}
.button {
	height: 30px;
	width: 10%;
	line-height: 30px;
	color: #fff;
	background-color: #e1251b;
	font-weight: bolder;
	text-align: center;
	font-size: 12px;
}

.container{
	width: 100vw;
	display: flex;
	justify-content: center;
	background-color: #f5f5f5;
}

.bodycontainer {
	background-color: #f5f5f5;
	min-height: 80vh;
	width: 80vw;
	justify-content: center;
}

.cup {
	
	cursor: pointer;
}


input:focus {
	outline: none;
}
.searchshops{
	display: flex;
	flex-wrap: wrap;
}









</style>