function AddItem(value) {
    if (value == 0) {
        if (typeof(Storage) !== "undefined") {
            if (sessionStorage.breadCount) {
                sessionStorage.breadCount = Number(sessionStorage.breadCount)+1;
            } else {
                sessionStorage.breadCount = 1;
            } 
        }
    } else if (value == 1) {
        if (typeof(Storage) !== "undefined") {
            if (sessionStorage.doughnutCount) {
              sessionStorage.doughnutCount = Number(sessionStorage.doughnutCount)+1;
            } else {
              sessionStorage.doughnutCount = 1;
            }
          }
        window.alert("Added doughnut to cart!");
    } else if (value == 2) {
        if (typeof(Storage) !== "undefined") {
            if (sessionStorage.flapjacksCount) {
              sessionStorage.flapjacksCount = Number(sessionStorage.flapjacksCount)+1;
            } else {
              sessionStorage.flapjacksCount = 1;
            }
          }
        window.alert("Added flapjacks to cart!");
    } else if (value == 3) {
        if (typeof(Storage) !== "undefined") {
            if (sessionStorage.gingerbreadCount) {
              sessionStorage.gingerbreadCount = Number(sessionStorage.gingerbreadCount)+1;
            } else {
              sessionStorage.gingerbreadCount = 1;
            }
          }
        window.alert("Added gingerbread to cart!");
    } else if (value == 4) {
        if (typeof(Storage) !== "undefined") {
            if (sessionStorage.bunsCount) {
              sessionStorage.bunsCount = Number(sessionStorage.bunsCount)+1;
            } else {
              sessionStorage.bunsCount = 1;
            }
          }
        window.alert("Added hot cross buns to cart!");
    } else if (value == 5) {
        if (typeof(Storage) !== "undefined") {
            if (sessionStorage.coffeeCount) {
              sessionStorage.coffeeCount = Number(sessionStorage.coffeeCount)+1;
            } else {
              sessionStorage.coffeeCount = 1;
            }
          }
        window.alert("Added coffee to cart!");
    } else if (value == 6) {
        if (typeof(Storage) !== "undefined") {
            if (sessionStorage.hchocCount) {
              sessionStorage.hchocCount = Number(sessionStorage.hchocCount)+1;
            } else {
              sessionStorage.hchocCount = 1;
            }
          }
        window.alert("Added hot chocolate to cart!");
    } else if (value == 7) {
        if (typeof(Storage) !== "undefined") {
            if (sessionStorage.teaCount) {
              sessionStorage.teaCount = Number(sessionStorage.teaCount)+1;
            } else {
              sessionStorage.teaCount = 1;
            }
          }
        window.alert("Added tea to cart!");
    }
}

document.getElementById("breadCount").innerHTML = "Bread: " + sessionStorage.breadCount;
document.getElementById("doughnutCount").innerHTML = "Doughnut: " + sessionStorage.doughnutCount;
document.getElementById("flapjacksCount").innerHTML = "Flapjacks: " + sessionStorage.flapjacksCount;
document.getElementById("gingerbreadCount").innerHTML = "Gingerbread: " + sessionStorage.gingerbreadCount;
document.getElementById("bunsCount").innerHTML = "Hot Cross Buns: " + sessionStorage.bunsCount;
document.getElementById("coffeeCount").innerHTML = "Coffee: " + sessionStorage.coffeeCount;
document.getElementById("hchocCount").innerHTML = "Hot Chocolate: " + sessionStorage.hchocCount;
document.getElementById("teaCount").innerHTML = "Tea: " + sessionStorage.teaCount;
document.getElementById("totalCost").innerHTML = "Cost: £" + Number((sessionStorage.breadCount*2.50) + (sessionStorage.doughnutCount*2.00) + (sessionStorage.flapjacksCount*2.00) + (sessionStorage.gingerbreadCount*2.00) + (sessionStorage.bunsCount*3.00) + (sessionStorage.coffeeCount*1.50) + (sessionStorage.hchocCount*2.00) + (sessionStorage.teaCount*1.50)) + "0";