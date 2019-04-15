import React from "react";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [
				{
					name: "Han Solo",
					gender: "Male",
					hairColor: "Brown",
					eyeColor: "Blue"
				},
				{
					name: "Luke Skywalker",
					gender: "Male",
					hairColor: "Yellow",
					eyeColor: "Brown"
				},
				{
					name: "Princess Leila",
					gender: "Female",
					hairColor: "Black",
					eyeColor: "Green"
				},
				{
					name: "Gredo",
					gender: "Male",
					hairColor: "Green",
					eyeColor: "Black"
				},
				{
					name: "ChewBacca",
					gender: "Male",
					hairColor: "Brown",
					eyeColor: "Hazel"
				},
				{
					name: "C-3PO",
					gender: "Male",
					hairColor: "black",
					eyeColor: "Yellow"
				}
			],

			favoritesArray: []
		},
		actions: {
			changeCard: item => {
				//get the store
				const store = getStore();

				const demo = store.characters.map(item => {
					return item;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			favorites: (name, index) => {
				const store = getStore();

				const demo = store.favoritesArray.push(name);

				setStore({ demo: demo });
			},

			deleteFav: i => {
				const store = getStore();

				const demo = store.favoritesArray.splice(i, 1);

				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
