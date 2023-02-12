import React from "react";
import Card from "./Card";
import data from "../data";

const Cards = () => (
	<div className="grid grid-cols-3 gap-2">
		{data.map((cardData, i) => (
			<Card
				key={`${cardData.backgroundImage}-${i}`}
				backgroundImage={cardData.backgroundImage}
				title={cardData.title}
				caption={cardData.caption}
				textBody={cardData.textBody}
			/>
		))}
	</div>
);

export default Cards;
