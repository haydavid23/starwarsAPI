import React from "react";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],

			planets: [],

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

			favorites: name => {
				const store = getStore();
				let demo = [];
				//checks if name already exists in array
				if (store.favoritesArray.includes(name)) {
					//true leaves array the same
					demo = store.favoritesArray;
				} else {
					//false pushes new favorite to array
					demo = store.favoritesArray.push(name);
				}

				setStore({ favorites: demo });
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
