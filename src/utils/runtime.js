export const runtimeModify = (runtime) => {
	const hour = Math.floor(runtime / 60);
	const min = runtime % 60;
	return `${hour}hr ${min}min`;
};
