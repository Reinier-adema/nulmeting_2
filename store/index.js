require("dotenv").config();
const axios = require("axios");

export const state = () => ({
    counter: 0,
    messeges: [],
    echoResponse: {}
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    addMessege(state, newmessege){
        console.log(state.messeges)
        state.messeges.push(newmessege)
        console.log(state.messeges)
    },
    setEchoResponse(state, response){
        state.echoResponse = response
    }
}

export const actions = {
    async echo ({ commit }, formData) {
        let data = {
            echo: formData
        }
        let options = {
            url: "https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/echo",
            method: "POST",
            headers: {
            "x-api-key": process.env.apikey
            },
            data
        }
        let response = await this.$axios(options).then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
        return response;
    }
    
       

    // async echo ({ commit }, formData) {


    //     let data = {
    //         echo: formData
    //     }
    //     let options = {
    //         url: "http://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/echo",
    //         method: "POST",
    //         headers: {
    //             "x-api-key": "Zu2CEexUkRaB7kmk9t8OT3smDR26WOL48BXASI5s"
    //         },
    //         data
    //     }
    //     console.log("pipo")
    //     console.log(process.env.APIKEY)
    //     console.log("pipo")
    //     axios.post("https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/echo", {
	// 		data: data
	// 	}, {
	// 			headers: {
    //                 "Access-Control-Allow-Origin": "*",
	// 				"x-api-key": "Zu2CEexUkRaB7kmk9t8OT3smDR26WOL48BXASI5s"
	// 			}
	// 	})
	// 	.then(response => { 
	// 		console.log(response.data)
	// 	})
	// 	.catch(error => {
	// 		console.log(error.response)
	// 	});

    //     // await axios(options)
    //     //     .then(res => res.data)
    //     //     .then(res => res.json())
    //     //     .then(res => {
    //     //         commit('setEchoResponse', res);
    //     //     })
    // }
}   
