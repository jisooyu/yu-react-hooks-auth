import React, { useState, useContext } from 'react';
import AddSecretsForm from './AddSecretsForm';
import EditSecretsForm from './EditSecretsForm';
import Secrets from './Secrets';
import SecretsContext from '../context/SecretsContext';

const SecretsList = () => {
	const { secrets, dispatch } = useContext(SecretsContext);
	const initialFormState = { site: '', id: '', pw: '', memo: '' };
	const [currentSecret, setCurrentSecret] = useState(initialFormState);
	const [editingStatus, setEditingStatus] = useState(false);

	const addSecrets = ({ site, id, pw, memo }) => {
		dispatch({
			type: 'ADD_SECRET',
			site,
			id,
			pw,
			memo,
		});
	};

	const editSecretRow = ({ site, id, pw, memo }) => {
		setEditingStatus(true);
		setCurrentSecret({
			site,
			id,
			pw,
			memo,
		});
	};

	const removeSecretRow = ({ site }) => {
		dispatch({
			type: 'REMOVE_SECRET',
			site,
		});
	};

	const editSecrets = ({ site, id, pw, memo }) => {
		if (secrets) {
			dispatch({
				type: 'EDIT_SECRET',
				site,
				id,
				pw,
				memo,
			});
		}
		setEditingStatus(false);
	};

	return (
		<>
			{editingStatus ? (
				<EditSecretsForm
					setEditingStatus={setEditingStatus}
					currentSecret={currentSecret}
					editSecrets={editSecrets}
				/>
			) : (
				<AddSecretsForm addSecrets={addSecrets} />
			)}
			<Secrets editSecretRow={editSecretRow} removeSecretRow={removeSecretRow} />
		</>
	);
};
export { SecretsList as default };
