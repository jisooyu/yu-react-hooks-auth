const secretsReducers = (state, action) => {
	switch (action.type) {
		case 'POPULATE_SECRETS':
			return action.secrets;
		case 'ADD_SECRET':
			return [
				...state,
				{
					site: action.site,
					id: action.id,
					pw: action.pw,
					memo: action.memo,
				},
			];
		case 'EDIT_SECRET':
			return state.map((secret) => {
				if (secret.id === action.id) {
					return {
						...secret,
						site: action.site,
						id: action.id,
						pw: action.pw,
						memo: action.memo,
					};
				} else {
					return secret;
				}
			});
		case 'REMOVE_SECRET':
			return state.filter((secret) => secret.site !== action.site);
		default:
			return state;
	}
};

export { secretsReducers as default };
