function placeOrder(orderNum) {
	console.log("Customer order", orderNum);

	cookAndDeliverFood(function() {
		console.log("Delivered food order: ", orderNum);
	});
}

// Simulate 5 second operation
function cookAndDeliverFood(callback) {
	setTimeout(callback, 5000);
}

// Simulate users web request
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
placeOrder(6);