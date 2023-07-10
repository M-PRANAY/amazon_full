import React from "react";
import "./Checkout.css";
function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout_left">
				<img
					className="checkout_ad"
					src="https://m.media-amazon.com/images/I/61e6xH7Z0-L._SX3000_.jpg"
					alt=""
				/>

				<div>
					<h2 className="checkout_title"></h2>

                    {/* BasketItem */}
				</div>
			</div>

			<div className="checkout_right">
				<h2>Subtotal</h2>
			</div>
		</div>
	);
}

export default Checkout;