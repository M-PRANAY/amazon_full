import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
export default function Header() {
	return (
		<div className="header">
			<img
				className="header_logo"
				src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				alt=""
			/>
            
			<div className="header_search">
				<input className="header_searchInput" type="text" />
				<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header_nav">
				<div className="header_option">
					<span className="header_optionlineOne">Hello Guest</span>{" "}
					<span className="header_optionlineTwo">Sign In</span>{" "}
				</div>
				<div className="header_option">
					<span className="header_optionlineOne">Returns</span>{" "}
					<span className="header_optionlineTwo">and Orders</span>{" "}
				</div>
				<div className="header_option">
					<span className="header_optionlineOne">Your</span>{" "}
					<span className="header_optionlineTwo">Prime</span>{" "}
				</div>
				<div className="header_optionBasket">
					<ShoppingBasketIcon />
					<span className="header_optionlineTwo header_basketCount">0</span>
				</div>
			</div>
		</div>
	);
}