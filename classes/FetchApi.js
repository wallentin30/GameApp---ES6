class fetchAPI {
        constructor(serverURL) {
        this.serverURL = serverURL;
    }

    getGamesList() {
        return fetch(`${this.serverURL}/games`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    deleteGame = (gameID) => {
        return fetch(`${this.serverURL}/games/${gameID}`, {
            method: 'DELETE'
        }).then(function(response) {
         
            return response.text();
        }).then(function(responseMsg) {
            return {
                succes: true,
                msg: responseMsg
            }
        }).catch(function(error) {
            return {
                succes: false,
                msg: error
            }
        })
    }

    createGameRequest = (gameObj) => {
        return fetch(`${this.serverURL}/games`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: gameObj
        }).then(function(response) {
            return response.json();
        })
    }

    editGame = (id,gameObj) => {
        return fetch(`${this.serverURL}/games/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : "application/x-www-form-urlencoded"
            },
            body: gameObj
        }).then(function(response) {
            return response.json()
        })
    }

    reloadDB() {
        return fetch(`${this.serverURL}/regenerate-games`, {
            method: 'GET',
            headers: {
                'Content-Type' : "application/x-www-form-urlencoded",
                'Connection' : 'keep-alive'
            }
        });
    }
}