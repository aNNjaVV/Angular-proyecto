const loginPage = 'login';
const registerPage = 'register';
const recoverPasswordPage = 'recovery';
const restorePasswordPage = 'restore';
const questionPage = 'question';

export const PATHS_AUTH_PAGES = {
	loginPage: {
		withSlash: `/${loginPage}`,
		onlyPath: loginPage
	},
	registerPage: {
		withSlash: `/${registerPage}`,
		onlyPath: registerPage
	},
	recoverPasswordPage: {
		withSlash: `/${recoverPasswordPage}`,
		onlyPath: recoverPasswordPage
	},
	restorePasswordPage: {
		withSlash: `/${restorePasswordPage}`,
		onlyPath: restorePasswordPage
	},
	questionPage: {
		withSlash: `/${questionPage}`,
		onlyPath: questionPage
	}
};
//#endregion

//#region  PATH BUY
const buyPage = 'buy';

export const PATH_BUY_PAGES = {
	buyPage: {
		withSlash: `/${buyPage}`,
		onlyPath: buyPage
	}
};
//#endregion

//#region  PATH MAINTENANCE
const maintenancePage = 'maintenance';
const maintenanceBuyPage = 'buy';
const maintenanceEventPage = 'event';
const maintenanceDetailEventPage = 'detailevents';
const maintenanceCategoryPage = 'category';
const maintenanceGenrePage = 'genre';
const maintenanceReportPage = 'report';

export const PATH_MAINTENANCE_PAGES = {
	withSlash: `/${maintenancePage}`,
	onlyPath: maintenancePage,

	buy: {
		withSlash: `/${maintenancePage}/${maintenanceBuyPage}`,
		onlyPath: maintenanceBuyPage
	},

	events: {
		withSlash: `/${maintenancePage}/${maintenanceEventPage}`,
		onlyPath: maintenanceEventPage
	},
	detailevents: {
		withSlash: `/${maintenancePage}/${maintenanceDetailEventPage}`,
		onlyPath: maintenanceDetailEventPage
	},
	genres: {
		withSlash: `/${maintenancePage}/${maintenanceGenrePage}`,
		onlyPath: maintenanceGenrePage
	},
	categorys: {
		withSlash: `/${maintenancePage}/${maintenanceCategoryPage}`,
		onlyPath: maintenanceCategoryPage
	},
	reports: {
		withSlash: `/${maintenancePage}/${maintenanceReportPage}`,
		onlyPath: maintenanceReportPage
	}
};
//#endregion

//#region  PATH MY ACCOUNT
const myAccountPage = 'my-account';
const myAccountChangePasswordPage = 'change-password';
const myAccountBuyPage = 'buy';

export const PATH_MY_ACCOUNT_PAGES = {
	withSlash: `/${myAccountPage}`,
	onlyPath: myAccountPage,

	changePassword: {
		withSlash: `/${myAccountPage}/${myAccountChangePasswordPage}`,
		onlyPath: myAccountChangePasswordPage
	},
	buy: {
		withSlash: `/${myAccountPage}/${myAccountBuyPage}`,
		onlyPath: myAccountBuyPage
	}
};
//#endregion

//#region NOT FOUND
export const PATH_NOT_FOUND_PAGE = {
	'not-found': {
		withSlash: '/not-found',
		onlyPath: 'not-found'
	}
};
//#endregion
