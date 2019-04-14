const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [
				{
					name: "assda",
					gender: "asfd",
					hairColor: "asdf",
					eyeColor: "asdf"
				},
				{
					name: "asf",
					gender: "ss",
					hairColor: "dd",
					eyeColor: "ff"
				},
				{
					name: "xx",
					gender: "cc",
					hairColor: "vv",
					eyeColor: "tt"
				},
				{
					name: "ghkjgh",
					gender: "ghjk",
					hairColor: "ghk",
					eyeColor: "jgk"
				},
				{
					name: "cvb",
					gender: "xcb",
					hairColor: "xcvb",
					eyeColor: "xcvb"
				},
				{
					name: "yr",
					gender: "rty",
					hairColor: "ryt",
					eyeColor: "rty"
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

			favorites: name => {
				const store = getStore();

				const demo = store.favoritesArray.push(name);

				setStore({ favorites: demo });
			}
		}
	};
};

export default getState;
