<template>
  <div class="main">
    <div class="headcontainer">
      <div class="search">
        <input type="text" v-model="keyWords" />
        <div @click="search" class="cup">搜索</div>
      </div>
    </div>
	<div class="container">
    <div class="bodycontainer">
		<Searchshops></Searchshops>
	</div>

	</div>
    <Footer></Footer>
  </div>
</template>

<script>
import Searchshops from "components/searchshops";
import Footer from "components/Footer"
export default {
	data(){
		return {
			keyWords:''
		}
	},
	methods:{
		search(){}
	},
  components:{
    Footer,
	Searchshops
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
}

input {
	border: 2px solid #e1251b;
	width: 80%;
	height: 20px;
	box-sizing: border-box;
	padding-left: 10px;
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
	width: 10%;
	line-height: 20px;
	height: 20px;
	color: #fff;
	background-color: #e1251b;
	font-weight: bolder;
	text-align: center;
	cursor: pointer;
}


input:focus {
	outline: none;
}










</style>