function AddItem(value) {
    if (value == 0) {
        if (typeof(Storage) !== "undefined") {
            if (sessionStorage.breadCount) {
                sessionStorage.breadCount = Number(sessionStorage.breadCount)+1;
            } else {
                sessionStorage.breadCount = 1;
            } 
        }
        window.alert("Added bread to cart!");
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

if (typeof(Storage) !== "undefined") {
    if (sessionStorage.totalCost) {
        sessionStorage.totalCost = 0;
    } else {
        sessionStorage.totalCost = 0;
    }
}

if (typeof sessionStorage.breadCount !== "undefined") {
    document.getElementById("breadCount").innerHTML = "Bread: " + sessionStorage.breadCount;
    sessionStorage.totalCost = Number(sessionStorage.totalCost) + (sessionStorage.breadCount*2.00);
} if (typeof sessionStorage.doughnutCount !== "undefined") {
    document.getElementById("doughnutCount").innerHTML = "Doughnut: " + sessionStorage.doughnutCount;
    sessionStorage.totalCost = Number(sessionStorage.totalCost) + (sessionStorage.doughnutCount*2.00);
} if (typeof sessionStorage.flapjacksCount !== "undefined") {
    document.getElementById("flapjacksCount").innerHTML = "Flapjacks: " + sessionStorage.flapjacksCount;
    sessionStorage.totalCost = Number(sessionStorage.totalCost) + (sessionStorage.flapjacksCount*2.00);
} if (typeof sessionStorage.gingerbreadCount !== "undefined") {
    document.getElementById("gingerbreadCount").innerHTML = "Gingerbread: " + sessionStorage.gingerbreadCount;
    sessionStorage.totalCost = Number(sessionStorage.totalCost) + (sessionStorage.gingerbreadCount*2.00);
} if (typeof sessionStorage.bunsCount !== "undefined") {
    document.getElementById("bunsCount").innerHTML = "Hot Cross Buns: " + sessionStorage.bunsCount;
    sessionStorage.totalCost = Number(sessionStorage.totalCost) + (sessionStorage.bunsCount*3.00);
} if (typeof sessionStorage.coffeeCount !== "undefined") {
    document.getElementById("coffeeCount").innerHTML = "Coffee: " + sessionStorage.coffeeCount;
    sessionStorage.totalCost = Number(sessionStorage.totalCost) + (sessionStorage.coffeeCount*1.00);
} if (typeof sessionStorage.hchocCount !== "undefined") {
    document.getElementById("hchocCount").innerHTML = "Hot Chocolate: " + sessionStorage.hchocCount;
    sessionStorage.totalCost = Number(sessionStorage.totalCost) + (sessionStorage.hchocCount*2.00);
} if (typeof sessionStorage.teaCount !== "undefined") {
    document.getElementById("teaCount").innerHTML = "Tea: " + sessionStorage.teaCount;
    sessionStorage.totalCost = Number(sessionStorage.totalCost) + (sessionStorage.teaCount*1.00);
}

document.getElementById("totalCost").innerHTML = "Cost: £" + Number(sessionStorage.totalCost) + ".00";